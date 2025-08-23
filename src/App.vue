<template>
  <div class="container">
    <HeaderNav />

    <section class="header" id="about">
      <img class="avatar" src="/profile.jpg" alt="Profile photo" />
      <div>
        <h1 class="name">Sizhe Cheng</h1>
        <p class="title">M.Eng. in Computer Science (in progress) <br/> Nanyang Technological University</p>
        <div class="links">
          <a href="https://github.com/Sparky579" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://orcid.org/0009-0001-2474-9230" target="_blank" rel="noreferrer">ORCID</a>
          <a href="mailto:sizhe003@e.ntu.edu.sg">sizhe003@e.ntu.edu.sg</a>
        </div>
      </div>
    </section>

    <SectionTitle title="About" />
    <section class="section">
      <p>
        I am a graduate of Southern University of Science and Technology and will join Nanyang Technological University in August 2025 to pursue a research-based master's degree. My research interests focus on Technical HCI, exploring innovative applications of large models, machine learning algorithms, and other interesting technologies in interactive systems.
      </p>
    </section>

    <SectionTitle title="Education" />
    <section class="section" id="education">
      <p><strong>2025–Present</strong> — M.Eng. in Computer Science, Nanyang Technological University</p>
      <p><strong>2021–2025</strong> — B.Eng. in Computer Science, Southern University of Science and Technology</p>
      <p style="color: var(--muted); margin-top:6px;">GPA: 3.73/4.0 · Turing Class Honor Graduate</p>
    </section>

    <SectionTitle title="Experience" />
    <section class="section" id="experience">
      <p><strong>2024</strong> — Visiting Student, Zhejiang University</p>
      <p style="color: var(--muted);">College of Computer Science; visual analytics and multi-modal large models</p>
      <ul style="margin:8px 0 0 18px;">
        <li>Participated in the KLMVis research project</li>
        <li>Worked on multi-modal large model distillation</li>
      </ul>
    </section>

    <SectionTitle title="Skills" />
    <section class="section" id="skills">
      <p><strong>Programming Languages</strong>: C++, JavaScript, Python, Java</p>
      <p><strong>Machine Learning</strong>: PyTorch, Scikit-learn, OpenCV, TensorFlow</p>
      <p><strong>Web Development</strong>: Vue.js, React, Node.js, d3.js, ECharts</p>
      <p><strong>Design</strong>: Figma, Adobe Photoshop</p>
    </section>

    <SectionTitle title="Works" />
    <section class="section" id="works">
      <p><strong>RAGTrace: Visual Analysis for Retrieval-Augmented Chain in RAG Systems</strong> — d3.js, ECharts, Python<br/>
      Iterative visual analysis system for the retrieval-augmented chain in RAG systems.</p>

      <hr class="hr" style="margin:14px 0;"/>

      <p><strong>Machine Vision-based Classroom Quality Analysis</strong> — YOLOv8, Flask, VLM<br/>
      System to analyze classroom behavior and generate reports.</p>

      <hr class="hr" style="margin:14px 0;"/>

      <p><strong>Nimmt 7 AI Battle System</strong> — Vue.js, Flask, SQLite<br/>
      Board game AI with multiple levels (random, greedy, heuristic, MCTS variants).
      <a href="https://github.com/Sparky579/Nimmt" target="_blank" rel="noreferrer">Project</a></p>

      <hr class="hr" style="margin:14px 0;"/>

      <p><strong>QQ Group Entertainment Robot Based on Mirai</strong> — Java, Mirai, OpenAI<br/>
      Automated replies and entertainment features for QQ groups.
      <a href="https://github.com/Sparky579/EDT_Mirai_Plugin" target="_blank" rel="noreferrer">Project</a></p>
    </section>

    <SectionTitle title="Honors" />
    <section class="section" id="honors">
      <ul style="margin:0 0 0 18px;">
        <li>ACM-ICPC 2023 Asia Regional Contest Silver Medal</li>
        <li>Shenzhen Bridge Championship Pairs Champion</li>
        <li>Outstanding Graduate of the Department of Computer Science, SUSTech</li>
        <li>Outstanding Undergraduate Thesis, SUSTech</li>
      </ul>
    </section>

    <SectionTitle title="Publications" />
    <section class="section" id="publications">
      <ul class="pub-list">
        <PublicationItem
          title="KLMVis: Visual Analysis System for Retrieval-Augmented Language Models"
          authors="Jian Shen, Minfeng Zhu, Yuxin Ma, <strong>Sizhe Cheng</strong>, Zhizhang Chen, Danfang Yan, Wei Chen"
          venue="Journal of Computer-Aided Design and Computer Graphics (2024)"
          :links="[
            { label: 'PDF', href: 'https://www.jcad.cn/cn/article/pdf/preview/10.3724/SP.J.1089.2024-00393.pdf' }
          ]"
        />
        <PublicationItem
          title="RAGTrace: Understanding and Refining Retrieval-Generation Dynamics in Retrieval-Augmented Generation"
          authors="<strong>Sizhe Cheng*</strong>, Jiaping Li*, Huanchen Wang, Yuxin Ma"
          venue="UIST (2025)"
          :links="[
            { label: 'arXiv', href: 'https://arxiv.org/abs/2508.06056' }
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
</script>
