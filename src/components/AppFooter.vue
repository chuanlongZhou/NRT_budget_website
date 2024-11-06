<template>
  <v-footer padless height="300px">
    <v-col align="center" cols="6" justify-center>
      <v-row align="center" justify-center class="py-5">
        <v-spacer></v-spacer>

        <img
          src="@/assets/logos/lsce2.jpg"
          alt="Calipso Dark Icon"
          height="75"
          class="mx-4"
        />
        <img
          src="@/assets/logos/university-of-exeter-dark.svg"
          alt="Calipso Dark Icon"
          height="75"
          class="mx-4"
        />
        <img
          src="@/assets/logos/log1.png"
          alt="Calipso Dark Icon"
          height="75"
          class="mx-4"
        />
        <v-spacer></v-spacer>
      </v-row>
      <v-row class="py-5">
        <v-spacer></v-spacer>

        <img
          src="@/assets/team_logo/Microsoft-logo_rgb_c-wht 1.png"
          alt="Calipso Dark Icon"
          height="75"
          class="mx-4"
        />
        <img
          src="@/assets/logos/esa.jpg"
          alt="Calipso Dark Icon"
          height="75"
          class="mx-4"
        />
        <img
          src="@/assets/logos/cm.png"
          alt="Calipso Dark Icon"
          height="75"
          class="mx-4"
        />
        <v-spacer></v-spacer>
      </v-row>
    </v-col>
    <v-col class="text-center" cols="6">
      <v-row class="text-center white--text py-4" justify-center>
        <v-spacer></v-spacer>
        <p>
          <a
            href="https://academic.oup.com/nsr/advance-article/doi/10.1093/nsr/nwae367/7831648 "
            target="_blank"
          >
          <b>OUR SCIENTIFIC  PUBLICATION</b>
          </a>
        </p>
        <v-spacer></v-spacer>

      </v-row>

      <v-row class="text-center white--text py-4">
        <v-col class="text-center white--text py-4" align="left">
          <div>Project Coordinator</div>
          <div>Philippe Ciais</div>
          <div>
            Email:
            <a href="philippe.ciais@lsce.ipsl.fr" class="white--text"
              >johndoe@example.com</a
            >
          </div>
        </v-col>

        <v-col class="text-center white--text py-4">
          <span>Website created by</span>
          <br />
          <a
            href="https://defve1988.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            class="jellyfish"
          >
            Chuanlong Zhou
            <v-icon class="jellyfish">mdi-jellyfish</v-icon>
          </a>
          @LSCE, 2024
        </v-col>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
</script>

<style scoped>
/* You can customize footer styles here */
.v-footer {
  background-color: #178735;
}

a {
  color: #ebce2c;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.v-icon {
  vertical-align: middle;
}

.jellyfish {
  color: #ebce2c;
  transition: color 0.3s;
}
.jellyfish:hover {
  color: #42d940;
  transform: scale(1.2);
}
</style>
