
<style>
</style>
<template>
  <div class="row">
    <div class="col d-flex gap-4">
      <div
        class="card product-card justify-content-around"
        v-for="item in inFood"
        :key="item.title"
      >
        <img
          src="@/assets/img/food/food1-1.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["inFood"],
  data() {
    return {};
  },
};
</script>
