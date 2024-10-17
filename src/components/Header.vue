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
    <v-toolbar-title class="text-primary"
      >NRT Carbon Budget
      <span class="v-subheader"> </span>
    </v-toolbar-title>

    <template v-for="(item, i) in items" :key="i" :value="item" color="primary">
      <!-- <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template> -->

      <a :href="item.href" style="text-decoration: none; color: inherit">
        <v-btn variant="text" color="black" class="font-weight-black">
            {{ item.text }} </v-btn>
      </a>
    </template>

    <v-spacer></v-spacer>

  </v-app-bar>

</template>
  
  <script setup>
import { ref } from "vue";
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
  