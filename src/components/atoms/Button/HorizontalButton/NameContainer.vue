<template>
  <view class="name-container">
    <text class="button-text">{{ name }}</text>
  </view>
</template>

<script>
export default {
  name: "NameContainer",
  props: ["name"]
}
</script>

<style>
.name-container {
  flex: 2;
  padding-top: 15;

}
</style>
