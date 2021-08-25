<template>
    <div class="calculation-params">
        <div class="calcualtion-params__wrapper">
            <label>Геологические запасы</label>
            <input type="number" v-model="geologicStocks">
            <span>м3</span>
        </div>
        <div class="calcualtion-params__wrapper">
            <label>КИН</label>
            <input type="number" v-model="oilExtactionCoeff">
            <span>д.е.</span>
        </div>
        <div class="calcualtion-params__wrapper">
            <label>НИЗ</label>
            <input type="number" v-model="oilCoeff">
        </div>
        <div class="calcualtion-params__wrapper">
            <label>Деб.Ж</label>
            <input type="number" v-model="debit">
            <span>м3/сут</span>
        </div>
        <button>Рассчитать</button>
    </div>
</template>

<script>
    export default {
        name: "ParamsComponent",
        data() {
            return {
                geologicStocks: 296881.893512481,
                oilExtactionCoeff: 0.581954694238366,
                oilCoeff: 0,
                debit: 300
            }
        },
        computed: {
        },
        methods: {
            countOilCoeff() {
                this.oilCoeff = this.geologicStocks * this.oilExtactionCoeff
            }
        }

    }
</script>

<style scoped>

</style>