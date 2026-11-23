<script setup lang="ts">
import { ref } from 'vue'
import { personal } from '~/data/personal'

const emailEl = ref<HTMLElement | null>(null)
const buttonText = ref('Copy email')

function selectEmail() {
  if (!emailEl.value) return
  const range = document.createRange()
  range.selectNodeContents(emailEl.value)
  const selection = window.getSelection()
  selection?.removeAllRanges()
  selection?.addRange(range)
  buttonText.value = 'Press ⌘C / Ctrl+C'
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(personal.email)
    buttonText.value = 'Copied'
    setTimeout(() => (buttonText.value = 'Copy email'), 1600)
  } catch {
    selectEmail()
  }
}
</script>

<template>
  <section id="contact" class="block contact" aria-labelledby="h-contact">
    <div class="contact-text">
      <span class="label">Contact</span>
      <h2 id="h-contact">{{ personal.contact.title }}</h2>
      <p>{{ personal.contact.text }}</p>
    </div>
    <div>
      <div class="mail">
        <code ref="emailEl">{{ personal.email }}</code>
        <button type="button" @click="copyEmail">{{ buttonText }}</button>
      </div>
      <div class="socials">
        <a class="link" :href="`mailto:${personal.email}`">Email</a>
        <ExternalLink v-for="s in personal.socials" :key="s.name" :href="s.url">{{ s.name }}</ExternalLink>
      </div>
    </div>
  </section>
</template>
