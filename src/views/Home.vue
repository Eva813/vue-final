<style lang="scss">
.nav-container {
  margin: 0 auto;
}
.navbar-brand {
  width: 180px;
  min-height: 60px;
  background-color: FFFFFF;
}
.icon-group {
  &-item {
    font-size: 16px;
    margin: 0 10px;
  }

  .search-box {
    .input:after {
      display: block;
      content: "";
      border-bottom: solid 3px #019fb6;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
      transform-origin: right;
    }

    .search-box-input {
      display: block;
      &:placeholder-shown {
        opacity: 0;
        transition: opacity 270ms ease-in-out;
      }
    }
    &:hover .input::after {
      transform: scaleX(1);
    }
    &:hover .search-box-input:placeholder-shown {
      opacity: 1;
      font-style: italic;
    }
  }
}
.sale-pic {
  img {
    margin: 0 auto;
  }
}
.section-video {
  width: calc(100% - 1px);
  height: 650px;
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
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="nav-container container-fluid px-3">
        <a class="navbar-brand" href="#">
          <img src="@/assets/img/logo1.png" alt="" />
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >🐷 開鍋祭，開鍋囉~</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                所有商品
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">常溫飲食</a></li>
                <li>
                  <a class="dropdown-item dropend" href="#"
                    >美食生活<button
                      type="button"
                      class="
                        btn btn-secondary
                        dropdown-toggle dropdown-toggle-split
                      "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropright</span>
                    </button>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">美妝保健</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">POPOLA營養師專欄</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">會員福利</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">《防疫期間物流變更公告》</a>
            </li>
          </ul>
          <ul class="d-flex icon-group">
            <!-- 搜尋 -->
            <li class="icon-group-item">
              <div class="search-box d-flex">
                <div class="input">
                  <input
                    type="text"
                    class="search-box-input"
                    placeholder="search"
                  />
                </div>
                <a href="#" class="search-box-btn link-dark">
                  <font-awesome-icon :icon="['fas', 'search']" />
                </a>
              </div>
            </li>
            <li class="icon-group-item">
              <a href="#" class="link-dark"
                ><font-awesome-icon :icon="['fas', 'comments']"
              /></a>
            </li>
            <li class="icon-group-item">
              <a href="#" class="link-dark"
                ><font-awesome-icon :icon="['fas', 'user']"
              /></a>
            </li>
            <li class="icon-group-item">
              <a href="#" class="link-dark"
                ><font-awesome-icon :icon="['fas', 'shopping-cart']"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="banner mb-5">
      <Carousel></Carousel>
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
    <iframe
      class="player"
      src="https://www.youtube.com/embed/EuEguYzDlL0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
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
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Carousel from "@/components/Carousel.vue";
import ProductCard from "@/components/ProductCard.vue";
import Pagination from "@/components/Pagination.vue";
import Flipcard from "@/components/Flipcard";

export default {
  name: "Home",
  components: {
    Carousel,
    ProductCard,
    Pagination,
    Flipcard,
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
          subTitle: "Join us",
          img: require("@/assets/img/img-link/fbpic.png"),
          frontImg: require("@/assets/img/img-link/u-social.jpg"),
        },
        {
          title: "寵物商品",
          subTitle: "小寶貝的最愛",
          img: require("@/assets/img/img-link/petspic.png"),
          frontImg: require("@/assets/img/img-link/u-pets.jpg"),
        },
        {
          title: "美食佳餚",
          subTitle: "快速加熱",
          img: require("@/assets/img/img-link/foodpic.png"),
          frontImg: require("@/assets/img/img-link/u-food.jpg"),
        },
        {
          title: "美妝保養",
          subTitle: "好好愛自己",
          img: require("@/assets/img/img-link/beautypic.png"),
          frontImg: require("@/assets/img/img-link/u-beauty.jpg"),
        },
      ],
    };
  },
};
</script>
