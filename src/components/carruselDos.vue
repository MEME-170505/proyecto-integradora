<template>
  <div class="font-sans flex justify-center text-3xl letra">
    Favoritos
  </div>
  <div class="carousel-container relative flex flex-col md:flex-row items-center justify-center">
    <div class="carousel carousel-center bg-fondo max-w-7xl space-x-4 p-3">
      <!-- Carta uno-->
      <div class="carousel-item w-48">
        <div class="card card-compact bg-base-100 max-w-72">
          <figure>
            <img src="../img/Pou.jpeg" alt="pou" class="w-full h-auto max-h-52 object-cover" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Pou</h2>
            <p>ideal para un apoyo emocional</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Ver más</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Carta Dos -->
      <div class="carousel-item w-48">
        <div class="card card-compact bg-base-100 max-w-72">
          <figure>
            <img src="../img/PlumaDigitalNe.jpeg" alt="PlumaDigital" class="w-full h-auto max-h-52 object-cover" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Ver más</button>
            </div>
          </div>
        </div>
      </div>
      <!--Carta Tres-->
      <div class="carousel-item w-48">
        <div class="card card-compact bg-base-100 max-w-72">
          <figure>
            <img src="../img/BarraHerramientasPohotoshop.jpeg" alt="Shoes" class="w-full h-auto max-h-52 object-cover" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Ver más</button>
            </div>
          </div>
        </div>
      </div>
      <!--Carta Cuatro-->
      <div class="carousel-item w-48">
        <div class="card card-compact bg-base-100 max-w-72">
          <figure>
            <img src="../img/HachaGOW4.jpeg" alt="Shoes" class="w-full h-auto max-h-52 object-cover" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Ver más</button>
            </div>
          </div>
        </div>
      </div>
      <!--Carta Cinco-->
      <div class="carousel-item w-48">
        <div class="card card-compact bg-base-100 max-w-72">
          <figure>
            <img src="../img/MartilloGOW4.jpeg" alt="Shoes" class="w-full h-auto max-h-52 object-cover" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="btn btn-square btn-outline bg-gradient-to-l hover:bg-gradient-to-r from-color-3 to-color-5 hover:text-[#000000] transition-colors duration-300 mt-4 md:mt-0 md:ml-4 w-48 flex flex-col items-center"
      style="border-color:transparent;">
      <h3 class="text-wrap">Ver más</h3>
      <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
    </button>
  </div>
</template>

<style scoped>
.card {
  background-color: ghostwhite;
  color: black;
  font: 1em sans-serif;
}
.btn {
  background-color: #1F1300;
  color: white;
  font: 1em sans-serif;
  border: #1F1300;
}
.letra {
  color: #f8f8f8;
}
</style>
