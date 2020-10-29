<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');

body {
  background-color: black;

  h1, h2, h3, h4 {
    font-family: 'Playfair Display', serif;
  }

  .mt-section {
    margin-top: 8rem;
  }
}
</style>
