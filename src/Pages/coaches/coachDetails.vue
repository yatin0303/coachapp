<template>
  <section>
    <section>
      <base-card>
        <h2>{{ fullname }}</h2><br>
        <h4>${{ rate }}/Hour</h4>
      </base-card>
    </section>
    <section>
      <base-card>
        <h2>Interested ? Then Contact Us</h2><br>
        <base-button link :to="link1" mode="outline">Contact</base-button>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :title="area"
          :type="area"
        >
        </base-badge><br><br>
        <p>{{ description }}</p>
      </base-card>
    </section>
    <router-view></router-view>
  </section>
</template>
<script>

export default {
  props: ["coachid"],
  data() {
    return {
     coachdata:null
    };
  },
  created(){
    
 
      this.coachdata= this.$store.getters["coach/coaches"].find(
        (coach) => coach.id === this.coachid
      )
         
      
  },
  computed: {

      link1(){
     
          return '/coaches/'+ this.$route.params.coachid +'/contact'
      },
      fullname(){
          return this.coachdata.firstName +' '+ this.coachdata.lastName
      },
      rate(){
          return this.coachdata.hourlyRate
      },
      areas(){
         return this.coachdata.areas
      },
      description(){
                   return this.coachdata.description

      }
  },
};
</script>