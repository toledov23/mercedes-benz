<template>
  <main id="main">
    <div id="banner">
      <div class="container">
        <div
          class="row align-items-center justify-content-between justify-content-center"
        >
          <div class="col-12 col-md-4 text-center text-md-left">
            <h1 class="text-white">
              Experiencia <br />
              VAN es...
            </h1>
            <p class="text-white">
              Disfrutar conociendo los grandes beneficios y ventajas de Sprinter
              para tu negocio.
            </p>
          </div>
          <div class="col-12 col-md-4 mt-5">
            <h2 class="text-center text-white">Bienvenido</h2>
            <form class="">
              <div class="form-group col-12">
                <label for="exampleInputEmail1"></label>
                <input
                  v-model.trim="$v.email.$model"
                  type="email"
                  class="form-control"
                  placeholder="Correo Electrónico"
                />
                <div
                  class="error text-white"
                  v-if="$v.email.$dirty && !$v.email.required">El campo email es requerido.</div>
                <div
                  class="error text-white"
                  v-if="$v.email.$dirty && !$v.email.email">
                  El campo email debe debe ser un email válido.
                </div>
              </div>
              <div class="form-group col-12">
                <label for="exampleInputEmail1"></label>
                <input
                  v-model.trim="$v.password.$model"
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                />
                <div
                  class="error text-white"
                  v-if="$v.password.$dirty && !$v.password.required">
                  El campo password es requerido.
                </div>
              </div>
              <button
                v-if="!loading"
                @click="login()"
                :disabled="$v.$invalid"
                class="mb-4 mt-2 btn btn-primary text-uppercase col-6 offset-3 col-md-6 offset-md-3"
              >
                Entrar
              </button>

              <button v-else
                class="mb-4 mt-2 btn btn-primary text-uppercase col-6 offset-3 col-md-6 offset-md-3"
                type="button" disabled>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Cargando...
              </button>
            </form>
            <a href="/recuperar-cuenta">
              <p class="text-center text-white mb-5">
                <u>Olvidé la contraseña</u>
              </p>
            </a>
            <p class="text-center text-white">¿No estás registrado?</p>
            <router-link to="/register">
            <button
              type="submit"
              class="mb-4 mt-0 btn btn-secondary col-6 offset-3 col-md-6 offset-md-3"
            >
              Regístrate
            </button>
            </router-link>
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
  name: 'BannerLogin',

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
    password: {
      required,
    },
  },

  mounted() {
    if (localStorage.token) {
      this.$router.push('/home');
    }
  },

  methods: {
    async login() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return 0;
      }
      this.loading = true;
      const [error] = await Auth.login({
        email: this.email,
        password: this.password,
      });

      if (error) {
        this.loading = false;
        return Swal.fire({
          title: 'Oops!',
          text: 'Tus credenciales son inválidas',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
      this.loading = false;

      if (this.email === 'admin@experienciavanesmb.com.mx') {
        return this.$router.push('/admin');
      }
      return this.$router.push('/home');
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
