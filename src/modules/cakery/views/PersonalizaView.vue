<template>
    <PersonalizaComponent/>
</template>


<script>
import {defineAsyncComponent} from 'vue'

export default {
    components:{
        PersonalizaComponent: defineAsyncComponent ( () => import('@/modules/cakery/components/PersonalizaComponent')),
    }    
}
</script>