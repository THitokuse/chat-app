<template>
  <view class="container">
    <Header :headerComponent="'MypageHeader'"></Header>
    <default-template>
      <text>Mypage Screen</text>
    </default-template>
    <HorizontalButton></HorizontalButton>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import HorizontalButton from '../../organisms/HorizontalButtonList/MypageSetting/HorizontalButtonList';
import { DefaultTemplate } from "../../templates";

export default {
  name: "MypageScreen",
  components: {
    Header,
    HorizontalButton,
    DefaultTemplate
  }
};
</script>

<style>
</style>
