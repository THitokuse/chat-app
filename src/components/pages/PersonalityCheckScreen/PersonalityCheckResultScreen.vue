<template>
  <view class="container">
    <Header :headerComponent="'PersonalityCheckHeader'"></Header>
    <default-template>
      <text>Personality Check Result Screen</text>
    </default-template>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";

export default {
  name: "PersonalityCheckResultScreen",
  components: {
    Header,
    DefaultTemplate
  }
};
</script>

<style>
.container {
  flex: 1;
  margin-bottom: 30;
}
</style>
