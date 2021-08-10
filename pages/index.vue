<template>
  <v-card>
    
    <HomeCarousel />

    <v-container>
      <v-card flat>
        
        <v-card max-width="800" class="mx-auto my-10" flat>
          <v-card-text
          class="text-h5 text-sm-h3 text-center px-4"
        >Together we can do more</v-card-text>
          <v-card-text>We provide a meeting place for people of African heritage in Sunderland and surrounding towns, a space to discuss common issues within the community. we provide activities that are physically & mentally stimulating</v-card-text>
        </v-card>
      </v-card>
      <p class="text-center text-h4 grey--text font-weight-normal my-12">About us</p>
      <v-row>
        <v-col cols="12" md="6">
          <v-img :src="about" width=""></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card flat>
            <v-card-text class="text-body-1">
              We provide a meeting place for people of African heritage in Sunderland and surrounding towns, a space to discuss common issues within the community. we provide activities that are physically & mentally stimulating
            </v-card-text>
            <nuxt-link to="/about">Read More</nuxt-link>
          </v-card>
        </v-col>
      </v-row>

      <p class="text-center text-h4 grey--text font-weight-normal my-14">At Our Center</p>
      <HomeCenter />

      <p class="text-center text-h4 grey--text font-weight-normal my-14">Our Sponsors</p>
      <v-card class="mx-auto" flat>
        <v-row>
        <v-col cols="12" md="4" v-for="(image, i) in images" :key="i">
          <v-card class="mx-auto text-center pa-10" flat>
            <v-img width="" max-height="100" contain :src="require(`~/assets/images/sponsors/${image.name}`)"></v-img>
          </v-card>
        </v-col>
      </v-row>
      </v-card>
    </v-container>

   <v-row>
     <v-col>

     </v-col>
   </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    about: require(`~/assets/images/about.jpg`),
    images: [
      {name: 'peoples-health.png'},
      {name: 'fund.jpeg'},
      {name: 'ahpn.jpg'}
    ]
  })
}
</script>

<style>

</style>