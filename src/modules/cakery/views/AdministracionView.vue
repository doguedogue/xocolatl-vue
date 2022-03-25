<template>
    <AdministracionComponent/>
</template>


<script>
import {defineAsyncComponent} from 'vue'

export default {
    components:{
        AdministracionComponent: defineAsyncComponent ( () => import('@/modules/cakery/components/AdministracionComponent')),
    }    
}
</script>