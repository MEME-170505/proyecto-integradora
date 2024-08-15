<template>
  <div class="custom-header p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <router-link to="/Mision-Y-Vision" class="btn btn-ghost"> <svg xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512">
          <path fill="#ffffff" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
          <!-- SVG y otros elementos -->
        </router-link>
        <img src="../img/stiker.png" alt="Logo" class="rounded-full" height="55px" width="55px" />
        <router-link to="/" class="btn btn-ghost">
          <h1 class="text-white text-2xl font-bold">ALTCoyote</h1>
        </router-link>
      </div>
      <div class="flex items-center space-x-4">
        <input type="text" placeholder="Buscar" class="p-2 rounded boton" />
        <router-link to="/catalog" class="btn btn-ghost"><i class="fas fa-th-list mr-2"></i>Catalogo</router-link>
        <router-link to="/Registrar" class="btn btn-ghost"><i class="fas fa-user mr-2"></i>Mi cuenta</router-link>
        
        <!-- Drawer toggle button -->
        <div class="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <label for="my-drawer-4" class="drawer-button btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" height="27" width="23" viewBox="0 0 576 512">
                <path fill="#ffffff"
                  d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>Carrito
            </label>
          </div>
          <div class="drawer-side">
            <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-4">
              <!-- Sidebar content -->
              <div class="hero bg-base-200">
                <div class="hero-content flex-col">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    class="max-w-full rounded-lg shadow-2xl" />
                  <div>
                    <h1 class="text-3xl font-bold">Box Office News!</h1>
                    <p class="py-4">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                      quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button class="btn btn-primary">Eliminar producto
                    </button>
                  </div>
                </div>
              </div>
              <li class="p-2"><router-link to="/checkout" class="boton btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512">
                  <path fill="#ffffff" d="M512 80c8.8 0 16 7.2 16 16l0 32L48 128l0-32c0-8.8 7.2-16 16-16l448 0zm16 144l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z"/></svg>
                  comprar ahora</router-link></li>
                <li class="p-2"><button class="boton btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512">
                  <path fill="#ffffff" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                  eliminar todo</button></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>

</script>

<style scoped>
.custom-header {
  background: linear-gradient(to right, #CC5803, #1F1300);
  color: white;
}
.drawer {
  z-index: 70;
}
.boton {
  background: #1F1300;
  border: #1F1300;
  color: white;
}
.menu .hero {
  margin-bottom: 16px;
}
</style>
