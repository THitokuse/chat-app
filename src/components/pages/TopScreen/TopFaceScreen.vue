<template>
  <view class="container">
    <Header :headerComponent="'TopHeader'"></Header>
    <text>Top Face Screen</text>
  </view>
</template>

<script>
import Header from '../../globals/Header'

export default {
  name: "TopFaceScreen",
  components: {
    Header
  }
};
</script>

<style>
.container {
  flex: 1;
  margin-bottom: 30;
}
</style>
