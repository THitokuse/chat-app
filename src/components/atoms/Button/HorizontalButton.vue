<template>
  <view>
    <view class="button-wrapper">
      <IconContainer :name="'md-checkmark-circle'"></IconContainer>
      <NameContainer :name="'プロフィール'"></NameContainer>
      <RightContainer></RightContainer>
    </view>
    <view class="separator"/>
    <view class="button-wrapper">
      <IconContainer :name="'md-checkmark-circle'"></IconContainer>
      <NameContainer :name="'アカウント'"></NameContainer>
      <RightContainer></RightContainer>
    </view>
    <view class="separator"/>
    <view class="button-wrapper">
      <IconContainer :name="'md-checkmark-circle'"></IconContainer>
      <NameContainer :name="'プライバシー管理'"></NameContainer>
      <RightContainer></RightContainer>
    </view>
    <view class="separator"/>
    <view class="button-wrapper">
      <IconContainer :name="'md-checkmark-circle'"></IconContainer>
      <NameContainer :name="'アカウント引継'"></NameContainer>
      <RightContainer></RightContainer>
    </view>
    <view class="separator"/>
    <view class="button-wrapper">
      <IconContainer :name="'md-checkmark-circle'"></IconContainer>
      <NameContainer :name="'スタンプ'"></NameContainer>
      <RightContainer></RightContainer>
    </view>
    <view class="separator"/>
    <view class="button-wrapper">
      <IconContainer :name="'md-checkmark-circle'"></IconContainer>
      <NameContainer :name="'着せ替え'"></NameContainer>
      <RightContainer></RightContainer>
    </view>
    <view class="separator"/>
  </view>
</template>

<script>
import IconContainer from './HorizontalButton/IconContainer';
import NameContainer from './HorizontalButton/NameContainer';
import RightContainer from './HorizontalButton/RightContainer';

export default {
  name: "HorizontalButton",
  components: {
    IconContainer,
    NameContainer,
    RightContainer
  }
}
</script>

<style>
.button-wrapper {
  padding: 10;
  flex-direction: row;
}
.left-container {
  flex: 1;
}
.center-container {
  flex: 2;
  padding-top: 15;

}
.right-container {
  padding-right: 5; 
}
.button-text {
  font-size: 20px;
}
.separator {
  height: 1;
  background-color: #DDDDDD;
}
</style>
