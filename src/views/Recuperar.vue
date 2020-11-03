<template>
  <div class="login">
    <HeaderLogin/>
    <BannerRecuperar/>
    <FooterLogin/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLogin from '../components/HeaderLogin.vue';
import BannerRecuperar from '../components/BannerRecuperar.vue';
import FooterLogin from '../components/FooterLogin.vue';

export default {
  name: 'Home',
  components: {
    HeaderLogin,
    BannerRecuperar,
    FooterLogin,
  },
};
</script>
