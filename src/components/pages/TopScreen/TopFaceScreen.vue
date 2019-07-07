<template>
  <view class="container">
    <Header :headerComponent="'TopHeader'"></Header>
    <text>Top Face Screen</text>
    <HorizontalButton></HorizontalButton>
  </view>
</template>

<script>
import Header from '../../globals/Header'
import HorizontalButton from '../../atoms/Button/HorizontalButton'

export default {
  name: "TopFaceScreen",
  components: {
    Header,
    HorizontalButton
  }
};
</script>

<style>
.container {
  flex: 1;
  margin-bottom: 30;
}
</style>
