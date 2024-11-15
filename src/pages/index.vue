<template>
  <v-container class="main_app mt-10" width="80%">
    <!-- <p class="text-start text-h4 text-uppercase">Low latency carbon budget analysis reveals a large decline of the land carbon sink in 2023</p> -->
    <!-- Sections -->
    <!-- Need Some icons here
    <v-row>
      <v-col align="center">
        <img
          src="@/assets/icons/trees.svg"
          alt="Calipso Dark Icon"
          height="80"
          class="mx-4"
        />
      </v-col>
      <v-col align="center">
        <img
          src="@/assets/icons/leaves.svg"
          alt="Calipso Dark Icon"
          height="80"
          class="mx-4"
        />
      </v-col>
      <v-col align="center">
        <img
          src="@/assets/icons/marine.svg"
          alt="Calipso Dark Icon"
          height="80"
          class="mx-4"
        />
      </v-col>
    </v-row> -->
    <section id="introduction" class="my-5 section-offset">
      <p>
        Two independent and complementary approaches are used to estimate the
        global CO<sub>2</sub> budget and the regional distribution of emissions
        and natural CO<sub>2</sub> sinks. The two approaches are very consistent
        globally and they show similar anomalies at the regional level, but we
        see more contrasted flux anomalies in the inversion.
      </p>
      <br />

      <v-row height="530px" justify="center" align="center">
        <v-col cols="6" lg="1" md="0" sm="0" xs="0"> </v-col>
        <v-col cols="6" lg="5" md="12" sm="12" xs="12" class="content_text">
          <u><b>Top-down carbon budget </b></u>

          is based on satellite observations of atmospheric column averaged
          CO<sub>2</sub>
          concentration with global coverage by the
          <a href="https://ocov2.jpl.nasa.gov/" target="_blank">
            OCO<sub>2</sub> satellite of NASA
          </a>
          using an atmospheric
          <a href="https://atmosphere.copernicus.eu/" target="_blank">
            inversion model
          </a>
          to translate these observations into weekly maps of CO<sub>2</sub>
          fluxes over land and oceans. The inversion model uses as input fossil
          CO<sub>2</sub>
          emissions and the latest wind fields for the year considered.
        </v-col>
        <v-col cols="6" lg="6" md="12" sm="12" xs="12">
          <FlowchartA class="mt-3" />
        </v-col>
      </v-row>

      <v-row height="530px" justify="center" align="center">
        <v-col cols="6" lg="1" md="0" sm="0" xs="0"> </v-col>
        <v-col cols="6" lg="5" md="12" sm="12" xs="12" class="content_text">
          <u><b>Bottom-up carbon budget</b></u>
          is based on near real time fossil CO<sub>2</sub> emissions based on
          activity data from
          <a href="https://carbonmonitor.org/" target="_blank">
            Carbon Monitor</a
          >, atmospheric CO<sub>2</sub> monthly data from the
          <a
            href="https://www.noaa.gov/media-release/noaa-partners-with-scripps-institution-of-oceanography-on-unmanned-systems"
            target="_blank"
          >
            NOAA and SCRIPPS network </a
          >, process-based land carbon models integrated with the latest climate
          data as input, and AI-empowered emulators of land and ocean carbon
          models. Those land and ocean carbon models are contributing to in the
          annual Global Budget assessment and have been extensively validated.
        </v-col>
        <v-col cols="6" lg="6" md="12" sm="12" xs="12">
          <FlowchartB class="mt-3" />
        </v-col>
      </v-row>
    </section>

    <v-divider></v-divider>

    <section id="section1" class="my-5 section-offset">
      <h2>Global Carbon Budget</h2>
      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-start pt-15">
          <p class="content_text pt-10">
            Here we see the global growth rate of atmospheric CO<sub>2</sub>
            seen from surface marine stations from NOAA and from the Mauna Loa
            observatory from NOAA and SCRIPPS, the longest atmospheric record.
            The year 2003 shows a record high growth rate at Mauna Loa and a
            very high growth rate at the marine stations.
          </p>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-img
            class="image py-1"
            src="https://github.com/chuanlongZhou/carbon_budget_web_image/blob/main/main_1.png?raw=true"
            width="400"
          ></v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-start pt-5">
          <p class="content_text pt-10 mr-2">
            Here we see the global budget, showing the fate of carbon from
            fossil CO<sub>2</sub> emissions which stays in the atmosphere and
            makes the atmospheric growth rate (blue), or is absorbed by the land
            (green) or the ocean reservoirs (blue-green). The bottom up budget
            is the large bar. The top-down inversion budget is he inside bar.
          </p>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-img
            class="image py-1"
            src="https://github.com/chuanlongZhou/carbon_budget_web_image/blob/main/main_2.png?raw=true"
            width="400"
          ></v-img>

        </v-col>
      </v-row>

      <v-row justify="center" align="center">
        <v-col col="12" md="10" sm="12" xs="12">
          <v-expansion-panels class="mt-10" color="primary">
            <v-expansion-panel class="content_text">
              <template v-slot:title>
                <h3 class="custom-title">
                  Global Map of the Carbon Dioxide fluxes anomalies in 2023
                </h3>
              </template>

              <v-expansion-panel-text>
                <p class="content_text">
                  Here we see the maps of the CO<sub>2</sub> fluxes anomalies in
                  2023 from the reference period 2015-2022 from the bottom up or
                  the top down methods (left: Bottom-up, right: Inversion).
                </p>

                <v-carousel
                  cycle
                  show-arrows="hover"
                  hide-delimiter-background
                  height="450"
                  class="mt-5"
                >
                  <v-carousel-item v-for="(slide, i) in slides" :key="i">
                    <p class="content_text pb-10">{{ slide.title }}</p>
                    <v-img :src="slide.scr" width="100%"></v-img>
                  </v-carousel-item>
                </v-carousel>

                <v-img
                  src="https://github.com/chuanlongZhou/carbon_budget_web_image/blob/main/map/colorbar.png?raw=true"
                  width="25%"
                ></v-img>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </section>

    <v-divider></v-divider>

    <section id="section2" class="my-5 section-offset">
      <h2>Land Carbon Regional Fluxes </h2>
      <Land />
    </section>

    <v-divider></v-divider>
    <section id="section3" class="my-5 section-offset">
      <h2>Ocean Carbon Regional Fluxes </h2>
      <Ocean />
    </section>
  </v-container>
</template>


<script setup>
import { ref } from "vue";

const slides = ref([
  {
    title: "Annual",
    scr: "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/main/map/annual.png?raw=true",
  },
  {
    title: "Jan.&Feb.&Mar.",
    scr: "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/main/map/JFM.png?raw=true",
  },
  {
    title: "Apr.&May&Jun.",
    scr: "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/main/map/AMJ.png?raw=true",
  },
  {
    title: "Jul.&Aug.&Sep.",
    scr: "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/main/map/JAS.png?raw=true",
  },
  {
    title: "Oct.&Nov.&Dec.",
    scr: "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/main/map/OND.png?raw=true",
  },
]);
</script>

<style scoped>
.content_text {
  font-size: 18px;
  font-weight: light;
  color: #4d4d4d;
}
.v-subheader {
  font-size: 18px;
  font-weight: lighter;
  color: #a4a4a4;
}

html {
  scroll-behavior: smooth;
}

.section-offset_not_used {
  position: relative;
  padding-top: 120px; /* Adjust this value according to the size of your app bar or header */
  margin-top: -60px; /* Use negative margin to pull the section back */
}

.image {
  transition: transform 0.3s;
  transform-origin: top left; /* Adjust the origin point */
  border-radius: 5px;
}

.image:hover {
  transform: scale(1.1);
  z-index: 99;
  box-shadow: 0 0 10px rgba(126, 126, 126, 0.574);
  background-color: white;
  /* border-style: solid;
  border-color: #6b6b6b9f; */
}

.slide-in-left {
  /* Initial state: hidden and translated to the left */
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.slide-in-left.visible {
  /* Visible state: original position and fully opaque */
  transform: translateX(0);
  opacity: 1;
}
p {
  font-size: 18px;
  font-weight: 400;
  color: #4d4d4d;
}
</style>
