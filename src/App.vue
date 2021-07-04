<template>
<v-app>
<div>
    <navigation-bar></navigation-bar>
    </div>
    
    <router-view v-slot="slotProps">
        <transition name="router" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>

    </router-view>

</v-app>
</template>
<script>


import navigationBar from './components/ui/navigationbar.vue'
export default {
    created(){

        this.$store.dispatch('trylogin')

    },
    components:{
        navigationBar

    }
  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

*{
  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    overflow: auto;
    position: relative;
    font-family: 'Roboto', sans-serif;
}

.router-enter-from{
    opacity: 0;
    transform: translateX(-30px);
}
.router-enter-active{
    transition: all 0.3s ease-out;
}
.router-enter-to,
.router-leave-from{
    opacity: 1;
    transform: translateX(0);
}
.router-leave-active{
    transition: all 0.3s ease-in;
}
.router-leave-to{
        opacity: 0;
    transform: translateX(30px);
}
</style>