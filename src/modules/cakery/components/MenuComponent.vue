<template>
  <div class="col-3 menu">
    <ul>
      <router-link :to="{ name: 'hero' }" v-slot="{ isExactActive }"><li :class="isExactActive ? 'active' : 'normal'">Home</li></router-link>
      <router-link :to="{ name: 'pasteles' }" v-slot="{ isExactActive }"><li :class="isExactActive ? 'active' : 'normal'">Pasteles</li></router-link>
      <router-link :to="{ name: 'personaliza' }" v-slot="{ isExactActive }"><li :class="isExactActive ? 'active' : 'normal'">Personaliza tu pastel</li></router-link>
      <router-link :to="{ name: 'pedidos' }" v-slot="{ isExactActive }"><li :class="isExactActive ? 'active' : 'normal'">Pedidos
        <img src="@/assets/img/food-cart.png" alt="" class="icon" /></li></router-link>
      <router-link :to="{ name: 'administracion' }" v-slot="{ isExactActive }"><li :class="isExactActive ? 'active' : 'normal'">Administración
        <img
            src="@/assets/img/shield.png"
            alt=""            
            class="shield icon"
          /></li></router-link>
      <router-link :to="{ name: 'contacto' }" v-slot="{ isExactActive }"><li :class="isExactActive ? 'active' : 'normal'">Contacto</li></router-link>
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

.nomal {
    background-color: #161b22;
}
  
.menu li:hover {
    background-color: #2d3238;
}

.icon{
  width:20px;
}
</style>