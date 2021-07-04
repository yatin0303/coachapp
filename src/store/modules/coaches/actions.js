export default {
    async newdata(context, payload) {
        const userid = context.rootGetters.getuserid
        const newdata = {

            firstName: payload.firstname,
            lastName: payload.lastname,
            areas: payload.areas,
            description: payload.description,
            hourlyRate: payload.rate
        }
        const token = context.rootGetters.gettoken;
        const response = await fetch(`${process.env.VUE_APP_COACH}/${userid}.json?auth=` + token, {
            method: 'PUT',
            body: JSON.stringify(newdata)
        })
        const responsedata = await response.json();
        if (!response.ok) {
            const error = new Error(responsedata.message)
            throw error
        }
        context.commit('addcoach', { ...newdata, id: userid })
    },
    async getnewdata(context, payload) {


        if (!payload.forcedrefresh && !context.getters.reloadrequired) {
            return;
        }
        const response = await fetch(`${process.env.VUE_APP_COACH}.json`)

        const responsedata = await response.json();

        if (!response.ok) {
            const error = new Error(responsedata.message)
            throw error
        }
        const newcoach = [];

        for (const key in responsedata) {
            const gotcoach = {
                id: key,
                firstName: responsedata[key].firstName,
                lastName: responsedata[key].lastName,
                areas: responsedata[key].areas,
                description: responsedata[key].description,
                hourlyRate: responsedata[key].hourlyRate
            }
            newcoach.push(gotcoach)
        }
        context.commit('addserverdata', newcoach)
        context.commit('fetchtime')



    }
}