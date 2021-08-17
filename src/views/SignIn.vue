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
</style>
<template>
  <Navbar></Navbar>
  <section>
    <div class="signin-form container justify-content-center">
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
                  <div class="form-element">
                    <Field
                      class="form-control"
                      type="password"
                      name="password"
                      rules="required|min:8"
                      placeholder="密碼"
                      v-model="user.password"
                      :class="{
                        'is-invalid': errors['password'],
                        'is-valid': !errors['password'] && user.password != '',
                      }"
                    />
                    <ErrorMessage name="password" class="invalid-feedback" />
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
                    <button>立即加入！</button>
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
  </section>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "SignIn",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      activetab: 1,
      user: {
        name: "",
        email: "",
        password: "",
        date="",
      },
    };
  },
  methods: {
    onSubmit(value) {
      alert(JSON.stringify(values, null, 2));
    },
  },
};
</script>

