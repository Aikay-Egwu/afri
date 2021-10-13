<template>
  <v-container>
    <v-parallax
    dark
    src="https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h3 font-weight-bold mb-4">
          Welcome to our shop
        </h1>
        <h4 class="subheading">
          We have a range of items at affordable prices!
        </h4>
      </v-col>
    </v-row>
  </v-parallax>

  <v-card class="my-10" flat>
    <v-card-text class="text-h5">Latest Products</v-card-text>
    <v-row>
      <v-col cols="12" md="4" v-for="(product, i) in products" :key="i">
        <v-card flat outlined>
          <nuxt-link :to="productLink(product.slug)"><v-img height="400" :src="image(product.product_image)" ></v-img></nuxt-link>
          <v-divider></v-divider>
          {{ product.name }}
          <div>£ {{ product.price }}</div>

        </v-card>
      </v-col>
    </v-row>
  </v-card>

  <v-card class="my-10" flat>
    <v-card-text class="text-h5">Our Product Range</v-card-text>
    <v-row>

      <v-col cols="12" md="3" v-for="(category, c) in categories" :key="c">
        <v-card flat outlined>
          <v-card-text  class="text-h6 text-center"><nuxt-link class="text-decoration-none" :to="categoryLink(category.slug)"> {{ category.category }} </nuxt-link></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('shop/aGetCategories')
    this.$store.dispatch('shop/aGetLatestProducts')
  },
  computed: {
    products() {
      return this.$store.getters['shop/gProducts']
    },
    categories() {
      return this.$store.getters['shop/gCategories']
    }
  },
  methods: {
    image(img) {
      return "http://localhost:8000" + img[0].image
    },
    productLink(slug)  {
      return "shop/product/" + slug
    },
    categoryLink(slug)  {
      return "shop/category/" + slug
    },
  }
}
</script>

<style>

</style>
