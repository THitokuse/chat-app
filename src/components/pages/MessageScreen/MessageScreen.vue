<template>
  <view class="container">
    <Header :headerComponent="'MessageHeader'"></Header>
    <text>Message Screen</text>
  </view>
</template>

<script>
import Header from '../../globals/Header'

export default {
  name: "MessageScreen",
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
