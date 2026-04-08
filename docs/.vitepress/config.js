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

export default withSidebar(vitepressConfig, {
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
