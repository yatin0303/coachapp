export default{
    getuserid(state){
        return state.userid
    },
    gettoken(state){
        return state.idToken
    },
    loggedinuser(state){
        return state.email

    },
  
    fullstate(state){
        return state
    }
}
