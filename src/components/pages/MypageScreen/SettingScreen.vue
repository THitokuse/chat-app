<template>
  <view class="container">
    <Header :headerComponent="'MypageHeader'"></Header>
  <default-template>
    <text>Setting Screen</text>
  </default-template>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";

export default {
  name: "SettingScreen",
  components: {
    Header,
    DefaultTemplate
  }
};
</script>

<style>
</style>
