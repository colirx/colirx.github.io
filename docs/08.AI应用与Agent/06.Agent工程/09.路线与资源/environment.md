---
title: 环境与硬件约束
---

# 环境与硬件约束

> 本文件回答：**哪些任务是这台机器上真能做的，哪些不是。**
> 计划里凡是与硬件冲突的部分，都以本文件为准。
> 实测日期见 git log。配置变化后请更新本文件。

---

## 实测配置

| 项目 | 实测值 | 备注 |
|---|---|---|
| CPU | 11th Gen Intel Core i5-11400 @ 2.60GHz | 6 核 12 线程，桌面级 |
| 内存 | **47.9 GB**（可用 38.2 GB） | 这是本机最大的优势，CPU 推理吃得下 14B 量化模型 |
| 显卡 | **AMD Radeon RX 6600 XT**（RDNA2 / gfx1032） | 实际显存 **8 GB**。系统报告 4GB 是 WMI 的 32 位字段溢出，不是真实值 |
| NVIDIA 驱动 | **无** | 无 `nvidia-smi`，无 CUDA |
| 磁盘 | C: 230.9 GB（可用 84.4）／ D: 500 GB（**可用 100.8**） | 模型一律放 D 盘 |
| 系统 | Windows 11 专业版 build 22000 | |
| 虚拟化 | **HypervisorPresent = True** | Hyper-V 已占用底层；`VirtualizationFirmwareEnabled` 报告 False，该字段在 Hyper-V 开启时常不可靠，需去 BIOS 确认 |

---

## 对学习计划的四条硬约束

### 1. M7 不能用 vLLM（已改计划）

**事实（已查 AMD 官方文档）**：Windows 支持表里，**RX 6600 XT（gfx1032）的 HIP SDK 一栏是 ❌**
——只有 Runtime 支持，没有官方预编译库，PyTorch-HIP 走不通。
同时 **vLLM 的 CPU 后端官方要求 `OS: Linux`**，默认 BF16 并推荐 AVX-512。
加上 vLLM 本身不支持 Windows——**这个组合无解，别在上面花时间。**

**替代方案**：`llama.cpp` + **Vulkan 后端**（AMD 在 Windows 上唯一靠谱的 GPU 加速路径），
以及纯 CPU 路径做对照。
**完整的五方案对比与云 GPU 建议见 [`m7-inference-options.md`](m7-inference-options.md)。**

**能测的**：tok/s、TTFT、P95/P99、量化档对照（Q4_K_M / Q5_K_M / Q8_0）、
并发（`--parallel`）、KV cache 内存随上下文长度的变化、CPU vs GPU 差异。

**测不了的**：PagedAttention、连续批处理调度、PD 分离、张量并行、多机推理。
**M7 卡片已把这一节写成硬性要求：报告里必须有「未实测」清单。**

### 2. 磁盘要规划，不然会撞墙

D 盘可用 100.8 GB。参考占用：

| 内容 | 占用 |
|---|---|
| 7B 模型 Q4_K_M | 约 4–5 GB |
| 7B 模型 Q8_0 | 约 7–8 GB |
| 14B 模型 Q4_K_M | 约 9 GB |
| 32B 模型 Q4_K_M | 约 19–20 GB |
| llama.cpp 编译产物 + 依赖 | 约 2–5 GB |
| M1 评测集的向量索引 | 视规模，几百 MB 到几 GB |

**建议**：M7 只用 **7B–8B 级别**（三档量化加起来约 20 GB），别一开始就拉 32B。
C 盘 84 GB 可用偏紧，注意别让 pip/conda 缓存放 C 盘。

### 3. VMware 与 Hyper-V 的冲突（你提的 Linux 方案）

**现状**：`HypervisorPresent = True`，说明 Hyper-V 已在运行
（可能是 WSL2、Docker Desktop 或内核隔离启用的）。

**影响**：VMware Workstation 在这种情况下会退到 **WHP（Windows Hypervisor Platform）
兼容模式**，**性能明显下降**，且部分嵌套虚拟化功能不可用。

**建议按这个顺序处理**：
1. 先确认 Hyper-V 是谁启用的（`Get-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All`）。
   如果是 WSL2/Docker Desktop 带来的，权衡是否值得为 VMware 关掉。
2. 若决定用 VMware：在 BIOS 里确认 **VT-x / VT-d 已开启**（本机 WMI 报告为 False，必须实际进 BIOS 看）。
3. **更省事的替代**：WSL2 已经是可用的 Linux 环境，日常开发（Python、Docker、编译）
   未必需要完整虚拟机。**只有需要 systemd、内核参数、网络拓扑实验时才开 VMware。**

**给本计划的建议**：
- M0–M6 **不需要虚拟机**。全部在 Windows + Python 上做。
- M7 需要 Linux 时优先试 **WSL2**（能用 Vulkan 更好，不行就 CPU）。
- 只有当你回到大数据那条线（重写 `12.部署`）时才需要完整虚拟机集群。

### 4. 任务规模要按内存倒推

48 GB 内存意味着：
- 完全可以同时开 IDE + 浏览器 + 本地模型服务 + Docker；
- 但**别再想复现 5 节点的 Kerberos 大数据集群**（那是历史项目，2026 年对你的目标没有增量）。
  真要跑，单机伪分布式即可。

---

## 一句话总结

**你的机器足以完成 M-1 到 M6 和 M8 的全部任务，以及 M7 的绝大部分——
唯独 M7 的 vLLM 部分不行，那部分改成"读原理 + 诚实标注未实测"。**
