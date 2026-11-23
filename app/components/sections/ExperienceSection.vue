<script setup lang="ts">
import { experiences } from '~/data/experience'
import { speakingEngagements } from '~/data/speaking'
</script>

<template>
  <section id="experience" class="block" aria-labelledby="h-exp">
    <SectionHead id="h-exp" label="Experience" title="Where I've worked" />
    <div class="tbl">
      <table>
        <thead>
          <tr><th>When</th><th>Company</th><th>Role</th><th>Where</th></tr>
        </thead>
        <tbody>
          <tr v-for="e in experiences" :key="e.company + e.period">
            <td class="when">{{ e.period }}</td>
            <td><b>{{ e.company }}</b><div v-if="e.note" class="sub">{{ e.note }}</div></td>
            <td>{{ e.role }}</td>
            <td class="sub">{{ e.location }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-for="talk in speakingEngagements" :key="talk.id" class="sub">
      Speaking: "{{ talk.topic }}", {{ talk.organisation }}, {{ talk.location.split(',')[0] }}, {{ talk.date }}.
      <ExternalLink v-if="talk.recordingUrl" :href="talk.recordingUrl">Recording</ExternalLink>
    </p>
  </section>
</template>
