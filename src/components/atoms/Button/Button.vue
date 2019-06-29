<template>
  <view class="button-wrapper">
    <view v-if="disabled" class="disabled-button">
      <text class="disabled-text">
        <slot/>
      </text>
    </view>
    <touchable-opacity
      v-else
      :class="['styled-button', type]"
    >
      <text :class="['button-text', type]">
        <slot/>
      </text>
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
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.styled-button {
  line-height: 1.4;
  padding: 10px;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 8px;
  border-radius: 4px;
  background-color: #20aee5;
}
.button-text {
  color: #ffffff;
}
.flat {
  background-color: #ffffff;
  color: #20aee5;
}
.danger {
  background-color: #fc6356;
  color: #ffffff;
}

.disabled-button {
  line-height: 1.4;
  padding: 10px;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 8px;
  border-radius: 4px;
  background-color: #c7c7c7;
  opacity: 0.3;
}
.disabled-text {
  color: #777777;
}
</style>
