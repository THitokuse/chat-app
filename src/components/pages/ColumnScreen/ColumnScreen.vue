<template>
  <view class="container">
    <Header :headerComponent="'ColumnHeader'"></Header>
    <text>Column Screen</text>
  </view>
</template>

<script>
import Header from '../../globals/Header'

export default {
  name: "ColumnScreen",
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
