<template>
  <!-- <v-row>
    <v-col cols="12"> -->
      <v-carousel height="80%" cycle>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-img :src="item.src" width="100%"></v-img>
        </v-carousel-item>
      </v-carousel>
    <!-- </v-col>
  </v-row> -->
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require(`~/assets/images/home/img1.jpg`),
          },
          {
            src: require(`~/assets/images/home/img5.jpeg`),
          },
          {
            src: require(`~/assets/images/home/img3.jpg`),
          },
          {
            src: require(`~/assets/images/home/img2.jpg`)
          },
          
        ],
      }
    },
  }
</script>

<style>

</style>