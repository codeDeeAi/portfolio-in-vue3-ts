<script setup lang="ts">
import { products, productsIntro } from '~/data/projects'
</script>

<template>
  <section id="products" class="block" aria-labelledby="h-products">
    <SectionHead id="h-products" label="Products" title="Things I build and run myself" :text="productsIntro" />
    <div class="products">
      <article v-for="p in products" :key="p.name" class="product">
        <span :class="['tag', p.status]"><i aria-hidden="true" />{{ p.statusLabel }}</span>
        <h3>{{ p.name }}</h3>
        <p>{{ p.summary }}</p>
        <ul class="bullets">
          <li v-for="f in p.features" :key="f">{{ f }}</li>
        </ul>
        <ul class="chips" aria-label="Stack">
          <li v-for="s in p.stack" :key="s">{{ s }}</li>
        </ul>
        <div class="product-foot">
          <ExternalLink :href="p.url">{{ p.urlLabel }}</ExternalLink>
          <span class="sub">{{ p.footnote }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
