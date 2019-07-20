<template>
  <view>
    <HorizontalButton :icon="'md-checkmark-circle'" :name="'プロフィール'"></HorizontalButton>
    <HorizontalButton :icon="'md-checkmark-circle'" :name="'アカウント'"></HorizontalButton>
    <HorizontalButton :icon="'md-checkmark-circle'" :name="'プライバシー管理'"></HorizontalButton>
    <HorizontalButton :icon="'md-checkmark-circle'" :name="'アカウント引継'"></HorizontalButton>
    <HorizontalButton :icon="'md-checkmark-circle'" :name="'スタンプ'"></HorizontalButton>
    <HorizontalButton :icon="'md-checkmark-circle'" :name="'着せ替え'"></HorizontalButton>
  </view>
</template>

<script>
import { HorizontalButton } from "../../../molecles";

export default {
  name: "HorizontalButtonList",
  components: {
    HorizontalButton
  }
}
</script>

<style></style>
