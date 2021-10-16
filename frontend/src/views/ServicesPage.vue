<template>
  <div>
    <h2>Yo soy la Pagina de servicios</h2>
    <h3>Tendré dos componentes</h3>
    <ServiceCard />
    <TechnologiesWeUseCard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ServiceCard from "../components/ServiceCard.vue";
import TechnologiesWeUseCard from "../components/TechnologiesWeUseCard.vue";

export default defineComponent({
  name: "ServicesPage",
  components: {
    ServiceCard,
    TechnologiesWeUseCard,
  },
});
</script>

<style scoped lang="Scss">
</style>
