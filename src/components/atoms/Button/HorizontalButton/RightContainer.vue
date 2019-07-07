<template>
  <view class="right-container">
    <ionicons name="ios-arrow-forward" size=40 color="black" />
  </view>
</template>

<script>
import { Ionicons } from "@expo/vector-icons";

export default {
  name: "RightContainer",
  components: {
    Ionicons
  }
}
</script>

<style>
.right-container {
  padding-right: 5; 
}
</style>
