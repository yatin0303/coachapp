<template>
  <section>
    <base-card>
      <form @submit.prevent="submitcontact">
        <div class="form-control" :class="{invalid:!email.isval}" >
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email.val"
            @input="clear('email')"
          />
        </div>
        <div class="form-control" :class="{invalid:!message.isval}">
          <label for="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            v-model="message.val"
            @input="clear('message')"
    
          ></textarea>
        </div>
        <base-button>Send Request</base-button>
      </form>
      <base-spinner v-if="isloading"></base-spinner>
    </base-card>
  </section>
</template>
<script>
export default {
  data() {
    return {
      message: { val: '', isval: true },
      email: { val: '', isval: true },
      formisvalid: true,
      isloading:false

    }
  },
  methods: {
      clear(id){
          this[id].isval=true
      },

    formvalidator() {
      this.formisvalid = true;
      if (this.message.val ==='') {
        this.formisvalid = false;
        this.message.isval = false;
      }
      if (this.email.val ===''||!this.email.val.includes("@")) {
        this.formisvalid = false;
        this.email.isval = false;
      }
    },
   async submitcontact() {
      this.formvalidator();
 
      
      const finaldata={
          email:this.email.val,
          message:this.message.val,
          coachid:this.$route.params.coachid
      }
      this.isloading=true;
     await this.$store.dispatch('request/getmessage',finaldata)
     
      this.isloading=false;
      this.$router.replace('/coaches')

    },
  },
};
</script>
<style scoped>


.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}



.actions {
  text-align: center;
}
.invalid label,.invalid h4 {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
p{
  font-size: 0.8rem;
}
</style>