<template>
    <div class="data-table">
        <div class="data-table__head data-table__row">
            <div>
                <span>Дата</span>
            </div>
            <div>
                <span>Добыча в месяц</span>
            </div>
            <div>
                <span>Дебит, м3/сут</span>
            </div>
        </div>
        <data-table-row class="data-table__row"
                        row-data="row-data">

        </data-table-row>
    </div>
</template>

<script>
import DataTableRow from "@/components/OilCalculation/DataTable/DataTableRow";
    export default {
        name: "DataTable",
        components: {
            DataTableRow
        }
    }
</script>

<style scoped>

</style>