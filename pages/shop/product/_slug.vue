<template>
  <v-card>
    
    <v-card max-width="700" class="mx-auto" flat>
    <v-row v-if="product">
      <v-col cols="12" md="8">
        <v-img :src="image(product.product_image)" ></v-img>
      </v-col>
      <v-col cols="12" md="4">
        {{ product.name }}
        <p class="font-weight-medium">£ {{ product.price }}</p>
        <p> {{ product.description }} </p>
        <p>Pick up at the center</p>
        <v-btn color="blue lighten-2">Add to basket</v-btn>
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
    //product: []
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
        console.log("something")
        console.log(img)
        return img[0].image
      }
    },
     isEmptyObject(value) {
      return Object.keys(value).length === 0 && value.constructor === Object;
    },
    async initialize() {
      await this.$store.dispatch("shop/aGetProductSlug", this.$route.params['slug'])
    }
  }
}
</script>

<style>

</style>
