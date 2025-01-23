import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Addon Encyclopedia",
  description: "A site that have some information about MinecraftBE Addon",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "教程", link: "/tutorials" },
      { text: "参考", link: "/refs" },
      { text: "工具", link: "/tools" },
    ],

    sidebar: {
      tutorials: [],
      refs: [],
      tools: [],
    },
  },
});
