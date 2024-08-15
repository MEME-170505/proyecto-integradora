<template>
    <section class="categories-section">
      <h3>CATEGORÍAS</h3>
      <div class="carousel-container">
        <button class="carousel-btn prev" @click="moveCarousel(-1)">
          &#10094;
        </button>
        <div class="carousel">
          <a
            v-for="(category, index) in categories"
            :key="index"
            :href="category.link"
            class="category-item"
          >
            <img :src="category.image" :alt="category.alt" />
            <p>{{ category.price }}</p>
            <h4>{{ category.title }}</h4>
          </a>
        </div>
        <button class="carousel-btn next" @click="moveCarousel(1)">
          &#10095;
        </button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        categories: [
          {
            link: "categoria.1.html",
            image: "https://resources.sears.com.mx/medios-plazavip/mkt/6452c8b5a94f9_ys-0001-02-3-jpg.jpg?scale=500&qlty=75",
            alt: "Accesorios para la cabeza",
            price: "Desde MXN$60",
            title: "Accesorios para la cabeza",
          },
          {
            link: "2-producto.html",
            image: "https://m.media-amazon.com/images/I/617n+1lYB1L.AC_UF894,1000_QL80.jpg",
            alt: "Stickers",
            price: "Desde MXN$5",
            title: "Stickers",
          },
          {
            link: "3-producto.html",
            image: "https://http2.mlstatic.com/D_NQ_NP_688329-MLM72682782736_112023-O.webp",
            alt: "Estuches y Organizadores",
            price: "Desde MXN$49",
            title: "Estuches",
          },
          {
            link: "4-producto.html",
            image: "https://http2.mlstatic.com/D_NQ_NP_640287-MLM72999771997_112023-O.webp",
            alt: "Joyería",
            price: "Desde MXN$39",
            title: "Joyería",
          },
          {
            link: "5-producto.html",
            image: "https://m.media-amazon.com/images/I/41MaHwewSeL.AC.jpg",
            alt: "Llaveros",
            price: "Desde MXN$90",
            title: "Llaveros",
          },
          {
            link: "6-producto.html",
            image: "https://img.ltwebstatic.com/images3_pi/2023/03/20/1679308168cbc2b0f8b35d61feb431a200e51d583c_thumbnail_720x.jpg",
            alt: "Plumas",
            price: "Desde MXN$5",
            title: "Plumas",
          },
          {
            link: "7-producto.html",
            image: "https://i.ebayimg.com/images/g/GVkAAOSwshtknNxr/s-l1200.jpg",
            alt: "Pines",
            price: "Desde MXN$39",
            title: "Pines",
          },
          {
            link: "8-producto.html",
            image: "https://m.media-amazon.com/images/I/31qdZIb7MsL.AC.jpg",
            alt: "Ropa y Accesorios",
            price: "Desde MXN$49",
            title: "Ropa y Accesorios",
          },
          {
            link: "9-producto.html",
            image: "https://m.media-amazon.com/images/I/513r+AGl3ML.jpg",
            alt: "Artículos Decorativos",
            price: "Desde MXN$45",
            title: "Artículos Decorativos",
          },
        ],
      };
    },
    methods: {
      moveCarousel(direction) {
        const carousel = this.$el.querySelector(".carousel");
        const items = this.$el.querySelectorAll(".category-item");
        const itemWidth = items[0].clientWidth + 20;
        const visibleItems = Math.floor(
          carousel.parentElement.clientWidth / itemWidth
        );
  
        this.currentIndex += direction;
  
        if (this.currentIndex < 0) {
          this.currentIndex = 0;
        } else if (this.currentIndex > items.length - visibleItems) {
          this.currentIndex = items.length - visibleItems;
        }
  
        carousel.style.transform = `translateX(-${
          this.currentIndex * itemWidth
        }px)`;
      },
    },
  };
  </script>
  
  <style scoped>
  
  html, body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          height: 100%;
          background-color: #f4f4f4;
    }
  
  .categories-section {
    text-align: center;
    padding: 20px;
  }
  
  .categories-section h3 {
    display: inline-block;
    padding: 10px;
    border: 2px solid #ff8800;
    border-radius: 0px;
    color: #ff8800;
  }
  
  .carousel-container {
    position: relative;
    max-width: 1200px;
    margin: 20px auto;
    overflow: hidden;
  }
  
  .carousel {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .category-item {
    min-width: 110px;
    margin: 10px;
    background-color: #ffffff;
    border-radius: 100px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 10px;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease;
  }
  
  .category-item:hover {
    transform: scale(1.05);
  }
  
  .category-item img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .category-item p {
    color: #ff8800;
    font-weight: bold;
  }
  
  .category-item p {
    color: #ff8800;
    font-weight: bold;
    word-wrap: break-word;
    margin: 0;
    padding: 0 5px;
    font-size: 18px;
  }
  
  .category-item h4 {
    word-wrap: break-word;
    margin: 0;
    padding: 0 5px;
    font-size: 15px;
  }
  
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
  }
  
  .carousel-btn.prev {
    left: 10px;
  }
  
  .carousel-btn.next {
    right: 10px;
  }
  
  .carousel-btn:hover {
    background-color: rgba(224, 69, 7, 0.86);
  }
  </style>