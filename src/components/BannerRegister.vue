<template>
  <main id="main">
    <div id="banner">
      <div class="container">
          <div
            class="row align-items-center
         justify-content-between justify-content-center pb-5 pt-5"
          >
            <div class="col-12 col-md-4 text-center text-md-left">
              <h1 class="text-white">
                Experiencia <br />
                VAN es...
              </h1>
              <p class="text-white">
                Disfrutar conociendo los grandes beneficios y ventajas de Sprinter para tu negocio.
              </p>
            </div>
            <div class="col-8 offset-2 col-md-4 mt-3">
              <h2 class="text-center text-white">Pre-registro al evento</h2>
              <form class="text-white">
                <div class="form-group mb-0">
                  <label class="mb-0" for="exampleInputName1">Nombre Completo*</label>
                  <input
                    v-model.trim="$v.name.$model"
                    type="text" class="form-control" id="exampleInputName1" />
                    <div
                    class="error text-white"
                    v-if="$v.name.$dirty && !$v.name.required">El campo nombre es requerido.</div>
                </div>
                <div class="form-group mb-0">
                  <label class="mb-0" for="exampleInputEmail1">Correo Electrónico*</label>
                  <input
                    v-model.trim="$v.email.$model"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
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
                <div class="form-group mb-0">
                  <label class="mb-0" for="exampleInputEmail1">Contraseña</label>
                  <input
                    v-model.trim="$v.password.$model"
                    type="password"
                    class="form-control"
                  />
                  <div
                    class="error text-white"
                    v-if="$v.password.$dirty && !$v.password.required">
                    El campo password es requerido.
                  </div>
                </div>
                <div class="form-group mb-0">
                  <label class="mb-0" for="exampleInputPhone1">
                      Número de teléfono móvil (10 dígitos)*</label>
                  <input
                    v-model.trim="$v.phone.$model"
                    type="number" class="form-control" id="exampleInputPhone1" />
                  <div
                    class="error text-white"
                    v-if="$v.phone.$dirty && !$v.phone.required">
                    El campo teléfono es requerido.
                  </div>
                </div>
                <div class="form-group mb-0">
                  <label class="mb-0" for="exampleInputDist1">Distribuidor*</label>
                  <input
                    v-model.trim="$v.supplier.$model"
                    type="text" class="form-control" id="exampleInputDist1" />
                  <div
                    class="error text-white"
                    v-if="$v.supplier.$dirty && !$v.supplier.required">
                    El campo distribuidor es requerido.
                  </div>
                </div>
                <div class="form-group mb-0">
                  <label class="mb-0" for="exampleInputPuesto1">Puesto*</label>
                  <input
                    v-model.trim="$v.role.$model"
                    type="text" class="form-control" id="exampleInputPuesto1" />
                  <div
                    class="error text-white"
                    v-if="$v.role.$dirty && !$v.role.required">
                    El campo puesto es requerido.
                  </div>
                </div>
                <div class="form-group mb-0">
                  <label class="mb-0" for="exampleInputCity1">Ciudad de origen*</label>
                  <input
                    v-model.trim="$v.city.$model"
                    type="text" class="form-control" id="exampleInputCity1" />
                  <div
                    class="error text-white"
                    v-if="$v.city.$dirty && !$v.city.required">
                    El campo ciudad es requerido.
                  </div>
                  <small id="emailHelp" class="form-text text-muted"
                    >*Campo obligatorio</small
                  >
                </div>
                <div class="form-group form-check mb-0">
                  <input v-model.trim="$v.terms.$model"
                    type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">
                      <small>He leído y acepto los
                          <a href="">Términos y Condiciones*</a></small></label>
                </div>
                <div
                  class="error text-white"
                  v-if="$v.privacy.$dirty && !$v.privacy.required">
                  Debes aceptar los términos y condiciones
                </div>
                <div class="form-group form-check">
                  <input v-model.trim="$v.privacy.$model"
                    type="checkbox" class="form-check-input" id="exampleCheck2" />
                  <label class="form-check-label" for="exampleCheck2">
                      <small>He leído y acepto el
                          <a href="">Aviso de Privacidad*</a></small></label>
                  <div
                    class="error text-white"
                    v-if="$v.supplier.$dirty && !$v.supplier.required">
                    Debes aceptar el aviso de privacidad
                  </div>
                </div>

                <div class="text-center text-md-right">

                <button
                  v-if="!loading"
                  :disabled="$v.$invalid"
                  @click="register()" class="btn btn-primary text-uppercase col-6">Aceptar</button>

                  <button v-else
                    class="btn btn-primary col-6"
                    type="button" disabled>
                    <span class="spinner-grow spinner-grow-sm"
                      role="status" aria-hidden="true"></span>
                    Cargando...
                  </button>
                </div>
              </form>
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

const mustBeTrue = (value) => value === true;

export default {
  name: 'BannerLogin',

  data() {
    return {
      name: '',
      email: '',
      password: '',
      phone: '',
      supplier: '',
      role: '',
      city: '',
      terms: false,
      privacy: false,
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
    password: {
      required,
    },
    phone: {
      required,
    },
    supplier: {
      required,
    },
    role: {
      required,
    },
    city: {
      required,
    },
    terms: {
      required,
      mustBeTrue,
    },
    privacy: {
      required,
      mustBeTrue,
    },
  },

  methods: {
    async register() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return 0;
      }
      this.loading = true;
      const [error] = await Auth.register({
        name: this.name,
        email: this.email,
        password: this.password,
        phone: this.phone,
        supplier: this.supplier,
        role: this.role,
        city: this.city,
      });

      if (error) {
        this.loading = false;
        return Swal.fire({
          title: 'Oops!',
          text: 'Algo pasó, intenta más tarde',
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      }
      this.loading = false;

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
  margin-top: 120px;
}
</style>
