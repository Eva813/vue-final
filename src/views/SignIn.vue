<style lang="scss" scoped>
@import "~@/assets/all.scss";

.form {
  max-width: 600px;
  margin: 40px auto;
  background: #f5f5f5;
  box-shadow: 5px 5px 10px 5px #ccc;
  .tab-header {
    height: 50px;
    line-height: 50px;
  }

  .tab-content {
    padding: 20px 40px;
  }
  .form-element {
    margin: 10px 0px;
    input {
      width: 100%;
      padding: 10px 20px;
      border: 1px solid #aaa;
      font-size: 16px;
      background: #f5f5f5;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
    }
    input[type="checkbox"] {
      width: 30px;
      margin: 8px 0px;
      margin-left: -5px;
    }
    label {
      color: #111;
    }
    button {
      margin-top: 5px;
      width: 100%;
      padding: 10px;
      border: none;
      outline: none;
      background: #00acee;
      color: #f5f5f5;
      font-size: 16px;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 5px;
    }
  }
  select {
    color: #555;
    appearance: none;
  }
  .form-option {
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #aaa;
    font-size: 16px;
    background: #f5f5f5;
    border-radius: 5px;
    outline: none;
  }
}

.form .tab-header > div {
  width: 50%;
  float: left;
  text-align: center;
  background: #ddd;
  color: #555;
  cursor: pointer;
}
.form .tab-header > div.active {
  background: #f5f5f5;
  color: #111;
}

// .form .tab-content > div.active {
//   display: block;
// }
// .form .tab-content > div {
//   display: none;
// }
</style>
<template>
  <Navbar></Navbar>
  <section>
    <div class="container justify-content-center">
      <div class="row">
        <div class="col-sm-12">
          <div class="form">
            <div class="tab-header">
              <div
                @click="activetab = 1"
                :class="[activetab === 1 ? 'active' : '']"
              >
                註冊會員
              </div>
              <div
                @click="activetab = 2"
                :class="[activetab === 2 ? 'active' : '']"
              >
                會員登入
              </div>
            </div>
            <div class="tab-content">
              <div class="tab-body active" v-if="activetab === 1">
                <div class="form-element">
                  <input type="text" placeholder="用戶名" />
                </div>
                <div class="form-element">
                  <input type="text" placeholder="Email" />
                </div>
                <div class="form-element">
                  <input type="password" placeholder="密碼" />
                  <span>至少8個字元</span>
                </div>
                <div class="form-element">
                  <select class="form-option" name="sex" id="sex">
                    <option value="" class="ng-binding">性別&nbsp;</option>
                    <option value="男">男</option>
                    　
                    <option value="女">女</option>
                    <option value="nun">不透露</option>
                  </select>
                </div>
                <div class="form-element">
                  <input
                    type="text"
                    onfocus="(this.type='date')"
                    onblur="if(this.value==''){this.type='text'}"
                    placeholder="生日日期"
                  />
                </div>
                <div class="form-element">
                  <button>立即加入</button>
                </div>
              </div>

              <div class="tab-body" v-if="activetab === 2">
                <div class="form-element">
                  <input type="text" placeholder="Email / Username" />
                </div>
                <div class="form-element">
                  <input type="password" placeholder="Password" />
                </div>
                <div class="form-element">
                  <input type="checkbox" id="remember_me" />
                  <label for="remember_me">Remember me</label>
                </div>
                <div class="form-element">
                  <button>Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "SignIn",
  components: {
    Navbar,
  },
  data() {
    return {
      activetab: 1,
    };
  },
};
</script>

