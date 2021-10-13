<style lang="scss" scoped>
@import "~@/assets/all.scss";

.signin-form {
  margin-top: 25px;
}
.form {
  max-width: 600px;
  margin: 40px auto;
  background: #fff;
  box-shadow: 5px 5px 10px 5px #ccc;
  margin-top: 90px;
  @include desk-below {
    @media (max-width: 1023px) {
      margin-top: 65px;
    }
  }
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
      background: #fff;
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
      background: darken($primary, 10%);
      margin-bottom: 5px;
      color: #f5f5f5;
      font-size: 16px;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 5px;
      &:hover {
        background: lighten($primary, 3%);
      }
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
    background: #fff;
    border-radius: 5px;
    outline: none;
  }
  a {
    text-align: center;
  }
}

.form .tab-header > div {
  width: 50%;
  float: left;
  text-align: center;
  background: #f0eded;
  color: #555;
  cursor: pointer;
}
.form .tab-header > div.active {
  background: #fff;
  color: #111;
}

// .form .tab-content > div.active {
//   display: block;
// }
// .form .tab-content > div {
//   display: none;
// }

.password-form {
  position: relative;
}
.password-span {
  position: absolute;
  color: #fff;
  font-weight: 700;
  z-index: 2;
  font-size: 7px;
  top: 51px;
  left: 26px;
}
.po-password-strength-bar {
  border-radius: 2px;
  transition: all 0.2s linear;
  height: 13px;
  margin-top: 8px;
}

.po-password-strength-bar.risky {
  background-color: #f95e68;
  width: 10%;
}

.po-password-strength-bar.guessable {
  background-color: #fb964d;
  width: 32.5%;
  content: "guess";
}

.po-password-strength-bar.weak {
  background-color: #fdd244;
  width: 55%;
}

.po-password-strength-bar.safe {
  background-color: #b0dc53;
  width: 77.5%;
}

.po-password-strength-bar.secure {
  background-color: #35cc62;
  width: 100%;
}
.success {
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  .success-title {
    margin: 400px auto;
  }
}
</style>
<template>
  <Navbar></Navbar>
  <section>
    <div class="signin-form container justify-content-center">
      <div class="row" v-if="hideLogin">
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
              <Form @submit="onSubmit" v-slot="{ errors }">
                <div class="tab-body active" v-if="activetab === 1">
                  <div class="form-element">
                    <Field
                      type="text"
                      name="用戶名"
                      v-model="user.name"
                      placeholder="用戶名"
                    />
                    <span class="invalid-feedback"></span>
                  </div>
                  <div class="form-element">
                    <Field
                      class="form-control"
                      type="text"
                      name="email"
                      placeholder="Email"
                      rules="email|required"
                      v-model="user.email"
                      :class="{
                        'is-invalid': errors['email'],
                        'is-valid': !errors['email'] && user.email != '',
                      }"
                    />

                    <ErrorMessage name="email" class="invalid-feedback" />
                  </div>
                  <div class="form-element password-form">
                    <Field
                      class="form-control"
                      type="password"
                      name="密碼"
                      rules="required|min:9"
                      placeholder="密碼"
                      v-model="user.password"
                      ref="password"
                      :class="{
                        'is-invalid': errors['密碼'],
                        'is-valid': !errors['密碼'] && user.password != '',
                      }"
                    />
                    <ErrorMessage name="密碼" class="invalid-feedback" />
                    <span v-if="score === 1" class="password-span">week</span>
                    <span v-if="score === 2" class="password-span">secure</span>
                    <span v-if="score === 3" class="password-span">strong</span>
                    <password-meter
                      :password="user.password"
                      @score="onScore"
                    />
                    <Field
                      class="form-control"
                      type="password"
                      name="確認密碼"
                      rules="confirmed:@密碼"
                      placeholder="再次輸入密碼"
                      v-model="user.passwordAgain"
                      data-vv-as="password"
                    />
                    <ErrorMessage name="確認密碼" class="invalid-feedback" />
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
                    <Field
                      type="text"
                      onfocus="(this.type='date')"
                      onblur="if(this.value==''){this.type='text'}"
                      name="生日日期"
                      placeholder="生日日期"
                      v-model="user.date"
                    />
                  </div>
                  <div class="form-element">
                    <button @click="toggle">立即加入！</button>
                  </div>
                </div>
              </Form>

              <Form @submit="onSubmit" v-slot="{ errors }">
                <div class="tab-body" v-if="activetab === 2">
                  <div class="form-element">
                    <Field
                      class="form-control"
                      type="text"
                      name="email"
                      placeholder="Email"
                      rules="email|required"
                      v-model="user.email"
                      :class="{
                        'is-invalid': errors['email'],
                        'is-valid': !errors['email'] && user.email != '',
                      }"
                    />
                    <ErrorMessage name="email" class="invalid-feedback" />
                  </div>
                  <div class="form-element">
                    <Field type="password" name="password" placeholder="密碼" />
                  </div>
                  <div class="form-element">
                    <Field type="checkbox" name="記住我" id="remember_me" />
                    <label for="remember_me">記住我</label>
                  </div>
                  <div class="form-element">
                    <button>開始購物吧！</button>
                    <a href="">忘記密碼？</a>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="success" v-if="isShowSuccess">
      <h5 class="success-title">完成註冊啦!!!!!</h5>
    </div>
  </section>

  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import passwordMeter from "vue-simple-password-meter";

export default {
  name: "SignIn",
  components: {
    Navbar,
    Footer,
    passwordMeter,
  },
  data() {
    return {
      activetab: 1,
      user: {
        name: "",
        email: "",
        password: null,
        passwordAgain: null,
        date: "",
      },
      score: null,
      isShowSuccess: false,
      hideLogin: true,
    };
  },
  methods: {
    onSubmit(value) {
      alert(JSON.stringify(values, null, 2));
    },
    onScore(payload) {
      console.log(payload.score); // from 0 to 4
      console.log(payload.strength); // one of : 'risky', 'guessable', 'weak', 'safe' , 'secure'
      this.score = payload.score;
    },
    // checkPassword(value, [target]) {
    //   if (value === ctx.form[target]) {
    //     return true;
    //   }
    //   return "Passwords must match";
    // },
    toggle() {
      this.isShowSuccess = !this.isShowSuccess;
      this.hideLogin = !this.hideLogin;
    },
  },
};
</script>

// if (this.score === 1) {
//         return "weak";
//       } else if (this.score === 2) {
//         return "safe";
//       } else if (this.score === 3) {
//         return "secure";
//       }
