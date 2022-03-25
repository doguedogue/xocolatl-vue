<template>
  <div class="col-3 menu">
    <ul>
      <a href="index.html"><li class="active">Home</li></a>
      <a href="pasteles.html"><li>Pasteles</li></a>
      <a href="personaliza.html"><li>Personaliza tu pastel</li></a>
      <a href="pedidos.html"
        ><li>
          Pedidos
          <img src="@/assets/img/food-cart.png" alt="" width="20px" /></li
      ></a>
      <a href="administracion.html"
        ><li>
          Administración
          <img
            src="@/assets/img/shield.png"
            alt=""
            width="20px"
            class="shield"
          /></li
      ></a>
      <a href="contacto.html"><li>Contacto</li></a>
    </ul>
  </div>
</template>

<style scoped>

.menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
  
.menu li {
    padding: 8px;
    margin-bottom: 7px;
    background-color: #161b22;
    color: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: #1d2228;
}
.menu a {
    color: #ffffff;
    text-decoration: none;
}

.active {
    background-color: #5788c4 !important;
}
  
.menu li:hover {
    background-color: #2d3238;
}
</style>