<script setup>
const props = defineProps({
  item: Object,
});

const title = props.item.title;
const type = props.item.type;
const buttonText = props.item.button.text;
const buttonFunction = props.item.button.function;
</script>

<template>
  <div class="mb-8">
    <h3 v-if="title" class="mb-4">{{ title }}</h3>
    <div class="card mb-4">
      <p v-if="type" class="mb-2">
        Vous n'avez pas encore ajouté de {{ type }}
      </p>
      <div v-if="buttonText" class="button" @click="buttonFunction">
        {{ buttonText }}
      </div>
    </div>
  </div>
</template>

<style lang='scss'></style>