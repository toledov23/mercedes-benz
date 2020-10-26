<template>
      <div class="Main__hero" id="main">
      <div>
        <img
          class="img-fluid max-width:100% height:auto"
          src="../assets/img/bannerVAN_degradado_06.jpg"
          alt="Hero"
          id="Hero__Van"
        />
      </div>
      <div class="overlay">
        <div class="container">
          <div class="row align-items-center justify-content-md-center" id="text">
            <div class="col-12 text-center">
              <h1 class="mt-0">Experiencia VAN es...</h1>
              <img
               src="../assets/img/Mediana_linea-22.png"
               class="mx-auto d-block" style="width: 100%" alt="linea" id="linea">
            </div>
              <p class="col-12 col-md-6 text-center">
                Disfrutar conociendo los grandes beneficios y ventajas de
                Sprinter para tu negocio.
              </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style>
.Main__hero{
  color: white;
}
#Hero__Van {
  margin-top: 80px;
}

#text{
  margin-top: -60px;
}

</style>
