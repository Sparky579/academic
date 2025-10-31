<template>
  <nav style="display:flex; justify-content: space-between; align-items:center; margin-bottom: 12px;">
    <div style="font-weight:600; letter-spacing:0.2px;">{{ $t('nav.homepage') || 'Academic Homepage' }}</div>
    <div style="display:flex; gap:14px; font-size:14px; align-items: center;">
      <a href="#about">{{ $t('nav.about') }}</a>
      <a href="#publications">{{ $t('nav.publications') }}</a>
      <a href="#works">{{ $t('nav.works') }}</a>
      <a href="#education">{{ $t('nav.education') }}</a>
      <a href="#experience">{{ $t('nav.experience') }}</a>
      <a href="#skills">{{ $t('nav.skills') }}</a>
      <a href="#honors">{{ $t('nav.honors') }}</a>
      <LanguageSwitcher />
    </div>
  </nav>
</template>
<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
