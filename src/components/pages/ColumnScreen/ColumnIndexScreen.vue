<template>
  <view class="container">
    <Header :headerComponent="'ColumnHeader'"></Header>
    <default-template>
      <text>Column Index Screen</text>
    </default-template>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";

export default {
  name: "ColumnIndexScreen",
  components: {
    Header,
    DefaultTemplate
  }
};
</script>

<style>
</style>
