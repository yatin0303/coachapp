let timer;
export default {
   async signup(context, payload) {
      
        return context.dispatch('auth',{...payload,mode:'signup'})
       

    },
   async signin(context, payload) {
     
        return context.dispatch('auth',{...payload,mode:'login'})
       

    },
   async auth(context,payload){
        const mode=payload.mode
        let url =process.env.VUE_APP_COACH_LOGIN
        if(mode==='signup'){
            url=process.env.VUE_APP_COACH_SIGNUP
        }
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(
                {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                }
            )
        });

        const responsedata = await response.json();
        
        if (!response.ok) {
            const error = new Error(responsedata.error.message || 'Please check your information')
            throw error
        }
        const expiresIn = +responsedata.expiresIn * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('tokenExpiration', expirationDate);
        localStorage.setItem('token',responsedata.idToken)
        localStorage.setItem('localid',responsedata.localId)
        
        timer = setTimeout(function() {
            context.dispatch('autoLogout');
          }, expiresIn);

        context.commit('setdata', {
            idToken: responsedata.idToken,
            userid: responsedata.localId,
            
        });

     
     


    },
    trylogin(context){
        const token = localStorage.getItem('token')
        const localid = localStorage.getItem('localid')
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        const expiresIn = +tokenExpiration - new Date().getTime();

        if (expiresIn < 0) {
            return;
          }
      
             timer = setTimeout(function() {
              context.dispatch('autoLogout');
                 }, expiresIn);
  
      
        if(token&&localid){
            
           
            context.commit('setdata', {
                idToken: token,
                userid: localid,
            })

        }

    }
    ,
    logout(context) {
        
        localStorage.removeItem('token')
        localStorage.removeItem('localid')
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);

        context.commit('logout', {
            idToken: null,
            expiresIn: null,
            localId: null,
            login: false
        })

    }

}