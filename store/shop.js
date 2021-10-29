export const state = () => ({
  products: [],
  product: null,
  categories: [],
  cart:{
    items: []
  },
  isLoading: false
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
  },
  gCart(state) {
    return state.cart
  }
}


export const actions = {
  async aGetCategories({commit}) {
    const response = await this.$axios.$get('category_list/')
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
  async aGetProductItem({commit}, slug) {
    const response = await this.$axios.$get(`product/${slug}/`)
    console.log(response)
    if (response.status == 1) {

      commit("mProduct", response.product)
      return 1
    }
  },
  async aGetProductCategory({commit}, slug) {
    const response = await this.$axios.$get(`category/${slug}/`)
    if (response.status == 1) {
      commit("mProducts", response.products)
      return 1
    }
  },
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
  },
  initializeStore(state) {
    if (localStorage.getItem('cart')) {
      state.cart = JSON.parse(localStorage.getItem('cart'))
    } else {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }

    if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
    } else {
        state.token = ''
        state.isAuthenticated = false
    }
  },
  addToCart(state, item) {
    const exists = state.cart.items.filter(i => i.product.id === item.product.id)
    if (exists.length) {
      exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
    } else {
      state.cart.items.push(item)
    }

    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  setIsLoading(state, status) {
    state.isLoading = status
  },
  setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
  },
  removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
  },
  clearCart(state) {
    state.cart = { items: [] }

    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
}
