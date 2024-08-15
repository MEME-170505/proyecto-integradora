<template>
  <div class="flex flex-col items-center space-y-4">
    <div class="font-sans text-3xl letra">
      QUIÉNES SOMOS?
    </div>
    <div class="flex justify-center space-x-60">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1 bt">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512">
            <path fill="#ffffff" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
          </svg>
          Vision
        </div>
        <div
          tabindex="0"
          class="dropdown-content card card-compact FondoCard text-primary-content z-[1] w-64 p-2 shadow">
          <div class="card-body">
            <h3 class="card-title">Nuestra Vision!!</h3>
            <p>ofrecer productos de calidad y de alta calidad para nuestros compañeros estudiantes de UTT <3</p>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1 bt">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512">
            <path fill="#ffffff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
          </svg>
          Mision
        </div>
        <div
          tabindex="0"
          class="dropdown-content card card-compact FondoCard text-primary-content z-[1] w-64 p-2 shadow">
          <div class="card-body">
            <h5 class="card-title">Nuestra Mision!!</h5>
            <p>Llegar a tener un empredimiento con un pequeño negocio para la toma de experiencia propia a cada uno de los integrantes para el dia a dia de la vida laboral</P>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1 bt">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
            <path fill="#ffffff" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
          </svg>
          Valores
        </div>
        <div
          tabindex="0"
          class="dropdown-content card card-compact FondoCard text-primary-content z-[1] w-64 p-2 shadow">
          <div class="card-body">
            <h5 class="card-title">Nuestros Valores!!</h5>
            <P>Somos un grupo de personas emprendedoras que busca la mejora continua de la experiencia de entrega de productos a los usuarios.</P>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.letra {
  color: #f8f8f8;
}
.bt {
    color: white;
    background-color: #1F1300;
    border: #1F1300;
  }
.FondoCard {
  background-color: white;
}
</style>
