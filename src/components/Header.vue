<template>
  <v-app-bar app height="120" justify-center :elevation="0">
    <!-- add icon from assets/icons -->
    <v-spacer></v-spacer>
    <img
      src="@/assets/icons/cropped-Demo-hz.png"
      alt="Calipso Dark Icon"
      height="80"
      class="mx-4"
    />
    <v-toolbar-title
      class="text-primary"
      @click="goToHome"
      style="cursor: pointer"
    >
      NRT Carbon Budget
      <span class="v-subheader"> </span>
    </v-toolbar-title>

    <template v-for="(item, i) in items" :key="i">
      <a :href="item.href" style="text-decoration: none; color: inherit">
        <v-btn
          variant="text"
          color="black"
          class="font-weight-black"
          :disabled="!isHomePage"
        >
          {{ item.text }}
        </v-btn>
      </a>
    </template>

    <v-btn
      variant="text"
      color="black"
      class="font-weight-black text-h6 text-primary ml-10"
      to="/about"
    >
      ABOUT TEAM
    </v-btn>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>
  
  <script setup>
import { ref, computed  } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isHomePage = computed(() => router.currentRoute.value.path  === '/');
console.log(router.currentRoute.value.path);
console.log(isHomePage.value);

const goToHome = () => {
  router.push("/");
};

// define drawer and items
// Accept `items` and `drawer` as props
const drawer = ref(false); // Initialize as needed, e.g., false or true

const props = defineProps({
  items: {
    type: Array, // Specify the type of the prop
    required: true, // Make it required
    default: () => [], // Optional default value
  },
});

const navigateToTag = (path, hash) => {
  // Navigate to the page
  window.location.href = path;
  console.log(window.location.href);

  // Scroll to the tag after a short delay
  setTimeout(() => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};
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
  