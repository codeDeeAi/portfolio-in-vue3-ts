<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { personal, results } from '~/data/personal'

const phrases = personal.heroPhrases
const phrase = ref(phrases[0] ?? '')
let timer: ReturnType<typeof setTimeout> | undefined

// Deletes the current phrase, types the next, pauses, repeats.
// The server renders the first phrase, so the headline reads complete without JS.
function startTyping() {
  let index = 0
  let deleting = true

  const tick = () => {
    if (deleting) {
      phrase.value = phrase.value.slice(0, -1)
      if (!phrase.value) {
        deleting = false
        index = (index + 1) % phrases.length
      }
      timer = setTimeout(tick, 28)
      return
    }
    const target = phrases[index] ?? ''
    phrase.value = target.slice(0, phrase.value.length + 1)
    if (phrase.value === target) {
      deleting = true
      timer = setTimeout(tick, 2600)
    } else {
      timer = setTimeout(tick, 55 + Math.random() * 45)
    }
  }

  timer = setTimeout(tick, 3200)
}

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduced && phrases.length > 1) startTyping()
})

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <section id="top" class="hero" aria-labelledby="h-hero">
    <div class="hero-meta">
      <span class="status"><i aria-hidden="true" />{{ personal.status }}</span>
      <span class="label">{{ personal.locationLine }}</span>
    </div>

    <h1 id="h-hero" :aria-label="`I build the ${phrases[0]} that products run on.`">
      <span aria-hidden="true">I build the <em>{{ phrase }}</em><span class="caret" /> that products run on.</span>
    </h1>

    <p class="lede">{{ personal.lede }}</p>

    <div class="actions">
      <a class="btn solid" href="#work">Read the case studies</a>
      <a class="btn" :href="personal.resumeUrl" target="_blank" rel="noopener noreferrer">Resume</a>
    </div>

    <ul class="results" aria-label="Results">
      <li v-for="r in results" :key="r.label">
        <span :class="['v', { sig: r.highlight }]">{{ r.value }}</span>
        <span class="k">{{ r.label }}</span>
        <span class="src">{{ r.source }}</span>
      </li>
    </ul>
  </section>
</template>
