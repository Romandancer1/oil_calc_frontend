<template>
    <div class="calculation-params">
        <div class="calcualtion-params__wrapper">
            <label>Геологические запасы</label>
            <input type="number">
            <span>м3</span>
        </div>
        <div class="calcualtion-params__wrapper">
            <label>КИН</label>
            <input type="number">
            <span>д.е.</span>
        </div>
        <div class="calcualtion-params__wrapper">
            <label>НИЗ</label>
            <input type="number">
        </div>
        <div class="calcualtion-params__wrapper">
            <label>Деб.Ж</label>
            <input type="number">
            <span>м3/сут</span>
        </div>
        <button>Рассчитать</button>
    </div>
</template>

<script>
    export default {
        name: "ParamsComponent"
    }
</script>

<style scoped>

</style>