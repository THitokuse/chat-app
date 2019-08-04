<template>
  <view class="container">
    <Header :headerComponent="'TopHeader'"></Header>
    <default-template>
      <TopSwipeCard></TopSwipeCard>
    </default-template>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";
import TopSwipeCard from "../../molecles/TopSwipeCard/TopSwipeCard"

export default {
  name: "TopFaceScreen",
  components: {
    Header,
    DefaultTemplate,
    TopSwipeCard
  }
};
</script>

<style>
.container {
  flex: 1;
  margin-bottom: 30;
}
</style>
