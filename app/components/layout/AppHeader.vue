<script setup lang="ts">
const links = [
  { label: 'Work', href: '#work' },
  { label: 'Products', href: '#products' },
  { label: 'Experience', href: '#experience' },
]
</script>

<template>
  <header class="site-header">
    <div class="wrap">
      <a class="mark" href="#top">Adeola Bada <span>/ backend</span></a>
      <nav class="nav" aria-label="Sections">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
        <a class="cta" href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>
