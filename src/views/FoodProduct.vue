
<style lang="scss" scoped>
@import "~@/assets/all.scss";

.navbar-breadcrumb {
  margin-top: 85px;
  @include desk-below {
    @media (max-width: 1023px) {
      margin-top: 60px;
    }
  }
}

//左側圖片
.thumbnail-section {
  img {
    max-height: 92px;
    margin: 10px 0;
    cursor: pointer;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
}
.thumbnail-section .active {
  opacity: 1;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}

.img-container {
  padding: 10px;
  @include pad {
    @media (max-width: 768px) {
      max-width: 768px;
    }
  }
  img {
    @include pad {
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
}
.product-gallery {
  display: flex;
  justify-content: end;
  @include desk-below {
    @media (max-width: 1023px) {
      text-align: left;
      padding-right: 10px;
      margin: 0 auto 10px auto;
    }
  }
}

///右側產品資訊
.product-info {
  color: #333333;
  padding: 0 15px 20px 20px;
  // min-width: 435px;
  @include desk-below {
    @media (max-width: 1023px) {
      margin: 0 auto;
    }
  }
  @include pad {
    @media (max-width: 768px) {
      width: 100%;
    }
  }

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
    width: 100%;
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
    @include mobile {
      @media (max-width: 568px) {
        font-size: 13px;
      }
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
///商品描述
.product-intro {
  text-align: center;
  .text-x-large {
    font-size: x-large;
  }
  .text-large {
    color: rgb(100, 100, 100);
    font-size: large;
    font-weight: 700;
  }
  .img-section > img {
    margin: 0 auto;
  }
}
iframe {
  max-width: 100%;
}
.product-deliver-way,
.product-payment-way {
  h3 {
    font-size: 18px;
  }
  li {
    color: #333;
    font-size: 14px;
    line-height: 20px;
  }
}
///顧客評價
.review-summary {
  margin-bottom: 20px;
}
.review-summary-info {
  &-title {
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 8px;
  }
  .review-summary-info-stars {
    margin-right: 12px;
    color: #ffc500;
  }
}
.review-summery-bars {
  align-items: center;

  .review-summary-bar-star {
    display: inline-block;
    margin-right: 10px;
  }
  .progress {
    width: 600px;
    height: 13px;
    background-color: transparent;
  }
  .progress-bar {
    background-color: rgb(245, 198, 131);
    color: #333;
    padding: 5px 0;
    border-radius: 0.25em;
  }
}
.review-comments {
  .review-comment-author {
    img {
      width: 45px;
      height: 45px;
      margin-right: 12px;
    }
  }
  .review-comment-author-info {
    color: #333;
    font-size: 14px;
  }
  .review-comment-stars {
    font-size: 14px;
    color: #ffc500;
    letter-spacing: 0.6px;
    word-break: break-word;
  }
}

///相關產品 卡片區
.relevant-products {
  .section-title {
    position: relative;
    margin-bottom: 28px;
    &:after {
      position: absolute;
      display: block;
      content: "";
      height: 5px;
      width: 25px;
      top: 88%;
      background: $primary;
    }
  }
  .title {
    color: #333;
    font-size: 22px;
  }
}
</style>

<template>
  <header>
    <Navbar></Navbar>

    <Breadcrumb class="navbar-breadcrumb"></Breadcrumb>
  </header>
  <div class="container mb-5">
    <div class="row justify-content-center pt-3">
      <div class="col-lg-12 col-xl-6">
        <div class="product-gallery">
          <div class="thumbnail-section">
            <div>
              <!-- //放入index作為取得的序號 -->
              <img
                :src="productData.src"
                alt="productImg"
                data-index="0"
                @click="changeImg($event)"
                :class="['product-small-img', activeImage == 0 ? 'active' : '']"
              />
              <img
                :src="productData.src2"
                alt="productImg"
                data-index="1"
                @click="changeImg($event)"
                :class="['product-small-img', activeImage == 1 ? 'active' : '']"
              />
            </div>
          </div>
          <div class="img-container">
            <img :src="imgSrc" alt="商品圖示" />
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-xl-6">
        <div class="product-info">
          <h1 class="product-title">{{ productData.title }}</h1>
          <div class="promotion-text">
            <p class="promotion-text-tag">
              [會員限定] 全店，POPOLA會員 無限次數 全館冷凍滿3600元 免運
            </p>
          </div>
          <div class="price-box">
            <p class="price fw-bold">{{ productData.price }}</p>
          </div>
          <!-- RATING - Form -->
          <!-- <div class="rating-box">
            
<form class="rating-form" action="#" method="post" name="rating-movie">
            
            stars</div> -->
          <span class="action-title">數量</span>
          <div class="counter-form d-flex">
            <span class="input-group-btn">
              <button type="button" class="btn" @click="minusBtn()">
                <font-awesome-icon class="btn-icon" :icon="['fas', 'minus']" />
              </button>
            </span>
            <input type="number" v-model.number="quantity" />
            <span class="input-group-btn">
              <button type="button" class="btn" @click="addBtn()">
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
                  id="delivery-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#product-delivery"
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
              class="tab-pane fade show active product-intro mt-5"
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
              <div class="text text-center">
                牛肉麵家族『最新』生力軍，番茄紅燒牛肉麵來襲
              </div>
              <div class="text-detaile mb-3">
                <h4>
                  <span class="text-x-large"
                    >🍜POPOLA研發-番茄紅燒牛肉麵湯頭:</span
                  >
                </h4>
                <div>
                  <span class="text-large"
                    >選用番茄、蒜頭、薑、豆瓣醬…等燉火熬煮🧄</span
                  >
                </div>
                <div>
                  <span class="text-large"
                    >湯頭清爽順口並帶點特有的紅燒香味</span
                  >
                </div>
                <div>
                  <span class="text-large"
                    >搭配紐西蘭進口牛肉，每口肉質都是厚實飽滿🥩</span
                  >
                </div>
                <div class="mb-3">
                  <span class="text-large"
                    >麵條Q彈帶勁，還能吃的到整塊的番茄🍅</span
                  >
                </div>
                <div class="mb-3">
                  <h4>
                    <span class="text-x-large">邵庭社長-品嘗後誠心推薦</span>
                  </h4>
                </div>
                <div class="text-large">
                  <span
                    >番茄紅燒牛肉麵更特別的是，古早味的紅燒中帶著番茄酸香提味</span
                  >
                </div>
                <div>
                  <span class="text-large"
                    >並使用多次工序去掉過度的油脂，湯頭才能這樣濃郁中又清甜回甘，實在是讚不絕口</span
                  >
                </div>
              </div>

              <div class="video-section">
                <iframe
                  width="854"
                  height="480"
                  src="https://www.youtube.com/embed/iYBbOSZN4hQ?rel=0"
                  frameborder="0"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div class="img-section">
                <img
                  src="https://shoplineimg.com/5a2773a04926783c0d00030c/external-bc1abde25fb743aedff30db06f40f277/original?image_url=https%3A%2F%2Fimgur.com%2FD1aIkos.jpg"
                  alt="POPOLA七分卡-番茄紅燒牛肉湯麵"
                />
              </div>
            </div>

            <!-- 送貨及付款方式 -->
            <div
              class="tab-pane fade project-qa mt-5"
              id="product-delivery"
              role="tabpanel"
              aria-labelledby="delivery-tab"
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
              <div class="container d-flex justify-content-center mb-5">
                <div class="row">
                  <div
                    class="product-deliver-way col-md-6 col-xs-12 text-center"
                  >
                    <h3>送貨方式</h3>
                    <ul>
                      <li>冷凍黑貓宅配 (限本島)</li>
                    </ul>
                  </div>
                  <div
                    class="product-payment-way col-md-6 col-xs-12 text-center"
                  >
                    <h3>付款方式</h3>
                    <ul>
                      <li>LINE Pay</li>
                      <li>信用卡（支援銀聯卡）</li>
                      <li>
                        ATM虛擬代碼繳費（限台灣帳戶，須持結帳畫面中的代碼於訂購日次日到實體ATM或網路銀行繳費，第一銀行在ATM操作選擇繳費）
                      </li>
                      <li>
                        信用卡3期分期付款（支援台灣的銀行發行的信用卡，除台銀/土銀信用卡）
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- 顧客評價 -->
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
              <div class="customers-container">
                <!-- 星星評等 -->
                <div class="review-summary">
                  <div class="row">
                    <div class="col-3">
                      <div class="review-summary-info">
                        <div class="review-summary-info-title">88個評價</div>
                        <div
                          class="
                            review-summary-info-score
                            d-flex
                            align-items-center
                          "
                        >
                          <div class="review-summary-info-stars">
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                          </div>
                          <div class="review-summary-info-desc">5.0 分</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="review-summery-bars">
                        <div
                          class="review-summery-bar d-flex align-items-center"
                        >
                          <div class="review-summary-bar-star">5 分</div>
                          <!-- 長條圖 -->

                          <div class="progress">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              style="width: 95%"
                              aria-valuenow="95"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              95%
                            </div>
                          </div>
                        </div>
                        <div
                          class="review-summery-bar d-flex align-items-center"
                        >
                          <div class="review-summary-bar-star">4 分</div>
                          <!-- 長條圖 -->

                          <div class="progress">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              style="width: 3%"
                              aria-valuenow="3"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              3%
                            </div>
                          </div>
                        </div>
                        <div
                          class="review-summery-bar d-flex align-items-center"
                        >
                          <div class="review-summary-bar-star">3 分</div>
                          <!-- 長條圖 -->
                          <span>0%</span>
                        </div>
                        <div
                          class="review-summery-bar d-flex align-items-center"
                        >
                          <div class="review-summary-bar-star">2 分</div>
                          <!-- 長條圖 -->
                          <span>0%</span>
                        </div>
                        <div
                          class="review-summery-bar d-flex align-items-center"
                        >
                          <div class="review-summary-bar-star">1 分</div>
                          <!-- 長條圖 -->
                          <span>0%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 顧客留言 -->
                <div class="review-comments">
                  <div class="row mb-5">
                    <div class="col-3">
                      <div class="review-comment-author d-flex">
                        <img src="@/assets/img/user.png" alt="" />
                        <div class="review-comment-author-info">
                          <div class="review-comment-author-info-name">
                            C****u
                          </div>
                          <div class="review-comment-author-info-date">
                            May 18, 2021
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="review-comment-stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-5">
                    <div class="col-3">
                      <div class="review-comment-author d-flex">
                        <img src="@/assets/img/user.png" alt="" />
                        <div class="review-comment-author-info">
                          <div class="review-comment-author-info-name">
                            C****u
                          </div>
                          <div class="review-comment-author-info-date">
                            May 18, 2021
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="review-comment-stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                      </div>
                    </div>
                  </div>

                  <div class="row mb-5">
                    <div class="col-3">
                      <div class="review-comment-author d-flex">
                        <img src="@/assets/img/user.png" alt="" />
                        <div class="review-comment-author-info">
                          <div class="review-comment-author-info-name">
                            C****u
                          </div>
                          <div class="review-comment-author-info-date">
                            May 18, 2021
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="review-comment-stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-5">
                    <div class="col-3">
                      <div class="review-comment-author d-flex">
                        <img src="@/assets/img/user.png" alt="" />
                        <div class="review-comment-author-info">
                          <div class="review-comment-author-info-name">
                            C****u
                          </div>
                          <div class="review-comment-author-info-date">
                            May 18, 2021
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="review-comment-stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-5">
                    <div class="col-3">
                      <div class="review-comment-author d-flex">
                        <img src="@/assets/img/user.png" alt="" />
                        <div class="review-comment-author-info">
                          <div class="review-comment-author-info-name">
                            C****u
                          </div>
                          <div class="review-comment-author-info-date">
                            May 18, 2021
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="review-comment-stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Pagination></Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="relevant-products">
    <div class="container section-title d-flex justify-content-center">
      <h1 class="title mb-4 fw-normal">相關產品</h1>
    </div>
    <ProductCard :ifood="food"> </ProductCard>
  </section>
  <footer>
    <Footer></Footer>
  </footer>
  <!-- 加入置頂按鈕 -->
  <TopBtn :inScrollTop="scrollTop" :inIsScrollTop="isScrollTop"></TopBtn>
</template>

<script>
const axios = require("axios");
import Navbar from "@/components/Navbar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Pagination from "@/components/Pagination.vue";
import ProductCard from "@/components/ProductCard.vue";
import Footer from "@/components/Footer.vue";
import TopBtn from "@/components/topBtn.vue";
export default {
  name: "FoodProduct",
  components: {
    Navbar,
    Breadcrumb,
    Pagination,
    ProductCard,
    Footer,
    TopBtn,
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
      isActive: false,
      quantity: 0,
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
      scrollTop: 0,
      isScrollTop: false,
      productData: [],
      imgSrc: "",
    };
  },
  methods: {
    changeImg(e) {
      let imgIndex = e.target.getAttribute("data-index");
      let src = e.target.src;
      this.activeImage = imgIndex;

      this.imgSrc = src;
    },
    addBtn() {
      this.quantity++;
    },
    minusBtn() {
      if (this.quantity <= 0) {
        this.quantity = 0;
      } else {
        this.quantity--;
      }
    },
  },
  computed: {
    currentImage(e) {
      return e.target.src;
    },
  },
  mounted() {
    let id = this.$route.params.id;
    console.log(id);

    axios({
      method: "get",
      url: "https://eva-final-project.herokuapp.com/products/" + id,
      //API要求的資料
      data: {
        id,
      },
    })
      .then((response) => {
        // $route.params.id
        // console.log(response.data);
        this.productData = response.data;
        this.imgSrc = response.data.src;
      })
      .catch((error) => console.log(error));
  },
};
</script>
