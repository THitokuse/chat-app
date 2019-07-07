<template>
  <view>
    <view class="button-wrapper">
      <IconContainer></IconContainer>
      <NameContainer></NameContainer>
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
