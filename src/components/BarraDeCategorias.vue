<template>
    <div>
        <!-- Barra lateral de categorías -->
        <aside class="w-1/4 p-4 bg-white shadow rounded mr-4">
          <h2 class="text-xl font-semibold mb-4">Categorías</h2>
          <input
            type="text"
            placeholder="Buscar"
            class="p-2 w-full mb-4 border rounded"
          />
          <ul>
            <li class="mb-2"><a href="#" class="text-blue-600">Todo</a></li>
            <li class="mb-2">
              <a href="#" class="text-gray-700 hover:text-blue-600"
                >Cigarrillos</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-700 hover:text-blue-600"
                >Comestibles</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-700 hover:text-blue-600">Baterías</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-700 hover:text-blue-600"
                >Bombillas</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-700 hover:text-blue-600"
                >Encendedores</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-700 hover:text-blue-600">Salud</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-700 hover:text-blue-600">Hogar</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-700 hover:text-blue-600"
                >Snacks & Dulces</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-700 hover:text-blue-600"
                >Artículos de Limpieza</a
              >
            </li>
          </ul>
        </aside>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>