<template>
  <div class="home">
    <Navbar/>
    <Banner/>
    <Sede/>
    <Agenda/>
    <Recomendaciones/>
    <Medidas/>
    <FAQs/>
    <Contacto/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Banner from '@/components/Banner.vue';
import Sede from '@/components/Sede.vue';
import Recomendaciones from '@/components/Recomendaciones.vue';
import Contacto from '@/components/Contacto.vue';
import FAQs from '@/components/FAQs.vue';
import Medidas from '@/components/Medidas.vue';
import Agenda from '@/components/Agenda.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Banner,
    Sede,
    Agenda,
    Recomendaciones,
    Medidas,
    FAQs,
    Contacto,
    Footer,
  },
  mounted() {
    if (!localStorage.token || localStorage.token === undefined || localStorage.token === 'undefined') {
      this.$router.push('/');
    }
  },
};
</script>
