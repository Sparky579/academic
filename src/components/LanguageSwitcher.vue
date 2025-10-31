<template>
  <div class="language-switcher">
    <button
      v-for="lang in languages"
      :key="lang.code"
      @click="switchLanguage(lang.code)"
      :class="{ active: currentLanguage === lang.code }"
      class="lang-btn"
    >
      {{ lang.name }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'zh', name: '中文' }
]

const currentLanguage = computed(() => locale.value)

const switchLanguage = (lang) => {
  locale.value = lang
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 8px;
  align-items: center;
}

.lang-btn {
  padding: 4px 8px;
  border: 1px solid var(--muted);
  background: transparent;
  color: var(--text);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.lang-btn:hover {
  background: var(--muted);
  opacity: 0.7;
}

.lang-btn.active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

@media (prefers-color-scheme: dark) {
  .lang-btn:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}
</style>
