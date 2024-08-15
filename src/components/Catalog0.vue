<template>
  <div class="card card-compact bg-card w-80 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body font-sans font-bold">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn bt-card">carrito</button>
      <button class="btn bt-card ">add carrito</button>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.bg-card {
  background-color: #f5f5f5;
  color: #1F1300;
}
.bt-card {
    background-color: #1F1300;
    color: #f8f8f8;
    border: #1F1300;
  }
</style>