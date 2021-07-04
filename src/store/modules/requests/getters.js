export default{
    getrequests(state,getters,rootState,rootGetters){
        const a=rootGetters.getuserid;
        return state.requests.filter(req=>req.id===a)
    }
}