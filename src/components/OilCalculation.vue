<template>
    <div class="container">
        <params-component></params-component>
        <data-table></data-table>
        <data-chart></data-chart>
    </div>
</template>



<script>
import ParamsComponent from "@/components/OilCalculation/ParamsComponent";
import DataTable from "@/components/OilCalculation/DataTable";
import DataChart from "@/components/OilCalculation/DataChart";
    export default {
        name: "OilCalculation",
        components: {
            ParamsComponent,
            DataTable,
            DataChart
        }
    }
</script>

<style scoped>

</style>