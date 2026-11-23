<script setup lang="ts">
import { caseStudies } from '~/data/caseStudies'
</script>

<template>
  <section id="work" class="block" aria-labelledby="h-work">
    <SectionHead
      id="h-work"
      label="Selected work"
      title="Case studies"
      text="What each product needed, what I built, and what it shows."
    />
    <div>
      <CaseStudyCard v-for="study in caseStudies" :key="study.id" :study="study" />
    </div>
  </section>
</template>
