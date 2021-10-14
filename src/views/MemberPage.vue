<style lang="scss" scoped >
@import "~@/assets/all.scss";
.member-benefits {
  margin-top: 90px;
  .benefits-img {
    img {
      margin: 0 auto;
    }
  }
  .benefits-content {
    .container {
      width: 1170px;
    }
  }
}
</style>

<template>
  <header>
    <Navbar v-bind:parentSpanNumbers="spanNumbers"></Navbar>
  </header>
  <section class="member-benefits">
    <div class="benefits-img">
      <img src="@/assets/img/memberBenefits.jpg" alt="benefits-img" />
    </div>
    <div class="benefits-content">
      <h2 class="text-center mb-4">【會員制度說明】</h2>
      <div class="container mb-4">
        <p>1.會員分成4種：POPOLA粉/POPOLA白金/POPOLA鑽石/POPOLA VVIP</p>
        <p>
          2.會員效期：從升級當日起算12個月，例如2020年1月2日成為金卡會員，會員效期至2021年1月1日止。
        </p>
        <p>
          3.POPOLA白金升階方式：當年度消費滿$25,000以上，隔日凌晨00:00系統自動升級成下一個級別。
        </p>
        <p>
          4.會員續會條件：若會員效期已滿，系統會自行判定這12個月的累積金額是否達到滿額續會條件，若沒有將降階成累計金額的會員。
          <br />
          (1)若有，將達成續會條件 <br />
          (2)若沒有，上年度為POPOLA鑽石會員，系統會以POPOLA鑽石條件為續會優先審查標準(累積消費滿$50,000)，若無法達成會以POPOLA白金(累計消費滿$25,000)為審查條件，以此類推…
        </p>
        <p>
          5.生日禮金：於生日當天發送，效期30天(不限金額可直接折抵；若館內活動與會員折扣重複，將擇優折抵；會員發放資格為當月生日前之會員層級判斷)。生日禮金會依據會員資料判斷來匯入帳戶，請務必填寫正確並完整會員資料，系統才能順利匯入購物金，若未填寫錯過發系統發送恕不補發。
          (VVIP專屬生日禮+生日卡依生日前月已達資格予以發放，若於生日當月升級，將於次年度生日發放，系統於每月20號產生下月份生日名單，請會員即早填寫生日資料，以避免系統無法判別！)
        </p>
        <p>
          6.會員獨家優惠：不定期舉辦專屬活動，享限定商品優惠或獨家好禮；VVIP結帳95折優惠(若館內活動與會員折扣重複，將擇優折抵；此優惠不含家電類)；新會員加入享50元購物金，效期10天；免運優惠不含海外。
        </p>
        <p>
          7.注意事項： <br />
          (1)相關會員基本條款與隱私權細則請參照條款與細則。 <br />
          (2)會員優惠與官網其他優惠活動擇優使用。 <br />
          (3)會員生日禮金與活動購物金折扣，系統擇優使用。 <br />
          (4) POPOLA粉/POPOLA白金/POPOLA鑽石/POPOLA
          VVIP會員，如有退款、多次辦理退貨之情形，POPOLA保有權利移除會員資格。
          <br />
          (5)會員優惠限定於 POPOLA官方網站使用。 <br />
          (6)自2020/6/1早上10點後，完成第一筆訂單，系統將於隔日凌晨00:00自動依照上表會員規則進行判定升級。<br />
          (7)專屬POPOLA會員特別活動訊息以及不定期會員專屬購物禮金將以電子郵件寄出，敬請將會員資料填寫正確，避免錯誤電子郵址使您的會員權益受損。<br />
          (8)POPOLA保留更動會員相關制度之權利。
        </p>
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
  name: "MemberPage",
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

