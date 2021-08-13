<template>
  <div>
    {{ text }} <button type="button" @click="pushData">發送至另一個元件</button>
  </div>
</template>

<script>
export default {
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
