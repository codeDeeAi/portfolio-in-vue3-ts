<script setup lang="ts">
import { coreStack, stackGroups } from '~/data/skills'

const [lead, ...rest] = coreStack
</script>

<template>
  <section id="stack" class="block" aria-labelledby="h-stack">
    <SectionHead id="h-stack" label="Stack" title="What I reach for" />
    <div class="stack">
      <div class="core">
        <span class="label">Core</span>
        <p><b>{{ lead }}</b> · {{ rest.join(' · ') }}</p>
      </div>
      <div v-for="g in stackGroups" :key="g.label">
        <span class="label">{{ g.label }}</span>
        <p>{{ g.items.join(' · ') }}</p>
      </div>
    </div>
  </section>
</template>
