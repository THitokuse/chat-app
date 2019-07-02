<template>
  <view>
    <view :class="['text-area-wrapper', error ? 'error-text-area' : '']">
      <text :class="['label', error ? 'error-label' : '']">{{ label }}</text>
      <text-input
        multiline
        v-model="text"
        class="text-area"
        autoCapitalize="none"
        :editable="editable"
        :style="{ height: height }"
      >
      </text-input>
    </view>
    <text v-if="error" class="error-text">{{ error }}</text>
  </view>
</template>

<script>
export default {
  name: "TextArea",
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
    },
    rowSpan: {
      type: Number,
      default: 5
    }
  },
  data: function() {
    return {
      height: this.rowSpan * 20
    };
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
.text-area-wrapper {
  border-bottom-color: #c7c7c7;
  border-bottom-width: 1px;
}
.error-text-area {
  border-bottom-color: #fc6356;
}
.label {
  color: #5e5e5e;
  font-size: 15px;
  line-height: 20px;
}
.error-label {
  color: #fc6356;
}
.text-area {
  font-size: 16px;
}
.error-text {
  color: #fc6356;
  font-size: 12px;
}
</style>
