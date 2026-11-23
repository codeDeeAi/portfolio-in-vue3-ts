<script setup lang="ts">
defineProps<{
  id: string
  label: string
  title: string
  text?: string
}>()
</script>

<template>
  <div class="head">
    <span class="label">{{ label }}</span>
    <h2 :id="id">{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
  </div>
</template>
