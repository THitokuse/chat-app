<template>
  <view class="column-image">
    <image
      :style="{ width: 300, height: 250}"
      resizeMode='contain'
      :source="{uri:uri}"
    />
  </view>
</template>

<script>
export default {
  name: "ImageArea",
  props: ["uri"]
}
</script>

<style>
.column-image {
  padding-horizontal: 50;
}
</style>
