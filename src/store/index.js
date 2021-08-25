import Vue from 'vue';
import Vuex from 'vuex';

import {OilData} from "@/store/oildata.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        OilData
    },
});