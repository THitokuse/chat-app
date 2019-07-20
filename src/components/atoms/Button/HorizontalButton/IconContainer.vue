<template>
  <ionicons :name="name" size=40 :color="color" />
</template>

<script>
import { Ionicons } from "@expo/vector-icons";

export default {
  name: "IconContainer",
  props: ["name", "color"],
  components: {
    Ionicons
  }
}
</script>

<style>
.icon-container {
  flex: 1;
}
</style>
