
<style lang="scss" scoped>
//替圖片增加淺黑色https://blog.csdn.net/fxjzzyo/article/details/79263324
.card {
  border: 0;
  .card-top {
    position: relative;
    background-color: #000;
    transition: all 0.6s ease-in-out;
    &:hover .card-img-top {
      -webkit-mask: -webkit-linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.5)
      );
    }
    &:hover .card-btn {
      // display: block;
      z-index: 999;
    }
  }

  .card-img-top {
    height: 260px;
    width: 260px;
    width: 100%;
    border-radius: 3px;
  }
  &-btn {
    position: absolute;
    // display: none;
    width: 90%;
    height: 45px;
    top: 88%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    background-color: #fff;
    color: #000;
    z-index: -1;
    &:hover {
      background-color: #faaf48;
    }
  }
}
</style>
<template>
  <div class="container d-flex mb-3">
    <div class="row row-cols-md-4">
      <div class="col gap-4" v-for="item in ifood" :key="item.title">
        <div class="card product-card">
          <div class="card-top">
            <a class="card-img-link" href="#">
              <img :src="item.src" class="card-img-top" alt="..." />
            </a>
            <a href="#" class="btn card-btn">Go somewhere</a>
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
