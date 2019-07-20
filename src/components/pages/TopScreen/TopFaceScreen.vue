<template>
  <view class="container">
    <Header :headerComponent="'TopHeader'"></Header>
    <default-template>
      <text>Top Face Screen</text>
    </default-template>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";
import CardComponent from "./CardComponent";

export default {
  name: "TopFaceScreen",
  components: {
    Header,
    DefaultTemplate,
    CardComponent
  }
};
</script>

<style>
.container {
  flex: 1;
  margin-bottom: 30;
}
</style>
