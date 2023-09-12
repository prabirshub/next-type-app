import { Blog } from '@/types/blog'

import QuestionMarkIcn from '../public/assets/question-mark.svg'

export const navData = [
  { title: 'Home', path: '/', id: 1 },
  { title: 'About', path: '/about', id: 2 },
  { title: 'Programs', path: '/programs', id: 3 },
  { title: 'Blog', path: '/blog', id: 4 },
  { title: 'Contact', path: '/contact', id: 5 },
]

export const programsData = [
  {
    id: 1,
    name: 'Presenting Confidently at Work: for non-native English speakers',
    duration: 'Half Day',
    content:
      'Non-native English speakers, face challenges that are very different from native English speakers. This workshop offering is designed to address those challenges.',

    star: 5,
  },
  {
    id: 2,
    name: 'Presenting Confidently at Work: for native and non-native English speakers',
    duration: 'Half Day',
    content:
      'Communication skills play a key role in a workplace setup. with the increase in the diversity levels of employees in an organization, several communication barriers occur.',

    star: 5,
  },
  {
    id: 3,
    name: 'Embrace your culture: Improve the efficiency of your multicultural employees',
    duration: 'Half Day',
    content:
      'We are reluctant to stand up and present our whole selves. We feel more comfortable showing only some aspects of our identity. The goal is simple: to avoid criticism or judgment.',

    star: 5,
  },
]

export const tabData = [
  {
    id: 'aboutRashmi',
    title: 'Our Founder',
    subtitle: 'Meet Rashmi Watel, CSA founder',
    content: [
      'Rashmi Watel, a public speaking coach, TEDx speaker, and multi-award-winning entrepreneur.',
      'Through her public speaking and motivational coaching, she changes many lives and earns awards and media praise for her innovative and excellent work.',
      'Despite personal and social challenges, Rashmi pursued her passion and became a successful businesswoman and a mother of two. She advocates for free and authentic communication for everyone.',
    ],
  },
  {
    id: 'whyCSA',
    title: 'Why Us',
    subtitle: 'CSA is the Best Choice for you',
    content: [
      'It is an organisation dedicated to building the confidence of native and non-native English speakers. Founded by Rashmi Watel, a TEDx speaker who has defied the society norms and overcome her own turmoil',
      ' It offers online courses, workshops and coaching sessions that are tailored to the needs and goals of the learners',
      'It helps the learners to speak with clarity, fluency and impact in various settings such as online meetings, offices and interviews',
    ],
  },
  {
    id: 'awards',
    title: 'Achivements',
    subtitle: 'Achivements and Awards',
    content: [
      'TEDx Speaker, Certificate of achievement for Leadership and governance program 2018-2019 from Goverment of Western Australia.',
      "First place in Toastmasters table topic speed contest 2020-2021, Finalist - Belmont Small Business Awards 2021 -Diverse women's leadership program 2021, Top Public Speaking Coach, Coach Magazine 2021",
      'Nominee, AusMumprener Awards 2023',
    ],
  },
]

export const faq = {
  icon: QuestionMarkIcn,
  accordions: [
    {
      question: 'Are public speaking classes worth it?',
      answer:
        'Public speaking classes can help you boost your confidence, communicate better, and improve your research and writing skills. You can find various options to learn and practice public speaking, such as online courses, local clubs, or events.',
    },
    {
      question: 'What is Confident Speakers Academy??',
      answer:
        'Confident Speakers Academy is an organisation dedicated to building the confidence of native and non-native English speakers who want to become better communicators. They offer a range of services, both for individuals and organisations, such as online courses, coaching, workshops, and webinars.',
    },
    {
      question: 'Can public speaking be a hobby?',
      answer:
        'Public speaking can be a hobby if you enjoy it and want to improve your skills and impact. It can boost your confidence, communication, persuasion, and leadership abilities. You can speak on topics that interest you or that you want to share with others. You can also join clubs or communities where you can practice and receive feedback. Public speaking is a hobby that can benefit you in many ways.',
    },
    {
      question: 'How public speaking boost your confidence?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'What public speaking teaches you',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Who is Rashmi Watel?',
      answer:
        'Rashmi Watel is the founder and lead coach of Confident Speakers Academy. She is a certified public speaking coach and a non-native English speaker herself. She has over 15 years of experience in the corporate world and has helped thousands of people improve their public speaking skills.',
    },
    {
      question: 'How much does it cost to join CSA?',
      answer:
        'The cost of joining Confident Speakers Academy depends on the type and duration of the service you choose.',
    },
  ],
}

export const blogData: Blog[] = [
  {
    id: 1,
    title: 'How to Overcome Your Fear of Public Speaking',
    paragraph:
      'In this blog post, we will share some of the tips and strategies that we use to help our clients become confident speakers.',
    image: '/assets/blog/fear-of-public-speaking.png',
    author: {
      name: 'Rashmi Watel',
      image: '/assets/rashmi-watel-author.png',
      designation: 'Founder-CSA',
    },
    tags: ['Public Speaking'],
    publishDate: '2023',
  },
  {
    id: 2,
    title: 'Master Public Speaking: 10 Tips from CSA',
    paragraph:
      'Public speaking is a skill that can benefit anyone, whether you are a student, a professional, or a leader.',
    image: '/assets/blog/10-tips-from-csa.png',
    author: {
      name: 'Rashmi Watel',
      image: '/assets/rashmi-watel-author.png',
      designation: 'Founder-CSA',
    },
    tags: ['Public Speaking'],
    publishDate: '2023',
  },
  {
    id: 3,
    title: 'How to Become a Confident Speaker in Any Situation',
    paragraph:
      'In this blog post, we will share with you some tips and hacks from the experts at Confident Speakers Academy',
    image: '/assets/blog/confident-speaker-in-any-situation.png',
    author: {
      name: 'Rashmi Watel',
      image: '/assets/rashmi-watel-author.png',
      designation: 'Founder-CSA',
    },
    tags: ['Public Speaking'],
    publishDate: '2023',
  },
]
