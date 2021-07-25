<template>
  <header>
    <Navbar></Navbar>

    <Breadcrumb></Breadcrumb>
  </header>
  <div class="aside-menu">
    <ul class="catagory">
      <li>
        <a href="#">🐷 開鍋祭，開鍋囉~</a>
      </li>
      <li>
        <a href="#">美食生活</a>
        <ul>
          <li><a href="#">冷凍食品</a></li>
          <li><a href="#">POPOLA BAKE</a></li>
          <li><a href="#">廚房用品</a></li>
        </ul>
      </li>
      <li>
        <a href="#">美妝保養</a>
        <ul>
          <li><a href="#">保養系列</a></li>
          <li><a href="#">美妝系列</a></li>
          <li><a href="#">日程生活</a></li>
        </ul>
      </li>
      <li>
        <a href="#">毛孩愛用</a>
        <ul>
          <li><a href="#">狗狗食品</a></li>
          <li><a href="#">狗狗用品</a></li>
          <li><a href="#">老犬照護</a></li>
          <li><a href="#">貓貓食品</a></li>
          <li><a href="#">貓貓用品</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
export default {
  name: "FoodPage",
  components: {
    Navbar,
    Breadcrumb,
  },
};
</script>

<style>
</style>
