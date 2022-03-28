import { createStore }from 'vuex'
import cakery  from "@/modules/cakery/store/cakery";

const store = createStore ({
    modules: {
        cakery
    }
    
})

export default store
