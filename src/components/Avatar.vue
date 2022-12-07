<script setup>
import { ref } from "vue";
import { reactive } from "vue";

const props = defineProps({
  user: Object,
});

const state = reactive({
  loading: false,
  disabled: false,
  error: undefined,
  show: true,
});

const user = props.user;
</script>

<template>
  <div
    class="
      relative
      bg-primary-500
      w-12
      h-12
      rounded-full
      flex
      items-center
      justify-center
      text-white
      font-bold
      capitalize
      pointer
    "
    @click="state.show = !state.show"
  >
    <span>{{ user.email[0] }}</span>
  </div>
</template>

<style lang='scss'></style>