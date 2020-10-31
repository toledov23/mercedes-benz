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
};
</script>
