<template>
  <h2 class="section-title">{{ title }}</h2>
</template>
<script setup>
defineProps({ title: { type: String, required: true } })
</script>
