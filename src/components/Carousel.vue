<style>
</style>
<template>
  <!-- 透過ref來存取dom元素 -->
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
    ref="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/img/logo1.png" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="@/assets/img/logo1.png" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="@/assets/img/logo1.png" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import Carousel from "bootstrap/js/dist/carousel";
export default {
  data() {
    return {
      //宣告carousel
      carousel: {},
    };
  },
  // 在內部元件新增方法，讓外部元件可以呼叫他
  methods: {},
  mounted() {
    // 在元件載入之後才可以正確運作
    this.carousel = new Carousel(this.$refs.carousel);
  },
};
// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel)
</script>


