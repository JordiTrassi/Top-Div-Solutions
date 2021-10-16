<template>
  <div>
    <h2>Yo soy la Pagina de presentación del Equipo</h2>
    <h3>Tendré un componente</h3>
    <TeamMemberCard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TeamMemberCard from "../components/TeamMemberCard.vue";

export default defineComponent({
  name: "TeamPage",
  components: {
    TeamMemberCard,
  },
});
</script>

<style scoped lang="Scss">
</style>
