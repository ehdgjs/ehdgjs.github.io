import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '이동헌의 포트폴리오', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '백엔드 개발자를 꿈꾸는 이동헌의 포트폴리오입니다.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://github.com/ehdgjs', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'springboot_bookstore.PNG',
    title: 'SpringBoot를 이용한 온라인 서점',
    info: '관리자가 책을 등록하여 사용자가 책을 구매할 수 있는 Springboot와 MVC패턴을 이용한 온라인 서점으로 제작된 토이 프로젝트입니다.',
    info2: '데이터베이스 설계, FrontEnd, BackEnd, 서버 배포',
    info3: '[Front] HTML, CSS, Javasciprt / [Back] SpringBoot / [Database] MySQL / [Server] AWS EC2, Codedeploy, S3, travis-ci, nginx',
    url: 'https://github.com/ehdgjs/springboot_bookstore',
    repo: 'http://bookstore.dongheondev.xyz/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'selfinterior.PNG',
    title: 'Node.js를 이용한 셀프인테리어 공유 시스템',
    info: '셀프 인테리어에 관심이 많은 사용자를 위해 자신의 인테리어 노하우나 사진과 정보를 공유하는 웹페이지로 제작된 팀 프로젝트입니다.',
    info2: 'BackEnd 개발',
    info3: '[Front] HTML, CSS, Javasciprt / [Back] Node.js & express.js / [Database] MySQL',
    url: 'https://github.com/ehdgjs/Node.js_selfInterior',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    info3: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  phone: '010-9465-7803',
  email: 'zone7907@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ehdgjs',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
