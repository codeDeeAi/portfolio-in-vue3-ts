<script setup lang="ts">
import { earlierWork } from '~/data/projects'
</script>

<template>
  <section class="block" aria-labelledby="h-earlier">
    <SectionHead id="h-earlier" label="Index" title="Earlier work" />
    <div class="tbl">
      <table>
        <thead>
          <tr><th>Project</th><th>Type</th><th>Stack</th><th>Link</th></tr>
        </thead>
        <tbody>
          <tr v-for="p in earlierWork" :key="p.name">
            <td><b>{{ p.name }}</b><div class="sub">{{ p.summary }}</div></td>
            <td><span class="pill">{{ p.type }}</span></td>
            <td class="st">{{ p.stack }}</td>
            <td>
              <ExternalLink v-if="p.link" :href="p.link.url">{{ p.link.label }}</ExternalLink>
              <span v-else class="sub">Private</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
