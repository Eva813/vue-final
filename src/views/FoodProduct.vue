
<style lang="scss" scoped>
@import "~@/assets/all.scss";

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
</style>

<template>
  <header>
    <Navbar></Navbar>

    <Breadcrumb></Breadcrumb>
  </header>
  <div class="container">
    <div class="row justify-content-center">
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
      <div class="col-5">
        <h1>銷魂麵食</h1>
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
