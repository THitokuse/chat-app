<template>
  <view class="container">
    <Header :headerComponent="'ColumnHeader'"></Header>
  <default-template>
    <text>Column Screen</text>
  </default-template>
  <ImageArea :width="300" :height="250" uri="https://hitokuse.com/blog/wp-content/uploads/2019/06/DSC06289-1024x683.jpg"></ImageArea>
  <DescriptionArea :content="'記事テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト'"></DescriptionArea>
</template>

<script>
import Header from '../../globals/Header';
import ImageArea from '../../atoms/ImageArea/ImageArea'
import DescriptionArea from '../../atoms/DescriptionArea/DescriptionArea';
import { DefaultTemplate } from "../../templates";

export default {
  name: "ColumnScreen",
  components: {
    Header,
    ImageArea,
    DescriptionArea,
    DefaultTemplate
  }
};
</script>

<style></style>
