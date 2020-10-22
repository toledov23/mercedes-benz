<template>
  <div>
    <div id="Main">
      <img class="img-fluid" src="../assets/img/banner_VAN_07.jpg" alt="Hero" id="Hero__Van" />
    </div>
    <div class="overlay">
      <div class="container">
        <div class="row align-items-center justify-content-between justify-content-center">
          <div class="col-12 col-md-4">
            <h1 class="">Experiencia <br> VAN es...</h1>
            <p class="">
              Disfrutar conociendo los grandes beneficios y ventajas de Sprinter para tu negocio.
            </p>
          </div>
          <div class="col-12 col-md-4">
            <h2 class="text-center">Bienvenido</h2>
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
                class="mb-4 mt-2 btn btn-primary text-uppercase col-6 offset-3 col-md-6 offset-md-3"
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
                class="mb-4 mt-0 btn btn-secondary col-6 offset-3 col-md-6 offset-md-3"
              >
                Registrate
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerLogin',
};
</script>

<style scoped>
#Hero__Van {
  margin-top: 0px;
}
#main img {
  max-height: 70vh;
  object-fit: cover;
}

img {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
}

.overlay .container,
.overlay .row {
  height: 100%;
}
</style>
