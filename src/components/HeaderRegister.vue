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

          <div class="button">
            <ul class="navbar-nav ml-auto text-center">
              <li class="nav-item">
                <a class="nav-link border" href="#main"> Iniciar Sesión </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
  name: 'HeaderRegister',
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
  margin-top: 15px;
}
</style>
