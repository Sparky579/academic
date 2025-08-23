<template>
  <li class="pub">
    <p class="title">{{ title }}</p>
    <p class="meta"><span v-html="authors"></span> — {{ venue }}</p>
    <div style="margin-top:6px; display:flex; gap:10px; flex-wrap:wrap;">
      <a v-for="(l, idx) in links" :key="idx" :href="l.href" target="_blank" rel="noreferrer">{{ l.label }}</a>
    </div>
  </li>
</template>
<script setup>
defineProps({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  venue: { type: String, required: true },
  links: { type: Array, default: () => [] }
})
</script>
