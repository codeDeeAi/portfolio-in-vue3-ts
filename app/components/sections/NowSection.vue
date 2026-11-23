<script setup lang="ts">
import { currentRoles } from '~/data/experience'
</script>

<template>
  <section class="block" aria-labelledby="h-now">
    <SectionHead id="h-now" label="Right now" :title="currentRoles.heading" :text="currentRoles.text" />
    <div class="now">
      <article class="now-primary">
        <span class="since">{{ currentRoles.primary.since }}</span>
        <h3>{{ currentRoles.primary.company }}</h3>
        <span class="role">{{ currentRoles.primary.role }}</span>
        <p class="sub">{{ currentRoles.primary.summary }}</p>
      </article>
      <div class="now-also">
        <span class="label">Also current</span>
        <div v-for="r in currentRoles.also" :key="r.company">
          <b>{{ r.company }}</b>
          <span class="since">{{ r.since }}</span>
          <span class="role">{{ r.role }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
