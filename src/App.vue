<template>
  <div id="app">
    <BarraDeNavegacao  />

    <router-view />
  </div>
</template>
<script>
import BarraDeNavegacao from "@/components/BarraDeNavegacao";

export default {
  components: {
    BarraDeNavegacao,

  },
};
</script>
