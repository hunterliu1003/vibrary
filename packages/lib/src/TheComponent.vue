<script setup lang="ts">
import { PropType } from "vue";
import { useMouse } from "@vueuse/core";

const props = defineProps({
  asdf: { type: String as PropType<string>, default: "" },
});
const { x, y } = useMouse();

type asdf = {
  key: string;
};

const a: asdf = {
  key: "123",
};
</script>

<template>
  <div class="the-component">
    <h1>This is a component use @vueuse/core</h1>
    <span>x: {{ x }}, y: {{ y }}</span>
    <p>{{ a.key }}</p>
    <p>{{ props.asdf }}</p>
  </div>
</template>

<style scoped>
.the-component {
  color: red;
}
</style>
