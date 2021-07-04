


import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from  './router.js'
import store from './store/index.js'



import baseCard from './components/ui/baseCard.vue'
import baseButton from './components/ui/basebutton.vue' 
import baseBadge from './components/ui/badgecard.vue' 
import baseSpinner from './components/ui/basespinner.vue'


const app =createApp(App)
app.component('base-card',baseCard)
app.component('base-button',baseButton) 
app.component('base-badge',baseBadge) 
app.component('base-spinner',baseSpinner) 


app.use(router)
app.use(store)
app.use(vuetify)
// router.isReady().then(function(){
 
    app.mount('#app')
// })

