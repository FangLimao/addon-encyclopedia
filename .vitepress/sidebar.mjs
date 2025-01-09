export default {
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
        text: "客户端群系",
        collapsed: false,
        items: [
          {
            text: "概述",
            link: "/reference/client-biome",
          },
          {
            text: "组件",
            collapsed: true,
            items: [
              {
                text: "ambient_sounds",
                link: "/reference/client-biome/components/ambient_sounds",
              },
              {
                text: "biome_music",
                link: "/reference/client-biome/components/biome_music",
              },
              {
                text: "fog_appearance",
                link: "/reference/client-biome/components/fog_appearance",
              },
              {
                text: "sky_color",
                link: "/reference/client-biome/components/sky_color",
              },
              {
                text: "water_appearance",
                link: "/reference/client-biome/components/water_appearance",
              },
            ]
          }
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
            text: "friction",
            link: "/reference/block/components/friction",
          },
          {
            text: "geometry",
            link: "/reference/block/components/geometry",
          },
          {
            text: "item_visual",
            link: "/reference/block/components/item_visual",
          },
          {
            text: "light_dampening",
            link: "/reference/block/components/light_dampening",
          },
          {
            text: "loot",
            link: "/reference/block/components/loot",
          },
          {
            text: "map_color",
            link: "/reference/block/components/map_color",
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
  }