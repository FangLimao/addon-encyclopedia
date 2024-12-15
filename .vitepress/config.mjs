import { defineConfig } from "vitepress";
import sidebar from "./sidebar.mjs";
import nav from "./nav.mjs";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/addon-encyclopedia/",
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin); //代码组图标
    },
    lineNumbers: true,
  },
  vite: {
    plugins: [
      groupIconVitePlugin(), //代码组图标
    ],
  },
  lastUpdated: true,
  title: "Addon Encyclopedia",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  logo: "/logo.png",
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
    },
  },
  lang: "zh-CN",
  description: "A wiki of Minecraft Add-on",
  themeConfig: {
    logo: "/logo.png",
    footer: {
      message: "如无特殊说明，本网站内容采用 CC BY-NC-SA 4.0 协议进行许可",
    },
    lastUpdatedText: "上次更新", // 上次更新显示文本
    returnToTopLabel: "返回顶部", // 更改手机端菜单文字显示
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "重制搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "没有找到相关结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "Enter",
                  navigateText: "切换",
                  navigateUpKeyAriaLabel: "上方向键",
                  navigateDownKeyAriaLabel: "下方向键",
                  closeText: "关闭",
                  closeKeyAriaLabel: "esc",
                },
              },
            },
          },
        },
      },
    },
    docFooter: {
      // 自定义上下页名
      prev: "上一篇",
      next: "下一篇",
    },
    darkModeSwitchLabel: "深浅模式", // 手机端深浅模式文字修改
    outline: {
      // 大纲显示 1-6 级标题
      level: [1, 6],
      label: "目录",
    },
    //大纲顶部标题
    outlineTitle: "当前页大纲",
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar
  },
});
