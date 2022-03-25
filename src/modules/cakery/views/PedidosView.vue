<template>
    <PedidosComponent/>
</template>


<script>
import {defineAsyncComponent} from 'vue'

export default {
    components:{
        PedidosComponent: defineAsyncComponent ( () => import('@/modules/cakery/components/PedidosComponent')),
    }    
}
</script>