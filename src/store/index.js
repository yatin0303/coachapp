import {createStore} from 'vuex'

import coachStore from './modules/coaches/index.js'
import requestStore from './modules/requests/index.js'
import authStore from './modules/authentication/index.js'


const store=createStore({
    modules:{
        coach:coachStore,
        request:requestStore,
        auth:authStore
    },

  
       
})

export default store;