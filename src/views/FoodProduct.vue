
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
  .product-title {
    font-size: 28px;
    padding-bottom: 20px;
  }
  .promotion-text {
    padding: 10px 0;
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
}
</style>

<template>
  <header>
    <Navbar></Navbar>

    <Breadcrumb></Breadcrumb>
  </header>
  <div class="container">
    <div class="row justify-content-center pt-3">
      <div class="col-md-6">
        <div class="product d-flex justify-content-center">
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
            <p class="price">NT$158</p>
          </div>
          <div class="rating-box">stars</div>
          <span>數量</span>
          <div class="counter-form">
            <input type="text" />
          </div>

          <div class="button">
            <button type="submit"></button>
            <div class="wishListBtn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
