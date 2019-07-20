<template>
    <view class="container">
      <view class="box">
        <ImageArea :width="50" :height="50" uri="https://facebook.github.io/react-native/docs/assets/favicon.png"></ImageArea>
        <view>
          <view class="above-user-info">
            <text>445</text>
            <text>滋賀</text>
          </view>
          <view class="middle-user-info">
            <text>長谷川たいこ</text>
          </view>
          <view class="bottom-user-info">
            <text>長谷川たいこで〜す！好きな事は福神漬けの直食いで〜〜す！</text>
          </view>
        </view>
      </view>
    </view>
</template>

<script>
import ImageArea from "../../atoms/ImageArea/ImageArea"

export default {
  name: "CardComponent",
  components: {ImageArea}

};
</script>

<style>
.box{
  background-color: #f00;
  height: 150px;
  width: 100px;
  margin: 10px 10px 10px 10px;
}
.above-user-info{
  flex-direction: row;
}
</style>