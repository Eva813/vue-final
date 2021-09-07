<style lang="scss" scoped >
.columns {
  margin-top: 60px;
}
</style>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <section class="columns">
    <div class="colums-container">
      <div class="row">
        <div class="col-6">
          <div class="column-img">
            <img src="" alt="" />
          </div>
        </div>
        <div class="col-6">
          <div class="column-text">
            <h2 class="h2">下半年運勢美顏大公開!! 30秒測出你的女神力!</h2>
            <p>
              居高不下的氣溫、滿溢的紫外光線是Q彈水嫩肌最危險的大敵！想要在日頭赤炎炎的夏天依然保持青春美麗嗎？跟著POPOLA營養師一起測測你的女神力，看看自己離C位美顏還差幾分!...(繼續閱讀)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "ColumnPage",
  components: {
    Navbar,
    Footer,
  },
  data() {},
};
</script>

