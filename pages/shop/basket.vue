<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="text-h3">
        Basket
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="2">Product</v-col>
      <v-col cols="12" md="2">Price</v-col>
      <v-col cols="12" md="2">Quantity</v-col>
      <v-col cols="12" md="2">Total</v-col>
      <v-col cols="12" md="2"></v-col>
    </v-row>
    <v-row v-for="(item, i) in cart.items" :key="i">
      <v-col cols="12" md="2">{{ item.product.name }}</v-col>
      <v-col cols="12" md="2">£{{ item.product.price }}</v-col>
      <v-col cols="12" md="2">{{ item.quantity }}</v-col>
      <v-col cols="12" md="2">£{{ item.product.price * item.quantity }}</v-col>
      <v-col cols="12" md="2"></v-col>
    </v-row>
    <v-row>
      <v-col class="col-md-4 offset-md-5">
        Total to Pay £ {{ cartTotalPrice }}
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="blue">Check out</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'Basket | Accane Shop',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  },
  data: () => ({
    cart: {
      items: []
    }
  }),
  mounted() {
        this.cart = this.$store.getters["shop/gCart"]
    },
    methods: {
        removeFromCart(item) {
            this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
        }
    },
    computed: {
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        },
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.product.price * curVal.quantity
            }, 0)
        },
    }
}
</script>

<style>

</style>
