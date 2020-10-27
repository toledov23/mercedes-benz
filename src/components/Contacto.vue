<template>
  <div class="container" id="contacto">
      <h2 class="text-center text-uppercase text-white">Contacto</h2>
      <img
      src="../assets/img/Mediana_linea-22.png"
      class="mx-auto d-block"
      style="width: 80%"
      alt="linea">
      <form class="mt-5">
        <div class="form-group col-12 col-md-8 offset-md-2 text-white">
          <label for="exampleInputEmail1">Nombre</label>
          <input v-model.trim="$v.name.$model" type="text" class="form-control" />
          <div
              class="error text-white"
              v-if="$v.name.$dirty && !$v.name.required">El campo nombre es requerido.</div>
        </div>
        <div class="form-group col-12 col-md-8 offset-md-2 text-white">
          <label for="exampleInputEmail1">Correo electrónico</label>
          <input v-model.trim="$v.email.$model"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"/>
          <div
            class="error text-white"
            v-if="$v.email.$dirty && !$v.email.required">El campo email es requerido.</div>
          <div
            class="error text-white"
            v-if="$v.email.$dirty && !$v.email.email">
            El campo email debe debe ser un email válido.
            </div>
        </div>
        <div class="form-group col-12 col-md-8 offset-md-2 text-white">
          <label for="exampleInputEmail1">Comentarios</label>
          <input v-model.trim="$v.email.$model" type="text" class="form-control form-control-lg"/>
          <div
              class="error text-white"
              v-if="$v.message.$dirty && !$v.message.required">
              El campo comentarios es requerido.</div>
        </div>
        <button
          @click="contact()"
          class="mb-5 mt-4 btn btn-primary text-uppercase col-6 offset-3 col-md-4 offset-md-4"
        >
          Enviar
        </button>
      </form>
      <div class="text-center text-white">
        <small>Dudas o comentarios</small> <br>
        <small>55 5555 5555 | contacto@experienciavanesmb.com.mx</small>
      </div>
    </div>
</template>

<script>
import Auth from '@/services/auth';
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'Contacto',

  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },

  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    message: {
      required,
    },
  },

  methods: {
     async register() {
       await Auth.register({
         name: this.name,
         email: this.email,
         message: this.message,
       })
};
</script>

<style scoped>
#Contacto {
  color: white;
  margin-top: 90px;
}

h1, h2, h3 {
  font-family: Corporatea_regular_webfont;
}
</style>