<template>
  <v-container>
     <v-row>
    <v-col
      v-for="(image, n) in images"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="image.src"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2 d-flex justify-center align-end" 

      >
      <v-card class=" text-center pa-2" color="grey lighten-3">
       <nuxt-link :to="`/events/${image.id}`">View</nuxt-link>
       
      </v-card>
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'Events',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'African Carribean Community Association North East'
      }
    ],
  },
  created() {
    console.log(this.$store.state['events'].images)
    this.images = this.$store.state['events'].images
  },
  data: () => ({
    images: []
  })
}
</script>

<style>

</style>