<template>
  <div class="container" id="Recomendaciones">
      <div class="card_2 ml-2 mr-2 pt-5 mt-5">
        <h2 class="text-center text-uppercase font-weight-light">Recomendaciones</h2>
        <img
        src="../assets/img/En fondo blanco_linea-23.png"
        class="mx-auto d-block"
        style="width: 100%"
        alt="linea">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-3 text-center">
            <img src="../assets/img/icon-09.svg" class="idCard mt-1 mb-2" alt="Prev" />
            <p class="pl-2 pr-2">
              El evento contará con todos los protocolos de prevención ante el COVID-19.
            </p>
          </div>
          <div class="col-12 col-md-3 text-center">
            <img src="../assets/img/icon-10.svg" class="idCard mt-1 mb-2" alt="Kit" />
            <p class="pl-2 pr-2">Se entregará un kit con cubrebocas,
              careta y gel antibacterial.</p>
          </div>
          <div class="col-12 col-md-3 text-center">
            <img src="../assets/img/icon-11.svg" class="idCard mt-1 mb-2" alt="Home" />
            <p class="pl-2 pr-2">
              Recuerda que en caso de presentar algún síntoma quédate en casa.
              Por cuestiones de normatividad no podremos permitirte el acceso al evento.
            </p>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-3 text-center">
            <img src="../assets/img/icon-12.svg" class="idCard mt-1 mb-2" alt="Card" />
            <p class="pl-2 pr-2">
              No olvides traer tu licencia de manejo vigente para que puedas
              entrar a nuestras Pruebas de Manejo en condiciones reales.
            </p>
          </div>
          <div class="col-12 col-md-3 text-center">
            <img src="../assets/img/icon-13.svg" class="idCard mt-1 mb-2" alt="Ropa" />
            <p class="pl-2 pr-2">Viste ropa cómoda para poder disfrutar de la experiencia.</p>
          </div>
          <div class="col-12 col-md-3 text-center">
            <img src="../assets/img/icon-14.svg" class="idCard mt-1 mb-2" alt="Sun" />
            <p class="pl-2 pr-2">
              Sugerimos el uso de bloqueador solar, lentes obscuros y gorra ó
              sombrero.
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Recomendaciones',

};
</script>

<style>
#Recomendaciones {
  margin-top: 100px;
  margin-bottom: 100px;
}

.card_2 {
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 5px;
}
.idCard {
  width: 140px;
  height: 140px;
  margin-top: 80px;
  margin-bottom: 60px;
}
</style>
