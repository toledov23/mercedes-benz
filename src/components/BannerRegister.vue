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
                  <input type="text" class="form-control" id="exampleInputName1" />
                </div>
                <div class="form-group mb-0">
                  <label class="mb-0" for="exampleInputEmail1">Correo Electrónico*</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group mb-0">
                  <label class="mb-0" for="exampleInputPhone1">
                      Número de teléfono móvil (10 dígitos)*</label>
                  <input type="text" class="form-control" id="exampleInputPhone1" />
                </div>
                <div class="form-group mb-0">
                  <label class="mb-0" for="exampleInputDist1">Distribuidor*</label>
                  <input type="password" class="form-control" id="exampleInputDist1" />
                </div>
                <div class="form-group mb-0">
                  <label class="mb-0" for="exampleInputPuesto1">Puesto*</label>
                  <input type="password" class="form-control" id="exampleInputPuesto1" />
                </div>
                <div class="form-group mb-0">
                  <label class="mb-0" for="exampleInputCity1">Ciudad de origen*</label>
                  <input type="password" class="form-control" id="exampleInputCity1" />
                  <small id="emailHelp" class="form-text text-muted"
                    >*Campo obligatorio</small
                  >
                </div>
                <div class="form-group form-check mb-0">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">
                      <small>He leído y acepto los
                          <a href="">Términos y Condiciones*</a></small></label>
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck2" />
                  <label class="form-check-label" for="exampleCheck2">
                      <small>He leído y acepto el
                          <a href="">Aviso de Privacidad*</a></small></label>
                </div>
                <div class="text-center text-md-right">
                <button type="submit" class="btn btn-primary text-uppercase col-6">Aceptar</button>
                </div>
              </form>
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
  margin-top: 120px;
}
</style>
