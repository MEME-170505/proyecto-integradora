<template>
    <div class="flex justify-center">
      <img src="../img/Banner coyote.png" alt="coyote" class="w-1/2 h-auto">
    </div>
    <div class="flex justify-center font-sans text-4xl letra">
        CUIDADO CON EL COYOTE
    </div><br><br>
    <div class="flex justify-center font-sans text-2xl letra">
        Tu aventura comiensa aqui
    </div><br>
    <div>
        <QuienesSomos/>
    </div>
    <div class="p-64">
        <QueOfresemos/>
    </div>
  </template>  

<script setup lang="ts">
    import QuienesSomos from '../components/QuienesSomos.vue'
    import QueOfresemos from '../components/QueOfresemos.vue';
</script>

<style scoped>
.letra {
    color: white;
}
</style>