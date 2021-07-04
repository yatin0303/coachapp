<template><div>
<nav>
    <div>
    
    <h2><router-link class="navlink" to="/coaches">Find A Coach</router-link></h2> 
    </div>
    <div class="itemlink">
        <router-link v-if="!isloggedin" to="/auth">login</router-link>
        <router-link  to="/coaches">Coaches</router-link>
        <router-link v-if="isloggedin" to="/requests">Requests</router-link>
        <a v-if="isloggedin" @click="signout">SignOut</a>
        
    </div>
</nav>
    </div>
</template>
<script>
export default {
    data(){
        return{
        isloading:false}
    },
    computed:{
        
        isloggedin(){
            return this.$store.getters.gettoken

        }
   
    },
    methods:{
        signout(){
            this.$store.dispatch('logout')
       
            this.$router.replace('/coaches')
        }
    }
}
</script>

<style scoped>

nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background: rgb(32, 32, 32);
    color: white;
    width: 100%;
    
    top: 0;

}
h2{
    margin:1rem;
    display: flex;
}
a{
    text-decoration: none;
    margin: 1rem 0 ;
    color: white;
    padding: 1rem;
}
.itemlink a:hover{
    background:rgb(48, 47, 47);
    color: wheat;
}
.itemlink a:last-child{
    margin-right: 1rem;
}


.router-link-active{
    color:wheat
}




</style>