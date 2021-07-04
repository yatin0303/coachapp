<template> <div>
    <li>
<a :href="sendmail">{{email}}</a>
<p>{{message}}</p>
</li>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            a:''
        }
    },
    props:['email','message'],
    computed:{
        sendmail(){
             return 'mailto:' +this.email;
        }
    }
    
}
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
  list-style:none;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>