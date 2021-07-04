<template>
    <section>
      <base-card><coach-form @form-submitted="addcoach"></coach-form></base-card>
    </section>
</template>

<script>

import coachForm from '../../components/main/coaches/coachform.vue'

export default {
    components:{
        coachForm
    },
    methods:{
        addcoach(newdata){
            this.$store.dispatch('coach/newdata',newdata) 
            this.$router.replace('/coaches')
            
                 }
    }
    
}
</script>