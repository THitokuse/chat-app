<template>
  <view class="icon-container">
    <ionicons name="md-checkmark-circle" size=40 color="green" />
  </view>
</template>

<script>
import { Ionicons } from "@expo/vector-icons";

export default {
  name: "IconContainer",
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
