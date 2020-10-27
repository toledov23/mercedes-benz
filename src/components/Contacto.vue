<template>
  <div class="container mt-section" id="contacto">
    <h2 class="text-center text-uppercase text-white">Contacto</h2>
    <img
      src="../assets/img/Mediana_linea-22.png"
      class="mx-auto d-block"
      style="width: 80%"
      alt="linea"
    />
    <form class="mt-5">
      <div class="form-group col-12 col-md-8 offset-md-2 text-white">
        <label for="exampleInputEmail1">Nombre</label>
        <input v-model.trim="$v.name.$model" type="text" class="form-control" />
        <div
          class="error text-white"
          v-if="$v.name.$dirty && !$v.name.required"
        >
          El campo nombre es requerido.
        </div>
      </div>
      <div class="form-group col-12 col-md-8 offset-md-2 text-white">
        <label for="exampleInputEmail1">Correo electrónico</label>
        <input
          v-model.trim="$v.email.$model"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
        />
        <div
          class="error text-white"
          v-if="$v.email.$dirty && !$v.email.required"
        >
          El campo email es requerido.
        </div>
        <div class="error text-white" v-if="$v.email.$dirty && !$v.email.email">
          El campo email debe debe ser un email válido.
        </div>
      </div>
      <div class="form-group col-12 col-md-8 offset-md-2 text-white">
        <label for="exampleInputEmail1">Comentarios</label>
        <input
          v-model.trim="$v.message.$model"
          type="text"
          class="form-control form-control-lg"
        />
        <div
          class="error text-white"
          v-if="$v.message.$dirty && !$v.message.required"
        >
          El campo comentarios es requerido.
        </div>
      </div>
      <button
        v-if="!loading"
        @click="contact()"
        class="mb-5 mt-4 btn btn-primary text-uppercase col-6 offset-3 col-md-4 offset-md-4"
      >
        Enviar
      </button>
      <button v-else
        class="mb-5 mt-4 btn btn-primary col-6 offset-3 col-md-4 offset-md-4"
        type="button" disabled>
        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        Cargando...
      </button>
    </form>
    <div class="text-center text-white">
      <small>Dudas o comentarios</small> <br />
      <small>56 1838 5175 | contacto@experienciavanesmb.com.mx</small>
    </div>
  </div>
</template>

<script>
import Auth from '@/services/auth';
import { required, email } from 'vuelidate/lib/validators';
import Swal from 'sweetalert2';

export default {
  name: 'Contacto',

  data() {
    return {
      name: '',
      email: '',
      message: '',
      loading: false,
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
    async contact() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return 0;
      }
      this.loading = true;

      const [error] = await Auth.contact({
        name: this.name,
        email: this.email,
        message: this.message,
      });

      this.name = '';
      this.email = '';
      this.message = '';
      this.$v.$reset();

      if (error) {
        this.loading = false;
        return Swal.fire({
          title: 'Oops!',
          text: 'Algo pasó, intenta más tarde',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }

      this.loading = false;

      return Swal.fire({
        title: 'Gracias',
        text: 'En breve nos pondremos en contacto contigo.',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    },
  },
};
</script>

<style scoped>
#Contacto {
  color: white;
  margin-top: 90px;
}

h1,
h2,
h3 {
  font-family: Corporatea_regular_webfont;
}
</style>
