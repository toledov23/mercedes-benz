<template>
  <div class="login">
    <HeaderLogin/>
    <BannerLogin/>
    <FooterLogin/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLogin from '@/components/HeaderLogin.vue';
import BannerLogin from '@/components/BannerLogin.vue';
import FooterLogin from '@/components/FooterLogin.vue';

export default {
  name: 'Home',
  components: {
    HeaderLogin,
    BannerLogin,
    FooterLogin,
  },
};
</script>
