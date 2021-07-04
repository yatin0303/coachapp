export default{
    async getmessage(context,payload){
        const finaldata={

            email:payload.email,
            message:payload.message
        }

     const response= await  fetch(`${process.env.VUE_APP_REQUEST}/${payload.coachid}.json`,{
            method:'POST',
            body:JSON.stringify(finaldata)
        })
        

        const responseData=  await response.json();
        finaldata.id=responseData.name;
        finaldata.coachid=payload.coachid
      


        context.commit('getrequests',finaldata)
       
            
        },
       async getrequests(context){
           const userid= context.rootGetters.getuserid;
           const token = context.rootGetters.gettoken;
            const response =await fetch(`${process.env.VUE_APP_REQUEST}/${userid}.json?auth=` + token)
         
            const responseData=  await response.json();
            if (!response.ok) {
                const error= new Error(responseData.message)
                throw error
            }
            const temparray=[]
            for(const key in responseData){
                const tempobj={
                    id:userid,
                    email:responseData[key].email,
                    message:responseData[key].message
    
                    
                }
    
               
                temparray.push(tempobj)
               
                
    
            }

            context.commit('serverrequests',temparray)

        }
    }
