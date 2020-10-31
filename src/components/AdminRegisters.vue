<template>
  <div class="container">
    <h2 class="mt-5 text-center text-uppercase text-white font-weight-light">Registros</h2>
    <img src="../assets/img/Mediana_linea-22.png"
    class="mx-auto d-block" style="width: 80%" alt="linea" />
    <table class="table table-bordered table-dark mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Número celular</th>
          <th scope="col">Empresa</th>
          <th scope="col">Puesto</th>
          <th scope="col">Ciudad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(registro, index) in registros" :key="registro">
          <th scope="row">{{index}}</th>
          <td>{{registro.name}}</td>
          <td>{{registro.email}}</td>
          <td>{{registro.phone}}</td>
          <td>{{registro.supplier}}</td>
          <td>{{registro.role}}</td>
          <td>{{registro.city}}</td>
        </tr>
      </tbody>
    </table>
    <footer class="mb-3 mt-5 footer">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-12 col-md-4 text-center">
            <a href=""><p>Mercedes-Benz, marca registrada 2020</p></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AdminRegisters',

  data() {
    return {
      registros: [
        {
          name: 'Larry Bird',
          email: 'Bird@mail.com',
          phone: '5555555555',
          supplier: 'Test',
          role: 'Admin',
          city: 'Cd. de México',
        },
        {
          name: 'Tomas Isaac',
          email: 'Isaac@mail.com',
          phone: '5555555555',
          supplier: 'Test',
          role: 'Admin',
          city: 'Cd. de México',
        },
      ],
    };
  },
};

</script>

<style></style>
