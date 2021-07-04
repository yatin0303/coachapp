// import { defineAsyncComponent } from 'vue'
import {createRouter,createWebHistory} from 'vue-router'



import coachDetails from './Pages/coaches/coachDetails.vue'
import coachList from './Pages/coaches/coachList.vue'
import Registration from './Pages/coaches/coachRegistration.vue'
import  RequestsReceived from './Pages/requests/requestsReceived.vue'
import contact1 from './Pages/requests/contact.vue'
import notFound from './Pages/notFound.vue'
import userAuth from './Pages/authentication/auth.vue'
import store from './store/index.js'

// const coachDetails= defineAsyncComponent(() => import('./Pages/coaches/coachDetails.vue'))
// const Registration=defineAsyncComponent(() =>import('./Pages/coaches/coachRegistration.vue'));
const router=createRouter({
   
components:{
    coachDetails,coachList,Registration,RequestsReceived,contact1,notFound,userAuth

},
history:createWebHistory(),
routes:[
    {path:'/',redirect:'coaches'},
    {path:'/coaches',component:coachList},
    {path:'/requests',component:RequestsReceived ,meta:{requiresLogin:true}},
    {path:'/coaches/:coachid',component:coachDetails,props:true,children:[
        {path:'contact',component:contact1}
    ]},
    {path:'/register',component:Registration ,meta:{requiresLogin:true}},
    {path:'/auth',component:userAuth, meta:{requiresunauth:true}},
    {path:'/:notfound(.*)',component:notFound},
]


});

router.beforeEach(function(to,_,next){
    if(to.meta.requiresLogin&&!store.getters.gettoken){
        next('/auth')
    }
    else if (to.meta.requiresunauth&&store.getters.gettoken){
        next('/coaches')
    }
    else
    next()
})


export default router;