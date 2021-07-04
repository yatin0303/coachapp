export default{
        setdata(state,payload){
           
            state.idToken=payload.idToken,
            state.expiresIn=payload.expiresIn,
            state.userid=payload.userid
      
         
          
        },
        logout(state,payload){
            state.idToken=payload.idToken,
            state.expiresIn=payload.expiresIn,
            state.userid=payload.localId
            state.login=payload.login
        },

        setloginstate(state,payload){
        state.login=payload
        }
}