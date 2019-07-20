<template>
  <view>
    <view class="button-wrapper">
      <view class="left-container">
        <IconContainer :name="icon" :color="'green'"></IconContainer>
      </view>
      <view class="center-container">
        <NameContainer :name="name"></NameContainer>
      </view>
      <view class="right-container">
        <IconContainer :name="'ios-arrow-forward'" :color="'black'"></IconContainer>
      </view>
    </view>
    <view class="separator"/>
  </view>
</template>

<script>
import IconContainer from '../../../atoms/Button/HorizontalButton/IconContainer';
import NameContainer from '../../../atoms/Button/HorizontalButton/NameContainer';

export default {
  name: "HorizontalButton",
  props: ["icon", "name"],
  components: {
    IconContainer,
    NameContainer
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
