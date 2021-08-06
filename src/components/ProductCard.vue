
<style lang="scss" scoped>
.product-card {
  border: 0;
}
</style>
<template>
  <div class="container d-flex mb-3 justify-content-around">
    <div class="row row-cols-md-4">
      <div class="col items-card" v-for="item in ifood" :key="item.title">
        <div class="card product-card">
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
</template>

<script>
export default {
  props: ["ifood"],
  data() {
    return {};
  },
};
</script>
