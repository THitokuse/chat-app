<template>
  <view class="container">
    <Header :headerComponent="'MypageHeader'"></Header>
    <default-template>
      <text>Mypage Screen</text>
    </default-template>
    <HorizontalButtonList></HorizontalButtonList>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import { HorizontalButtonList } from '../../organisms';
import { DefaultTemplate } from "../../templates";

export default {
  name: "MypageScreen",
  components: {
    Header,
    HorizontalButtonList,
    DefaultTemplate
  }
};
</script>

<style>
</style>
