<template>
    <div class="container">
        <params-component></params-component>
        <div v-if="oilDataLoaded">
             <spinner></spinner>
        </div>
        <div v-else>
            <data-table></data-table>
        </div>

        <data-chart></data-chart>

    </div>
</template>



<script>
import ParamsComponent from "@/components/OilCalculation/ParamsComponent";
import DataTable from "@/components/OilCalculation/DataTable";
import DataChart from "@/components/OilCalculation/DataChart";
import { mapState } from 'vuex';
import Spinner from 'vue-simple-spinner';

    export default {
        name: "OilCalculation",
        mounted(){
            this.$store.dispatch('OilData/getOilModelData');
        },
        components: {
            ParamsComponent,
            DataTable,
            DataChart,
            Spinner
        },
        computed: mapState({
            oilData: state => state.OilData.data,
            oilDataLoaded: state => state.OilData.dataLoaded
        })
    }
</script>

<style scoped>

</style>