
<style lang="scss" scoped>
.product-card {
  border: 0;
}
</style>
<template>
  <div class="container d-flex mb-3 justify-content-around">
    <div class="row-cols-lg-4 row-cols-md-2 row-cols-sm-1">
      <div class="col items-card" v-for="item in ifood" :key="item.title">
        <div class="card product-card align-items-center">
          <div class="card-top">
            <a class="card-img-link" href="#">
              <img :src="item.src" class="card-img-top" alt="product-img" />
            </a>
            <a href="#" class="btn card-btn">加入購物車</a>
          </div>
          <div class="card-body">
            <h5 class="card-title text-center fw-normal">{{ item.title }}</h5>
            <p class="card-text text-center fw-bold">
              <span>NT$</span> {{ item.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <span class="btn-add-to-cart js-btn-add-to-cart mobile-cart visible-xs visible-sm  ">  <i class="fa fa-shopping-cart"></i>        </span> -->
</template>

<script>
export default {
  props: ["ifood"],
  data() {
    return {};
  },
};
</script>
