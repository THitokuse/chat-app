<template>
  <view class="container">
    <text class="text-color-primary">My Vue Native App</text>
    <button />
    <button disabled />
    </view>
</template>

<script>
import { Button } from "./src/components/atoms";
export default {
  components: { Button }
};
</script>

 
<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
