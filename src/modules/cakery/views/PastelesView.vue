<template>
    <PastelesComponent/>
</template>


<script>
import {defineAsyncComponent} from 'vue'

export default {
    components:{
        PastelesComponent: defineAsyncComponent ( () => import('@/modules/cakery/components/PastelesComponent')),
    }    
}
</script>