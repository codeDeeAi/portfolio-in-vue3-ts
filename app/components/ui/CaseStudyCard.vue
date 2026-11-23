<script setup lang="ts">
import type { CaseStudy } from '~/data/caseStudies'

defineProps<{ study: CaseStudy }>()
</script>

<template>
  <article :id="study.id" class="case">
    <div class="case-side">
      <span class="label">{{ study.meta }}</span>
      <h3>{{ study.title }}</h3>
      <p class="case-summary">{{ study.summary }}</p>
      <ul class="chips" aria-label="Stack">
        <li v-for="s in study.stack" :key="s">{{ s }}</li>
      </ul>
      <ExternalLink v-if="study.link" :href="study.link.url">{{ study.link.label }}</ExternalLink>
    </div>

    <div class="case-body">
      <div class="rows">
        <div v-for="row in study.rows" :key="row.label" :class="{ result: row.result }">
          <span class="label">{{ row.label }}</span>
          <ul v-if="row.items" class="bullets">
            <li v-for="item in row.items" :key="item">{{ item }}</li>
          </ul>
          <p v-else>{{ row.text }}</p>
        </div>
      </div>
      <NimiDiagram v-if="study.diagram === 'nimi'" />
    </div>
  </article>
</template>
