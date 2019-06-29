<template>
  <view class="container">
    <Header :headerComponent="'MessageHeader'"></Header>
    <text>Message Index Screen</text>
  </view>
</template>

<script>
import Header from '../../globals/Header'

export default {
  name: "MessageIndexScreen",
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