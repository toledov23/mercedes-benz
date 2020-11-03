<template>
  <div class="login">
    <HeaderLogin/>
    <AdminRegisters/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLogin from '@/components/HeaderLogin.vue';
import AdminRegisters from '@/components/AdminRegisters.vue';

export default {
  name: 'Admin',
  components: {
    HeaderLogin,
    AdminRegisters,
  },

  mounted() {
    if (!localStorage.token || localStorage.token === undefined || localStorage.token === 'undefined' || localStorage.email !== 'admin@experienciavanesmb.com.mx') {
      this.$router.push('/');
    }
  },
};
</script>
