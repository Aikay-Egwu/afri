<template>
  <v-card flat>
    <v-parallax
    height="300"
      :src="require(`~/assets/images/about.jpg`)"
    ></v-parallax>

    <v-container>
      <p class="text-center text-h4 font-weight-thin">Contact Us</p>
      <v-row class="px-5">
        <v-col cols="12" md="6" class="pa-10">
          <v-card flat>
            <p class="font-weight-medium text-h6">Get in touch</p>
            <v-card-text class="font-weight-medium grey--text">
              No 3 Atkinson Building <br>
              Trimdon Street <br>
              Sunderland <br>
              SR4 6AH <br>
              Tel: 07455757500 <br>
              Email: afrocaribbean55@gmail.com
            </v-card-text>
            <p class="font-weight-medium text-h6">Social</p>
            <a href="https://www.facebook.com" class="text-decoration-none">
              <v-icon color="blue" large>mdi-facebook</v-icon>
            </a>
            <a href="https://twitter.com/" class="text-decoration-none">
              <v-icon color="blue lighten-3" large>mdi-twitter</v-icon>
            </a>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="pa-10">
          <v-card flat>
            <p class="font-weight-medium text-h6">Locate us:</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2293.610382059842!2d-1.3972054341020248!3d54.909760430336334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e667fd77d7e6b%3A0xab7c45e65656a8fd!2sTrimdon%20St%2C%20Sunderland%20SR4%206AH!5e0!3m2!1sen!2suk!4v1623940628674!5m2!1sen!2suk" width="550" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .the-line {
    line-height: 2.1;
  }
</style>>

</style>