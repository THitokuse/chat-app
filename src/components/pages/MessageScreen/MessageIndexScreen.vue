<template>
  <view class="container">
    <Header :headerComponent="'MessageHeader'"></Header>
    <default-template>
      <text>Message Index Screen</text>
    </default-template>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";

export default {
  name: "MessageIndexScreen",
  components: {
    Header,
    DefaultTemplate
  }
};
</script>

<style>
</style>