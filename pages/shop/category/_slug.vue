<template>
  <v-card>The product category</v-card>

</template>

<script>
export default {
  reated() {
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
      await this.$store.dispatch("shop/aGetCategoryProduct", this.$route.params['slug'])
    }
  }
}
</script>

<style>

</style>
