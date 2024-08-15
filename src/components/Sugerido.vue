<template>
    <div
            id="sugeridos"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 hidden"
          >
            <!-- Producto Sugerido -->
            <div
              class="bg-white shadow-md rounded-lg overflow-hidden product-card"
            >
              <img
                src="../img/pollo.jpeg"
                alt="Producto Sugerido 1"
                class="w-full h-48 object-cover"
              />
              <div class="p-4 flex-grow">
                <h3 class="text-xl font-semibold text-gray-800">Patos</h3>
                <p class="text-gray-600 mt-2">$50 Pesos</p>
              </div>
              <div class="p-4 flex justify-center items-center">
                <input
                  type="number"
                  id="quantity-patoss"
                  min="1"
                  value="1"
                  class="p-2 w-16 border rounded"
                />
                <button
                  class="custom-button text-white py-2 px-4 rounded hover:bg-blue-700"
                  onclick="addToCart('Patos', '$50 Pesos', 'catalogo/patos.jpg', document.getElementById('quantity-patoss').value)"
                >
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>

            <div
              class="bg-white shadow-md rounded-lg overflow-hidden product-card"
            >
              <img
                id="product-image-1"
                src="../img/Cosmo.jpeg"
                alt="Producto 1"
                class="w-full h-48 object-cover"
              />
              <div class="p-4 flex-grow">
                <h3 class="text-xl font-semibold text-gray-800">
                  Pin de cosmo
                </h3>
                <p class="text-gray-600 mt-2">$45 pesos</p>
              </div>
              <div class="p-4 flex justify-center items-center">
                <input
                  type="number"
                  id="quantity-coss"
                  min="1"
                  value="1"
                  class="p-2 w-16 border rounded"
                />
                <button
                  class="custom-button text-white py-2 px-4 rounded hover:bg-blue-700"
                  onclick="addToCart('Pin de cosmo', '$45 pesos', 'catalogo/cosmo.jpg', document.getElementById('quantity-coss').value)"
                >
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <div
              class="bg-white shadow-md rounded-lg overflow-hidden product-card"
            >
              <img
                id="product-image-1"
                src="../img/Tarde.jpeg"
                alt="Producto 1"
                class="w-full h-48 object-cover"
              />
              <div class="p-4 flex-grow">
                <h3 class="text-xl font-semibold text-gray-800">
                  Pin gato llegue tarde
                </h3>
                <p class="text-gray-600 mt-2">$39 pesos</p>
              </div>
              <div class="p-4 flex justify-center items-center">
                <input
                  type="number"
                  id="quantity-tars"
                  min="1"
                  value="1"
                  class="p-2 w-16 border rounded"
                />
                <button
                  class="custom-button text-white py-2 px-4 rounded hover:bg-blue-700"
                  onclick="addToCart('Pin gato llegue tarde', '$39 pesos', 'catalogo/tarde.jpg', document.getElementById('quantity-tars').value)"
                >
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <div
              class="bg-white shadow-md rounded-lg overflow-hidden product-card"
            >
              <img
                id="product-image-1"
                src="../img/StikersPerros.jpeg"
                alt="Producto 1"
                class="w-full h-48 object-cover"
              />
              <div class="p-4 flex-grow">
                <h3 class="text-xl font-semibold text-gray-800">
                  Pin perro coraje
                </h3>
                <p class="text-gray-600 mt-2">$39 Pesos</p>
              </div>
              <div class="p-4 flex justify-center items-center">
                <input
                  type="number"
                  id="quantity-coras"
                  min="1"
                  value="1"
                  class="p-2 w-16 border rounded"
                />
                <button
                  class="custom-button text-white py-2 px-4 rounded hover:bg-blue-700"
                  onclick="addToCart('Pin perro coraje', '$39 Pesos', 'catalogo/coraje.jpg', document.getElementById('quantity-coras').value)"
                >
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <div
              class="bg-white shadow-md rounded-lg overflow-hidden product-card"
            >
              <img
                id="product-image-1"
                src="../img/StikersCapi.jpeg"
                alt="Producto 1"
                class="w-full h-48 object-cover"
              />
              <div class="p-4 flex-grow">
                <h3 class="text-xl font-semibold text-gray-800">
                  Pin estado de animo
                </h3>
                <p class="text-gray-600 mt-2">$79 pesos</p>
              </div>
              <div class="p-4 flex justify-center items-center">
                <input
                  type="number"
                  id="quantity-hums"
                  min="1"
                  value="1"
                  class="p-2 w-16 border rounded"
                />
                <button
                  class="custom-button text-white py-2 px-4 rounded hover:bg-blue-700"
                  onclick="addToCart('Pin estado de animo', '$79 pesos', 'catalogo/humor.jpg', document.getElementById('quantity-hums').value)"
                >
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <div
              class="bg-white shadow-md rounded-lg overflow-hidden product-card"
            >
              <img
                id="product-image-1"
                src="../img/PlacaFBI.jpeg"
                alt="Producto 1"
                class="w-full h-48 object-cover"
              />
              <div class="p-4 flex-grow">
                <h3 class="text-xl font-semibold text-gray-800">Pin del fbi</h3>
                <p class="text-gray-600 mt-2">$55 pesos</p>
              </div>
              <div class="p-4 flex justify-center items-center">
                <input
                  type="number"
                  id="quantity-fbis"
                  min="1"
                  value="1"
                  class="p-2 w-16 border rounded"
                />
                <button
                  class="custom-button text-white py-2 px-4 rounded hover:bg-blue-700"
                  onclick="addToCart('Pin del fbi', '$55 pesos', 'catalogo/fbi.jpg', document.getElementById('quantity-fbis').value)"
                >
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <div
              class="bg-white shadow-md rounded-lg overflow-hidden product-card"
            >
              <img
                id="product-image-1"
                src="../img/CollarAxo.jpeg"
                alt="Producto 1"
                class="w-full h-48 object-cover"
              />
              <div class="p-4 flex-grow">
                <h3 class="text-xl font-semibold text-gray-800">
                  Pin radiactivo
                </h3>
                <p class="text-gray-600 mt-2">$39 pesos</p>
              </div>
              <div class="p-4 flex justify-center items-center">
                <input
                  type="number"
                  id="quantity-radiactivoss"
                  min="1"
                  value="1"
                  class="p-2 w-16 border rounded"
                />
                <button
                  class="custom-button text-white py-2 px-4 rounded hover:bg-blue-700"
                  onclick="addToCart('Pin radiactivo', '$39 pesos', 'catalogo/radiactivo.jpg', document.getElementById('quantity-radiactivoss').value)"
                >
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <div
              class="bg-white shadow-md rounded-lg overflow-hidden product-card"
            >
              <img
                id="product-image-1"
                src="../img/PinPhotoshop.jpeg"
                alt="Producto 1"
                class="w-full h-48 object-cover"
              />
              <div class="p-4 flex-grow">
                <h3 class="text-xl font-semibold text-gray-800">
                  Pin de Photoshop
                </h3>
                <p class="text-gray-600 mt-2">$49 pesos</p>
              </div>
              <div class="p-4 flex justify-center items-center">
                <input
                  type="number"
                  id="quantity-photoss"
                  min="1"
                  value="1"
                  class="p-2 w-16 border rounded"
                />
                <button
                  class="custom-button text-white py-2 px-4 rounded hover:bg-blue-700"
                  onclick="addToCart('Pin de Photoshop', '$49 pesos', 'catalogo/photo.jpg', document.getElementById('quantity-photoss').value)"
                >
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>