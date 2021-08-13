<template>
  <!-- <component-a></component-a> -->
  {{ text }} <button type="button" @click="pushData">發送至另一個元件</button>
  <hr />
  <component-b></component-b>
</template>

<script>
import componentB from "@/components/Component-b.vue";
import mitt from "mitt";

const emitter = mitt();
export default {
  components: {},
  data() {
    return {
      text: "這有一段話",
    };
  },
  methods: {
    pushData() {
      console.log("send");
      this.emitter.emit("getData", this.text);
    },
  },
};
</script>

<style>
</style>
