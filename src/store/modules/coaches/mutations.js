export default{
addcoach(state,payload){
    state.coaches.push(payload);
},
addserverdata(state,payload){
    state.coaches=payload
},
fetchtime(state){
    state.lastfetch=new Date().getTime();
   


}
}