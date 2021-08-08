<style lang="scss" scoped>
@import "~@/assets/all.scss";

.time-line {
  counter-reset: test 0;
  position: relative;
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
  .shopping-cart-lists {
    border-top: 1px solid #ededed;
    border-right: 1px solid #ededed;
    border-left: 1px solid #ededed;
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
  color: #333;
  font-size: 14px;
  .item_header {
    display: flex;
    padding: 15px;
    // height: 30px;
    background-color: #fff;
    border-bottom: 1px solid #ededed;

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
  .cart-item-container .cart-item:last-child {
    border-bottom: 1px solid #ededed;
  }

  //數量增減按鈕
  .counter-form {
    display: table-cell;
    margin-bottom: 20px;
    input {
      // border: 1px solid #ccc;
      line-height: 24px;
      width: 100%;
      border-left: none;
      border-right: none;
    }
    input[type="text"] {
      padding-left: 10px;
      text-align: center;
      -moz-appearance: textfield;
    }
    // button {
    //   border: 1px solid #ccc;
    // }

    .input-group-btn {
      width: 34px;
    }
    // .btn {
    //   background-color: transparent;
    //   border: 1px solid #ccc; /* Remove borders */
    //   color: #000; /* White text */
    //   padding: 6px 12px; /* Some padding */
    //   line-height: 24px;
    //   font-size: 14px;
    //   cursor: pointer;
    //   &:hover .btn-icon {
    //     color: darken($primary, 20%);
    //   }
    // }
  }
}
.customer-form {
  &-info {
    border: 1px solid #ededed;
  }
  .form-title {
    padding: 10px 15px;
    background-color: #f6f6f6;
    line-height: 26px;
    font-weight: 500;
    margin: 0;
    font-size: 18px;
    border-bottom: 1px solid #ededed;
  }
  &-body {
    padding: 15px 15px 0 15px;
    font-size: 14px;
  }

  .message-form {
    border: 1px solid #ededed;
    &-body {
      padding: 15px 15px 0 15px;
      font-size: 14px;
    }
  }

  .form-group {
    margin-bottom: 15px;
    label {
      margin-bottom: 5px;
    }
  }
  .form-control {
    border: 1px solid #ccc;
    &:focus {
      box-shadow: none;
      border-color: none;
    }
  }
}

.customer-footer {
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
</style>

<template>
  <header class="mb-4">
    <Navbar></Navbar>
  </header>
  <section class="mb-4">
    <div class="container">
      <div class="row">
        <ul class="time-line">
          <li>購物車</li>
          <li class="active-tl">填寫資料</li>
          <li>訂單確認</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="shopping-cart mb-5">
    <div class="container shopping-cart-lists">
      <div class="row shopping-cart-header">
        <h2>購物車</h2>
      </div>
      <div class="row">
        <div class="item_header">
          <div class="col-xs-12 col-sm-3 item_detail">商品資料</div>
          <div class="col-sm-2 discount">優惠</div>
          <div class="col-sm-2 text-center price">單價</div>
          <div class="col-sm-2 text-center quantity">數量</div>
          <div class="col-sm-2 text-center total">小計</div>
          <!-- <div class="col-sm-1 operate"></div> -->
        </div>
      </div>
      <div
        class="cart-item-container"
        v-for="(item, index) in itemList"
        :key="item.id"
      >
        <div class="row cart-item">
          <div class="col-xs-12 col-sm-3 d-flex item-info">
            <a href=""><img :src="item.src" alt="商品圖示" /></a>
            <div class="description">
              <span> {{ item.title }} </span>
            </div>
          </div>
          <div class="col-xs-12 col-sm-2 item-discount"></div>
          <div class="col-xs-12 col-sm-2 item-price text-center">
            <span>NT$</span><span class="price-label">{{ item.price }}</span>
          </div>
          <div class="col-xs-12 col-sm-2 item-quantity text-center">
            <div class="counter-form d-flex">
              <!-- <span class="input-group-btn">
                <button type="button" class="btn" @click="minusBtn(index)">
                  <font-awesome-icon
                    class="btn-icon"
                    :icon="['fas', 'minus']"
                  />
                </button>
              </span> -->
              <input type="text" v-model.number="item.count" />
              <!-- <span class="input-group-btn">
                <button type="button" class="btn" @click="addBtn(index)">
                  <font-awesome-icon class="btn-icon" :icon="['fas', 'plus']" />
                </button>
              </span> -->
            </div>
          </div>
          <div class="col-xs-12 col-sm-2 item-total text-center">
            <span>NT$</span><span>{{ item.price * item.count }}</span>
          </div>
          <!-- <div class="col-xs-12 col-sm-1 item-operate text-center">
            <span>
              <font-awesome-icon
                class="del-icon"
                :icon="['fas', 'trash-alt']"
                @click="deleteBtn(index)"
            /></span>
          </div> -->
        </div>
      </div>
    </div>
  </section>
  <section class="customer-form mb-5">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 ps-0">
          <div class="customer-form-info">
            <h3 class="form-title customer-form-title">顧客資料</h3>
            <div class="customer-form-body">
              <form aname="the-customer-form">
                <div class="form-group">
                  <label for="order-customer-name" class="control-label"
                    >顧客名稱</label
                  >
                  <input
                    id="order-customer-name"
                    type="text"
                    class="form-control"
                    name="order[customer_name]"
                    value=""
                    required=""
                  />
                </div>
                <div class="form-group">
                  <label for="order-customer-email" class="control-label">
                    電子信箱
                  </label>
                  <p>as4598@gmail.com</p>
                </div>
                <div class="form-group">
                  <label for="order-customer-phone" class="control-label"
                    >電話號碼</label
                  >
                  <input
                    id="order-customer-phone"
                    type="tel"
                    name="order[customer_phone]"
                    value=""
                    required=""
                    auto-padding-to-flag="true"
                    class="form-control"
                    ng-pattern="/^\+?[\(\)\-\#\.\s\d]{6,20}$/"
                    ng-minlength="6"
                    ng-maxlength="20"
                  />
                </div>
                <div class="form-group save-customer-phone">
                  <label class="control-label">
                    <input
                      type="checkbox"
                      name="order[save_customer_phone]"
                      checked=""
                    />
                    儲存這個電話號碼
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-6 pe-0">
          <div class="message-form">
            <h3 class="form-title message-form-title">訂單備註</h3>
            <div class="message-form-body">
              <form name="the-message-form">
                <div class="form-group">
                  <textarea
                    id="order-remarks"
                    class="form-control"
                    name="order[order_remarks]"
                    placeholder="有什麼想告訴賣家嗎？"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="customer-footer mb-5">
    <div class="footer container">
      <div class="row">
        <div class="col-sm-6">
          <a class="btn btn-link text-start" href="">&lt; 返回購物車</a>
        </div>
        <div class="col-sm-6">
          <a class="btn btn-success mb-3 btn-checkout">提交訂單</a>
        </div>
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
  data() {
    return {
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
    };
  },
};
</script>

