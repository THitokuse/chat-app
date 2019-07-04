<template>
  <safe-area-view class="container" :forceInset="forceInset">
    <tab-nav />
  </safe-area-view>
</template>

<script>
import Vue from "vue-native-core";
import { SafeAreaView } from "vue-native-router";
import { tabNav } from "./src/navigation/navigation.js";

export default {
  components: { SafeAreaView, tabNav },
  data() {
    return {
      forceInset: { top: "always", bottom: "never" }
    };
  }
};
</script>

<style>
.container {
  background-color: white;
  flex: 1;
  justify-content: space-between;
}
</style>
