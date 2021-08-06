<style lang="scss" scoped>
@import "~@/assets/all.scss";

.shopping-cart {
  color: #333;
  font-size: 14px;
  .item_header {
    display: flex;
    // margin: 0 auto;
    padding: 15px;
    // height: 30px;
    background-color: #fff;

    > div {
      line-height: 30px;
    }
  }
  .cart-item {
    padding: 15px;
  }
  ///
  .item-info {
    img {
      width: 60px;
      height: 60px;
      border-radius: 3px;
    }
  }
}
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
  input[type="text"] {
    padding: 0px;
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
  }
}
</style>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <section class="shopping-cart">
    <div class="container">
      <div class="header">
        <h2>購物車</h2>
      </div>
      <div class="row">
        <div class="item_header justify-content-center">
          <div class="col-xs-12 col-sm-3 item_detail">商品資料</div>
          <div class="col-sm-2 discount">優惠</div>
          <div class="col-sm-2 text-center price">單價</div>
          <div class="col-sm-2 text-center quantity">數量</div>
          <div class="col-sm-2 text-center total">小計</div>
          <div class="col-sm-1 operate">操作(del)</div>
        </div>
      </div>
      <div
        class="cart-item-container"
        v-for="(item, index) in itemList"
        :key="item.id"
      >
        <div class="row cart-item justify-content-center">
          <div class="col-xs-12 col-sm-3 d-flex item-info">
            <a href=""
              ><img src="@/assets/img/food/totmatonoodle1.png" alt=""
            /></a>
            <div class="description">
              <span> 【NEW】雜炊湯粥-五穀雜糧 </span>
            </div>
          </div>
          <div class="col-xs-12 col-sm-2 item-discount"></div>
          <div class="col-xs-12 col-sm-2 item-price text-center">
            <span class="price-label">NT$98</span>
          </div>
          <div class="col-xs-12 col-sm-2 item-quantity text-center">
            <div class="counter-form d-flex">
              <span class="input-group-btn">
                <button type="button" class="btn" @click="minusBtn()">
                  <font-awesome-icon
                    class="btn-icon"
                    :icon="['fas', 'minus']"
                  />
                </button>
              </span>
              <input type="number" v-model.number="quantity" />
              <span class="input-group-btn">
                <button type="button" class="btn" @click="addBtn()">
                  <font-awesome-icon class="btn-icon" :icon="['fas', 'plus']" />
                </button>
              </span>
            </div>
          </div>
          <div class="col-xs-12 col-sm-2 item-total text-center">
            <span>total</span>
          </div>
          <div class="col-xs-12 col-sm-1 item-operate text-center">
            <span>operate</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "ShoppingCart",
  components: {
    Navbar,
  },
  data() {
    return {
      itemList: [
        {
          id:'1',
          title: "酵素旅行包(20入/盒)",
          price: 1380,
          src: require("@/assets/img/food/food1-1.png"),
          count:1,
        },
        { 
          id:'2',
          title: "圓圓母湯 (20瓶/箱)",
          price: 1560,
          src: require("@/assets/img/food/food2-1.png"),
          count:1,
        },
        { 
          id:'3',
          title: "POPOLAの酵",
          price: 1550,
          src: require("@/assets/img/food/food3-1.png"),
          count:1,
        },
        { 
          id:'4',
          title: "吶吶的桃花朵朵紅茶包",
          price: 168,
          src: require("@/assets/img/food/food4-1.png"),
          count:1,
        },
        
      ],
    }
  },
};
</script>

