import { defineConfig } from "vitepress";
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
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide" },
      { text: "工具", link: "/tool" },
      { text: "参考", link: "/reference" },
    ],
    sidebar: {
      "/": [
        {
          text: "Addon Encyclopedia",
          collapsed: false,
          items: [
            { text: "主页", link: "/" },
            { text: "指南", link: "/guide" },
            { text: "工具", link: "/tool" },
            { text: "参考", link: "/reference" },
          ],
        },
        {
          text: "作出贡献",
          collapsed: false,
          items: [{ text: "编辑指南", link: "/contribute" }],
        },
      ],
      "/reference/": [
        { text: "格式化代码", link: "/reference/format-code" },
        {
          text: "数据驱动",
          collapsed: false,
          items: [
            {
              text: "清单文件",
              link: "/reference/data-driven/manifest",
            },
            {
              text: "内容文件",
              link: "/reference/data-driven/contents",
            },
          ],
        },
        {
          text: "方块组件",
          collapsed: true,
          items: [
            {
              text: "breathability",
              link: "/reference/block/components/breathability",
            },
            {
              text: "collision_box",
              link: "/reference/block/components/collision_box",
            },
            {
              text: "crafting_table",
              link: "/reference/block/components/crafting_table",
            },
            {
              text: "destructible_by_explosion",
              link: "/reference/block/components/destructible_by_explosion",
            },
            {
              text: "destructible_by_mining",
              link: "/reference/block/components/destructible_by_mining",
            },
            {
              text: "display_name",
              link: "/reference/block/components/display_name",
            },
            {
              text: "flammable",
              link: "/reference/block/components/flammable",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
            {
              text: "",
              link: "/reference/block/components/",
            },
          ],
        },
        {
          text: "物品组件",
          collapsed: true,
          items: [
            {
              text: "allow_off_hand",
              link: "/reference/item/components/allow_off_hand",
            },
            {
              text: "block_placer",
              link: "/reference/item/components/block_placer",
            },
            {
              text: "bundle_interaction",
              link: "/reference/item/components/bundle_interaction",
            },
            {
              text: "can_destroy_in_creative",
              link: "/reference/item/components/can_destroy_in_creative",
            },
            {
              text: "cooldown",
              link: "/reference/item/components/cooldown",
            },
            { text: "damage", link: "/reference/item/components/damage" },
            { text: "digger", link: "/reference/item/components/digger" },
            {
              text: "display_name",
              link: "/reference/item/components/display_name",
            },
            {
              text: "durability",
              link: "/reference/item/components/durability",
            },
            {
              text: "enchantable",
              link: "/reference/item/components/enchantable",
            },
            {
              text: "entity_placer",
              link: "/reference/item/components/entity_placer",
            },
            { text: "food", link: "/reference/item/components/food" },
            { text: "fuel", link: "/reference/item/components/fuel" },
            { text: "glint", link: "/reference/item/components/glint" },
            {
              text: "hand_equipped",
              link: "/reference/item/components/hand_equipped",
            },
            {
              text: "hover_text_color",
              link: "/reference/item/components/hover_text_color",
            },
            { text: "icon", link: "/reference/item/components/icon" },
            {
              text: "interact_button",
              link: "/reference/item/components/interact_button",
            },
            {
              text: "liquid_clipped",
              link: "/reference/item/components/liquid_clipped",
            },
            {
              text: "max_stack_size",
              link: "/reference/item/components/max_stack_size",
            },
            {
              text: "projectile",
              link: "/reference/item/components/projectile",
            },
            { text: "rarity", link: "/reference/item/components/rarity" },
            { text: "record", link: "/reference/item/components/record" },
            {
              text: "repairable",
              link: "/reference/item/components/repairable",
            },
            { text: "shooter", link: "/reference/item/components/shooter" },
            {
              text: "should_despawn",
              link: "/reference/item/components/should_despawn",
            },
            {
              text: "stacked_by_data",
              link: "/reference/item/components/stacked_by_data",
            },
            { text: "tags", link: "/reference/item/components/tags" },
            {
              text: "throwable",
              link: "/reference/item/components/throwable",
            },
            {
              text: "use_animation",
              link: "/reference/item/components/use_animation",
            },
            {
              text: "use_modifiers",
              link: "/reference/item/components/use_modifiers",
            },
            {
              text: "wearable",
              link: "/reference/item/components/wearable",
            },
          ],
        },
      ],
    },
  },
});
