<template>
  <view class="header">
    <component :is="headerComponent"></component>
  </view>
</template>

<script>
import TopHeader from '../molecles/TopHeader'
import MypageHeader from '../molecles/MypageHeader'
import MessageHeader from '../molecles/MessageHeader'
import PersonalityCheckHeader from '../molecles/PersonalityCheckHeader'
import ColumnHeader from '../molecles/ColumnHeader'

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
  padding: 10px;
}
</style>
