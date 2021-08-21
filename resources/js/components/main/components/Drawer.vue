<template>
  <v-navigation-drawer
    v-model="drawer"
    dark
    :mini-variant="miniVariant"
    :right="right"
    :permanent="permanent"
    :src="bg"
    absolute
    width="250"
    mini-variant-width="60"
  >
    <v-list dense nav>
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <img
          style="margin: 0 auto; text-align: center"
          src="mypharm.png"
          :class="{ smallavator: miniVariant, bigavator: !miniVariant }"
        />
      </v-list-item>

      <v-divider></v-divider>
      <drawer-items />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import DrawerItems from "./DrawerItems.vue";
export default {
  components: { DrawerItems },
  props: { miniVariant: true },

  data() {
    return {
      drawer: true,

      items: [
        { title: "لوحة التحكم", icon: "mdi-view-dashboard" },
        { title: "الأصناف", icon: "mdi-image" },
        { title: "الاعدادات", icon: "mdi-help-box" },
      ],
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: true,
      permanent: true,
      expandOnHover: true,
      background: false,
    };
  },
  computed: {
    avatarSize() {
      return this.miniVariant ? 40 : 80;
    },
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
  },
};
</script>
<style  scoped>
.v-navigation-drawer {
  transition-duration: 0.3s;
  top: 48px !important;
}
.smallavator {
  border-radius: 50%;
  width: 48px;
  height: 48px;
  transition: all 0.2s;
}
.bigavator {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  transition: all 0.2s;
}
</style>