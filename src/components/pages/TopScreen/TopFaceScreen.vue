<template>
  <view class="container">
    <Header :headerComponent="'TopHeader'"></Header>
    <default-template>
      <text>Top Face Screen</text>
    </default-template>
    <HorizontalButton></HorizontalButton>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import HorizontalButton from '../../atoms/Button/HorizontalButton';
import { DefaultTemplate } from "../../templates";

export default {
  name: "TopFaceScreen",
  components: {
    Header,
    HorizontalButton,
    DefaultTemplate
  }
};
</script>

<style>
</style>
