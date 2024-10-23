<template>
  <v-container class="main_app mt-10" width="80%">
    <!-- <p class="text-start text-h4 text-uppercase">Low latency carbon budget analysis reveals a large decline of the land carbon sink in 2023</p> -->
    <!-- Sections -->
    Need Some icons here
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
    </v-row>
    <section id="introduction" class="my-5 section-offset">
      <p>
        Two independent and complementary approaches are used to estimate the
        global CO2 budget and the regional distribution of emissions and natural
        CO2 sinks:
      </p>
      <br />

      <v-row height="530px">
        <v-col cols="6" lg="6" md="12" sm="12" xs="12">
          <u><b>1. Top-down carbon budget </b></u>

          is based on satellite measurements of atmospheric CO2 concentration
          with global coverage by the
          <a href="https://ocov2.jpl.nasa.gov/" target="_blank">
            OCO2 satellite of NASA
          </a>
          using an atmospheric inversion model to translate these measurements
          into maps of CO2 fluxes over land and oceans. The inversion model uses
          as input fossil CO2 emissions and the latest wind fields.
          <FlowchartA class="mt-3" />
        </v-col>
        <v-col cols="6" lg="6" md="12" sm="12" xs="12">
          <u><b>2. Bottom-up carbon budget</b></u>
          is based on near real time fossil CO2 emissions based on activity data
          from
          <a href="https://carbonmonitor.org/" target="_blank">
            Carbon Monitor</a
          >, atmospheric CO2 monthly data from the
          <a
            href="https://www.noaa.gov/media-release/noaa-partners-with-scripps-institution-of-oceanography-on-unmanned-systems"
            target="_blank"
          >
            NOAA and SCRIPPS network
            
            </a
          >, process-based land carbon models integrated with the latest climate
          data as input, and AI-empowered emulators of land and ocean carbon
          models. Those land and ocean carbon models are contributing to in the
          annual Global Budget assessment and have been extensively validated.
          <FlowchartB class="mt-3" />
        </v-col>
      </v-row>

      <p>
        The two approaches are very consistent globally and they show similar
        anomalies at the regional level, but we see more contrasted flux
        anomalies in the inversion.
      </p>
    </section>

    <v-divider></v-divider>
    <section id="section1" class="my-5 section-offset">
      <h2>Global Carbon Budget</h2>
      <v-row justify="center" align="center">
        <v-col cols="6">
          <p class="content_text">
            Here we see the global growth rate of atmospheric CO2 seen from
            surface marine stations from NOAA and from the Mauna Loa observatory
            from NOAA and SCRIPPS, the longest atmospheric record. The year 2003
            shows a record high growth rate at Mauna Loa and a very high growth
            rate at the marine stations. →
          </p>
        </v-col>
        <v-col cols="6">
          <v-img
            class="image py-1"
            src="https://github.com/chuanlongZhou/carbon_budget_web_image/blob/58bed7a38018333880e349fbbccfe5d73e93fc8a/main_1.png?raw=true"
            width="450"
          ></v-img>
        </v-col>
      </v-row>
      <v-row justify="left" align="top">
        <v-col cols="4">
          <v-img
            class="image py-5"
            src="https://github.com/chuanlongZhou/carbon_budget_web_image/blob/58bed7a38018333880e349fbbccfe5d73e93fc8a/main_2.png?raw=true"
            width="450"
          ></v-img>
        </v-col>
        <v-col cols="8">
          <p class="content_text">
            ← Here we see the global budget, showing the fate of carbon from
            fossil CO2 emissions which stays in the atmosphere and makes the
            atmospheric growth rate (blue), or is absorbed by the land (green)
            or the ocean reservoirs (blue-green). The bottom up budget is the
            large bar. The top down inversion budget is he inside bar.
          </p>

          <v-expansion-panels class="mt-10" color="primary">
            <v-expansion-panel
              title="Global Map of the CO2 fluxes anomalies in 2023"
            >
              <v-expansion-panel-text>
                <p class="content_text">
                  Here we see the maps of the CO2 fluxes anomalies in 2023 from
                  the reference period 2015-2022 from the bottom up or the top
                  down methods (left: Bottom-up, right:Inversion).
                </p>

                <v-carousel
                  cycle
                  show-arrows="hover"
                  hide-delimiter-background
                  height="250"
                  class="mt-5"
                >
                  <v-carousel-item v-for="(slide, i) in slides" :key="i">
                    <p class="content_text">{{ slide.title }}</p>
                    <v-img :src="slide.scr" width="100%"></v-img>
                  </v-carousel-item>
                </v-carousel>
                <v-img
                  src="https://github.com/chuanlongZhou/carbon_budget_web_image/blob/58bed7a38018333880e349fbbccfe5d73e93fc8a/map/colorbar.png?raw=true"
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
      <h2>Land Carbon Flux</h2>
      <Land />
    </section>

    <v-divider></v-divider>
    <section id="section3" class="my-5 section-offset">
      <h2>Ocean Carbon Flux</h2>
      <Ocean />
    </section>
  </v-container>
</template>


<script setup>
import { ref } from "vue";

const slides = ref([
  {
    title: "Annual",
    scr: "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/58bed7a38018333880e349fbbccfe5d73e93fc8a/map/annual.png?raw=true",
  },
  {
    title: "Jan.&Feb.&Mar.",
    scr: "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/58bed7a38018333880e349fbbccfe5d73e93fc8a/map/JFM.png?raw=true",
  },
  {
    title: "Apr.&May&Jun.",
    scr: "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/58bed7a38018333880e349fbbccfe5d73e93fc8a/map/AMJ.png?raw=true",
  },
  {
    title: "Jul.&Aug.&Sep.",
    scr: "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/58bed7a38018333880e349fbbccfe5d73e93fc8a/map/JAS.png?raw=true",
  },
  {
    title: "Oct.&Nov.&Dec.",
    scr: "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/58bed7a38018333880e349fbbccfe5d73e93fc8a/map/OND.png?raw=true",
  },
]);
</script>

<style>
.content_text {
  font-size: 16;
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

.section-offset {
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
</style>
