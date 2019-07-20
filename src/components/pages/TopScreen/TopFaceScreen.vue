<template>
  <view class="container">
    <Header :headerComponent="'TopHeader'"></Header>
    <default-template>
      <text>Top Face Screen</text>
      <personality-card></personality-card>
    </default-template>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";
import PersonalityCard from "../../molecles/PersonalityCard/PersonalityCard";

export default {
  name: "TopFaceScreen",
  components: {
    Header,
    DefaultTemplate,
    PersonalityCard
  }
};
</script>

<style>
.container {
  flex: 1;
  margin-bottom: 30;
}
</style>
