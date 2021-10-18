<style lang="scss">
@import "~@/assets/all.scss";
.banner {
  margin-top: 66px;
  @include pad {
    @media (max-width: 768px) {
      margin-top: 63px;
    }
  }
}
.sale-pic {
  img {
    margin: 0 auto;
  }
}
.section-video {
  // height: 650px;
  overflow: auto;
  max-width: 1140px;
  @include pad {
    @media (max-width: 768px) {
    }
  }
  .row {
    @include for-desk {
      @media (max-width: 991px) {
        flex-wrap: nowrap;
      }
    }
  }
  .player-container {
    // width: 1140px;

    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;

    @include for-desk {
      @media (max-width: 991px) {
        // width: calc(100% - 1px);
        flex-grow: 1;
        width: 0;
      }
    }
  }
  .player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
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
#topBtn {
  width: 34px;
  height: 34px;
  display: block;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 10;
  border: 1px solid #e7e7e7;
  outline: none;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  transition: 0.4s;
  .upIcon {
    position: absolute;
    color: #838080;
    top: 9px;
    left: 11px;
    font-size: 13px;
    &:hover {
      color: $primary;
    }
  }
}
</style>

<template>
  <header>
    <Navbar v-bind:parentSpanNumbers="spanNumbers"></Navbar>

    <div class="banner mb-5">
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
    <ProductCard :ifood="food" @sendSpanNumbers="getSpanNumbers"> </ProductCard>
    <Pagination @emitcurrentPage="getPage"></Pagination>
  </section>
  <section class="container section-video d-flex justify-content-center mb-5">
    <div class="player-container">
      <iframe
        class="player"
        src="https://www.youtube.com/embed/EuEguYzDlL0"
        title="YouTube video player"
        allowfullscreen="true"
      ></iframe>
    </div>
  </section>
  <section class="food-card mb-5">
    <div class="container section-title d-flex justify-content-center">
      <h1 class="title mb-4 fw-normal">美妝保養</h1>
    </div>
    <!-- //:food="food" 綁定傳入的props -->
    <ProductCard :ifood="food" @sendSpanNumbers="getSpanNumbers"> </ProductCard>
    <Pagination></Pagination>
  </section>
  <section class="product-link mb-5">
    <Flipcard :productlink="ProductPage"></Flipcard>
  </section>

  <CartPanel></CartPanel>
  <footer>
    <Footer></Footer>
  </footer>
  <button id="topBtn" title="Go to top" @click="toTop()" v-show="isScrollTop">
    <font-awesome-icon class="upIcon" :icon="['fas', 'chevron-up']" />
  </button>
</template>

<script>
const axios = require("axios");
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
// import Carousel from "@/components/Carousel.vue";
import ProductCard from "@/components/ProductCard.vue";
import Pagination from "@/components/Pagination.vue";
import Flipcard from "@/components/Flipcard.vue";
import Footer from "@/components/Footer.vue";
import Agile from "@/components/Agile.vue";
import CartPanel from "@/components/cartPanel.vue";

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
    CartPanel,
  },
  data() {
    return {
      msg: "1345",
      food: [
        {
          title: "酵素旅行包(20入/盒)",
          price: 1380,
          src: require("@/assets/img/food/food1-1.png"),
          inCart: 0,
          productId: 1,
        },
        {
          title: "圓圓母湯 (20瓶/箱)",
          price: 1560,
          src: require("@/assets/img/food/food2-1.png"),
          inCart: 0,
          productId: 2,
        },
        {
          title: "POPOLAの酵",
          price: 1550,
          src: require("@/assets/img/food/food3-1.png"),
          inCart: 0,
          productId: 3,
        },
        {
          title: "吶吶的桃花朵朵紅茶包",
          price: 168,
          src: require("@/assets/img/food/food4-1.png"),
          inCart: 0,
          productId: 4,
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
      showPanel: true,
      scrollTop: 0,
      isScrollTop: false,
      spanNumbers: 0,
      currentPage: 1,
      perPage: 4,
    };
  },
  methods: {
    scrollFunction() {
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;

      if (this.scrollTop > 300) {
        this.isScrollTop = true;
      } else {
        this.isScrollTop = false;
      }
    },
    toTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    filterItems() {
      let start = (this.currentPage - 1) * this.prePage;
      let end = this.currentPage * this.prePage;
      const resultItem = this.list.slice(start, end);
      return resultItem;
    },
    getPage(data1, data2) {
      // console.log(data1, data2);
      this.currentPage = data1;
      this.prePage = data2;
    },
    getSpanNumbers(value) {
      //console.log(value); // someValue
      this.spanNumbers = value;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollFunction, true);
    this.spanNumbers = parseInt(localStorage.getItem("cartNumbers")) || 0;

    axios
      .get("https://eva-final-project.herokuapp.com/products")
      .then((response) => {
        this.food = response.data;

        // this.showLoader = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
