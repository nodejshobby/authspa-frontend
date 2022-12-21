import User from '../../apis/User';
const state = {
    user: {},
    authenticated: false
}
    
    
const mutations = {
    SET_AUTH(state, payload) {
        state.authenticated = payload
    },

    SET_USER(state,user){
        state.user = user
    }
}

const getters = {
    getUser(state){
        return state.user
    },
    getAuth(state){
        return state.authenticated
    }
}

const actions = {
    async updateUser({ commit }) {
        try{
            const response = await User.getUser()
            const payload = response.data
            commit('SET_USER', payload);
        }catch(e){
            console.log(e.message)
        }
    },

    setAuth({ commit }, payload) {
        commit('SET_AUTH', payload)
    }
}
    
    
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}