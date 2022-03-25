<template>
    <HeroComponent></HeroComponent>
</template>


<script>
import {defineAsyncComponent} from 'vue'

export default {
    components:{
        HeroComponent: defineAsyncComponent ( () => import('@/modules/cakery/components/HeroComponent')),
    }    
}
</script>