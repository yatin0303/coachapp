<template><div>
    
    <section class="section1">
         <h1>Page Not Found!!</h1>
        <router-link to="/coaches">Home</router-link>
        <img class="img1" src="../assets/404error.png" alt="">
    </section>
    </div>
</template>



<style scoped>
section{
    height: 90vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
}
h1{
  font-size: 50px;
  color: lightgrey;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
a{
    text-decoration: none;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      
        color: lightgrey;
      padding:10px 20px;
      border-radius: 10px;


}
a:hover{
    
  
    color: black;
    
}
@media screen and (max-width: 500px) {
    .img1{  
     width: 100%;
  height: auto;

}
    
}

</style>

