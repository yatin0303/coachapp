<template>
  <section>
      <base-card>
      <coach-filter @changed-filter="changefilter"></coach-filter>
      </base-card>
      <base-card>
      <div>
    <base-button @click="refresh(true)">refresh</base-button>
    <base-button  v-if="!iscoach" link to="/register" mode="outline">Register As a Coach</base-button>
    </div>
    <div v-if="isloading">
    <base-spinner ></base-spinner>
    </div>
    <ul v-else >
    <coach-items
      v-for="coach in filteredCoaches"
      :key="coach.id"
      :id="coach.id"
      :first-name="coach.firstName"
      :last-name="coach.lastName"
      :areas="coach.areas"
      :rate="coach.hourlyRate"
    ></coach-items></ul>
    

    </base-card>
  </section>
</template>

<script>
import coachItems from "../../components/main/coaches/coachItem.vue";
import coachFilter from "../../components/main/coaches/coachFilter.vue";
import BaseCard from '../../components/ui/baseCard.vue';


export default {
    data(){return{isloading:false,
        filtercoach:{
        
            frontend:true,
                backend:true,
                career:true

        }
    }},
  components: { coachItems,coachFilter, BaseCard },
  computed: {
    iscoach(){
      return this.$store.getters['coach/iscoach']
    },
    filteredCoaches() {
      const coaches= this.$store.getters["coach/coaches"];
      return coaches.filter(coach=>{
          if(this.filtercoach.frontend&&coach.areas.includes('frontend')){
          return true;}
          if(this.filtercoach.backend&&coach.areas.includes('backend')){
          return true;}
          if(this.filtercoach.career&&coach.areas.includes('career')){
          return true;}
          return false;
      })
    },
    emptycoach() {
      return  !this.isloading&&this.$store.getters["coach/emptyCoach"];
    },
  },

  methods:{
      changefilter(newfilter){
          this.filtercoach=newfilter

      },
    async refresh(refresh=false){
      
      this.isloading=true
   
    
       await this.$store.dispatch('coach/getnewdata',{forcedrefresh:refresh})
          this.isloading=false

       
     

    
      
      }
  },
    created(){
    this.refresh();
  }
};
</script>