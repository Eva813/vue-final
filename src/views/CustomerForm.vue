<style lang="scss" scoped>
@import "~@/assets/all.scss";
</style>

<template>
  <header class="mb-4">
    <Navbar></Navbar>
  </header>
  <section class="mb-4">
    <div class="container">
      <div class="row">
        <ul class="time-line">
          <li class="active-tl">購物車</li>
          <li>填寫資料</li>
          <li>訂單確認</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "CustomerForm",
  components: {
    Navbar,
  },
};
</script>

