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
                <span>Деб.ж</span>
            </div>
        </div>
        <div class="data-table__row"
             v-for="element in oilData.oil_table.data"
             v-bind:key="element.id"
        >

            <div>
                <span>{{element.date}}</span>
            </div>
            <div>
                <span>{{element.oil_extraction}}</span>
            </div>
            <div>
                <span>{{element.debit}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
    export default {
        name: "DataTable",
        computed: mapState({
            oilData: state => state.OilData.data
        })
    }
</script>

<style scoped>

</style>