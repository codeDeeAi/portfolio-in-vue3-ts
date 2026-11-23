<script setup lang="ts">
import { personal } from '~/data/personal'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="wrap">
      <span class="label">© {{ year }} {{ personal.name }}</span>
      <span class="label">{{ personal.education }}</span>
    </div>
  </footer>
</template>
