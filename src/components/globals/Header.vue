<template>
  <view class="header">
    <component :is="headerComponent"></component>
  </view>
</template>

<script>
import TopHeader from '../molecles/Headers/TopHeader'
import MypageHeader from '../molecles/Headers/MypageHeader'
import MessageHeader from '../molecles/Headers/MessageHeader'
import PersonalityCheckHeader from '../molecles/Headers/PersonalityCheckHeader'
import ColumnHeader from '../molecles/Headers/ColumnHeader'

export default {
  name: "Header",
  components: {
    TopHeader,
    MypageHeader,
    MessageHeader,
    PersonalityCheckHeader,
    ColumnHeader
  },
  props: [
    "headerComponent"
  ]
};
</script>

<style>
.header {
  background-color: #20AEE5;
  padding: 20;
}
</style>
