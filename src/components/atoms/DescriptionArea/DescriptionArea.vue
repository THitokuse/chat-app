<template>
  <text class="description">
    {{ content }}
  </text>  
</template>

<script>
export default {
  name: "DescriptionArea",
  props: ["content"]
}
</script>

<style>
.description {
  padding-horizontal: 40;
}
</style>
