<template>
  <view class="container">
    <Header :headerComponent="'PersonalityCheckHeader'"></Header>
    <text>Personality Check Confirm Screen</text>
  </view>
</template>

<script>
import Header from '../../globals/Header'

export default {
  name: "PersonalityCheckConfirmScreen",
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
