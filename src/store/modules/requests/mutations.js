export default{
    getrequests(state,payload){
        state.requests.push(payload)
    },

    serverrequests(state,payload){
        state.requests=payload
    }
}