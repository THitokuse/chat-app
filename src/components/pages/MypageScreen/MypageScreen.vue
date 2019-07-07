<template>
  <view class="container">
    <Header :headerComponent="'MypageHeader'"></Header>
  <default-template>
    <text>Mypage Screen</text>
  </default-template>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";

export default {
  name: "MypageScreen",
  components: {
    Header,
    DefaultTemplate
  }
};
</script>

<style>
</style>
