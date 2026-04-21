export interface Skill {
  name: string
  icon?: string
  iconUrl?: string
  level?: 'expert' | 'proficient' | 'familiar'
}

export interface SkillGroup {
  category: string
  description: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    description: 'Core programming languages',
    skills: [
      { name: 'PHP', icon: '/svg/php-svgrepo-com.svg', level: 'expert' },
      { name: 'TypeScript', icon: '/svg/typescript.svg', level: 'expert' },
      { name: 'JavaScript', icon: '/svg/javascript-svgrepo-com.svg', level: 'expert' },
      { name: 'SQL', icon: '/svg/sql-svgrepo-com.svg', level: 'expert' },
      { name: 'Rust', level: 'familiar' },
    ],
  },
  {
    category: 'Backend',
    description: 'Frameworks, runtimes & databases',
    skills: [
      { name: 'Laravel', icon: '/svg/laravel-svgrepo-com (1).svg', level: 'expert' },
      { name: 'Node.js', icon: '/svg/node-js.svg', level: 'expert' },
      { name: 'Express.js', icon: '/svg/expressjs.svg', level: 'expert' },
      { name: 'Redis', level: 'proficient' },
      { name: 'MySQL', level: 'expert' },
      { name: 'MongoDB', icon: '/svg/mongodb.svg', level: 'proficient' },
      { name: 'PostgreSQL', level: 'proficient' },
      { name: 'Supabase', level: 'proficient' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'WebSockets', level: 'proficient' },
      { name: 'TDD', level: 'proficient' },
    ],
  },
  {
    category: 'Frontend',
    description: 'UI frameworks & tooling',
    skills: [
      { name: 'Vue.js', icon: '/svg/vue-9-logo-svgrepo-com.svg', level: 'expert' },
      { name: 'Nuxt.js', icon: '/svg/nuxtjs-svgrepo-com.svg', level: 'expert' },
      { name: 'Tailwind CSS', icon: '/svg/tailwind-svgrepo-com.svg', level: 'expert' },
      { name: 'HTML', icon: '/svg/html5-svgrepo-com.svg', level: 'expert' },
      { name: 'CSS', icon: '/svg/css3-svgrepo-com.svg', level: 'expert' },
      { name: 'Bootstrap', icon: '/svg/bootstrap-fill-svgrepo-com.svg', level: 'expert' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    description: 'Infrastructure & deployment',
    skills: [
      { name: 'Docker', level: 'proficient' },
      { name: 'AWS (S3)', level: 'proficient' },
      { name: 'Linux', level: 'proficient' },
      { name: 'Digital Ocean', level: 'proficient' },
      { name: 'Render', level: 'proficient' },
      { name: 'Heroku', level: 'proficient' },
      { name: 'Nginx', level: 'familiar' },
    ],
  },
  {
    category: 'Tools & Process',
    description: 'Version control, workflow & PM',
    skills: [
      { name: 'Git', icon: '/svg/git-svgrepo-com.svg', level: 'expert' },
      { name: 'GitHub', icon: '/svg/github-svgrepo-com.svg', level: 'expert' },
      { name: 'Bitbucket', icon: '/svg/bitbucket-svgrepo-com.svg', level: 'expert' },
      { name: 'Jira', icon: '/svg/jira-svgrepo-com.svg', level: 'expert' },
      { name: 'Linear', level: 'proficient' },
      { name: 'Slack', icon: '/svg/slack.svg', level: 'expert' },
      { name: 'Postman', level: 'expert' },
      { name: 'Notion', level: 'proficient' },
      { name: 'Agile / Scrum', level: 'expert' },
    ],
  },
  {
    category: 'AI & Developer Tools',
    description: 'AI assistants & productivity tooling',
    skills: [
      {
        name: 'Claude (Anthropic)',
        iconUrl: 'https://www.anthropic.com/images/icons/apple-touch-icon.png',
        level: 'expert',
      },
      {
        name: 'GitHub Copilot',
        iconUrl: 'https://github.githubassets.com/images/modules/site/copilot/copilot-logo.png',
        level: 'expert',
      },
      {
        name: 'ChatGPT',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/64px-ChatGPT_logo.svg.png',
        level: 'proficient',
      },
      { name: 'Cursor', level: 'proficient' },
      { name: 'VS Code', icon: '/svg/vscode-svgrepo-com.svg', level: 'expert' },
    ],
  },
]
