<template>
  <section>
    <base-card>
      <div>
        <h2>Requests Received so Far!!</h2>
      </div>
     <base-spinner v-if="isloading"></base-spinner>
      <div v-else-if="!isempty && !isloading">
          <ul >
            <request-item v-for="req in statereq" :key="req.id" :email="req.email" :message="req.message"></request-item>
          </ul>
      </div>
      <div v-else-if="isempty"><h3>no requests Received</h3></div>
      <div v-else>Access Denied</div>
      </base-card
    >
  </section>
</template>
<script>

import requestItem from '../../components/main/requests/requestitem.vue'
export default {
    components:{requestItem},
    data(){
        return{
            isempty:true,
            isloading:false
        }
    },
    computed:{
        statereq(){
         return   this.$store.getters['request/getrequests']
        }
    }
    ,methods:{
        checkempty(){
      
            if(this.statereq.length){
                this.isempty=false
            }
        },
       async getrequests(){
         this.isloading=true
         
        await  this.$store.dispatch('request/getrequests')
        this.checkempty();
        this.isloading=false
        }
    },
    created(){
     
     this.getrequests();
    }
}
</script>