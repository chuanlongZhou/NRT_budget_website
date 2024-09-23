<template>
  <v-app>
    <v-app-bar app height="60">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        >NRT Carbon Budget
        <span class="v-subheader">
           Reveals a large decline of the land
          carbon sink in 2023
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      LOGO?
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary permanent rounded>
      <v-list density="compact">
        <v-list-subheader>Content</v-list-subheader>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <a :href="item.href" style="text-decoration: none; color: inherit">
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </a>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(true); // Controls the drawer's open/close state
const items = ref([
  {
    text: "CONCEPTS",
    value: "concepts",
    icon: "mdi-sitemap",
    href: "#introduction",
  },
  {
    text: "Global Carbon Budget",
    value: "global-carbon-budget",
    icon: "mdi-earth",
    href: "#section1",
  },
  {
    text: "Land Carbon Flux",
    value: "land-carbon-flux",
    icon: "mdi-tree",
    href: "#section2",
  },
  {
    text: "Ocean Carbon Flux",
    value: "ocean-carbon-flux",
    icon: "mdi-waves",
    href: "#section3",
  },
]);
</script>

<style scoped>
.v-toolbar-title {
  font-weight: bold;
  font-size: 24px;
}

.v-subheader {
  font-size: 16px;
}
</style>
