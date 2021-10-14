<style lang="scss" scoped>
@import "~@/assets/all.scss";

.time-line {
  counter-reset: test 0;
  position: relative;
  margin-top: 85px;
  @include desk-below {
    @media (max-width: 1023px) {
      margin-top: 60px;
    }
  }

  li {
    list-style: none;
    float: left;
    width: 15.3333%;
    left: 27%;
    position: relative;
    text-align: center;
    font-size: 14px;
    &:before {
      counter-increment: test;
      content: counter(test);
      font-size: 12px;
      width: 30px;
      height: 30px;
      border: 2px solid darken($primary, 15%);
      border-radius: 50%;
      display: block;
      text-align: center;
      line-height: 30px;
      margin: 0 auto 10px auto;
      background: #fff;
      color: rgb(66, 64, 64);
      transition: all ease-in-out 0.3s;
      cursor: pointer;
    }
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: grey;
      top: 17px;
      left: -50%;
      z-index: -999;
      transition: all ease-in-out 0.3s;
    }
  }
  li:first-child:after {
    content: none;
  }
  li.active-tl {
    color: #555555;
    &:before {
      background: darken($primary, 15%);
      color: #f1f1f1;
    }
  }
  li.active-tl + li:after {
    background: darken($primary, 15%);
  }

  ul {
    &:nth-child(1) {
      color: darken($primary, 15%);
    }
  }
}

.shopping-cart {
  color: #333;
  font-size: 14px;
  .shopping-cart-lists {
    border-top: 1px solid #ededed;
    border-right: 1px solid #ededed;
    border-left: 1px solid #ededed;
    width: 100%;
    @include pad {
      @media (max-width: 768px) {
        max-width: 90%;
        margin: 0 auto;
      }
    }
  }
  h2 {
    padding: 10px 15px;
    background-color: #f6f6f6;
    line-height: 26px;
    font-weight: 500;
    margin: 0;
    font-size: 18px;
    border-bottom: 1px solid #ededed;
  }

  .item_header {
    display: flex;
    padding: 15px;
    // height: 30px;
    background-color: #fff;
    border-bottom: 1px solid #ededed;
    @include pad {
      @media (max-width: 768px) {
        display: none;
      }
    }

    > div {
      line-height: 30px;
    }
  }
  .cart-item {
    padding: 15px;
  }
  ///
  .item-info {
    padding-left: 0px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 3px;
    }
    .description {
      padding-left: 10px;
    }
  }

  .cart-item-container {
    @include pad {
      @media (max-width: 768px) {
        position: relative;
        min-height: 130px;
      }
    }
  }
  .cart-item-container .cart-item:last-child {
    border-bottom: 1px solid #ededed;
  }

  .del-icon {
    cursor: pointer;
  }

  ////個別項目處理
  .item-info {
    @include pad {
      @media (max-width: 768px) {
        position: static;
      }
    }
  }
  .item-discount {
    @include pad {
      @media (max-width: 768px) {
        position: static;
        padding-left: 80px;
        margin-bottom: 5px;
      }
    }
  }
  .item-price {
    .price-label {
      @include pad {
        @media (max-width: 768px) {
          display: block;
          text-align: right;
        }
      }
    }
  }
  .item-quantity {
    @include pad {
      @media (max-width: 768px) {
        top: 90px;
        left: 10px;
        position: absolute;
        padding: 0;
        padding-top: 16px;
        width: 160px;
      }
    }

    @include mobile {
      @media (max-width: 568px) {
      }
    }
  }

  .item-total {
    text-align: center;
    padding-right: 10px;
    > span {
      @include pad {
        @media (max-width: 768px) {
          display: block;
          text-align: right;
          padding-top: 24px;
        }
      }
    }
  }
  .item-operate {
    @include pad {
      @media (max-width: 768px) {
        width: 34px;
        position: absolute;
        right: 25px;
      }
    }
  }
}
//數量增減按鈕
.counter-form {
  display: table-cell;
  margin-bottom: 20px;
  input {
    border: 1px solid #ccc;
    line-height: 24px;
    width: 100%;
    border-left: none;
    border-right: none;
  }
  input[type="number"] {
    padding-left: 10px;
    text-align: center;
    @include for-desk {
      @media (max-width: 991px) {
        padding-left: 0;
      }
    }
  }
  button {
    border: 1px solid #ccc;
  }

  .input-group-btn {
    width: 34px;
  }
  .btn {
    background-color: transparent;
    border: 1px solid #ccc; /* Remove borders */
    color: #000; /* White text */
    padding: 6px 12px; /* Some padding */
    line-height: 24px;
    font-size: 14px;
    cursor: pointer;
    &:hover .btn-icon {
      color: darken($primary, 20%);
    }
    @include for-desk {
      @media (max-width: 991px) {
        line-height: 20px;
        font-size: 13px;
      }
    }
  }
}
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
  border-radius: 3px 0 0 3px;
  margin-right: -1px;
  border-right: none;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
  border-radius: 0px 3px 3px 0px;
  margin-left: -2px;
}
/////*********** *////
.shopping-cart-description {
  .shopping-cart-title {
    padding: 10px 15px;
    background-color: #f6f6f6;
    line-height: 26px;
    font-weight: 500;
    margin: 0;
    font-size: 18px;
    border-bottom: 1px solid #ededed;
  }
  .container {
    @include pad {
      @media (max-width: 768px) {
        max-width: 90%;
        margin: 0 auto;
      }
    }
    .col-sm-12 {
      padding: 0;
    }
  }
  .order-form {
    border: 1px solid #ededed;
    margin-right: 10px;
    @include pad {
      @media (max-width: 768px) {
        margin-bottom: 30px;
      }
    }
    .order-form-body {
      padding: 15px 15px 0 15px;
      font-size: 14px;
    }
    .form-group {
      margin-bottom: 15px;
      label {
        margin-bottom: 5px;
      }
    }
    .form-control {
      &:focus {
        box-shadow: none;
        border-color: none;
      }
    }
    .help-block {
      display: block;
      margin-top: 5px;
      color: #737373;
    }
  }
  .order-checkout-form {
    border: 1px solid #ededed;
    .checkout-summary-list {
      padding: 15px 15px 0 15px;
      font-size: 14px;
    }
    .coupon-btn {
      color: darken($primary, 10%);
      cursor: pointer;
    }
    .coupon-form {
      .control-label {
        display: block;
        margin-bottom: 5px;
      }
      .form-control {
        border: 1px solid #ededed;
        display: inline-block;
        width: 67%;
        padding: 6px 12px;
        &:focus {
          box-shadow: none;
        }
      }
      .btn-primary {
        background-color: #9daab0;
        border: 1px solid #9daab0;
        color: white;
        width: 30%;
        padding: 6px 12px;
        margin-left: 10px;
      }
    }
    .use-btn {
      display: inline-block;
    }
    .btn-checkout {
      width: 100%;
      padding: 6px 12px;
      background-color: $primary;
      color: #fff;
      border-radius: 3px;
      border: 1px solid $primary;
      &:hover {
        background-color: #fff;
        color: $primary;
      }
    }
  }
}
//  設定使按鈕點擊後消失的class
.coupon-btn.hide {
  display: none;
}
///**促銷圖片**//
.promotion-section {
  .img-container {
    padding: 15px;
    border: 1px solid #ededed;
    @include pad {
      @media (max-width: 768px) {
        max-width: 85%;
        margin: 0 auto;
      }
    }

    img {
      margin: 0 auto;
    }
  }
}
</style>

<template>
  <header class="mb-4">
    <Navbar v-bind:parentSpanNumbers="cartSpanNumbers"></Navbar>
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
  <section class="shopping-cart mb-5">
    <div class="container shopping-cart-lists">
      <div class="row shopping-cart-header">
        <div class="col-12 p-0">
          <h2>購物車</h2>
        </div>
      </div>
      <div class="row">
        <div class="item_header justify-content-center">
          <div class="col-xs-12 col-sm-3 item_detail">商品資料</div>
          <div class="col-sm-2 discount">優惠</div>
          <div class="col-sm-2 text-center price">單價</div>
          <div class="col-sm-2 text-center quantity">數量</div>
          <div class="col-sm-2 text-center total">小計</div>
          <div class="col-sm-1 operate"></div>
        </div>
      </div>
      <!-- ////購物車 -->
      <div class="row">
        <div class="col-12">
          <div
            class="cart-item-container"
            v-for="(item, index) in getCartItems"
            :key="item.productId"
          >
            <div class="row cart-item justify-content-center">
              <div class="col-12 col-md-3 d-flex item-info">
                <a href=""><img :src="item.src" alt="商品圖示" /></a>
                <div class="description">
                  <span> {{ item.title }} </span>
                </div>
              </div>
              <div class="col-12 col-md-2 item-discount"></div>
              <div class="col-xs-12 col-md-2 item-price text-center">
                <span class="price-label">NT${{ item.price }}</span>
              </div>
              <div class="col-12 col-md-2 item-quantity text-center">
                <div class="counter-form d-flex">
                  <span class="input-group-btn">
                    <button
                      type="button"
                      class="btn"
                      @click="minusBtn(item, index)"
                    >
                      <font-awesome-icon
                        class="btn-icon"
                        :icon="['fas', 'minus']"
                      />
                    </button>
                  </span>
                  <input type="number" v-model.number="item.amount" />
                  <span class="input-group-btn">
                    <button
                      type="button"
                      class="btn"
                      @click="addBtn(item, index)"
                    >
                      <font-awesome-icon
                        class="btn-icon"
                        :icon="['fas', 'plus']"
                      />
                    </button>
                  </span>
                </div>
              </div>
              <div class="col-12 col-md-2 item-total">
                <span>NT${{ item.price * item.amount }}</span>
              </div>
              <div class="col-12 col-md-1 item-operate text-center">
                <span>
                  <font-awesome-icon
                    class="del-icon"
                    :icon="['fas', 'trash-alt']"
                    @click="deleteBtn(item, index)"
                /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="shopping-cart-description mb-4">
    <div class="container justify-content-between">
      <div class="row">
        <div class="col-sm-12 col-md-8 ps-0">
          <div class="order-form">
            <h3 class="shopping-cart-title">選擇送貨及付款方式</h3>
            <div class="order-form-body">
              <form name="cart-form">
                <div class="form-group">
                  <label for="order-delivery-country">送貨地點</label>
                  <span class="select-cart-form">
                    <select id="order-delivery-country" class="form-control">
                      <option value="AU">澳大利亞</option>
                      <option value="HK">香港</option>
                      <option value="MO">澳門</option>
                      <option value="MY">馬來西亞</option>
                      <option value="SG">新加坡</option>
                      <option value="TW" selected="">台灣</option>
                    </select>
                  </span>
                </div>
                <div class="form-group">
                  <label for="order-delivery-method">送貨方式</label>
                  <span class="select-cart-form">
                    <select id="order-delivery-method" class="form-control">
                      <option value="5ae05a9a00fddea820001230">
                        常溫物流宅配 (台灣含離島)
                      </option>
                      <option value="freezen" selected="">冷凍宅配</option>
                      <option disabled="" value="empty">沒有適用方式</option>
                    </select>
                  </span>
                </div>
                <div class="form-group">
                  <label for="order-payment-method">付款方式</label>
                  <span class="select-cart-form">
                    <select
                      id="order-payment-method"
                      class="form-control"
                      ng-disabled="multiSelect &amp;&amp; state &amp;&amp; state.isCartLoading"
                    >
                      <option value="5a2e126459d524a6b80003ba">
                        信用卡（支援銀聯卡）
                      </option>
                      <option value="5b0fcb6310abb922b200012e">LINE Pay</option>
                      <option value="5a35248e72fdc0255f001140">
                        ATM虛擬代碼繳費（限台灣帳戶，須持結帳畫面中的代碼於訂購日次日到實體ATM或網路銀行繳費，第一銀行在ATM操作選擇繳費）
                      </option>
                      <option value="5adefc0559d52433f8000494" selected="">
                        信用卡3期分期付款（支援台灣的銀行發行的信用卡，除台銀/土銀信用卡）
                      </option>
                    </select>
                  </span>
                  <span class="help-block" ng-non-bindable=""
                    >⚠購物金使用時請注意⚠
                    <br />使用購物金折扣並且訂單送出付款失敗時，系統將即時自動回補<br />若需要取消訂單系統無法自動回補購物金<br />請在訂單處留言，客服人員將於上班日處理☎</span
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 pe-0">
          <div class="order-checkout-form">
            <h3 class="shopping-cart-title">訂單資訊</h3>
            <div class="checkout-summary-list">
              <div class="subtotal mb-3 d-flex justify-content-between">
                <span class="pull-left">小計:</span>
                <span class="pull-right">NT${{ getSubTotalPrice() }}</span>
              </div>
              <div class="delivery-fee mb-3 d-flex justify-content-between">
                <span class="pull-left"> 運費: </span>
                <span class="pull-right">NT${{ getShipFee() }}</span>
              </div>
              <div class="cart-coupon">
                <a
                  class=""
                  style=""
                  @click="handDomShow('isShow')"
                  :class="['coupon-btn', isShow == true ? 'hide' : '']"
                  >使用優惠代碼</a
                >
                <form class="coupon-form" v-show="isShow" style="">
                  <div class="form-group">
                    <label for="order-coupon" class="control-label"
                      >優惠代碼</label
                    >

                    <input id="order-coupon" class="form-control" />
                    <a class="btn btn-primary use-btn">套用</a>
                  </div>
                </form>
              </div>
              <hr class="ng-scope" />
              <div class="final-total mb-3 d-flex justify-content-between">
                <span class="pull-left">合計:</span>
                <span class="pull-right"
                  >NT${{ getSubTotalPrice() + getShipFee() }}</span
                >
              </div>
              <router-link
                class="btn btn-success mb-3 btn-checkout"
                to="/customerform"
                >前往結帳</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="promotion-section mb-5">
    <div class="container img-container">
      <img src="@/assets/img/checkout.png" alt="" />
      <img src="@/assets/img/checkout-level.png" alt="" />
    </div>
  </section>

  <footer>
    <Footer></Footer>
  </footer>
  <TopBtn :inScrollTop="scrollTop" :inIsScrollTop="isScrollTop"></TopBtn>
</template>

<script>
const axios = require("axios");
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import componentB from "@/components/Component-b.vue";
import TopBtn from "@/components/topBtn.vue";
export default {
  name: "ShoppingCart",
  props: {},
  components: {
    Navbar,
    Footer,
    TopBtn,
  },
  data() {
    return {
      text: "原始資料",
      isShow: false,
      isShowBtn: true,
      //cartItems 一開始用來存放localStorage的資料
      cartItems: [],
      itemList: [
        {
          id: "1",
          title: "酵素旅行包(20入/盒)",
          price: 1380,
          src: require("@/assets/img/food/food1-1.png"),
          count: 1,
        },
        {
          id: "2",
          title: "圓圓母湯 (20瓶/箱)",
          price: 1560,
          src: require("@/assets/img/food/food2-1.png"),
          count: 1,
        },
        {
          id: "3",
          title: "POPOLAの酵",
          price: 1550,
          src: require("@/assets/img/food/food3-1.png"),
          count: 1,
        },
        {
          id: "4",
          title: "吶吶的桃花朵朵紅茶包",
          price: 168,
          src: require("@/assets/img/food/food4-1.png"),
          count: 1,
        },
      ],
      changeIndex: 0,
      scrollTop: 0,
      isScrollTop: false,
      getCartItems: [],
      cartSpanNumbers: 0,
    };
  },
  methods: {
    addBtn(item, addIndex) {
      this.changeIndex = addIndex;
      this.getCartItems[addIndex].amount++;
      //處理上方number的數字
      let productNumbers = localStorage.getItem("cartNumbers");
      //取得的productNumbers 型別是string，所以要轉為數字
      productNumbers = parseInt(productNumbers);
      localStorage.setItem("cartNumbers", productNumbers + 1);
      this.cartSpanNumbers = productNumbers + 1;
      axios({
        method: "put",
        url: "https://eva-final-project.herokuapp.com/cart/" + item.id,
        data: {
          item,
        },
      })
        .then((response) => {
          //console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
    minusBtn(item, minusIndex) {
      this.changeIndex = minusIndex;
      let count = this.getCartItems[minusIndex].amount;
      //處理上方number的數字
      let productNumbers = localStorage.getItem("cartNumbers");
      //取得的productNumbers 型別是string，所以要轉為數字
      productNumbers = parseInt(productNumbers);
      localStorage.setItem("cartNumbers", productNumbers - 1);
      this.cartSpanNumbers = productNumbers - 1;
      if (count <= 1) {
        count = 1;
      } else {
        this.getCartItems[minusIndex].amount--;
      }

      axios({
        method: "delete",
        url: "https://eva-final-project.herokuapp.com/cart/" + item.id,
        data: {
          item,
        },
      })
        .then((response) => {
          // console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
    deleteBtn(item, deleteIndex) {
      this.getCartItems.splice(deleteIndex, 1);
      axios({
        method: "delete",
        url: "https://eva-final-project.herokuapp.com/cart/" + item.id,
        //API要求的資料
        data: {
          item,
        },
      })
        .then((response) => {
          //console.log(response)
        })
        .catch((error) => console.log(error));
    },
    handDomShow(key) {
      this[key] = !this[key];
    },
    getSubTotalPrice() {
      let totalPrice = 0;
      this.getCartItems.forEach((o) => {
        totalPrice += o.amount * o.price;
      });
      return totalPrice;
    },
    getShipFee() {
      let shipFee = 0;
      let totalPrice = this.getSubTotalPrice();
      //console.log(totalPrice);
      if (totalPrice < 2000) {
        shipFee = 60;
        return shipFee;
      } else return shipFee;
    },
  },
  mounted() {
    // this.cartSpanNumbers = JSON.parse(localStorage.getItem("cartNumbers")) || 0;
    // this.cartItems = JSON.parse(localStorage.getItem("productsInCart")) || [];
    axios
      .get("https://eva-final-project.herokuapp.com/cart")
      .then((response) => {
        this.getCartItems = response.data;
        //console.log(this.getCartItems);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  created() {
    // this.emitter.on("getData", (msg) => {
    //   this.text = msg;
    //   console.log("shopping", msg);
    // });
    //console.log(this.cartItems);
  },
};
</script>

