
<style>
</style>
<template>
  <div class="row">
    <div class="col-4">
      <div class="card product-card" style="width: 18rem">
        <img
          src="@/assets/img/food/food1-1.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
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
  data() {
    return {
      food: [
        {
          title: "酵素旅行包(20入/盒)",
          price: 1680,
          src: require("@/assets/img/food/food1-1.png"),
        },
      ],
    };
  },
};
</script>
