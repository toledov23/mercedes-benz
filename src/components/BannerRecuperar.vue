<template>
  <main id='main'>
    <div id='banner'>
      <div class='container'>
        <div
          class='row align-items-center justify-content-between justify-content-center'
        >
          <div class='col-12 col-md-4 text-center text-md-left'>
            <h1 class='text-white'>
              Experiencia <br />
              VAN es...
            </h1>
            <p class='text-white'>
              Disfrutar conociendo los grandes beneficios y ventajas de Sprinter
              para tu negocio.
            </p>
          </div>
          <div class='col-12 col-md-4 mt-5'>
            <h2 class='text-center text-white'>Recuperar cuenta</h2>
            <form class='mt-5'>
              <div class='form-group col-12'>
                <label class='text-white' for='exampleInputEmail1'>
                  Ingresa el correo electrónico con el que te registraste</label
                >
                <input
                  v-model.trim='$v.email.$model'
                  type='email'
                  class='form-control'
                  placeholder='Correo Electrónico'
                />
                <div
                  class='error text-white'
                  v-if='$v.email.$dirty && !$v.email.required'
                >
                  El campo email es requerido.
                </div>
                <div
                  class='error text-white'
                  v-if='$v.email.$dirty && !$v.email.email'
                >
                  El campo email debe debe ser un email válido.
                </div>
              </div>
              <button
                v-if='!loading'
                @click='recover()'
                :disabled='$v.$invalid'
                class='mb-4 mt-3 btn btn-primary text-uppercase col-6 offset-3 col-md-6 offset-md-3'
              >
                Recuperar
              </button>

              <button
                v-else
                class='mb-4 mt-2 btn btn-primary text-uppercase col-6 offset-3 col-md-6 offset-md-3'
                type='button'
                disabled
              >
                <span
                  class='spinner-grow spinner-grow-sm'
                  role='status'
                  aria-hidden='true'
                ></span>
                Cargando...
              </button>
            </form>
            <a href='/'>
              <p class='text-center text-white mb-5'>
                <u>Iniciar sesión</u>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Auth from '@/services/auth';
import { required, email } from 'vuelidate/lib/validators';
import Swal from 'sweetalert2';

export default {
  name: 'BannerRecuperar',

  data() {
    return {
      email: '',
      password: '',
      loading: false,
    };
  },

  validations: {
    email: {
      required,
      email,
    },
  },

  mounted() {
    if (localStorage.token) {
      this.$router.push('/home');
    }
  },

  methods: {
    async recover() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return 0;
      }
      this.loading = true;
      const [error] = await Auth.recover({
        email: this.email,
      });

      if (error) {
        this.loading = false;
        return Swal.fire({
          title: 'Oops!',
          text: 'El correo que ingresaste no está e nuestros registros',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
      this.loading = false;

      return Swal.fire({
        title: 'Checa tu correo',
        text:
          'Ingresa a tu correo y sigue las instrucciones para ingresar a tu cuenta',
        icon: 'sucess',
        confirmButtonText: 'Ok',
      });
    },
  },
};
</script>

<style scoped>
#banner {
  background: url('../assets/img/banner_VAN_07.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.row {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
