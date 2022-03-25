<template>
  <div class="col-6">
    <h1>Pasteles</h1>
    <p>Prueba todos nuestros deliciosos sabores</p>
  </div>

  <div class="col-6 card">
    <div class="col-3">
        
      <router-link :to="{ name: 'pedidos' }">
        <img
          src="@/assets/img/p_xocolatl_special.png"
          alt="Pastel Xocolatl Special"
          class="ck_img"
      /></router-link>
    </div>
    <div class="col-9">
      <h1>PASTEL XOCOLATL SPECIAL</h1>
      <p>Pan de cocoa cubierto y relleno con betún de chocolate semi amargo.</p>
      <p>Precio: $419.00 – $1,189.00</p>
    </div>
  </div>

  <div class="col-6 card">
    <div class="col-3">
      <router-link :to="{ name: 'pedidos' }">
        <img src="@/assets/img/p_unicornio.png" alt="Pastel Unicornio" class="ck_img"
      /></router-link>
    </div>
    <div class="col-9">
      <h1>PASTEL DE UNICORNIO</h1>
      <p>El popular Pastel de Unicornio con el exquisito sabor</p>
      <p>Precio: $719.00 – $1,789.00</p>
    </div>
  </div>
  <div class="col-6 card">
    <div class="col-3">
      <router-link :to="{ name: 'pedidos' }">
        <img src="@/assets/img/p_redvelvet.png" alt="Pastel Red Velvet" class="ck_img"
      /></router-link>
    </div>
    <div class="col-9">
      <h1>PASTEL RED VELVET</h1>
      <p>
        Pan de sabor ácido, descubierto, relleno y decorado de betún de queso y
        cerezas.
      </p>
      <p>Precio: $489.00</p>
    </div>
  </div>

  <div class="col-6 card">
    <div class="col-3">
      <router-link :to="{ name: 'pedidos' }">
        <img
          src="@/assets/img/p_vainilladurazno.png"
          alt="Pastel Vainilla-Durazno"
          class="ck_img"
      /></router-link>
    </div>
    <div class="col-9">
      <h1>PASTEL VAINILLA - DURAZNO</h1>
      <p>
        Bizcocho de vainilla cubierto y relleno de crema natural y trozos de
        duraznos.
      </p>
      <p>Precio: $419.00 – $1,189.00</p>
    </div>
  </div>
  <div class="col-6 card">
    <div class="col-3">
      <router-link :to="{ name: 'pedidos' }">
        <img
          src="@/assets/img/p_sinfonia.png"
          alt="Pastel Sinfonia de Fresa"
          class="ck_img"
      /></router-link>
    </div>
    <div class="col-9">
      <h1>PASTEL SINFONÍA DE FRESA</h1>
      <p>
        Pan de chocolate relleno de mousse de Fresa, cubierto de crema natural y
        decorado con chocobrillo.
      </p>
      <p>Precio: $459.00 – $1,309.00</p>
    </div>
  </div>
  <div class="col-6 card">
    <div class="col-3">
      <router-link :to="{ name: 'pedidos' }">
        <img
          src="@/assets/img/p_choc_nuez.png"
          alt="Pastel Chocolate y nuez"
          class="ck_img"
      /></router-link>
    </div>
    <div class="col-9">
      <h1>PASTEL DE CHOCOLATE Y NUEZ</h1>
      <p>
        Pastel de Chocolate y nuez. Pan de chocolate cubierto y relleno de betún
        de chocolate y nuez en trozos.
      </p>
      <p>Precio: $419.00 – $1,189.00</p>
    </div>
  </div>
  <div class="col-6 blanco"></div>
</template>


<style scoped>

.card {
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: #5788c4;
    padding: 0px;
    margin-bottom: 10px;
}
.blanco {
    height: 100px;
}
.ck_img{
    width: 100px;
}

</style>