<template>
  <view class="container">
    <Header :headerComponent="'PersonalityCheckHeader'"></Header>
    <default-template>
      <text>Personality Check Screen</text>
    </default-template>
  </view>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";

export default {
  name: "PersonalityCheckScreen",
  components: {
    Header,
    DefaultTemplate
  }
};
</script>

<style>
</style>
