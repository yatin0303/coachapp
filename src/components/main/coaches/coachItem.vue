<template>
   <transition name="details"><v-card  elevation="1" hover class="pa-5 ma-4" rounded>
        <v-card-title size="large">{{fullname}}</v-card-title>
         <v-card-subtitle class="pb-0">
             ${{rate}}/hour
            </v-card-subtitle>

            <base-badge v-for="area in areas" :key="area" :type="area" :title="area">{{area}}&nbsp;</base-badge>
       
        <br>
     
        <base-button link :to="coachContact" mode="outline" >Contact</base-button>
        <base-button link :to="coachid">Coach Details</base-button>
    </v-card>
     </transition>

    
</template>

<script>
export default {

    props:['id','lastName','firstName','areas','rate'],
    computed:{
        fullname(){
            return this.firstName+' '+this.lastName;
        },
        coachid(){
            return '/coaches/'+this.id
        },
        coachContact(){
            return '/coaches/'+this.id+'/contact'
        }
    }
    
}
</script>
<style scoped>
li{
    list-style: none;
}
.details-enter-active{
    animation:  fade 1s ease-in;
}
@keyframes fade {
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}

}
</style>
