<template>
      <nav
        class="navbar navbar-expand-lg navbar-custom bg-custom fixed-top"
      >
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
            src="../assets/img/logo-04.png"
            style="width: 200px"
            alt="Logo"
            id="logo" />
          </a>
          <button
            class="navbar-dark navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-dark navbar-toggler-icon text-center"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav ml-auto text-center">
              <li class="nav-item" @click="hideCollapse">
                <a class="nav-link" href="#main"> Inicio </a>
              </li>
              <li class="nav-item" @click="hideCollapse">
                <a class="nav-link" href="#sede"> Sede </a>
              </li>
              <li class="nav-item" @click="hideCollapse">
                <a class="nav-link" href="#agenda"> Agenda </a>
              </li>
              <li class="nav-item" @click="hideCollapse">
                <a class="nav-link" href="#recomendaciones">
                  Recomendaciones
                </a>
              </li>
              <li class="nav-item" @click="hideCollapse">
                <a class="nav-link" href="#medidas"> Medidas COVID-19 </a>
              </li>
              <li class="nav-item" @click="hideCollapse">
                <a class="nav-link" href="#faqs"> FAQs </a>
              </li>
              <li class="nav-item" @click="hideCollapse">
                <a class="nav-link" href="#contacto"> Contacto </a>
              </li>
              <li>
                <a class="blue nav-link" @click="logout"> Cerrar sesión </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String,
  },
  methods: {
    hideCollapse() {
      window.$('.navbar-collapse').collapse('hide');
    },
    logout() {
      window.localStorage.clear();
      localStorage.clear();
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.navbar-custom {
  background-color: black;
}
/* change the brand and text color */
.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
  color: rgba(255, 255, 255, 1);
}
/* change the link color */
.navbar-custom .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 1);
}
/* change the color of active or hovered links */
.navbar-custom .nav-item.active .nav-link,
.navbar-custom .nav-item:focus .nav-link,
.navbar-custom .nav-item:hover .nav-link {
  color: #4bace9;
}
ul li {
  margin-top: 20px;

}
button{
  margin-top: 20px;
}

.blue {
  color: #4bace9 !important;
  cursor: pointer;
}
</style>
