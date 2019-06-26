<template>
  <view class="button-wrapper">
    <!-- <view v-if="disabled" class="disabled">
      <text>Disabled</text>
    </view> -->
    <touchable-opacity
      :class="[
        type ? type : '',
        disabled ? 'disable' : '',
      ]"
      @click="onPress"
    >
      <text>Button</text>
    </touchable-opacity>
  </view>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: ""
    },
    onPress: {
      type: Function,
      default: function() {}
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.button-wrapper {
  line-height: 1.4;
  padding: 5px 15px;
  margin-top: 8px;
  border-radius: 4px;
}
.disable {
  opacity: 0.3;
}
</style>
