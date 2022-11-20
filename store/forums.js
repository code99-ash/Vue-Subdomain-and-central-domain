export const state = () => ({
    data: [],
    users: 12
})

export const actions = {
    async getForums({commit}) {
        try{
            const resp = await this.$axios.$get('/forums')
            commit('SET_FORUMS', resp)
        }catch(err) {
            console.log(err)
        }
    }
}

export const mutations = {
    SET_FORUMS(state, data) {
        state.data = data;
    }
}