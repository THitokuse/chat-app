<template>
  <view class="search-field">
    <IconContainer></IconContainer>
    <text-input
      placeholder="絞り込み"
    ></text-input>
  </view>
</template>

<script>
import IconContainer from '../../atoms/Button/HorizontalButton/IconContainer'
import TextField from '../../atoms/TextField/TextField'

export default {
  name: "SearchField",
  components: {
    IconContainer,
    TextField
  }
}
</script>

<style></style>
