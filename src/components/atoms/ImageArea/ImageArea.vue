<template>
  <view class="column-image">
    <image
      :style="{ width: width, height: height}"
      resizeMode='cover'
      :source="{uri:uri}"
    />
  </view>
</template>

<script>
export default {
  name: "ImageArea",
  props: ["uri", "width", "height"]
}
</script>

<style>
</style>
