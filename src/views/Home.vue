<style lang="scss">
.sale-pic {
  img {
    margin: 0 auto;
  }
}
.section-video {
  width: calc(100% - 1px);

  height: 650px;
  .player-container {
    max-width: 1140px;
  }
  .player {
    width: 100%;
    height: 100%;
  }
}
.title {
  color: #666;
}
.section-title {
  font-size: 22px;
  position: relative;
  margin-bottom: 28px;
  &:after {
    position: absolute;
    display: block;
    content: "";
    height: 5px;
    width: 25px;
    top: 88%;

    background: #faaf48;
  }
}
</style>

<template>
  <header>
    <Navbar></Navbar>

    <!-- <Carousel></Carousel> -->

    <div class="banner mb-5">
      <!-- <Swiper></Swiper> -->
      <Agile></Agile>
    </div>
  </header>

  <div class="container sale-pic mb-5">
    <a href="#" target="_blank">
      <img src="@/assets/img/sale-pic.png" alt="刷卡優惠活動" />
    </a>
  </div>
  <!-- <div class="text-primary">{{ msg }}</div> -->

  <section class="food-card mb-5">
    <div class="container section-title d-flex justify-content-center">
      <h1 class="title mb-4 fw-normal">美食生活</h1>
    </div>
    <!-- //:food="food" 綁定傳入的props -->
    <ProductCard :ifood="food"> </ProductCard>
    <Pagination></Pagination>
  </section>
  <section class="container section-video d-flex justify-content-center mb-5">
    <div class="player-container">
      <iframe
        class="player"
        src="https://www.youtube.com/embed/EuEguYzDlL0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
  <section class="food-card mb-5">
    <div class="container section-title d-flex justify-content-center">
      <h1 class="title mb-4 fw-normal">美裝保養</h1>
    </div>
    <!-- //:food="food" 綁定傳入的props -->
    <ProductCard :ifood="food"> </ProductCard>
    <Pagination></Pagination>
  </section>
  <section class="product-link mb-5">
    <Flipcard :productlink="ProductPage"></Flipcard>
  </section>

  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
// import Carousel from "@/components/Carousel.vue";
import ProductCard from "@/components/ProductCard.vue";
import Pagination from "@/components/Pagination.vue";
import Flipcard from "@/components/Flipcard.vue";
import Footer from "@/components/Footer.vue";
import Agile from "@/components/Agile.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    //Carousel,
    ProductCard,
    Pagination,
    Flipcard,
    Footer,
    Agile,
  },
  data() {
    return {
      msg: "1345",
      food: [
        {
          title: "酵素旅行包(20入/盒)",
          price: 1380,
          src: require("@/assets/img/food/food1-1.png"),
        },
        {
          title: "圓圓母湯 (20瓶/箱)",
          price: 1560,
          src: require("@/assets/img/food/food2-1.png"),
        },
        {
          title: "POPOLAの酵",
          price: 1550,
          src: require("@/assets/img/food/food3-1.png"),
        },
        {
          title: "吶吶的桃花朵朵紅茶包",
          price: 168,
          src: require("@/assets/img/food/food4-1.png"),
        },
        // {
        //   title: "酵素旅行包(5入/盒)",
        //   price: 1688,
        //   src: require("@/assets/img/food/food1-2.png"),
        // },
      ],
      ProductPage: [
        {
          title: "FB 粉絲團",
          subTitle: "最新消息都在這裡",
          img: require("@/assets/img/img-link/fbpic.png"),
          frontImg: require("@/assets/img/img-link/u-social.jpg"),
        },
        {
          title: "寵物商品",
          subTitle: "寵愛毛小孩無極限",
          img: require("@/assets/img/img-link/petspic.png"),
          frontImg: require("@/assets/img/img-link/u-pets.jpg"),
        },
        {
          title: "美食佳餚",
          subTitle: "甜鹹都有喔～",
          img: require("@/assets/img/img-link/foodpic.png"),
          frontImg: require("@/assets/img/img-link/u-food2.jpg"),
        },
        {
          title: "美妝保養",
          subTitle: "再忙也別忘了好好愛自己",
          img: require("@/assets/img/img-link/beautypic.png"),
          frontImg: require("@/assets/img/img-link/u-beauty.jpg"),
        },
      ],
    };
  },
};
</script>
