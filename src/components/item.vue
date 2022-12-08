<script setup>
const props = defineProps({
  item: Object,
});
const item = props.item
</script>

<template>
  <div v-if="item" class="grid grid-cols-3 border rounded-lg p-4 mb-4 w-full text-black">
    <p v-if="(item.first_name && item.last_name)">{{ item.first_name + " " + item.last_name }}</p>
    <p v-if="item.type">{{ item.type }}</p>
    <p v-if="item.created_at">{{ item.created_at }}</p>
  </div>
</template>

<style lang='scss'></style>