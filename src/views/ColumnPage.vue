<style lang="scss" scoped >
@import "~@/assets/all.scss";
.columns {
  margin-top: 90px;
  .colums-container {
    margin: 0 auto;
    padding: 30px;
  }
  img {
    margin: auto;
  }
  .column-text {
    align-items: flex-end;
    padding: 15px;
  }
  .column-title {
    font-size: 16px;
    color: #337ab7;
    padding: 10px 0px 20px;
    letter-spacing: 2px;
  }
  .column-link:hover {
    color: #000;
  }

  .column-context {
    font-size: 14px;
    line-height: 2;
  }
}
</style>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <section class="columns">
    <div class="colums-container" v-for="item in columnData" :key="item.id">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-6">
            <div class="column-img">
              <img :src="item.img" alt="column-img" />
            </div>
          </div>
          <div class="col-5">
            <div class="column-text">
              <a href="#">
                <h2 class="column-title">
                  {{ item.title }}
                </h2>
              </a>
              <a class="column-link" href="#">
                <p class="column-context">
                  {{ item.content }}
                </p>
              </a>
            </div>
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
  data() {
    return {
      columnData: [
        {
          id: 1,
          title: "下半年運勢美顏大公開!! 30秒測出你的女神力!",
          img: require("@/assets/img/column-img/column1.jpg"),
          content:
            "居高不下的氣溫、滿溢的紫外光線是Q彈水嫩肌最危險的大敵！想要在日頭赤炎炎的夏天依然保持青春美麗嗎？跟著POPOLA營養師一起測測你的女神力，看看自己離C位美顏還差幾分!",
        },
        {
          id: 2,
          title: "太餓睡不著?「宵夜首選TOP4」與好體態不犯沖，吃澱粉也SAFE!",
          img: require("@/assets/img/column-img/column2.jpg"),
          content:
            "『餓到睡不著！餓到無法專心做其他事！！』好想吃宵夜卻又怕體態控制計畫功虧一簣！！ 別擔心，讓POPOLA營養來教您健康聰明選，這樣吃準沒錯！",
        },
        {
          id: 3,
          title: "寵物養肌指南!營養師手把手教你認識關鍵成分",
          img: require("@/assets/img/column-img/column3.jpg"),
          content:
            "  寵物皮毛問題相信對於許多人是個嚴重的困擾，三不五時抓、磨、蹭，或是這邊少一塊，那邊掉一搓！ 特蒐皮毛保健品百百款，只要吃了就全部都有效嗎？今天就讓POPOLA營養師來帶各位一起了解與皮毛養護相關的保健成分有哪些?",
        },
        {
          id: 4,
          title:
            "主子不想動小心是關節在求救!營養師親推2聖品，守護主子靈活動力!",
          img: require("@/assets/img/column-img/column4.jpg"),
          content:
            " 在關節保養品的選購上「補多」不如「補對」，千萬不要覺得什麼偏方都試過一遍就好了! 跟著專業營養師團隊，一起揭曉對毛孩來說必須補充的2個關鍵元素吧！",
        },
        {
          id: 5,
          title:
            "零食分量難掌控?營養師教你套公式輕鬆餵!加碼公開兩款必買5星零食",
          img: require("@/assets/img/column-img/column5.jpg"),
          content:
            " 搜尋〝寵物零食〞蹦然眼前出現的是『肉乾』『小饅頭』『造型肉條』……等數以百種的結果，每個看起來都好美好好吃，究竟該給毛孩吃哪一種呢？就讓營養師教導大家究竟怎麼選才是對毛孩最好的！",
        },
      ],
    };
  },
};
</script>

