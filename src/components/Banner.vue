<template>
  <v-row align="center" width="100%" class="text-secondary bg-primary">
    <!-- Left Section: Introduction Text -->
    <v-col class="pa-10" md="6" lg="4" sm="12" xs="12">
      <div>
        <h1>Welcome to Near Real-time Carbon Budget Project</h1>

        <p class="overline pt-3">
          A WAKE UP CALL TO THE CARBON BUDGET?
          <a
            href="https://academic.oup.com/nsr/advance-article/doi/10.1093/nsr/nwae367/7831648 "
            target="_blank"
          >
            OUR SCIENTIFIC PUBLICATION
          </a>
        </p>
        <br />
        <p>
          It is crucial to monitor how human caused CO<sub>2</sub> emissions
          change with time and how the land and ocean carbon sinks help us
          mitigating climate warming by capturing CO<sub>2</sub>. The
          <a
            href="https://essd.copernicus.org/articles/14/4811/2022/"
            target="_blank"
          >
            current assessment
          </a>
          provides an update of the budget one year ago. Here we accelerate the
          time and provide each quarter a synthesis of emissions and natural
          CO<sub>2</sub>
          sinks based on the latest atmospheric data and a suite of
          <a href="https://arxiv.org/abs/2407.12447" target="_blank">
            peer-reviewed modeling approaches </a
          >.
        </p>
      </div>
    </v-col>

    <!-- Right Section: Image Carousel -->
    <v-col class="pa-0" md="6" lg="8" sm="12" xs="12">
      <v-carousel interval="4000" height="600px">
        <v-carousel-item v-for="(item, index) in carouselItems" :key="index">
          <!-- Check if the item is a video -->
          <v-responsive
            v-if="item.type === 'video'"
            style="width: 100%; height: 100%"
          >
            <iframe
              :src="`${item.src}&autoplay=1&mute=1`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style="width: 100%; height: 100%"
            ></iframe>
          </v-responsive>

          <!-- Render an image otherwise -->
          <v-img
            v-else
            :src="item.src"
            :alt="item.alt"
            class="carousel-image"
            cover
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
const carouselItems = ref([
  {
    type: "video",
    src: "https://www.youtube.com/embed/GcAqDBNhYb8?rel=0",
    alt: "Carbon Sink Decline 2023 - Video",
  },
  {
    type: "image",
    src: "/images/2023_1.png",
    alt: "Carbon Sink Decline 2023 - Image 1",
  },
  {
    type: "image",
    src: "/images/2023_2.png",
    alt: "Carbon Sink Decline 2023 - Image 2",
  },
  {
    type: "image",
    src: "/images/image1.jpg",
    alt: "Carbon Sink Decline 2023 - Image 3",
  },
  {
    type: "image",
    src: "/images/image2.png",
    alt: "Carbon Sink Decline 2023 - Image 4",
  },
]);
// Sample images for the carousel
</script>
<style scoped>
.overline {
  font-size: 16px;
  font-weight: 600;
}
a {
  color: #b0e134 !important;
}
</style>