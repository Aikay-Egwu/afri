<template>
  <v-container fluid>
    <v-card flat>
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
        <h4 class="text-h6">
          We have a range of items at affordable prices!
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
 <!--  <v-row class="my-2">
      <v-col cols="12" md="3" v-for="(category, c) in categories" :key="c">
        <v-card flat outlined>
          <v-card-text  class="text-h6 text-center"><nuxt-link class="text-decoration-none" :to="categoryLink(category.slug)"> {{ category.category }} </nuxt-link></v-card-text>
        </v-card>
      </v-col>
    </v-row> -->
    <v-sheet
    class="mt-3"
    max-width="700"
  >
    <v-slide-group
      multiple
      show-arrows
    >
    <v-slide-item><v-btn text color="green" class="font-weight-bold">Our Product Range</v-btn></v-slide-item>
      <v-slide-item
        v-for="(category, c) in categories" :key="c"
      >
        <v-btn
          class="mx-2"

          active-class="purple white--text"
          depressed
          rounded
          :to="categoryLink(category.slug)"
        >
          {{ category.category }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
    </v-card>

  <v-card class="my-10" flat>
    <v-card-text class="text-h5">Latest Items</v-card-text>
    <v-row>
      <v-col cols="12" md="3" v-for="(product, i) in products" :key="i">
        <v-card flat outlined>
          <nuxt-link :to="productLink(product.slug)"><v-img height="300" max-width="400" contain :src="image(product.product_image)" ></v-img>
          </nuxt-link>
          <v-card-text class="font-weight-bold">
            {{ product.name }} <br> £ {{ product.price }} <v-btn text><v-icon left>mdi-cart-arrow-down</v-icon>Add to cart</v-btn>
          </v-card-text>

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
      return "https://api.accane.org" + img[0].image
    },
    productLink(slug)  {
      return "shop/product/" + slug
    },
    categoryLink(slug)  {
      return "shop/" + slug
    },
  }
}
</script>

<style>

</style>
