<template>
  <view class="container">
    <Header :headerComponent="'MypageHeader'"></Header>
    <text>Profile Edit Screen</text>
  </view>
</template>

<script>
import Header from '../../globals/Header'

export default {
  name: "ProfileEditScreen",
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
