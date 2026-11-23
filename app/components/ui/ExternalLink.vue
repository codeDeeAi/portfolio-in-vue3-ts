<script setup lang="ts">
defineProps<{ href: string }>()
</script>

<template>
  <a class="link" :href="href" target="_blank" rel="noopener noreferrer"><slot /> <span class="arr" aria-hidden="true">↗</span></a>
</template>
