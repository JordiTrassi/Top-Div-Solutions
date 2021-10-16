<template>
  <div>
    <h2>Yo soy la Pagina de Portfolio</h2>
    <h3>Tendré un componente</h3>
    <ProyectCard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProyectCard from "../components/ProyectCard.vue";

export default defineComponent({
  name: "PortfolioPage",
  components: {
    ProyectCard,
  },
});
</script>

<style scoped lang="Scss">
</style>
