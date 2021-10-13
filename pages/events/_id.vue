<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card flat>
          <v-toolbar
          >
          <v-btn to="/events" fab small><v-icon >mdi-arrow-left</v-icon></v-btn>
          </v-toolbar>
            <v-img
              :src="image.src"
            ></v-img>
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.id)
    this.$store.commit('events/mImage', this.$route.params.id)
    this.image = this.$store.state['events'].image
  },
  computed: {
    
  },
  data: () => ({
    image: {}
  })
}
</script>

<style>

</style>