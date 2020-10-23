<template>
  <main id="main">
    <div id="banner">
      <div class="container">
          <div
            class="row align-items-center
         justify-content-between justify-content-center"
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
            <div class="col-12 col-md-4 mt-5">
              <h2 class="text-center text-white">Bienvenido</h2>
              <form class="">
                <div class="form-group col-12">
                  <label for="exampleInputEmail1"></label>
                  <input type="email" class="form-control" placeholder="Correo Electrónico" />
                </div>
                <div class="form-group col-12">
                  <label for="exampleInputEmail1"></label>
                  <input type="password" class="form-control" placeholder="Contraseña" />
                </div>
                <button
                  type="submit"
                  class="mb-4 mt-2 btn btn-primary
                  text-uppercase col-6 offset-3 col-md-6 offset-md-3"
                >
                  Entrar
                </button>
              </form>
              <a href="">
                <p class="text-center text-white mb-5"><u>Olvidé la contraseña</u></p>
              </a>
              <p class="text-center text-white">¿No estás registrado?</p>
              <button
                type="submit"
                class="mb-4 mt-0 btn btn-secondary col-6 offset-3 col-md-6 offset-md-3">
                Regístrate
              </button>
            </div>
          </div>
        </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'BannerLogin',
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
