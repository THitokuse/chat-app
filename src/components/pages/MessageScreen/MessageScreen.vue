<template>
  <view class="container">
    <Header :headerComponent="'MessageHeader'"></Header>
    <default-template>
      <text>Message Screen</text>
    </default-template>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";

export default {
  name: "MessageScreen",
  components: {
    Header,
    DefaultTemplate
  }
};
</script>

<style>
</style>
