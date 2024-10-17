<template>
  <v-app>
    <Header :items="items" />
    <v-main>
      <Banner :images="images" />
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
    text: "Concepts",
    value: "concepts",
    icon: "mdi-sitemap",
    href: "#introduction",
  },
  {
    text: "Global Budget",
    value: "global-carbon-budget",
    icon: "mdi-earth",
    href: "#section1",
  },
  {
    text: "Land Flux",
    value: "land-carbon-flux",
    icon: "mdi-tree",
    href: "#section2",
  },
  {
    text: "Ocean Flux",
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
