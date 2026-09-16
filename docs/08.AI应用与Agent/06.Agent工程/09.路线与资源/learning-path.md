---
title: 学习路径
---

# 学习路径

> 本文件回答一个问题：**每个里程碑该看什么、按什么顺序看、看它解决什么问题。**
> 资源全部都经过实际打开核实（B站条目用 `api.bilibili.com` 校验 BV 号、UP 主与时长）。

## 三条使用规则

1. **看是为了做，不是为了看完。** 每个资源都标了"用在哪"。看完没动手，等于没看。
2. **每个里程碑的工程资源最多挑 1 个先看**，看完就开干。
   遇到卡点再回来拿第 2 个。不要按表格顺序刷。
3. **不要囤资源。** 本文件列出的已经够用，再去搜"更好的教程"就是在拖延。

## 关于"每里程碑 1 个资源"规则的破例

原计划规定每个里程碑最多 1 个外部资源，本文件破了这个例，原因有二：

- 数学那一段是**前置补给**，它本身就是一个里程碑的完整学习内容，不给足资源没法开始；
- 中文资源的现实是**质量分布极不均匀**——有的主题（推理部署）有源码级免费视频，
  有的主题（检索评测指标）连一篇及格的都没有。给出候选并标注可信度，
  比假装"每个主题都有一个最佳答案"更诚实。

工程主线仍然按规则执行：**每个里程碑先看一个。**

---

# 第 0 段：英语怎么办（不占学习时间）

**结论：不单独学英语，把它绑在工程任务上。** 你需要的是一门很窄的"技术英语"：
读懂文档结构、读懂报错、写短 issue。不需要口语、不需要地道写作。

工具和四条做法见 [`glossary.md`](glossary.md)（含一份 55 个核心术语的表，够覆盖 90% 阅读）。

**对你这个情况的一个具体判断**：目标公司是国内团队，工作语言是中文，
面试也是中文。所以英语不是准入门槛，**不会因为英语被刷**。
但你会因为读不懂官方文档和报错而效率低一大截——这是效率问题，不是资格问题。
所以：不设英语学习计划，但**报错信息永远读原文，不许直接搜中文**。这一条就够了。

---

# 第一段：数学直觉补给（对应 M-1，约 22–25 小时）

**这一段总共约 22–25 小时，看完就进 M0。** 为什么必须限时，见 M-1 卡片开头。

## 1. 线性代数直觉（约 5 小时）

| 资源 | 平台/UP主 | 链接 | 时长 | 难度 | 核实状态 |
|---|---|---|---|---|---|
| 【官方双语/合集】线性代数的本质（16 集） | B站 / **3Blue1Brown 官方账号** | https://www.bilibili.com/video/BV1ys411472E | 约 172 分钟 | 入门 | ✅ 已核实 |
| 可汗学院：线性代数（143 集） | 网易公开课 / 可汗学院 | https://open.163.com/newview/movie/courseintro?newurl=PEV1IVQNC | 约 20h（估算） | 入门偏细 | ✅ 已核实 |
| MIT 18.06 Gilbert Strang（36 集，中文字幕） | B站 / 搬运号 | https://www.bilibili.com/video/BV183Tg6cEEn | 约 28h | 中高，含大量证明 | ✅ 已核实（搬运） |

**讲什么**：3B1B 用动画讲"矩阵就是线性变换"、点积=投影×长度、矩阵乘法=变换复合、
特征向量=变换后方向不变的向量。**不讲**高斯消元、行列式展开、秩的证明。
**为什么给你**：你要的全部概念都有几何图像——余弦相似度就是"点积除以两个模长"，
embedding 检索就是在高维空间比角度，矩阵乘法就是连续做两次空间变换
（这也是为什么 batch 能并行）。**16 集 3 小时，是全清单性价比最高的一份。**
**MIT 18.06 建议跳过**——它是给本科生打证明功底的，对工程直觉边际收益极低。

## 2. 微积分与梯度直觉（约 4 小时）

| 资源 | 平台/UP主 | 链接 | 时长 | 核实状态 |
|---|---|---|---|---|
| 【官方双语/合集】微积分的本质（11 集） | B站 / **3Blue1Brown 官方账号** | https://www.bilibili.com/video/BV1qW411N7FU | 约 180 分钟 | ✅ 已核实 |
| 零基础梯度下降法，手把手优化损失函数 | B站 / **StatQuest** | https://www.bilibili.com/video/BV1XW421F7M4 | 23 分钟 | ✅ 已核实（官方双语） |
| 链式法则全面讲解 | B站 / **StatQuest** | https://www.bilibili.com/video/BV16F4m157h1 | 18 分钟 | ✅ 已核实 |
| 反向传播详解 第2部分：疯狂使用链式法则 | B站 / **StatQuest** | https://www.bilibili.com/video/BV1mA4m1P7AF | 13 分钟 | ✅ 已核实 |

**为什么给你**：你唯一真正需要的是两句话——"**梯度指向最陡上升方向，所以往反方向走**"
和"**链式法则让误差能从输出层一层层反传回去**"。3B1B 前几集 + StatQuest 两支，1.5 小时讲完。
**偏导不用单独学**，理解为"把其他变量当常数求导"即可。
**看完这四支，你应该能自己讲清反向传播是什么。讲不清就重看链式法则那集，不要往下走。**

## 3. 概率与统计（约 8 小时，分两段）

| 资源 | 平台/UP主 | 链接 | 时长 | 核实状态 |
|---|---|---|---|---|
| 贝叶斯定理，使概率论直觉化 | B站 / **3Blue1Brown 官方账号** | https://www.bilibili.com/video/BV1R7411a76r | 15 分钟 | ✅ 已核实 |
| 但是什么是中心极限定理？ | B站 / **3Blue1Brown 官方账号** | https://www.bilibili.com/video/BV1gh4y1W7ag | 31 分钟 | ✅ 已核实 |
| 把概率论、统计、信息论中零散的知识统一起来 | B站 / 王木头学科学 | https://www.bilibili.com/video/BV1vv4y1B714 | 55 分钟 | ✅ 已核实 |
| 可汗学院：**统计学（中文配音版）**（85 集） | 网易公开课 / 可汗学院 | https://open.163.com/newview/movie/courseintro?newurl=M82IC6GQU | 约 14h（估算） | ✅ 已核实 |
| 可汗学院：概率（55 集） | 网易公开课 / 可汗学院 | https://open.163.com/newview/movie/courseintro?newurl=%2Fspecial%2FKhan%2Fprobability.html | 约 9h（估算） | ✅ 已核实 |

**第一段（约 1 小时）**：3B1B 两支 + 王木头那支，建立画面感。
**第二段（约 6–7 小时）**：可汗《统计学》中文配音版，**只看四组**：
大数定律、中心极限定理、样本均值抽样分布、置信区间。其余按兴趣跳。
**为什么给你**：你以后做 RAG 评测和 A/B 对比，天天用的就是"样本均值之差的分布"和置信区间。
**有大数据背景的话，这一段先自测**：能不能不看资料说出"置信区间是什么"？
能，直接跳到第 4 段，省 8 小时。

## 4. 信息论（约 2 小时，不要压缩）

| 资源 | 平台/UP主 | 链接 | 时长 | 核实状态 |
|---|---|---|---|---|
| KL散度、交叉熵与困惑度（西湖大学 NLP 第五章-3节） | B站 / **WestlakeNLP（西湖大学官方号）** | https://www.bilibili.com/video/BV1qh411x7h3 | 19 分钟 | ✅ 已核实（权威来源，播放量低） |
| 压缩即智能：Part1，重新发明熵 | B站 / **3Blue1Brown 官方账号** | https://www.bilibili.com/video/BV1yVNU6xERx | 32 分钟 | ✅ 已核实 |
| 从头开始，把概率论、统计、信息论统一起来 | B站 / 王木头学科学 | https://www.bilibili.com/video/BV1vv4y1B714 | 55 分钟 | ✅ 已核实（与第 3 段同一支） |

**你要的三句话**：交叉熵 = 熵 + KL 散度；最小化交叉熵就是在最小化 KL；
困惑度 = 交叉熵的指数（可理解为"模型每一步平均在多少个候选里犹豫"）。
**张岳那支看两遍**——第一遍符号会懵，第二遍带着"交叉熵=熵+KL"再看。
**说明**：这一块是中文资源最薄的一块，没有 3B1B 级动画讲解的信息论系列，别期待。

## 5. 最优化与采样落地（约 2.5 小时）

| 资源 | 平台/UP主 | 链接 | 时长 | 核实状态 |
|---|---|---|---|---|
| 【梯度下降】3D 可视化讲解 | B站 / 梗直哥丶 | https://www.bilibili.com/video/BV18P4y1j7uH | 12 分钟 | ✅ 已核实 |
| 逐行讲解大模型解码所有超参数（temperature、top-k、top-p） | B站 / 加菲大杂烩 | https://www.bilibili.com/video/BV1rGBZYeEuH | 32 分钟 | ✅ 已核实 |
| 大模型推理中 Temperature 的数学原理和计算过程 | B站 / 作者武辰 | https://www.bilibili.com/video/BV1pyU8ByED8 | 20 分钟 | ✅ 已核实 |

**这一档最值钱的是"采样落地"**——它把概率直觉直接接到你每天要调的参数上，
是最容易产生"啊，原来是这样"的一步。
**凸优化不要看**（斯坦福那 18 讲是给做理论的），记住一句就够：
**凸 = 只有一个谷底 = 局部最优就是全局最优。**
**未核实到**：专门讲学习率的优质中文单集。现有材料都把学习率作为梯度下降的一小节讲。

## 6. 数值与复杂度（约 1 小时）

| 资源 | 平台/UP主 | 链接 | 时长 | 核实状态 |
|---|---|---|---|---|
| GPTQ、AWQ、GGUF 等模型量化概念讲解 | B站 / LLM张老师 | https://www.bilibili.com/video/BV1euPkerEun | 18 分钟 | ✅ 已核实 |
| IEEE754 浮点数专题 | B站 / 就是氧气11 | https://www.bilibili.com/video/BV18eJc6qEzA | 38 分钟 | ✅ 已核实（考研向，但拆解完整） |

**为什么给你**：你是后端出身，O(n²) 早就会了，这一节**大概率是唯一不需要补的**。
但 IEEE754 那支值得花 38 分钟——fp16/bf16/int8 推理时的精度损失，
本质是你可能不熟悉的"有效位数"问题。这一点会在 M7 直接用到。

## 数学学习顺序（照这个走）

1. 线代直觉 → 约 5h（3B1B 全 16 集，第 1 遍不暂停不记笔记）
2. 微积分+梯度 → 约 4h（3B1B 11 集 + StatQuest 三支）
3. 概率统计 → 约 8h（**先自测，会就跳**）
4. 信息论 → 约 2h（不要压缩）
5. 采样落地 → 约 2.5h
6. 数值与复杂度 → 约 1h
7. 可选延伸：李宏毅 2024《生成式人工智能导论》，**挑着听**（Transformer、推理、评测几讲）

**总计约 22–25 小时。** 只挑每节第一候选可压到约 15 小时。
**做完就进 M0，不要恋战。**

---

# 第二段：工程主线（M0–M8）

> 一个先说的好消息：**Anthropic 三篇核心工程博客和 OpenTelemetry GenAI 语义约定都有可用的中文全文翻译。**
> 也就是说，M4、M5、M6 完全可以不读英文。

## M0 基线盘点与工程化底座

| 资源 | 类型 | 来源 | 链接 | 核实状态 |
|---|---|---|---|---|
| 构建高效的 Agent（Building Effective Agents 中译全文） | 博客 | harrisliangsu/ai-agent-engineer-handbook（原文 Anthropic） | https://github.com/harrisliangsu/ai-agent-engineer-handbook/blob/main/translations/building-effective-agents.md | ✅ 已核实 |
| RAG（检索增强生成） | 文档 | LangChain4j 中文文档 | https://docs.langchain4j.info/tutorials/rag | ✅ 已核实 |

**用在任务 2（纯代码重写链路）。解决什么问题**：在你动手前建立一个判断标准——
哪些环节值得自己实现，哪些上框架反而增加不可控。**这篇建议现在就读完**，
它会重塑你对"要不要用框架"的判断，越早看越省事。
LangChain4j 那份有 Java 代码和真实默认参数（300 token / 30 重叠），你的 Java 背景可以直接对照。

## M1 检索质量工程

| 资源 | 类型 | 来源 | 链接 | 核实状态 |
|---|---|---|---|---|
| RAG—Chunking 策略实战 | 博客 | 得物技术 | https://cloud.tencent.cn/developer/article/2582766 | ✅ 已核实 |
| 检索评测指标（recall@k / MRR / nDCG） | — | **中文无合格材料** | — | ❌ 未核实到 |

**用在任务 3（切分策略对比）。解决什么问题**：这是中文里罕见的**工程实操密度**材料——
给出中文语料 `chunk_size` 300–800 字 / overlap 10–20% 的具体建议、
明确指出中文分句不能用 NLTK Punkt、覆盖八类切分策略及取舍。
**它不解决的问题**：评测指标。搜到的中文材料全是出处不可靠的二手整理，我不列。
**破例读英文**：`ragas` 官方文档（faithfulness / context recall / context precision 的定义与算法），
或 `hamel.dev` 的 evals 系列。这是本路径里少数必须破例的地方——
因为"没有指标你就没法判断改动是否有效"，这个不能缺。

## M2 生成可控与结构化输出

| 资源 | 类型 | 来源 | 链接 | 核实状态 |
|---|---|---|---|---|
| Tool Calls（含 strict 模式与 JSON Schema 支持子集） | 文档 | **DeepSeek 官方 API 文档（中文）** | https://api-docs.deepseek.com/zh-cn/guides/tool_calls | ✅ 已核实 |
| AI Agent 量化评估：LLM-as-Judge、人工标注、A/B 测试全解 | 博客 | 未闻花名（腾讯云社区） | https://cloud.tencent.cn/developer/article/2734097 | ✅ 已核实（含完整 Python 代码） |

**用在任务 1 和任务 2。解决什么问题**：DeepSeek 的 strict 模式页是中文里**最硬的结构化输出规格文档**——
明确列出 object/string/number/enum/anyOf 的支持边界，**不支持** minLength/maxLength/minItems，
以及 `$def`+`$ref` 递归结构与 `additionalProperties:false` 的强制要求。
这些细节直接决定你的 schema 能不能用于受限解码——**这是任务 1 里最实际的坑**。
judge 那篇给了可复用的去偏手法：位置交换复测、多法官共识、"机器初评+低分人工复核"闭环。

## M3 Agent 循环与工具调用

| 资源 | 类型 | 来源 | 链接 | 核实状态 |
|---|---|---|---|---|
| 【AI】Agent 全栈进阶｜工具调用与结构化输出 | 博客 | 阿里云开发者社区 | https://developer.aliyun.com/article/1756661 | ✅ 已核实（含可运行代码） |
| 护栏（Guardrails） | 文档 | LangChain4j 中文文档 | https://docs.langchain4j.info/tutorials/guardrails | ✅ 已核实 |

**用在任务 1 和任务 2。解决什么问题**：阿里云那篇给出 `max_iter` 兜底与 `tool_call_id` 对应关系——
这两个是手写循环最容易漏、漏了就出诡异 bug 的地方。
护栏文档是中文里**最具体系性的失败处理材料**：五种结果语义
（success / failure / fatal / **fatal with retry** / **fatal with reprompt**）、
护栏排序原则（便宜的先跑、贵的放最后）、OWASP LLM01 提示注入正则护栏。
**本主题中文无 ReAct 原论文的合格材料**，其思想在 M0 那篇中译里有充分展开。

## M4 上下文工程与记忆

| 资源 | 类型 | 来源 | 链接 | 核实状态 |
|---|---|---|---|---|
| AI 代理的高效上下文工程（Anthropic 中译**全文**） | 博客 | 译者「一介布衣、」（原文 Anthropic） | https://www.cnblogs.com/emergence/p/19124281 | ✅ 已核实（全文完整） |
| 上下文硬盘缓存（KV cache 前缀命中规则） | 文档 | **DeepSeek 官方 API 文档（中文）** | https://api-docs.deepseek.com/zh-cn/guides/kv_cache | ✅ 已核实 |

**用在任务 1 和任务 2。解决什么问题**：**这是整份清单里质量最高的一份中文材料。**
覆盖上下文腐蚀（context rot）、注意力预算、系统提示的"金发姑娘高度"、
just-in-time 检索 vs 预检索、渐进式披露，以及长周期任务的三大手段——
**压缩（compaction）/ 结构化笔记 / 子代理架构**——并给出各自适用判据。
这几乎就是 M4 任务 1 和任务 2 的答案。
DeepSeek 那篇讲透"前缀缓存**只在完整匹配缓存前缀单元时命中**"，
直接决定你的 prompt 该怎么组织才能吃到缓存折扣——**省钱的关键，M4 任务 4 会用到**。

## M5 多步任务编排

| 资源 | 类型 | 来源 | 链接 | 核实状态 |
|---|---|---|---|---|
| 我们是如何构建多 Agent 研究系统的（Anthropic 中译全文） | 博客 | harrisliangsu/ai-agent-engineer-handbook | https://github.com/harrisliangsu/ai-agent-engineer-handbook/blob/main/translations/multi-agent-research-system.md | ✅ 已核实 |
| 从能跑到可交付：单 Agent 与多 Agent 的架构取舍 | 博客 | 腾讯云社区 | https://cloud.tencent.cn/developer/article/2715402 | ✅ 已核实 |

**用在任务 3（A/B 对比）。解决什么问题**：Anthropic 那篇给出最关键的数字——
**多 Agent 比单次对话多用约 15 倍 token**，单个 Agent 约 4 倍；
"三个因素解释 95% 的性能差异，**仅 token 用量就解释 80%**"。
腾讯云那篇给出一套可直接用于评审和面试的**四层拆分判据**：
上下文能否独立 / 工具权限能否独立 / 任务能否并行 / 结果能否独立验收。
**这两份合起来就是你任务 4 那张"拆分判据清单"的底稿**——但你要用自己的 A/B 数据去验证它，
不要直接抄。

## M6 评估、回归与可观测性

| 资源 | 类型 | 来源 | 链接 | 核实状态 |
|---|---|---|---|---|
| GenAI 代理和框架跨度语义约定 | 文档 | **OpenTelemetry 官方中文站** | https://opentelemetry.org.cn/docs/specs/semconv/gen-ai/gen-ai-agent-spans/ | ✅ 已核实（官方中译） |
| 生成式客户端 AI 跨度的语义约定 | 文档 | **OpenTelemetry 官方中文站** | https://opentelemetry.org.cn/docs/specs/semconv/gen-ai/gen-ai-spans/ | ✅ 已核实（官方中译） |
| 使用 OpenTelemetry GenAI Utils 进行 LLM 应用接入 | 文档 | 阿里云 ARMS 官方帮助中心 | https://help.aliyun.com/zh/arms/tracing-analysis/integrating-llm-applications-with-opentelemetry-genai-utils/ | ✅ 已核实 |

**用在任务 1（埋点）。解决什么问题**：OpenTelemetry 有**官方中文站**，
覆盖 `gen_ai.system`、`gen_ai.request.model`、`gen_ai.usage.*` 与
`invoke_agent` / `execute_tool` / `retrieval` 等操作约定。
**按它埋点，等于免费获得一套业界通用字段**，将来换观测平台不用重写。
ARMS 那篇把"探针自动埋点 vs 代码手动埋点"的边界讲清楚了。
**回归测试的中文方法论材料我只找到浅的，不够用**——建议按 M6 卡片自己定口径。

## M7 推理与部署系统基础

这是中文视频资源**最丰富**的一个主题，而且都是源码级。

| 资源 | 类型 | 来源 | 链接 | 核实状态 |
|---|---|---|---|---|
| AI INFRA 合集 8 集（vLLM 入门 / PagedAttention 论文精读 / Prefix Caching / 投机解码 / PD 分离 / 推理平台全景） | **视频·免费** | B站「Se7en的架构笔记」 | https://www.bilibili.com/video/BV1ZTWAzmEEc/ | ✅ 已核实（57–114 分钟/集，配套 `cr7258/ai-infra-learning`） |
| vLLM 推理框架合集 8 集（分块显存管理 / KV cache 初始化 / 请求与显存块映射 / Engine 架构 / Worker 协作 / vLLM vs SGLang） | **视频·免费** | B站「我是傅傅猪」 | https://www.bilibili.com/video/BV14zsozJE5B/ | ✅ 已核实（源码级） |
| SGLang 中文文档（含 PD 分离部署） | 文档 | docs.sglang.com.cn（页脚署名「由 SGLang 团队制作」） | https://docs.sglang.com.cn/ | ✅ 已核实 |
| vLLM 中文文档镜像 | 文档 | docs.vllm.com.cn | https://docs.vllm.com.cn/en/latest/ | ⚠️ 可用，但**非官方域名、未标注运营方**，按第三方镜像对待 |
| PD 分离推理架构详解（含 DistServe 实测数据） | 博客 | 腾讯云社区 | https://cloud.tencent.cn/developer/article/2586469 | ✅ 已核实 |
| KV Cache 管理架构演进 | 博客 | 阿里云社区 | https://developer.aliyun.com/article/1714337 | ✅ 已核实 |
| 美团 LongCat-2.0 开源（国产卡推理代码） | 技术报告 | 美团技术团队官方博客 | https://tech.meituan.com/2026/07/12/LongCat-2.0-Open-source.html | ✅ 已核实 |

**用在任务 3（压测与量化对照）。解决什么问题**：
**先看视频建立 KV cache 与调度的直觉，再读博文拿实测数据，最后读美团文理解真实集群约束。**
PD 分离那篇给了完整 DistServe Goodput 数据（共置 1.6 rps vs 2P1D ≈ 3.3 rps/GPU，约 2×）；
KV Cache 演进那篇给出 Llama-3-70B 8K 上下文的 **320KB/token 逐项算式**——
这正是你 M7 要手算一次的估算。
**注意**：`docs.vllm.com.cn` 关键参数（如 `--kv-cache-dtype` 硬件支持矩阵）
建议回 `docs.vllm.ai` 英文原档交叉确认。

## M8 前沿对齐与作品化

| 资源 | 类型 | 来源 | 链接 | 核实状态 |
|---|---|---|---|---|
| DeepSeek-R1 官方仓库（论文 PDF + 模型 + 蒸馏模型） | 论文/仓库 | DeepSeek 官方 | https://github.com/deepseek-ai/DeepSeek-R1 | ✅ 官方路径已确认 |
| 美团 LongCat-2.0 技术报告 | 技术报告 | 美团技术团队 | https://tech.meituan.com/2026/07/12/LongCat-2.0-Open-source.html | ✅ 已核实 |

**用在任务 1（精读并复现组件）。**

**必须诚实说的**：Agent 工程的前沿材料**几乎没有合格的中文一手资源**。
中文侧能站住的只有大厂技术报告（美团 LongCat-2.0 是真工程报告，不是科普）和二手解读。
**这是本路径里唯一需要系统性破例读英文的地方**：
ReAct（arXiv 2210.03629）、Reflexion、Toolformer、vLLM PagedAttention（SOSP'23）等原始论文只有英文。

**但有个折中**：PagedAttention 已被上面那两个中文视频做了精读，
**先吃中文精读，再回头啃原文**，这是对英语一般的人最现实的路径。
这也顺便回答了你关于英语的问题：**M8 之前，你几乎不需要读英文。**

---

# 第三段：不建议看的内容（对你纯属浪费时间）

1. **datawhalechina 系的入门教程**（`llm-cookbook` / `llm-universe` / `hello-agents`）——
   设计目标是"零基础到跑通 Demo"，你在用 Dify，看这些等于重读已会的。
   同组织真正有价值的是 `leegenai-tutorial`，且**只挑四讲**：
   第 9 讲《以大型语言模型打造的 AI Agent》、2025 版《一堂課搞懂 AI Agent 的原理》、
   第 12 讲《浅谈检定大型语言模型能力的各种方式》、第 16 讲 Speculative Decoding。
2. **"翻遍整个 B 站，这绝对是讲得最好的 AI Agent 教程"这类标题党**——
   核实中发现搜索结果给的 `BV1TKWRz3ETe` 经 B 站 API 校验返回 404，**该 BV 号根本不存在**。
   这类内容普遍在讲"怎么用 LangChain 拼一个能跑的 Agent"，属于你已经会的。
3. **云厂商社区里代理商账号发的"参数怎么调"文章**——实开验证发现正文仅一段引子就被
   版权声明截断，无实测数据、无参数表。识别特征：作者名带"XX云代理商"、
   标题含"10 个技巧""3 分钟搞定"。
4. **"XX 个提示词技巧""提示工程完全指南"**——与你的目标直接冲突。
   Anthropic 那篇中译已明确：提示工程是上下文工程的子集，正在被后者取代。
5. **Dify / Coze 低代码平台的使用教程**——你已经在用 Dify，再学它的工作流编排
   不会让你更接近 AI 系统工程师岗位。招聘方看的是你能不能自己写 Agent 循环、
   能不能从 trace 定位失败归因、能不能测出 P95 延迟——**这些平台界面给不了你**。
6. **《RAG 从入门到精通》式概念科普**——判断标准很简单：如果一篇文章花三段解释
   "什么是向量检索"却不给出 `chunk_size` 的具体建议值，对你就是浪费。

---

# 核实说明与已知局限

**核实方法**：B站条目用 `api.bilibili.com/x/web-interface/view` 逐条校验 BV 号、
标题、UP 主、分 P 数与总时长；网页条目实际抓取确认 HTTP 200 且正文可读。
凡未能直接打开确认的，一律标注，不做推断性描述。

**已知局限（不掩饰）**：

- **"专门讲学习率的中文精讲视频"未找到**，现有材料都把它作为梯度下降的一小节。
- **信息论、以及面向 LLM 的浮点数/量化，中文优质视频本就稀缺**，
  表格里是核实存在的最优候选，部分为个人账号、播放量低，需自行试看 5 分钟判断。
- **检索评测指标（recall@k / MRR / nDCG）的中文合格材料未核实到**，
  这是 M1 必须破例读英文的地方。
- **B 站上李宏毅、吴恩达、李沐、MIT 的课程绝大多数是第三方搬运**，
  已验证发现同类搬运存在失效（显示"视频去哪了呢？"）。
  **不要把任何单条搬运链接当长期存档。** 李宏毅有官方 YouTube 频道
  `@HungyiLeeNTU`（国语授课），比 B 站搬运稳定，代价是需要访问 YouTube。
- **Anthropic 中译均为第三方译者**，质量可用但非官方；关键结论建议回原文交叉确认。
