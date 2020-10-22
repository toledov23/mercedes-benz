<template>
  <div class="container" id="Sede">
      <h2 class="text-center text-uppercase text-white">Sede Querétaro</h2>
      <img
      src="../assets/img/Mediana_linea-22.png"
      class="mx-auto d-block" style="width: 80%" alt="linea">
      <div class="row mt-5">
        <div class="col-12 mt-2 col-lg-6" id="card_3">
          <div class="card border-0">
            <img class="card-img-top" src="../assets/img/hotel-07.jpg" alt="Img 1">
                <div class="card-body">
                  <h5 class="card-title mb-0">HOTEL DOUBLETREE BY HILTON</h5>
                  <p class="card-text">Av. Luis Vega Monrroy 410, Colinas del Cimatario,<br>
                   CP 76030, Santiago de Querétaro, Qro.</p>
                   <div class="row">
                     <div class="col-2">
                       <img src="../assets/img/icon-15.svg" style="width: 90%" alt="check-in">
                     </div>
                     <div class="col-4">
                       <h6 class="text-uppercase">Check in</h6>
                       <p>Miércoles 18 Noviembre 2020 <br> 15 hrs.</p>
                     </div>
                     <div class="col-2">
                       <img src="../assets/img/icon-16.svg" style="width: 95%" alt="check-out">
                     </div>
                     <div class="col-4">
                       <h6 class="text-uppercase">Check out</h6>
                       <p>Jueves 19 Noviembre 2020 <br> 8 hrs.</p>
                     </div>
                   </div>
                </div>
          </div>
        </div>
        <div class="col-12 mt-2 col-lg-6">
          <div class="card border-0">
            <img class="card-img-top" src="../assets/img/autodromo-08.jpg" alt="Img 2">
                <div class="card-body">
                  <h5 class="card-title mb-0">AUTÓDROMO DE QUERÉTARO</h5>
                  <p class="card-text">Carretera Antiguo Camino a México Km 1,900,
                    Cumbres del Conin CP 76240, Santiago de Querétaro, Qro.</p>
                    <br><br><br><br>
                </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Sede',

};
</script>

<style scoped>
#Sede {
  margin-top: 150px;
  margin-bottom: 200px;
}
</style>
