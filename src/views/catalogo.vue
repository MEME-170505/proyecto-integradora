<template>
  <!-- Contenido principal -->
  <div class="container mx-auto p-4 flex">
    <!-- Barra lateral de categorías -->
    <aside class="w-1/4 p-4 bg-white
          shadow rounded mr-4">
      <h2 class="text-xl font-semibold mb-4">Categorías</h2>
      <input type="text" placeholder="Buscar" class="p-2 w-full mb-4 border rounded">
      <ul>
        <li class="mb-2"><a href="#" class="text-blue-600">Todo</a></li>
        <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-600">Cigarrillos</a></li>
        <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-600">Comestibles</a></li>
        <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-600">Baterías</a></li>
        <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-600">Bombillas</a></li>
        <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-600">Encendedores</a></li>
        <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-600">Salud</a></li>
        <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-600">Hogar</a></li>
        <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-600">Snacks & Dulces</a></li>
        <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-600">Artículos de Limpieza</a></li>
      </ul>
    </aside>
    <!-- Lista de productos -->
    <main class="w-3/4">
      <div class="flex justify-between items-center mb-4 ">
        <button @click="showCatalogo" id="catalogo-button" :class="{'btn custom-button': selectedButton === 'catalogo-button'}">Catálogo</button>
      <button @click="showSuggestedProducts" id="sugeridos-button" :class="{'btn custom-button': selectedButton === 'sugeridos-button'}">Sugeridos</button>
      <button @click="showFavoritos" id="favoritos-button" :class="{'btn custom-button': selectedButton === 'favoritos-button'}">Favoritos</button>
      </div>

      <!--- Catálogo -->
      <div v-show="activeSection === 'catalogo'" id="catalogo">
      <div  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Producto -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden product-card">
          <img id="product-image-1" src="../img/fbi.jpg" alt="Producto 1" class="w-full h-48 object-cover">
          <div class="p-4 flex-grow">
            <h3 class="text-xl font-semibold text-gray-800">Pin del fbi</h3>
            <p class="text-gray-600 mt-2">$55 pesos</p>
          </div>
          <div class="p-4 flex justify-center  items-center space-x-3">
            <input type="number" id="quantity-fbi" min="1" value="1" class="p-2 w-16 border rounded">
            <button class="custom-button text-white py-2 px-4 rounded hover:bg-blue-700"
              onclick="addToCart('Pin del fbi', '$55 pesos', '../img/fbi.jpg', document.getElementById('quantity-fbi').value)">
             <svg xmlns="http://www.w3.org/2000/svg" height="27" width="23" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
      <!--- Sugeridos -->
     
      <div v-show="activeSection === 'sugeridos'" id="sugeridos">
        <div  class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
        <!-- Producto Sugerido -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden product-card">
          <img src="../img/patos.jpg" alt="Producto Sugerido 1" class="w-full h-48 object-cover">
          <div class="p-4 flex-grow">
            <h3 class="text-xl font-semibold text-gray-800">Patos</h3>
            <p class="text-gray-600 mt-2">$50 Pesos</p>
          </div>
          <div class="p-4 flex justify-center items-center space-x-3">
            <input type="number" id="quantity-patoss" min="1" value="1" class="p-2 w-16 border rounded">
            <button class="custom-button text-white py-2 px-4 rounded hover:bg-blue-700"
              onclick="addToCart('Patos', '$50 Pesos', '../img/patos.jpg', document.getElementById('quantity-patoss').value)">
              <svg xmlns="http://www.w3.org/2000/svg" height="27" width="23" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
      <!--- Favoritos -->
      
      <div   v-show="activeSection === 'favoritos'" id="favoritos" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Producto Favorito -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden product-card">
          <img id="product-image-1" src="../img/paraguas.jpg" alt="Producto 1" class="w-full h-48 object-cover">
          <div class="p-4 flex-grow">
            <h3 class="text-xl font-semibold text-gray-800">Sombrero de Paraguas </h3>
            <p class="text-gray-600 mt-2">$69 pesos</p>
          </div>
          <div class="p-4 flex justify-center items-center space-x-3">
            <input type="number" id="quantity-paraguass" min="1" value="1" class="p-2 w-16 border rounded">
            <button class="custom-button text-white py-2 px-4 rounded hover:bg-blue-700"
              onclick="addToCart('Sombrero de Paraguas', '$69 pesos', '../img/paraguas.jpg', document.getElementById('quantity-paraguass').value)">
              <svg xmlns="http://www.w3.org/2000/svg" height="27" width="23" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- Barra lateral del carrito -->
  <aside id="cart-sidebar" class="sidebar">
    <div class="sidebar-header">
      <h2>Carrito de Compras</h2>
      <span class="sidebar-close" onclick="toggleCart()">&times;</span>
    </div>
    <div class="cart-content">
      <!-- Los elementos del carrito se añadirán aquí dinámicamente -->
    </div>
    <button class="sidebar-button" onclick="checkout()">Comprar</button>
    <button class="clear-cart-button" onclick="clearCart()"><i class="fas fa-trash"></i></button>
  </aside>

  <!-- Pie de página -->
 
</template>
<style scoped>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #CC5803, #1F1300);
}
.p-2 {
  background-color: #fff;
  color: black;
}


.custom-button {
  background-color: #CC5803;
  border: #1F1300;
  color: white;
}

.custom-button:hover {
  background-color: #1F1300;
}

.selected-button {
  background-color: #f5efe4;
  color: white;
}

.product-card {
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: ghostwhite;
  color: black;
  font: 1em sans-serif;
}

.product-card:hover {
  transform: scale(1.05);
}

.hidden {
  display: none;
}

.hero {
  text-align: center;
  padding: 100px 20px;
}

.hero h2 {
  font-size: 3em;
}

.hero p {
  font-size: 1.2em;
  margin: 20px 0;
}

.carousel-item img {
  max-width: 100%;
  height: auto;
  margin: auto;
}

.navbar {
  background: rgba(0, 0, 0, 0.5);
}

.navbar-nav .nav-item .nav-link {
  color: #1F1300 !important;
  font-weight: bold;
}

.footer {
  background-color: rgb(30, 30, 30);
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
}

.footer .nav-link {
  color: #007bff;
}

/* Sidebar styling */
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-header h2 {
  margin: 0;
}

.sidebar-close {
  cursor: pointer;
  font-size: 1.5em;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.cart-item img {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.cart-item p {
  margin: 0;
}

.cart-item button {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #CC5803;
}

.sidebar-button {
  background-color: #CC5803;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: calc(100% - 40px);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-button:hover {
  background-color: #fbfbfb;
}

.clear-cart-button {
  background: transparent;
  border: none;
  color: #CC5803;
  font-size: 1.5em;
  margin-left: 10px;
  cursor: pointer;
}
</style>
<script>
export default {
  data() {
    return {
      cartItems: [],
      activeSection: 'catalogo',
      selectedButton: 'catalogo-button',
      isCartOpen: false,
      removeQuantities: []
    };
  },
  methods: {
    showSuggestedProducts() {
      this.activeSection = 'sugeridos';
      this.selectedButton = 'sugeridos-button';
    },
    showCatalogo() {
      this.activeSection = 'catalogo';
      this.selectedButton = 'catalogo-button';
    },
    showFavoritos() {
      this.activeSection = 'favoritos';
      this.selectedButton = 'favoritos-button';
    },
    changeImageOnHover(element, newImageSrc) {
      const originalImageSrc = element.src;
      element.onmouseover = () => element.src = newImageSrc;
      element.onmouseout = () => element.src = originalImageSrc;
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    addToCart(productName, productPrice, productImage, quantity) {
      this.cartItems.push({ name: productName, price: productPrice, image: productImage, quantity });
      this.removeQuantities.push(1);
    },
    updateCartSidebar() {
      // El contenido del carrito se actualiza automáticamente en Vue
    },
    removeFromCart(itemIndex) {
      const item = this.cartItems[itemIndex];
      const quantityToRemove = this.removeQuantities[itemIndex];

      if (item.quantity > quantityToRemove) {
        this.cartItems[itemIndex].quantity -= quantityToRemove;
      } else {
        this.cartItems.splice(itemIndex, 1);
        this.removeQuantities.splice(itemIndex, 1);
      }
    },
    checkout() {
      alert('Redirigiendo a la página de pago...');
    },
    clearCart() {
      this.cartItems = [];
      this.removeQuantities = [];
    }
  }
};
</script>