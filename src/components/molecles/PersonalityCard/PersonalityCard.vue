<template>
    <view class="container">
      <view class="box">
        <ImageArea
          :width="170"
          :height="100"
          :uri="person.image"
        />
        <view>
          <view class="above-user-info">
            <text>{{ person.age }}</text>
            <text>{{ person.prefecture }}</text>
          </view>
          <view class="middle-user-info">
            <text>{{ person.name }}</text>
          </view>
          <view class="bottom-user-info">
            <text>{{ person.promotion }}</text>
          </view>
        </view>
      </view>
    </view>
</template>

<script>
import { ImageArea } from "../../atoms"

export default {
  name: "CardComponent",
  components: { ImageArea },
  props: ["person"]

};
</script>

<style>
.box{
  background-color: #f00;
  width: 170px;
  height: 200px;
  margin-top: 10px;
}
.above-user-info{
  flex-direction: row;
}
</style>