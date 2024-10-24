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
      style="cursor: pointer; font-size: 32px"
    >
      NRT Carbon Budget
      <span class="v-subheader"> </span>
    </v-toolbar-title>

    <template v-for="(item, i) in items" :key="i">
      <v-btn
        variant="text"
        color="black"
        class="button-text"
        :disabled="!isHomePage"
        @click="navigateToTag(item.href, item.hash)"
      >
        {{ item.text }}
      </v-btn>
    </template>

    <v-btn
      variant="text"
      color="black"
      class="font-weight-black text-h5 text-primary ml-4"
      to="/about"
    >
      TEAM
    </v-btn>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>
  
  <script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isHomePage = computed(() => router.currentRoute.value.path === "/");
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

// note: use this to navigate to the page with the hash
const navigateToTag = (path, hash) => {
  // Navigate to the page with the hash

  // Adjust the scroll position after the page has fully loaded
    const element = document.getElementById(path);
    if (element) {
      // Scroll to the element and then adjust by 60px upwards
      const topPosition = element.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
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

.button-text {
  font-size: 20px;
  font-weight: 500;
}
</style>
  