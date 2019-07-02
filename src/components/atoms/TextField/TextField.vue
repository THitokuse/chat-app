<template>
  <view>
    <view :class="['text-field-wrapper', error ? 'error-text-field' : '']">
      <text :class="['label', error ? 'error-label' : '']">{{ label }}</text>
      <text-input v-model="text" class="text-field" autoCapitalize="none" :editable="editable"></text-input>
    </view>
    <text v-if="error" class="error-text">{{ error }}</text>
  </view>
</template>

<script>
export default {
  name: "TextField",
  props: {
    value: {
      type: String
    },
    label: {
      type: String,
      default: ""
    },
    editable: {
      type: Boolean,
      default: true
    },
    error: {
      type: String,
      default: ""
    },
    update: {
      type: Function
    }
  },
  computed: {
    text: {
      get() {
        return this.value;
      },
      set(newVal) {
        if (this.value !== newVal) this.update(newVal);
      }
    }
  }
};
</script>

<style scoped>
.text-field-wrapper {
  border-bottom-color: #c7c7c7;
  border-bottom-width: 1px;
}
.error-text-field {
  border-bottom-color: #fc6356;
}
.label {
  color: #5e5e5e;
  font-size: 15px;
  line-height: 30px;
}
.error-label {
  color: #fc6356;
}
.text-field {
  height: 30px;
  font-size: 16px;
}
.error-text {
  color: #fc6356;
  font-size: 12px;
}
</style>
