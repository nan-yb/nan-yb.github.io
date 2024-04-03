import type { Project } from '~/types/data'

// type: 'work', // work || side
// title: 'Weaverse - Universal website builder',
// description: `The first Hydrogen-driven website builder powered by AI. Weaverse is a Shopify sales channel that allows you to create a website in minutes with no coding required.`,
// imgSrc: '/static/images/weaverse-hydrogen.jpg',
// url: 'https://www.weaverse.io?ref=yblog.dev',
// builtWith: ['Remix', 'Prisma', 'Tailwind', 'OpenAI'],

export let projectsData: Project[] = [
  {
    type: 'self',
    title: 'Chatbot',
    description: `Chat-GPT 클론코딩 , 월 구독제와 API를 사용한 만큼 내는 비용을 비교하기 위해 개발.`,
    imgSrc: '/static/images/chat_gpt_logo.png',
    url: 'https://chatbot-yongbin.netlify.app',
    builtWith: ['Chat-GPT', 'OpenAI'],
  },
]
