git<style lang="scss" scoped >
@import "~@/assets/all.scss";
.announcement {
  .upper-part {
    margin-top: 90px;
    img {
      margin: 0 auto;
    }
  }
}
</style>
<template>
  <header>
    <Navbar v-bind:parentSpanNumbers="spanNumbers"></Navbar>
  </header>

  <section class="announcement mb-4">
    <div class="container">
      <div class="upper-part mb-5">
        <h2 class="text-center">《防疫期間物流變更公告》</h2>
        <img src="@/assets/img/announce-img.jpg" alt="announce-img" />
      </div>
      <div class="text-part">
        <p>
          因受疫情影響與配合防疫升級🚛 <br />
          目前貨運運送貨量超出物流端可承受範圍，物流商需要時間消化 <br />
          即日起(尚未出貨之訂單均屬此規範)
        </p>
        <p>1.無法指定配送時間</p>
        <p>2.部分區域不保證隔日配達</p>
        <p>3.暫停當日寄件配達</p>
        <p>4.貨運並推動無接觸配送</p>
        <p>
          5.免簽名機制（部分包裹配送將改為與收件人電聯說明約定至指定配送區域，以拍照留存模式取代簽名）
        </p>
        <p>
          6.疫情航班縮減運能，離島地區暫停提供冷凍宅配服務，常溫宅配無法確切提供配達日期
          造成不便請見諒‼️ 有任何問題，請私訊官網「聯絡我們」
        </p>
        #防疫期間感謝大家配合 #都要好好的
      </div>
    </div>
  </section>

  <footer>
    <Footer></Footer>
  </footer>
  <TopBtn :inScrollTop="scrollTop" :inIsScrollTop="isScrollTop"></TopBtn>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import TopBtn from "@/components/topBtn.vue";
export default {
  name: "AnnouncePage",
  components: {
    Navbar,
    Footer,
    TopBtn,
  },
  data() {
    return {
      scrollTop: 0,
      isScrollTop: false,
      spanNumbers: 0,
    };
  },
  mounted() {
    this.spanNumbers = parseInt(localStorage.getItem("cartNumbers")) || 0;
  },
};
</script>

