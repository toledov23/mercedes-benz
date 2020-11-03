<template>
  <div class="container">
    <a class="blue nav-link cursor-pointer" @click="logout"> Cerrar sesión </a>

    <h2 class="mt-5 text-center text-uppercase text-white font-weight-light">Registros</h2>
    <img src="../assets/img/Mediana_linea-22.png"
    class="mx-auto d-block" style="width: 80%" alt="linea" />
    <table class="table table-bordered table-dark mt-5">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Número celular</th>
          <th scope="col">Empresa</th>
          <th scope="col">Puesto</th>
          <th scope="col">Ciudad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="registro in registros" :key="registro">
          <th scope="row">{{registro.id}}</th>
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
import Auth from '@/services/auth';

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

  created() {
    this.getUsers();
  },

  methods: {
    logout() {
      window.localStorage.clear();
      localStorage.clear();
      this.$router.push('/');
    },
    async getUsers() {
      const users = await Auth.getUsers();
      this.registros = users.data.data;
    },
  },
};

</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
