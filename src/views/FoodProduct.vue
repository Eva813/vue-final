
<style lang="scss" scoped>
@import "~@/assets/all.scss";
//左側圖片
.thumbnail-section {
  img {
    height: 92px;
    margin: 10px 0;
    cursor: pointer;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
}
.active > img {
  opacity: 1;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}

.img-container {
  padding: 10px;
  img {
    height: 415px;
  }
}

///右側產品
.product-info {
  color: #333333;
  padding: 0 15px 20px 20px;
  width: 435px;
  .product-title {
    font-size: 28px;
    padding-bottom: 20px;
  }
  .promotion-text {
    padding: 20px 0;
  }
  .promotion-text-tag {
    border-left-width: 3px;
    border-left-style: solid;
    border-left-color: $primary;
    padding: 0 8px;
    margin: 0;
    font-size: 14px;
    text-align: left;
    line-height: 25px;
    max-width: 400px;
  }
  .price {
    font-size: 20px;
  }
  .action-title {
    font-size: 13px;
    text-transform: capitalize;
    color: #aaa;
    margin-bottom: 0;
  }
  .counter-form {
    display: table-cell;
    margin-bottom: 20px;
    input {
      border: 1px solid #ccc;
      line-height: 24px;
      width: 100%;
      border-left: none;
      border-right: none;
    }
    input[type="text"] {
      padding: 0px;
    }
    button {
      border: 1px solid #ccc;
    }

    .input-group-btn {
      width: 34px;
    }
    .btn {
      background-color: transparent;
      border: 1px solid #ccc; /* Remove borders */
      color: #000; /* White text */
      padding: 6px 12px; /* Some padding */
      line-height: 24px;
      font-size: 14px;
      cursor: pointer;
      &:hover .btn-icon {
        color: darken($primary, 20%);
      }
    }
  }
  .btn-add-to-cart {
    width: 100%;
    margin-bottom: 10px;
    padding: 6px 12px;
    background-color: $primary;
    color: #fff;
    border-radius: 3px;
    border: 1px solid $primary;
    &:hover {
      background-color: #fff;
      color: $primary;
    }
  }
}
///右側產品-2
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
  border-radius: 3px 0 0 3px;
  margin-right: -1px;
  border-right: none;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
  border-radius: 0px 3px 3px 0px;
  margin-left: -2px;
}
.btn-active {
  .btn-icon {
    color: darken($primary, 20%);
  }
}
///願望清單按鈕
.wishList-btn {
  // fireworks
  $fireworks--width: 3px;
  $fireworks--height: 3px;
  $fireworks--border: $fireworks--width/2;

  // button styles
  .button--secondary,
  .button--secondary:visited {
    font-family: "Open Sans", sans-serif;
    font-size: 13px;
    cursor: pointer;
    display: inline-block;
    min-width: 64px;
    line-height: 15px;
    outline: none;
    text-align: center;
    transition: background 0.1s linear;
    font-weight: 400;
    color: $primary;
    background: #fff;

    padding: 15px 15px;
    transition-property: border;
    transition-timing-function: ease-in-out;
    transition-duration: 0.15s;
    min-width: 385px;
  }

  .icon-with-text {
    display: inline-flex;
    align-items: flex-start;
  }

  .icon-with-text__icon {
    flex-shrink: 0;
    margin-right: 5px;
    margin-top: -1px;
  }
  .icon-with-text__text {
    color: #333;
    font-size: 15px;
    &:hover {
      color: $primary;
    }
  }
  .icon-svg--color-silver {
    fill: #333;
    color: #333;
  }

  .icon-svg--color-blue {
    fill: $primary;
    color: $primary;
  }

  .icon-svg {
    display: inline-block;
    vertical-align: middle;
    height: 16px;
    width: 16px;
  }

  // position the active state heart
  .heart-full {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }

  // firework effect styles
  .btn__effect {
    display: inline-block;
    position: relative;
  }
  .effect-group {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(25deg);
    .effect {
      display: block;
      position: absolute;
      top: 38%;
      left: 50%;
      width: 20px;
      transform-origin: 0px 2px;
      &:nth-child(2) {
        transform: rotate(72deg);
      }
      &:nth-child(3) {
        transform: rotate(72 * 2deg);
      }
      &:nth-child(4) {
        transform: rotate(72 * 3deg);
      }
      &:nth-child(5) {
        transform: rotate(72 * 4deg);
      }
      &:before {
        content: "";
        display: block;
        position: absolute;
        right: 0;
        border-radius: $fireworks--border;
        height: $fireworks--height;
        background: #0090e3;
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 10px;
        right: 10%;
        border-radius: 50%;
        width: $fireworks--width;
        height: $fireworks--height;
        background: #ff6600;
        transform: scale(0, 0);
      }
    }
  }

  // TRIGGER ANIMATIONS
  // Generic
  .active {
    .heart-stroke {
      opacity: 0;
    }
    .heart-full {
      opacity: 1;
    }
    .icon-svg {
      animation: bounceIn 0.5s linear;
    }
    .effect:before {
      animation: fireworkLine 0.5s linear 0.1s;
    }
    .effect:after {
      animation: fireworkPoint 0.5s linear 0.1s;
    }
  }

  // Variation Two
  .button--secondary:not(.active):hover {
    .heart-stroke {
      animation: pulseBlue 1s ease-out infinite;
    }
  }

  // ANIMATIONS

  // subtle heart pulse on hover (grey)
  @keyframes pulse {
    0% {
      opacity: 1;
      transform-origin: center center;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.15);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  // subtle heart pulse on hover (grey to blue)
  @keyframes pulseBlue {
    0% {
      transform-origin: center center;
      transform: scale(1);
      fill: #ccc;
    }
    50% {
      transform: scale(1.15);
      fill: $primary;
    }
    100% {
      transform: scale(1);
      fill: #ccc;
    }
  }

  // fireworks animations
  @keyframes fireworkLine {
    0% {
      right: 20%;
      transform: scale(0, 0);
    }
    25% {
      right: 20%;
      width: 6px;
      transform: scale(1, 1);
    }
    35% {
      right: 0;
      width: 35%;
    }
    70% {
      right: 0;
      width: 4px;
      transform: scale(1, 1);
    }
    100% {
      right: 0;
      transform: scale(0, 0);
    }
  }
  @keyframes fireworkPoint {
    30% {
      transform: scale(0, 0);
    }
    60% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(0, 0);
    }
  }
}
///tab區域
.tab-section {
  .nav-item {
    padding: 13px 5px 0 5px;
    // &:after {
    //   display: block;
    //   content: "";
    //   border-bottom: 3px solid $primary;
    //   margin-top: 13px;
    // }
  }
  .tab-btn {
    font-size: 18px;
    color: #888;
    letter-spacing: 1px;
    line-height: 55px;
    &:focus {
      border-bottom: 3px solid $primary;
      color: #333;
    }
  }

  span {
    width: 400px;
  }
  .tab-section-title {
    position: relative;
    margin-top: 40px;
    margin-bottom: 35px;
    &:after {
      position: absolute;
      display: block;
      content: "";
      height: 4px;
      width: 30px;
      top: 88%;

      background: $primary;
    }
    .tab-intro-title {
      color: #333;
      font-size: 22px;
    }
  }
}
</style>

<template>
  <header>
    <Navbar></Navbar>

    <Breadcrumb></Breadcrumb>
  </header>
  <div class="container mb-5">
    <div class="row justify-content-center pt-3">
      <div class="col-md-6">
        <div class="product d-flex justify-content-end">
          <div class="thumbnail-section">
            <div
              v-for="(product, index) in productImg"
              :key="product.id"
              @click="changeImg(index)"
              :class="[
                'product-small-img',
                activeImage == index ? 'active' : '',
              ]"
            >
              <!-- //放入index作為取得的序號 -->
              <img :src="product.img" alt="productImg" />
            </div>
          </div>
          <div class="img-container">
            <img :src="currentImage" alt="" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="product-info">
          <h1 class="product-title">七分卡-番茄紅燒牛肉湯麵</h1>
          <div class="promotion-text">
            <p class="promotion-text-tag">
              [會員限定] 全店，POPOLA會員 無限次數 全館冷凍滿3600元 免運
            </p>
          </div>
          <div class="price-box">
            <p class="price fw-bold">NT$158</p>
          </div>
          <!-- RATING - Form -->
          <!-- <div class="rating-box">
            
<form class="rating-form" action="#" method="post" name="rating-movie">
            
            stars</div> -->
          <span class="action-title">數量</span>
          <div class="counter-form d-flex">
            <span class="input-group-btn">
              <button type="button" class="btn">
                <font-awesome-icon class="btn-icon" :icon="['fas', 'minus']" />
              </button>
            </span>
            <input type="text" />
            <span class="input-group-btn">
              <button type="button" class="btn">
                <font-awesome-icon class="btn-icon" :icon="['fas', 'plus']" />
              </button>
            </span>
          </div>

          <div class="button">
            <button class="btn-add-to-cart" type="submit">加入購物車</button>
            <div class="wishList-btn">
              <a
                class=""
                v-bind:class="['button--secondary', { active: isActive }]"
                @click="isActive = !isActive"
                :aria-pressed="isActive ? 'true' : 'false'"
              >
                <div class="icon-with-text">
                  <div class="icon-with-text__icon">
                    <div class="btn__effect">
                      <svg
                        class="
                          heart-stroke
                          icon-svg icon-svg--size-4 icon-svg--color-silver
                        "
                        viewBox="20 18 29 28"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"
                        ></path>
                      </svg>
                      <svg
                        class="
                          heart-full
                          icon-svg icon-svg--size-4 icon-svg--color-blue
                        "
                        viewBox="0 0 19.2 18.5"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"
                        ></path>
                      </svg>

                      <div class="effect-group">
                        <span class="effect"></span>
                        <span class="effect"></span>
                        <span class="effect"></span>
                        <span class="effect"></span>
                        <span class="effect"></span>
                      </div>
                    </div>
                  </div>
                  <div class="icon-with-text__text">加入追蹤清單</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="tab-section">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="tabs border-bottom">
            <ul
              class="container nav bg-white d-md-flex justify-content-around"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="tab-btn"
                  id="intro-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#project-intro"
                  type="button"
                  role="tab"
                  aria-controls="intro"
                  aria-selected="true"
                >
                  <span> 商品描述</span>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="tab-btn"
                  id="qa-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#project-qa"
                  type="button"
                  role="tab"
                  aria-controls="qa"
                  aria-selected="false"
                >
                  <span> 送貨及付款方式</span>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="tab-btn"
                  id="schedule-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#project-schedule"
                  type="button"
                  role="tab"
                  aria-controls="schedule"
                  aria-selected="false"
                >
                  <span> 顧客評價</span>
                </button>
              </li>
            </ul>
          </div>

          <div class="tab-content" id="myTabContent">
            <!-- 產品描述 -->
            <div
              class="tab-pane fade show active project-intro mt-5"
              id="project-intro"
              role="tabpanel"
              aria-labelledby="intro-tab"
            >
              <div
                class="
                  container
                  tab-section-title
                  d-flex
                  justify-content-center
                "
              >
                <h2 class="tab-intro-title mb-4 fw-normal">商品描述</h2>
              </div>
            </div>

            <!-- 送貨及付款方式 -->
            <div
              class="tab-pane fade project-qa mt-5"
              id="project-qa"
              role="tabpanel"
              aria-labelledby="qa-tab"
            >
              <div
                class="
                  container
                  tab-section-title
                  d-flex
                  justify-content-center
                "
              >
                <h2 class="tab-intro-title mb-4 fw-normal">送貨及付款方式</h2>
              </div>
            </div>

            <!-- 目前進度 -->
            <div
              class="tab-pane fade project-schedule mt-5"
              id="project-schedule"
              role="tabpanel"
              aria-labelledby="schedule-tab"
            >
              <div
                class="
                  container
                  tab-section-title
                  d-flex
                  justify-content-center
                "
              >
                <h2 class="tab-intro-title mb-4 fw-normal">顧客評價</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
export default {
  name: "FoodProduct",
  components: {
    Navbar,
    Breadcrumb,
  },
  data() {
    return {
      productImg: [
        {
          id: "1",
          img: require("@/assets/img/food/totmatonoodle1.png"),
        },
        {
          id: "2",
          img: require("@/assets/img/food/totmatonoodle1-2.png"),
        },
        {
          id: "3",
          img: require("@/assets/img/food/totmatonoodle1-3.png"),
        },
      ],
      //點擊圖片的index
      activeImage: 0,
      isActive: false, //出現
      hasError: false, //不出現
    };
  },
  methods: {
    changeImg(smallImg) {
      this.activeImage = smallImg;
    },
  },
  computed: {
    currentImage() {
      return this.productImg[this.activeImage].img;
    },
  },
};
</script>
