<template>
  <div class="container">
    <HeaderNav />

    <section class="header" id="about">
      <img class="avatar" src="/profile.jpg" alt="Profile photo" />
      <div>
        <h1 class="name">{{ $t('header.name') }}</h1>
        <p class="title">{{ $t('header.title') }} <br/> {{ $t('header.university') }}</p>
        <div class="links">
          <a href="https://github.com/Sparky579" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://orcid.org/0009-0001-2474-9230" target="_blank" rel="noreferrer">ORCID</a>
          <a href="mailto:{{ $t('header.email') }}">{{ $t('header.email') }}</a>
        </div>
      </div>
    </section>

    <SectionTitle :title="$t('nav.about')" />
    <section class="section">
      <p>
        {{ $t('about.intro') }}
      </p>
      <p class="manifesto">{{ $t('about.manifesto') }}</p>
    </section>

    <SectionTitle :title="$t('nav.education')" />
    <section class="section" id="education">
      <p>{{ $t('education.current') }}</p>
      <p>{{ $t('education.previous') }}</p>
      <p style="color: var(--muted); margin-top:6px;">{{ $t('education.gpa') }}</p>
    </section>

    <SectionTitle :title="$t('nav.experience')" />
    <section class="section" id="experience">
      <p>{{ $t('experience.visiting') }}</p>
      <p style="color: var(--muted);">{{ $t('experience.details') }}</p>
      <ul style="margin:8px 0 0 18px;">
        <li v-for="(project, index) in experienceProjects" :key="index">{{ project }}</li>
      </ul>
    </section>

    <SectionTitle :title="$t('nav.skills')" />
    <section class="section" id="skills">
      <p><strong>{{ $t('skills.languages') }}</strong>: C++, JavaScript, Python, Java</p>
      <p><strong>{{ $t('skills.ml') }}</strong>: PyTorch, Scikit-learn, OpenCV, TensorFlow</p>
      <p><strong>{{ $t('skills.web') }}</strong>: Vue.js, React, Node.js, d3.js, ECharts</p>
      <p><strong>{{ $t('skills.design') }}</strong>: Figma, Adobe Photoshop</p>
    </section>

    <SectionTitle :title="$t('nav.works')" />
    <section class="section" id="works">
      <p><strong>{{ $t('works.ragtrace.title') }}</strong> — {{ $t('works.ragtrace.tech') }}<br/>
      {{ $t('works.ragtrace.desc') }}
      <a href="https://github.com/VIS-SUSTech/RAGTrace" target="_blank" rel="noreferrer">{{ $t('works.ragtrace.link') }}</a> |
      <a href="https://deepwiki.com/VIS-SUSTech/RAGTrace" target="_blank" rel="noreferrer">{{ $t('works.ragtrace.wiki') }}</a></p>

      <hr class="hr" style="margin:14px 0;"/>

      <p><strong>{{ $t('works.classroom.title') }}</strong> — {{ $t('works.classroom.tech') }}<br/>
      {{ $t('works.classroom.desc') }}</p>

      <hr class="hr" style="margin:14px 0;"/>

      <p><strong>{{ $t('works.nimmt.title') }}</strong> — {{ $t('works.nimmt.tech') }}<br/>
      {{ $t('works.nimmt.desc') }}
      <a href="https://github.com/Sparky579/Nimmt" target="_blank" rel="noreferrer">{{ $t('works.nimmt.link') }}</a></p>

      <hr class="hr" style="margin:14px 0;"/>

      <p><strong>{{ $t('works.qqbot.title') }}</strong> — {{ $t('works.qqbot.tech') }}<br/>
      {{ $t('works.qqbot.desc') }}
      <a href="https://github.com/Sparky579/EDT_Mirai_Plugin" target="_blank" rel="noreferrer">{{ $t('works.qqbot.link') }}</a></p>

      <hr class="hr" style="margin:14px 0;"/>

      <p><strong>{{ $t('works.pikapark.title') }}</strong> — {{ $t('works.pikapark.tech') }}<br/>
      {{ $t('works.pikapark.desc') }}
      <a href="https://forum.sparky.qzz.io" target="_blank" rel="noreferrer">{{ $t('works.pikapark.link') }}</a></p>
    </section>

    <SectionTitle :title="$t('nav.honors')" />
    <section class="section" id="honors">
      <ul style="margin:0 0 0 18px;">
        <li v-for="(honor, index) in honorsList" :key="index">{{ honor }}</li>
      </ul>
    </section>

    <SectionTitle :title="$t('nav.publications')" />
    <section class="section" id="publications">
      <ul class="pub-list">
        <PublicationItem
          :title="$t('publications.klmvis.title')"
          :authors="$t('publications.klmvis.authors')"
          :venue="$t('publications.klmvis.venue')"
          :links="[
            { label: $t('publications.klmvis.links.pdf'), href: 'https://www.jcad.cn/cn/article/pdf/preview/10.3724/SP.J.1089.2024-00393.pdf' }
          ]"
        />
        <PublicationItem
          :title="$t('publications.ragtrace.title')"
          :authors="$t('publications.ragtrace.authors')"
          :venue="$t('publications.ragtrace.venue')"
          :links="[
            { label: $t('publications.ragtrace.links.acm'), href: 'https://dl.acm.org/doi/10.1145/3746059.3747741' }
          ]"
        />
      </ul>
    </section>

    

    <FooterSimple />
  </div>
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue'
import SectionTitle from './components/SectionTitle.vue'
import PublicationItem from './components/PublicationItem.vue'
import FooterSimple from './components/FooterSimple.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, tm } = useI18n()

// 使用 tm 获取数组类型的文案，避免 t 返回字符串导致逐字渲染
const experienceProjects = computed(() => tm('experience.projects') || [])
const honorsList = computed(() => tm('honors') || [])
</script>

<style scoped>
.manifesto {
  margin-top: 14px;
  padding: 14px 16px;
  font-family: 'Source Serif Pro', Georgia, serif;
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.65;
  border-left: 4px solid var(--muted);
  background: rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}

@media (prefers-color-scheme: dark) {
  .manifesto {
    background: rgba(255, 255, 255, 0.06);
  }
}
</style>
