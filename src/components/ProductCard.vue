
<style>
</style>
<template>
  <div class="container d-flex">
    <div class="row row-cols-md-4">
      <div class="col gap-4" v-for="item in ifood" :key="item.title">
        <div class="card product-card">
          <img :src="item.src" class="card-img-top" alt="..." />
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
