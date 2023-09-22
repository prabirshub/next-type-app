import { Blog } from '@/types/blog'
import { BrandsData } from '@/types/brands'

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
      'Her expertise in public speaking and motivational coaching has positively impacted numerous lives, earning her recognition and commendation from the media for her innovative and superior work. She firmly believes that with the right tools, anyone can become a confident and effective communicator.',

      'Despite facing personal and societal hurdles, Rashmi remained undeterred in her pursuit of her passion. She emerged as a successful businesswoman and a proud mother of two potential future leaders. She staunchly advocates for the right to free speech and encourages everyone to communicate authentically.',
    ],
  },
  {
    id: 'whyCSA',
    title: 'Why Us',
    subtitle: 'CSA is the Best Choice for you',
    content: [
      'It is an organisation dedicated to building the confidence of native and non-native English speakers. Founded by Rashmi Watel, a TEDx speaker who has defied the societal norms and overcome her own turmoil',
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
      question: 'What is Confident Speakers Academy?',
      answer:
        'Confident Speakers Academy is  an organisation committed to enhancing the communication skills of English speakers. We provide Digital courses, coaching, workshops, and webinars for individuals and organizations.',
    },
    {
      question: 'Can public speaking be a hobby?',
      answer:
        'Public speaking, if enjoyed, can be a hobby that enhances your confidence, communication, and leadership skills. It allows you to share your interests and receive feedback in clubs or communities, offering numerous benefits.',
    },
    {
      question: 'How public speaking boost your confidence?',
      answer:
        'Public speaking boosts your confidence by allowing you to overcome your fear of speaking in front of others. It also gives you the opportunity to share your ideas and opinions with a wider audience.',
    },
    {
      question: 'What public speaking teaches you',
      answer:
        'Public speaking teaches you how to communicate effectively and confidently with different audiences. It also helps you develop your critical thinking and creativity skills.',
    },
    {
      question: 'Who is Rashmi Watel?',
      answer:
        'Rashmi Watel is the founder and lead coach of Confident Speakers Academy. She is a public speaking coach and a non-native English speaker herself. She has over 15 years of experience in the corporate world and has helped thousands of people improve their public speaking skills.',
    },
    {
      question: 'How much does it cost to join CSA?',
      answer:
        'The cost of joining Confident Speakers Academy depends on the type and duration of the service you choose.',
    },
    {
      question: 'What should I do if I have more questions?',
      answer:
        'We are more than happy to assist you. Don’t hesitate to contact us directly with any doubts you may have.',
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

export const brandsData: BrandsData[] = [
  {
    id: 1,
    title: 'asetts',
    image: '/assets/company-logo/asetts-logo.svg',
    width: 395,
    height: 142,
  },
  {
    id: 2,
    title: 'befriend',
    image: '/assets/company-logo/befriend-logo.svg',
    width: 116,
    height: 142,
  },
  {
    id: 3,
    title: 'City of Canning',
    image: '/assets/company-logo/city-of-canning-logo.svg',
    width: 345,
    height: 148,
  },
  {
    id: 4,
    title: 'Curtin University',
    image: '/assets/company-logo/curtin-university.svg',
    width: 439,
    height: 73,
  },
  {
    id: 5,
    title: 'Dress for Success',
    image: '/assets/company-logo/dress-for-success-logo.svg',
    width: 589,
    height: 81,
  },
  {
    id: 6,
    title: 'GSEB',
    image: '/assets/company-logo/gesb-logo.svg',
    width: 181,
    height: 146,
  },
  {
    id: 7,
    title: 'gov of western australia',
    image: '/assets/company-logo/gov-of-western-australia.svg',
    width: 135,
    height: 128,
  },
  {
    id: 8,
    title: 'Kalamunda',
    image: '/assets/company-logo/kalamunda.svg',
    width: 246,
    height: 145,
  },
  {
    id: 9,
    title: 'Landgate',
    image: '/assets/company-logo/landgate-logo.svg',
    width: 241,
    height: 128,
  },
  {
    id: 10,
    title: 'Mental health first aid',
    image: '/assets/company-logo/mental-health-first-aid-logo.svg',
    width: 238,
    height: 192,
  },
  {
    id: 11,
    title: 'Rio tinto',
    image: '/assets/company-logo/rio-tinto-logo.svg',
    width: 289,
    height: 61,
  },
  {
    id: 12,
    title: 'She metors',
    image: '/assets/company-logo/she-metors.svg',
    width: 388,
    height: 60,
  },
  {
    id: 13,
    title: 'western power',
    image: '/assets/company-logo/western-power-logo.svg',
    width: 135,
    height: 128,
  },
]
