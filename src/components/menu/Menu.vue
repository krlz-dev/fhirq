<template>
  <div>
    <nav class="menu-desktop">
      <div class="menu-left">
        <h1 class="logo">LOGO</h1>
        <a href="#">Option 1</a>
        <a href="#">Option 2</a>
        <a href="#">Option 3</a>
      </div>
      <div class="menu-right">
        <a href="#">Other 1</a>
        <a href="#">Other 2</a>
        <a href="#">Other 3</a>
      </div>
    </nav>

    <nav class="menu-mobile">
      <div class="menu-burger">
        <a class="burger-button"
           v-on:click="showMenu()">
          <i class="material-icons" style="font-size:36px;">
            dehaze
          </i>
        </a>
      </div>
      <div ref="slideMenu" class="slide-menu">
        <ul>
          <li>Hello</li>
          <li>Yellow</li>
        </ul>
      </div>
    </nav>
  </div>


</template>
<style scoped src="./Menu.css"></style>
<script src="./Menu.js"></script>