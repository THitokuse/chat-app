<template>
  <view class="container">
    <Header :headerComponent="'MypageHeader'"></Header>
    <default-template>
      <text>Profile Edit Screen</text>
    </default-template>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";

export default {
  name: "ProfileEditScreen",
  components: {
    Header,
    DefaultTemplate
  }
};
</script>

<style>
</style>
