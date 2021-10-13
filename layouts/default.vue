<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-system-bar
    height="30"

    app
    color="grey lighten-2"
  >
  <v-card width="100vw" color="grey lighten-2" flat class="text-caption text-center  d-flex-none d-sm-flex justify-space-between">
    <span class="d-none d-sm-inline">Together we do more!</span>
    <div class="">
      07455757500 | afrocaribbean55@gmail.com |
      <a href="https://www.facebook.com/accane.org" class="text-decoration-none">
              <v-icon color="blue" small>mdi-facebook</v-icon>
            </a>
      <a href="https://twitter.com/africancaribbe2" class="text-decoration-none"><v-icon>mdi-twitter</v-icon></a>
    </div>
  </v-card>

    <!-- <v-spacer></v-spacer>
      03454564545 | contact@afro.co.uk |
      <v-icon>mdi-facebook</v-icon>
      <v-icon>mdi-twitter</v-icon> -->
  </v-system-bar>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="white"
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="text-caption text-center font-weight-medium text-sm-h6 text-md-h5" v-text="title" />
      <v-spacer></v-spacer>
      <div class="d-none d-md-inline">
        <nuxt-link class="text-decoration-none pa-2 font-weight-bold text-h6" to="/">Home</nuxt-link>
      <nuxt-link class="text-decoration-none pa-2 font-weight-bold text-h6" to="/about">About</nuxt-link>
      <nuxt-link class="text-decoration-none pa-2 font-weight-bold text-h6" to="/events">Events</nuxt-link>
      <nuxt-link class="text-decoration-none pa-2 font-weight-bold text-h6" to="/contact">Contact</nuxt-link>
      </div>
    </v-app-bar>
    <v-main>
        <nuxt />
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <v-card flat width="100vw">
        <v-card-text class="text-center">
          African Carribean Community Association North East<br>
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-card-text>
        <v-card-text class="text-center text-decoration-none">
          <nuxt-link class="text-decoration-none font-weight-medium" to="/">Home</nuxt-link> |
          <nuxt-link class="text-decoration-none font-weight-medium" to="/about">About</nuxt-link> |
          <nuxt-link class="text-decoration-none font-weight-medium" to="/events">Events</nuxt-link> |
          <nuxt-link class="text-decoration-none font-weight-medium" to="/contact">Contact</nuxt-link>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'mdi-apps',
          title: 'Events',
          to: '/events'
        },
        {
          icon: 'mdi-apps',
          title: 'Contact',
          to: '/contact'
        },

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'African & Caribbean Community Association NE'
    }
  }
}
</script>
