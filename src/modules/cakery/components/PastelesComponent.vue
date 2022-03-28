<template>
  <div class="col-6">
    <h1>Pasteles</h1>
    <p>Prueba todos nuestros deliciosos sabores</p>
  </div>
  <div class="col-6 card" v-for="item in getPasteles" :key="item.id">
    <div class="col-3">        
      <router-link :to="{ name: 'pedidos' }">
        <img
          :src="getImgUrl(item.src)"
          :alt="item.alt"
          class="ck_img"
        />
      </router-link>
    </div>
    <div class="col-9">
      <h1>{{item.name}}</h1>
      <p>{{item.description}}</p>
      <p>Precio: {{item.price}}</p>
    </div>
  </div>
  <div class="col-6 blanco"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods:{
    getImgUrl(img) {
      let images = require.context('@/assets/img', false, /\.png$/)
      return images('./' + img )
    }
  },
  computed: {
    ...mapGetters('cakery', ['getPasteles'])
  },
}
</script>


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