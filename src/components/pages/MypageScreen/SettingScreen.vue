<template>
  <view class="container">
    <Header :headerComponent="'MypageHeader'"></Header>
    <text>Setting Screen</text>
  </view>
</template>

<script>
import Header from '../../globals/Header'

export default {
  name: "SettingScreen",
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
