<template>
  <view class="container">
    <Header :headerComponent="'MessageHeader'"></Header>
    <default-template>
      <text>Timeline Screen</text>
    </default-template>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";

export default {
  name: "TimelineScreen",
  components: {
    Header,
    DefaultTemplate
  }
};
</script>

<style>
</style>
