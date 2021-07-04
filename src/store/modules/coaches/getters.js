export default{
    coaches(state){
        return state.coaches
    },
    coaches1(state){
        return state.coaches[0]
    },
 
 
    emptyCoach(state){
        if(state.coaches&&state.coaches.length>0)
        return true;
        else
        return false

    },
    iscoach(_,getters,_2, rootGetters){
        const coaches=getters.coaches
        const userid=rootGetters.getuserid
        return coaches.some(coach=>coach.id===userid)
    }
   ,
    reloadrequired(state){
        const prefetch=state.lastfetch
        if(!prefetch){
            return true
        }
        const currenttime=new Date().getTime();
        return (currenttime-prefetch)/1000 >60
    }
}