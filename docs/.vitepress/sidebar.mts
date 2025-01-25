import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  tutorials: [
    {
      text: "概述",
      link: "/tutorials"
    },
    {
      text: "入门教程",
      collapsed: false,
      items: [
        {
          text: "附加包概述",
          link: "/tutorials/start"
        },
        {
          text: "了解JSON",
          link: "/tutorials/start/json"
        },
        {
          text: "第一个附加包",
          link: "/tutorials/start/first-addon"
        },
        {
          text: "本地化",
          link: "/tutorials/start/localization"
        },
        {
          text: "添加物品",
          link: "/tutorials/start/first-item"
        },
      ]
    },
    {
      text: "语言和本地化",
      collapsed: false,
      items: [
        {
          text: "添加语言",
          link: "/tutorials/lang/new-language"
        }
      ]
    }
  ],
  refs: [
    {
      text: "概述",
      link: "/refs",
    },
    {
      text: "客户端群系",
      collapsed: false,
      items: [
        {
          text: "概述",
          link: "/refs/client-biome",
        },
        {
          text: "组件",
          collapsed: true,
          items: [
            {
              text: "ambient_sounds",
              link: "/refs/client-biome/components/ambient_sounds",
            },
            {
              text: "biome_music",
              link: "/refs/client-biome/components/biome_music",
            },
            {
              text: "fog_appearance",
              link: "/refs/client-biome/components/fog_appearance",
            },
            {
              text: "sky_color",
              link: "/refs/client-biome/components/sky_color",
            },
            {
              text: "water_appearance",
              link: "/refs/client-biome/components/water_appearance",
            },
          ],
        },
      ],
    },
    {
      text: "物品组件",
      collapsed: true,
      items: [
        {
          text: "allow_off_hand",
          link: "/refs/item/components/allow_off_hand",
        },
        {
          text: "block_placer",
          link: "/refs/item/components/block_placer",
        },
        {
          text: "bundle_interaction",
          link: "/refs/item/components/bundle_interaction",
        },
        {
          text: "can_destroy_in_creative",
          link: "/refs/item/components/can_destroy_in_creative",
        },
        {
          text: "cooldown",
          link: "/refs/item/components/cooldown",
        },
        {
          text: "custom_components",
          link: "/refs/item/components/custom_components",
        },
        { text: "damage", link: "/refs/item/components/damage" },
        { text: "digger", link: "/refs/item/components/digger" },
        {
          text: "display_name",
          link: "/refs/item/components/display_name",
        },
        {
          text: "durability",
          link: "/refs/item/components/durability",
        },
        {
          text: "enchantable",
          link: "/refs/item/components/enchantable",
        },
        {
          text: "entity_placer",
          link: "/refs/item/components/entity_placer",
        },
        { text: "food", link: "/refs/item/components/food" },
        { text: "fuel", link: "/refs/item/components/fuel" },
        { text: "glint", link: "/refs/item/components/glint" },
        {
          text: "hand_equipped",
          link: "/refs/item/components/hand_equipped",
        },
        {
          text: "hover_text_color",
          link: "/refs/item/components/hover_text_color",
        },
        { text: "icon", link: "/refs/item/components/icon" },
        {
          text: "interact_button",
          link: "/refs/item/components/interact_button",
        },
        {
          text: "liquid_clipped",
          link: "/refs/item/components/liquid_clipped",
        },
        {
          text: "max_stack_size",
          link: "/refs/item/components/max_stack_size",
        },
        {
          text: "projectile",
          link: "/refs/item/components/projectile",
        },
        { text: "rarity", link: "/refs/item/components/rarity" },
        { text: "record", link: "/refs/item/components/record" },
        {
          text: "repairable",
          link: "/refs/item/components/repairable",
        },
        { text: "shooter", link: "/refs/item/components/shooter" },
        {
          text: "should_despawn",
          link: "/refs/item/components/should_despawn",
        },
        {
          text: "stacked_by_data",
          link: "/refs/item/components/stacked_by_data",
        },
        {
          text: "storage_item",
          link: "/refs/item/components/storage_item",
        },
        { text: "tags", link: "/refs/item/components/tags" },
        {
          text: "throwable",
          link: "/refs/item/components/throwable",
        },
        {
          text: "use_animation",
          link: "/refs/item/components/use_animation",
        },
        {
          text: "use_modifiers",
          link: "/refs/item/components/use_modifiers",
        },
        {
          text: "wearable",
          link: "/refs/item/components/wearable",
        },
      ],
    },
  ],
  tools: [],
};
