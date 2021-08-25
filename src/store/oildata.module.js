import OilModelService from '@/service/oilmodel.service'

const InitialState = {
    data: [],
    dataLoaded: false
};

export const OilData = {
    namespaced: true,
    state: () => (InitialState),

    mutations: {
        updateModelData(state, response) {
            state.data = response
        },
        loadingStatus(state, newStatus) {
            state.dataLoaded = newStatus
        }
    },
    actions: {
        getOilModelData({commit}) {
            commit('loadingStatus', true);
            OilModelService.getModelDataFromApi().then(response => {
                commit('updateModelData', response.data);
                commit('loadingStatus', false);
            })
        }
    }

};

