<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="3" v-for="(product, i) in products" :key="i">
        <v-card flat outlined>
          <nuxt-link :to="productLink(product.slug)"><v-img height="400" :src="image(product.product_image)" ></v-img></nuxt-link>
          <v-divider></v-divider>
          {{ product.name }}
          <div>£ {{ product.price }}</div>

        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  created() {
    this.initialize()
  },
  data: () => ({
    //product: []
  }),
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
      return "/shop/product/" + slug
    },
    /* image(img) {
      //console.log((img))
      if (img !== null) {
        console.log("something")
        console.log(img)
        return img[0].image
      }
    }, */
     isEmptyObject(value) {
      return Object.keys(value).length === 0 && value.constructor === Object;
    },
    async initialize() {
      console.log("this is happening")
      await this.$store.dispatch("shop/aGetProductCategory", this.$route.params['slug'])
    }
  }
}
</script>

<style>

</style>
