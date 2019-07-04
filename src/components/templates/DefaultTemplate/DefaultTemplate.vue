<template>
  <view class="container">
    <slot />
  </view>
</template>

<script>
export default {
  name: "DefaultTemplate"
};
</script>

<style scoped>
.container {
  flex: 1;
}
</style>
