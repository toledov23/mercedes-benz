<template>
  <div class="container" id="Contacto">
      <h2 class="text-center text-uppercase">Contacto</h2>
      <img
      src="../assets/img/Mediana_linea-22.png"
      class="mx-auto d-block"
      style="width: 80%"
      alt="linea">
      <form class="mt-5">
        <div class="form-group col-12 col-md-8 offset-md-2">
          <label for="exampleInputEmail1">Nombre</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group col-12 col-md-8 offset-md-2">
          <label for="exampleInputEmail1">Correo electrónico</label>
          <input type="email" class="form-control" />
        </div>
        <div class="form-group col-12 col-md-8 offset-md-2">
          <label for="exampleInputEmail1">Comentarios</label>
          <input type="text" class="form-control form-control-lg" />
        </div>
        <button
          type="submit"
          class="mb-5 mt-4 btn btn-primary text-uppercase col-6 offset-3 col-md-4 offset-md-4"
        >
          Enviar
        </button>
      </form>
      <div class="text-center">
        <small>Dudas o comentarios</small> <br>
        <small>55 5555 5555 | contacto@experienciavanesmb.com.mx</small>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Contacto',
};
</script>

<style>
#Contacto {
  color: white;
  margin-top: 90px;
}

h1, h2, h3 {
  font-family: Corporatea_regular_webfont;
}
</style>
