<template>
        <div class="flex justify-between items-center mb-4">
            <div>
              <button
                id="catalogo-button"
                class="custom-button text-white py-2 px-4 rounded selected-button"
                onclick="showCatalogo()"
              >
                Catálogo
              </button>
              <button
                id="sugeridos-button"
                class="custom-button text-white py-2 px-4 rounded"
                onclick="showSuggestedProducts()"
              >
                Sugeridos
              </button>
              <button
                id="favoritos-button"
                class="custom-button text-white py-2 px-4 rounded"
                onclick="showFavoritos()"
              >
                Favoritos
              </button>
            </div>
          </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>