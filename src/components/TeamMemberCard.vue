<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        class="mx-auto my-4 pa-5"
        max-width="600"
        :min-height="computedMinHeight"
        outlined
        hover
        v-bind="props"
        rounded="lg"
        :color="isHovering ? 'primary' : 'white'"
      >
        <v-row>
          <v-col cols="4" class="px-5 mb-3">
            <v-avatar
              v-if="photo !== ''"
              :size="isHovering ? '150' : '100'"
              :image="'/people_avtar/' + photo"
            ></v-avatar>
          </v-col>
          <v-col cols="7">
            <v-card-title
              class="font-weight-bold"
              :class="isHovering ? 'text-h5' : 'text-h6'"
              >{{ name }}</v-card-title
            >
            <v-card-subtitle :class="isHovering ? 'text-h6' : ''">{{
              title
            }}</v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                icon
                :href="'mailto:' + email"
                target="_blank"
                v-if="email !== ''"
              >
                <v-icon>mdi-email</v-icon>
              </v-btn>

              <v-btn icon :href="homeUrl" target="_blank" v-if="homeUrl !== ''">
                <v-icon>mdi-home</v-icon>
              </v-btn>
              <v-btn
                icon
                :href="scholarUrl"
                target="_blank"
                v-if="scholarUrl !== ''"
              >
                <v-icon>mdi-school</v-icon>
              </v-btn>
              <v-btn
                icon
                :href="githubUrl"
                target="_blank"
                v-if="githubUrl !== ''"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>

        <v-divider></v-divider>
        <v-card-text
          :class="isHovering ? 'text-body-1' : 'text-body-2'"
          class="preserve-line-breaks"
        >
          {{ description }}
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>
    
    <script setup>
import { defineProps, ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  name: String,
  title: String,
  description: String,
  photo: String,
  homeUrl: String,
  scholarUrl: String,
  githubUrl: String,
  email: String,
});
const windowWidth = ref(window.innerWidth);
const computedMinHeight = computed(() => {
  if (windowWidth.value > window.innerWidth * 0.8) {
    return "350px";
  } else if(windowWidth.value > window.innerWidth * 0.6) {
    return "400px";
  } else if (windowWidth.value > window.innerWidth * 0.4) {
    return "400px";
  }
  else {
    return "800px";
  }
});

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
  console.log(windowWidth.value, window.innerWidth * 0.8);
};

onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});
</script>
    
    <style scoped>
.font-weight-bold {
  font-size: 1.25rem;
}

.subtitle-1 {
  font-size: 0.875rem;
}

.v-card-actions {
  justify-content: center;
}

.v-card {
  transition: transform 0.5s ease, box-shadow 0.5s ease color 0.2s ease;
}

.preserve-line-breaks {
  white-space: pre-line;
}
</style>
    