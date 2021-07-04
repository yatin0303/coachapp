<template><section>
   
    
    <base-card>
    
    <form @submit.prevent="submitform" >
        <p v-if="error">{{errorhandler}}</p>
        <div class="form-control" :class="{invalid:!email.isval}">
            <label for="email">Email</label>
            <input type="email" id="email" v-model.trim="email.val" @input="clearerror('email')">
        </div>
        <div class="form-control" :class="{invalid:!password.isval}">
            <label for="password">Password</label>
            <input type="password" id="password" v-model.trim="password.val" @input="clearerror('password')">
        </div>
        <base-button >{{submitcaption}}</base-button>
        <base-button  @click="switchmode" type="button" mode="outline">{{buttoncaption}}</base-button>
    </form>
    </base-card>
     <base-spinner v-if="isloading" ></base-spinner>

</section>
    
</template>

<script>
export default {
    computed:{
          isloggedin(){
            return this.$store.getters.isloggedin


        },
        submitcaption(){
            if(this.mode==='login'){
                return 'login'
            }else{
                return 'SignUp'
            }
        },
        buttoncaption(){
              if(this.mode==='login'){
                return 'SignUp Here'
            }else{
                return 'Login Here'
            }
        },
           errorhandler(){
            if(this.error==='EMAIL_NOT_FOUND'){
            return 'The user is not registered'}
           else if(this.error==='INVALID_PASSWORD'){
            return 'Please Enter Correct password'}
           else if(this.error==='EMAIL_EXISTS'){
            return 'User Already Registered'}
            
          else  if(this.error==='WEAK_PASSWORD'){
            return 'Please Use atleast 6 Characters'}
            
            else return 'Authentication Failed try again'
        }
    },
    data(){
        return{
            error:null,
            isloading:false,
            email:{val:'',isval:true},
            password:{val:'',isval:true},
            formisvalid:true,
            mode:'login'
        }
    },
  
    methods:{
        
      
        clearerror(id){
            this.error=null
            this.formisvalid=true
            this[id].isval=true
        },
        formvalidator(){
        this.formisvalid = true;
      if (this.password.val ==='') {
        this.formisvalid = false;
        this.password.isval = false;
      }
      if (this.email.val ==='') {
        this.formisvalid = false;
        this.email.isval = false;
      
      }},

        switchmode(){
            
            if(this.mode==='login'){
                this.mode='signup'
            }
           
            else
            this.mode='login'
             

        },
        
       async submitform()
        { this.formvalidator();
        if(!this.formisvalid){
            return;
        }
            this.isloading=true;
            try{
            if(this.mode==='login'){
               
              await  this.$store.dispatch('signin',{email:this.email.val,password:this.password.val})
              this.isloading=false
              this.$router.replace('/coaches')
              
            }
            else if (this.mode==='signup'){
               await   this.$store.dispatch('signup',{email:this.email.val,password:this.password.val})
                 this.isloading=false
                 this.$router.replace('/coaches')

            }}
            catch(error){
                this.error=error.message || 'failed to authenticate';
                this.isloading=false
               
            }
            
        }
    }
    
}
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
.buttonanimate{
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
dialog{
    border: none;
    background: transparent;
     
    z-index: 10;
    position: relative;
    top: 40vh;
    left: 40vw;
}
p{
    font-size: 0.76rem;
    color: red;
}
</style>