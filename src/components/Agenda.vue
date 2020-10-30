<template>
 <div class="container mt-section">
      <h2 class="text-center text-uppercase text-white font-weight-light">Agenda</h2>
      <img
      src="../assets/img/Mediana_linea-22.png"
      class="mx-auto d-block"
      style="width: 80%"
      alt="linea">

      <img
      src="../assets/img/agenda.png"
      class="mx-auto d-block agenda"
      alt="linea">
      <!--
      <div class="row text-center text-white mt-5 ml-3 mr-3">
          <div class="col-12 col-md-6">
              <div class="row">
                  <div class="col-2">
                      <ul style="padding-left: 30px">
                          <li style="height: 30px">
                              <p class="azul">Horario</p></li>
                          <li class="mt-3 mb-1">07:00</li>
                          <li class="mt-1 mb-1">08:00</li>
                          <li class="mt-1 mb-1">08:30</li>
                          <li class="mt-1 mb-1">09:00</li>
                          <li class="mt-1 mb-1">10:30</li>
                          <li class="mt-1 mb-1">10:45</li>
                          <li class="mt-1 mb-1">12:15</li>
                          <li class="mt-1 mb-1">12:30</li>
                          <li class="mt-1 mb-1">14:00</li>
                          <li class="mt-1 mb-1">15:00</li>
                          <li class="mt-1 mb-1">16:00</li>
                          <li class="mt-1 mb-1">19:00</li>
                      </ul>
                  </div>
                  <div class="col-10">
                      <ul>
                          <li style="height: 30px">
                              <p class="azul">Miércoles 18 de noviembre de 2020</p></li>
                          <li class="bg-secondary mt-3 mb-1 text-secondary">-</li>
                          <li class="bg-secondary mt-1 mb-1 text-secondary">-</li>
                          <li class="bg-secondary mt-1 mb-1 text-secondary">-</li>
                          <li class="bg-secondary mt-1 mb-1 text-secondary">-</li>
                          <li class="bg-secondary mt-1 mb-1 text-secondary">-</li>
                          <li class="bg-secondary mt-1 mb-1 text-secondary">-</li>
                          <li class="bg-secondary mt-1 mb-1 text-secondary">-</li>
                          <li class="bg-secondary mt-1 mb-1 text-secondary">-</li>
                          <li class="bg-secondary mt-1 mb-1 text-secondary">-</li>
                          <li class="bg-white mt-1 mb-1 text-dark">-</li>
                          <li class="bg-secondary mt-1 mb-1 text-secondary">-</li>
                          <li class="bg-white mt-1 mb-1 text-dark">-</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="col-12 col-md-6">
              <div class="row">
                  <div class="col-2">
                      <ul style="padding-left: 30px">
                          <li style="height: 30px">
                              <p class="azul">Horario</p></li>
                          <li class="mt-3 mb-1">07:00</li>
                          <li class="mt-1 mb-1">08:00</li>
                          <li class="mt-1 mb-1">08:30</li>
                          <li class="mt-1 mb-1">09:00</li>
                          <li class="mt-1 mb-1">10:30</li>
                          <li class="mt-1 mb-1">10:45</li>
                          <li class="mt-1 mb-1">12:15</li>
                          <li class="mt-1 mb-1">12:30</li>
                          <li class="mt-1 mb-1">14:00</li>
                          <li class="mt-1 mb-1">15:00</li>
                          <li class="mt-1 mb-1">16:00</li>
                          <li class="mt-1 mb-1">19:00</li>
                      </ul>
                  </div>
                  <div class="col-10">
                      <ul>
                          <li style="height: 30px">
                            <p class="azul">Jueves 19 de noviembre de 2020</p></li>
                          <li class="bg-white mt-3 mb-1 text-dark">-</li>
                          <li class="bg-white mt-1 mb-1 text-dark">-</li>
                          <li class="bg-white mt-1 mb-1 text-dark">-</li>
                          <li class="bg-white mt-1 mb-1 text-dark">-</li>
                          <li class="bg-white mt-1 mb-1 text-dark">-</li>
                          <li class="bg-white mt-1 mb-1 text-dark">-</li>
                          <li class="bg-white mt-1 mb-1 text-dark">-</li>
                          <li class="bg-white mt-1 mb-1 text-dark">-</li>
                          <li class="bg-white mt-1 mb-1 text-dark">-</li>
                          <li class="bg-secondary mt-1 mb-1 text-secondary">-</li>
                          <li class="bg-white mt-1 mb-1 text-dark"></li>
                          <li class="bg-secondary mt-1 mb-1 text-secondary">-</li>
                          <li class="bg-white mt-1 mb-1 text-dark">-</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>

      -->

      <div id="recomendaciones"></div>
  </div>
</template>

<script>
export default {
  name: 'Agenda',
  data() {
    return {
      activated: false,
    };
  },
};
</script>

<style scoped lang="scss">
li{
    list-style: none;
    border-radius: 5px;
}

li .azul{
    color: #4bace9;
}

.agenda {
    width: 80%;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
    .agenda {
        width: 70%;
    }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    .agenda {
        width: 45%;
    }
}
</style>
