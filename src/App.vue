<template>
  <div id="app" class="content">
    <oil-calculation></oil-calculation>
  </div>
</template>

<script>
import OilCalculation from "@/components/OilCalculation";

export default {
  name: 'App',
  components: {
    OilCalculation
  }
}
</script>

<style lang="scss">
    @import "styles/style.scss";
</style>


