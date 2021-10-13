export const state = () => ({
  products: [],
  product: {},
  categories: []
})



export const getters = {
  gProducts(state) {
    return state.products
  },
  gProduct(state) {
    return state.product
  },
  gCategories(state) {
    return state.categories
  }
}


export const actions = {
  async aGetCategories({commit}) {
    const response = await this.$axios.$get('categories/')
    if (response.status) {
      commit("mCategories", response.categories)
    }
  },

  async aGetProducts({commit}) {
    const response = await this.$axios.$get('products/')
    if (response.status == 1) {
      commit("mProducts", response.products)
    }
  },
  async aGetLatestProducts({commit}) {
    const response = await this.$axios.$get('latest_products/')
    if (response.status == 1) {
      commit("mProducts", response.products)
    }
  },
  async aGetCategoryProducts({commit}) {
    const response = await this.$axios.$get('latest_products/')
    if (response.status == 1) {
      commit("mProducts", response.products)
    }
  },
  async aGetProductSlug({commit}, slug) {
    const response = await this.$axios.$get(`product/${slug}/`)
    //console.log(response)
    //if (response.status == 1) {
      commit("mProduct", response)
      return 1
    //}
  },

  async aGetProductCategory({commit}, val) {

  }
}


export const mutations = {
  mProducts(state, val) {
    state.products = val
  },
  mProduct(state, val) {
    state.product = val
  },
  mCategories(state, val) {
    state.categories = val
  }
}
