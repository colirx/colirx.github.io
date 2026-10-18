// 正确的导入名称是 withSidebar
import { withSidebar } from "vitepress-sidebar";
import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";

// 你的配置
const vitepressConfig = {
  lang: "zh-CN",
  title: "知识库",
  description: "个人知识库",
  lastUpdated: true,
  cleanUrls: false,
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],
  },
};

const config = withSidebar(vitepressConfig, {
  base: "/colirx.github.io/",
  documentRootPath: "/docs",
  pathRewrite: {
    "^/": "/docs/",
  },
  // 忽略外部链接
  ignoreDeadLinks: true,
  // 自动读取 Frontmatter 里的 title
  useTitleFromFrontmatter: true,
  removeFolderTextPrefix: true,
  // 自动排序
  sortMenusByFrontmatterOrder: true,
  // 排除特定文件夹（解决 images 显示问题）
  excludeByGlobPattern: [
    "README.md",
    "node_modules",
    ".vitepress",
    "images",
    "assets",
    "**/node_modules/**",
    "**/images/**",
  ],
  collapsed: true, // 是否默认折叠
  // debugPrint: true // 开发时打印日志
});

// “数仓与 AI 数据底座”章节单独编排：明确编号 + 分组，避免平铺后看不出顺序。
const bigDataGroup = config.themeConfig.sidebar.find(
  (group) => group.text === "06.大数据",
);
const dataPlatformChapter = bigDataGroup?.items?.find((item) =>
  item.text?.includes("13."),
);

if (dataPlatformChapter) {
  const prefix = "/06.大数据/13.数仓与AI数据底座";
  dataPlatformChapter.items = [
    { text: "01. 导读", link: `${prefix}/00.导读` },
    { text: "02. 架构总览", link: `${prefix}/01.架构总览` },
    {
      text: "03. 选型决策",
      collapsed: false,
      items: [
        { text: "3.1 基础资源", link: `${prefix}/02.选型决策/01.基础资源` },
        {
          text: "3.2 存储与表格式",
          link: `${prefix}/02.选型决策/02.存储与表格式`,
        },
        {
          text: "3.3 计算与接入",
          link: `${prefix}/02.选型决策/03.计算与接入`,
        },
        {
          text: "3.4 查询与治理",
          link: `${prefix}/02.选型决策/04.查询与治理`,
        },
      ],
    },
    {
      text: "04. 部署实施",
      collapsed: false,
      items: [
        {
          text: "4.1 资源规划与采购",
          link: `${prefix}/03.部署实施/01.资源规划与采购`,
        },
        {
          text: "4.2 部署顺序与验收",
          link: `${prefix}/03.部署实施/02.部署顺序与验收`,
        },
        {
          text: "4.3 高可用与容灾",
          link: `${prefix}/03.部署实施/03.高可用与容灾`,
        },
        {
          text: "4.4 多节点集群与低成本重建",
          link: `${prefix}/03.部署实施/04.多节点集群与低成本重建`,
        },
      ],
    },
    {
      text: "05. 实战与验收",
      collapsed: false,
      items: [
        {
          text: "5.1 实战教程",
          collapsed: false,
          items: [
            {
              text: "5.1.0 总览与准备",
              link: `${prefix}/04.实战教程/00.总览与准备`,
            },
            {
              text: "5.1.1 节点与 Kubernetes",
              link: `${prefix}/04.实战教程/01.节点与Kubernetes`,
            },
            {
              text: "5.1.2 存储与元数据",
              link: `${prefix}/04.实战教程/02.存储与元数据`,
            },
            {
              text: "5.1.3 消息与实时",
              link: `${prefix}/04.实战教程/03.消息与实时`,
            },
            {
              text: "5.1.4 查询与调度",
              link: `${prefix}/04.实战教程/04.查询与调度`,
            },
            {
              text: "5.1.5 Spark 与端到端",
              link: `${prefix}/04.实战教程/05.Spark与端到端`,
            },
            {
              text: "5.1.6 排障与清理",
              link: `${prefix}/04.实战教程/06.排障与清理`,
            },
          ],
        },
        { text: "5.2 边界与风险", link: `${prefix}/05.待办与风险` },
        { text: "5.3 验收证据", link: `${prefix}/06.验收截图` },
        { text: "5.4 测试结果", link: `${prefix}/07.验收报告` },
      ],
    },
  ];
}

export default config;
