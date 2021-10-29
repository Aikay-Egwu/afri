<template>
  <v-card>

    <v-card max-width="700" class="mx-auto" flat>
    <v-row v-if="product">
      <v-col cols="12" md="6">

        <v-img :src="image(product.product_image)" height="500" ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card flat>
          <v-card-text class="font-weight-bold">{{ product.name }}</v-card-text>
          <v-card-text>£ {{ product.price }}</v-card-text>
          <v-card-text>
            <strong>Item Description</strong><br>
            {{ product.description }}</v-card-text>
        </v-card>

        <p class="font-weight-medium"></p>
        <p>  </p>

        <v-btn color="blue lighten-2" @click="addToCart()">Add to basket</v-btn>
      </v-col>
    </v-row>
  </v-card>
  </v-card>
</template>

<script>
export default {
  created() {
    this.initialize()
  },
  data: () => ({
    quantity: 1
  }),
  computed: {
    product() {
      return this.$store.getters['shop/gProduct']
    }
  },
  methods: {
    image(img) {
      //console.log((img))
      if (img !== null) {

        return `http://localhost:8000${img[0].image}`
      }
    },
     isEmptyObject(value) {
      return Object.keys(value).length === 0 && value.constructor === Object;
    },
    async initialize() {

      await this.$store.dispatch("shop/aGetProductItem", this.$route.params['slug'])
    },
    addToCart() {
      if (isNaN(this.quantity) || this.quantity < 1) {
          this.quantity = 1
      }
      const item = {
          product: this.product,
          quantity: this.quantity
      }
      this.$store.commit('shop/addToCart', item)
    }
  }
}
</script>

<style>

</style>
