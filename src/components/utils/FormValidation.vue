<script setup lang="ts">
const props = defineProps({
    name: { type: String, required: true },
    errorBag: { type: Object, required: true }
});
</script>
<template>
    <p class="text-sm text-red-600 mt-1" v-if="props.errorBag.name === props.name">{{ props.errorBag.value }}</p>
</template>