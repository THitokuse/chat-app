<template>
  <view class="container">
    <Header :headerComponent="'TopHeader'"></Header>
  <default-template>
    <text>Top Personality Screen</text>
  </default-template>
</template>

<script>
import Header from '../../globals/Header';
import { DefaultTemplate } from "../../templates";

export default {
  name: "TopPersonalityScreen",
  components: {
    Header,
    DefaultTemplate
  }
};
</script>

<style>
</style>