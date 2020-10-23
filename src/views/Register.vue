<template>
  <div class="login">
    <HeaderRegister/>
    <BannerRegister/>
    <FooterLogin/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderRegister from '@/components/HeaderRegister.vue';
import BannerRegister from '@/components/BannerRegister.vue';
import FooterLogin from '@/components/FooterLogin.vue';

export default {
  name: 'Home',
  components: {
    HeaderRegister,
    BannerRegister,
    FooterLogin,
  },
};
</script>
