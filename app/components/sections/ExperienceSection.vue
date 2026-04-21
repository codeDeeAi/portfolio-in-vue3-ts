<script setup lang="ts">
import { usePreferencesStore } from '~/stores/preferences'
import { experiences } from '~/data/experience'

const store = usePreferencesStore()
</script>

<template>
  <section id="experience" class="py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        title="Experience"
        subtitle="5+ years across 3 continents, from intern to team lead"
      />

      <div class="relative">
        <TimelineItem
          v-for="(exp, index) in experiences"
          :key="exp.id"
          :experience="exp"
          :isLast="index === experiences.length - 1"
        />
      </div>
    </div>
  </section>
</template>
