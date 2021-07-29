
<style lang="scss" scoped>
@import "~@/assets/all.scss";

.product-small-img {
  img {
    height: 92px;
    margin: 10px 0;
    cursor: pointer;
  }
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
    <div class="row">
      <div class="col-md-6">
        <div class="product d-flex">
          <div class="product-small-img">
            <img
              v-for="product in productImg"
              :key="product.name"
              :src="product.img"
              alt=""
            />
          </div>
          <div class="img-container">
            <img src="@/assets/img/food/totmatonoodle1.png" alt="" />
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
          name: "pic1",
          img: require("@/assets/img/food/totmatonoodle1.png"),
        },
        {
          name: "pic2",
          img: require("@/assets/img/food/totmatonoodle1-2.png"),
        },
        {
          name: "pic3",
          img: require("@/assets/img/food/totmatonoodle1-3.png"),
        },
      ],
    };
  },
};
</script>
