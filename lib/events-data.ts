export const events = [
  {
    id: 1,
    title: "UAP Hosted ICPC World Finals 2021",
    description: "UAP had the honor of hosting the prestigious ICPC World Finals, bringing together the brightest minds in competitive programming.",
    date: new Date('2022-11-08'),
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/news/icpc-world-finals-2021",
    category: "Academic",
    type: "event"
  },
  {
    id: 2,
    title: "11th Convocation of UAP",
    description: "The 11th Convocation of the University of Asia Pacific was held with grandeur, celebrating the achievements of our graduates.",
    date: new Date('2023-10-09'),
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/news/convocation-11th",
    category: "University",
    type: "news"
  },
  {
    id: 3,
    title: "Annual EEE Tech Fest 2024",
    description: "The annual tech fest showcased innovative projects and research from our talented EEE students and faculty.",
    date: new Date('2024-04-20'),
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/news/eee-tech-fest-2024",
    category: "Department",
    type: "event"
  },
  {
    id: 4,
    title: "Workshop on Modern Robotics",
    description: "A hands-on workshop covering the latest trends and technologies in the field of robotics and automation.",
    date: new Date('2024-07-05'),
    image: "https://plus.unsplash.com/premium_photo-1723291289063-d78b337be6d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/news/robotics-workshop-2024",
    category: "Research",
    type: "event"
  },
  {
    id: 5,
    title: "Programming and AI Club presents Codex 1.0",
    description: "On 23rd April 2025, the Department of Electrical and Electronic Engineering (EEE) at the University of Asia Pacific (UAP) organized an exciting event titled CoDEX 1.0, organized by the Programming and AI Club.",
    date: new Date('2024-12-10'),
    image: "https://i.ibb.co/7JgvP6DR/image.png",
    link: "/news/international-conference-2024",
    category: "Research",
    type: "event"
  },
  {
    id: 6,
    title: "Smart Grid Technology Symposium 2024",
    description: "A comprehensive symposium exploring the latest advancements in smart grid technology, renewable energy integration, and sustainable power systems.",
    date: new Date('2024-11-15'),
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/news/smart-grid-symposium-2024",
    category: "Research",
    type: "event"
  },
  {
    id: 7,
    title: "AI and Machine Learning in Engineering Workshop",
    description: "An intensive workshop focusing on the application of artificial intelligence and machine learning techniques in electrical and electronic engineering.",
    date: new Date('2024-12-05'),
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/news/ai-ml-engineering-workshop-2024",
    category: "Academic",
    type: "event"
  },
  {
    id: 8,
    title: "EEE Department Research Excellence Awards 2024",
    description: "Annual recognition ceremony celebrating outstanding research achievements and innovations by faculty and students in the Department of Electrical and Electronic Engineering.",
    date: new Date('2024-10-25'),
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/news/research-excellence-awards-2024",
    category: "Department",
    type: "news"
  }
];

export type Event = typeof events[0];

export const formatDate = (date: Date) => {
  return {
    day: date.toLocaleDateString('en-US', { day: '2-digit' }),
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    year: date.toLocaleDateString('en-US', { year: 'numeric' }),
  };
};