import { createI18n } from 'vue-i18n'

// 获取浏览器语言
const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage
  // 如果是中文环境，返回中文，否则返回英文
  return lang.startsWith('zh') ? 'zh' : 'en'
}

const messages = {
  en: {
    nav: {
      homepage: 'Academic Homepage',
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      works: 'Works',
      honors: 'Honors',
      publications: 'Publications'
    },
    header: {
      name: 'Sizhe Cheng',
      title: 'M.Eng. in Computer Science (in progress)',
      university: 'Nanyang Technological University',
      email: {
        user: 'sizhe003',
        domain: 'e.ntu.edu.sg'
      }
    },
    about: {
      intro: 'I am a graduate of Southern University of Science and Technology and joined Nanyang Technological University in August 2025 to pursue a research-based master\'s degree. My research interests focus on Technical HCI, exploring innovative applications of Generative AI, and other interesting technologies in interactive systems.',
      manifesto: 'I believe technology\'s true power lies in "connection." I am dedicated to pioneering new ways to forge these connections and empowering everyone to confidently embrace the future -- a mission I hold to be as vital as invention itself.'
    },
    education: {
      current: '2025–Present — M.Eng. in Computer Science, Nanyang Technological University',
      previous: '2021–2025 — B.Eng. in Computer Science, Southern University of Science and Technology',
      gpa: 'GPA: 3.73/4.0 · Turing Class Honor Graduate'
    },
    experience: {
      visiting: '2024 — Visiting Student, Zhejiang University',
      details: 'College of Computer Science; visual analytics and multi-modal large models',
      projects: [
        'Participated in the KLMVis research project',
        'Worked on multi-modal large model distillation'
      ]
    },
    skills: {
      languages: 'Programming Languages',
      ml: 'Machine Learning',
      web: 'Web Development',
      design: 'Design'
    },
    works: {
      ragtrace: {
        title: 'RAGTrace: Visual Analysis for Retrieval-Augmented Chain in RAG Systems',
        tech: 'd3.js, ECharts, Python',
        desc: 'Iterative visual analysis system for the retrieval-augmented chain in RAG systems.',
        link: 'Project',
        wiki: 'Guide'
      },
      classroom: {
        title: 'Machine Vision-based Classroom Quality Analysis',
        tech: 'YOLOv8, Flask, VLM',
        desc: 'System to analyze classroom behavior and generate reports.'
      },
      nimmt: {
        title: 'Nimmt 7 AI Battle System',
        tech: 'Vue.js, Flask, SQLite',
        desc: 'Board game AI with multiple levels (random, greedy, heuristic, MCTS variants).',
        link: 'Project'
      },
      qqbot: {
        title: 'QQ Group Entertainment Robot Based on Mirai',
        tech: 'Java, Mirai, OpenAI',
        desc: 'Automated replies and entertainment features for QQ groups.',
        link: 'Project'
      },
      pikapark: {
        title: 'PEKKA Park',
        tech: 'Discourse',
        desc: 'Discourse-based forum dedicated to creating a platform for knowledge sharing and deep communication.',
        link: 'Forum'
      }
    },
    honors: [
      'ACM-ICPC 2023 Asia Regional Contest Silver Medal',
      'Shenzhen Bridge Championship Pairs Champion',
      'Outstanding Graduate of the Department of Computer Science, SUSTech',
      'Outstanding Undergraduate Thesis, SUSTech'
    ],
    publications: {
      klmvis: {
        title: 'KLMVis: Visual Analysis System for Retrieval-Augmented Language Models',
        authors: 'Jian Shen, Minfeng Zhu, Yuxin Ma, <strong>Sizhe Cheng</strong>, Zhizhang Chen, Danfang Yan, Wei Chen',
        venue: 'Journal of Computer-Aided Design and Computer Graphics (2024)',
        links: {
          pdf: 'PDF'
        }
      },
      ragtrace: {
        title: 'RAGTrace: Understanding and Refining Retrieval-Generation Dynamics in Retrieval-Augmented Generation',
        authors: '<strong>Sizhe Cheng*</strong>, Jiaping Li*, Huanchen Wang, Yuxin Ma',
        venue: 'UIST (2025)',
        links: {
          acm: 'ACM'
        }
      }
    },
    footer: {
      // 如果需要添加页脚文本
    }
  },
  zh: {
    nav: {
      homepage: '学术主页',
      about: '关于',
      education: '教育',
      experience: '经历',
      skills: '技能',
      works: '作品',
      honors: '荣誉',
      publications: '论文'
    },
    header: {
      name: '程司哲',
      title: '计算机科学硕士在读',
      university: '南洋理工大学',
      email: {
        user: 'sizhe003',
        domain: 'e.ntu.edu.sg'
      }
    },
    about: {
      intro: '我是南方科技大学毕业生，于2025年8月加入南洋理工大学攻读研究型硕士学位。我的研究兴趣集中在技术人机交互，探索生成式AI等有趣技术在交互系统中的创新应用。',
      manifesto: '我相信科技真正的力量在于"连接"。我致力于成为挖掘并实现这种连接的先驱，并赋能我们所有人自信地拥抱未来——这项使命在我看来与技术发明本身同样重要。'
    },
    education: {
      current: '2025–至今 — 南洋理工大学计算机科学硕士',
      previous: '2021–2025 — 南方科技大学计算机科学学士',
      gpa: 'GPA: 3.73/4.0 · 图灵班荣誉毕业生'
    },
    experience: {
      visiting: '2024 — 浙江大学访问学生',
      details: '计算机学院；可视分析与多模态大模型',
      projects: [
        '参与KLMVis研究项目',
        '从事多模态大模型蒸馏工作'
      ]
    },
    skills: {
      languages: '编程语言',
      ml: '机器学习',
      web: 'Web开发',
      design: '设计'
    },
    works: {
      ragtrace: {
        title: 'RAGTrace：RAG系统中检索增强链的可视化分析',
        tech: 'd3.js, ECharts, Python',
        desc: 'RAG系统中检索增强链的迭代可视化分析系统。',
        link: '项目',
        wiki: '指南'
      },
      classroom: {
        title: '基于机器视觉的课堂质量分析',
        tech: 'YOLOv8, Flask, VLM',
        desc: '分析课堂行为并生成报告的系统。'
      },
      nimmt: {
        title: '谁是牛头王桌游AI对战系统',
        tech: 'Vue.js, Flask, SQLite',
        desc: '具有多种水平（随机、贪婪、启发式、MCTS变体）的桌面游戏AI。',
        link: '项目'
      },
      qqbot: {
        title: '基于Mirai的QQ群娱乐机器人',
        tech: 'Java, Mirai, OpenAI',
        desc: '为QQ群提供自动回复和娱乐功能的机器人。',
        link: '项目'
      },
      pikapark: {
        title: '皮卡超人游乐园',
        tech: 'Discourse',
        desc: '基于Discourse的论坛，致力于创建知识共享和深度交流的平台。',
        link: '论坛'
      }
    },
    honors: [
      'ACM-ICPC 2023亚洲区域赛银牌',
      '深圳桥牌锦标赛双人冠军',
      '南科大计算机系优秀毕业生',
      '南科大优秀本科毕业论文'
    ],
    publications: {
      klmvis: {
        title: 'KLMVis: Visual Analysis System for Retrieval-Augmented Language Models',
        authors: 'Jian Shen, Minfeng Zhu, Yuxin Ma, <strong>Sizhe Cheng</strong>, Zhizhang Chen, Danfang Yan, Wei Chen',
        venue: '计算机辅助设计与图形学学报 (2024)',
        links: {
          pdf: 'PDF'
        }
      },
      ragtrace: {
        title: 'RAGTrace: Understanding and Refining Retrieval-Generation Dynamics in Retrieval-Augmented Generation',
        authors: '<strong>Sizhe Cheng*</strong>, Jiaping Li*, Huanchen Wang, Yuxin Ma',
        venue: 'UIST (2025)',
        links: {
          acm: 'ACM'
        }
      }
    },
    footer: {
      // 如果需要添加页脚文本
    }
  }
}

const i18n = createI18n({
  legacy: false, // 使用Composition API
  locale: getBrowserLanguage(), // 默认语言基于浏览器设置
  fallbackLocale: 'en', // 回退语言
  messages
})

export default i18n
