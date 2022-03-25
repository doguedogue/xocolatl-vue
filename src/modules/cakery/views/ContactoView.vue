<template>
    <ContactoComponent/>
</template>


<script>
import {defineAsyncComponent} from 'vue'

export default {
    components:{
        ContactoComponent: defineAsyncComponent ( () => import('@/modules/cakery/components/ContactoComponent')),
    }    
}
</script>