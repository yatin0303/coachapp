import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

export default{
    state(){
        return{
            idToken:null,
            expiresIn:null,
            userid:null,
           

        }
    },getters,
    actions, 
    mutations
}