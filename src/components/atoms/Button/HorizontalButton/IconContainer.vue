<template>
  <view class="icon-container">
    <ionicons :name="name" size=40 color="green" />
  </view>
</template>

<script>
import { Ionicons } from "@expo/vector-icons";

export default {
  name: "IconContainer",
  props: ["name"],
  components: {
    Ionicons
  }
}
</script>

<style>
.icon-container {
  flex: 1;
}
</style>
