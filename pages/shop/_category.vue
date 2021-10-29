<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="3" v-for="(product, i) in products" :key="i">
        <v-card flat outlined>
          <nuxt-link :to="productLink(product.slug)"><v-img height="300" max-width="400" contain :src="image(product.product_image)" ></v-img></nuxt-link>
          <v-card-text class="font-weight-bold">
            {{ product.name }} <br> £ {{ product.price }} <v-btn @click="addToCart()" text><v-icon left>mdi-cart-arrow-down</v-icon>Add to cart</v-btn>
          </v-card-text>
          <div></div>

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
    quantity: 0
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
      return "https://api.accane.org" + img[0].image
    },
    addToCart() {
        if (isNaN(this.quantity) || this.quantity < 1) {
            this.quantity = 1
        }
        const item = {
            product: this.product,
            quantity: this.quantity
        }
        this.$store.commit('addToCart', item)
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
      await this.$store.dispatch("shop/aGetProductCategory", this.$route.params['category'])
    }
  }
}
</script>

<style>

</style>
