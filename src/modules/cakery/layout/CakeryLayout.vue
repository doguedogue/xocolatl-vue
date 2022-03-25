<template>
  <HeaderComponent />

  <main>
    <div class="row">
      <MenuComponent />

      <router-view />
    </div>
    <div class="col-2 blanco"></div>
  </main>

  <FooterComponent />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    HeaderComponent: defineAsyncComponent(() =>
      import("@/modules/cakery/components/HeaderComponent.vue")
    ),
    FooterComponent: defineAsyncComponent(() =>
      import("@/modules/cakery/components/FooterComponent.vue")
    ),
    MenuComponent: defineAsyncComponent(() =>
      import("@/modules/cakery/components/MenuComponent.vue")
    ),
  },
};
</script>

<style>
@import "@/styles/style.css";
</style>
