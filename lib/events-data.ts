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
      date: new Date('2024-06-05'),
      image: "https://images.unsplash.com/photo-1620712943543-95fc6962c3a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/news/robotics-workshop-2024",
      category: "Research",
      type: "event"
    },
    {
      id: 5,
      title: "Upcoming International Conference on EEE",
      description: "Join us for the international conference that brings together researchers and practitioners to discuss the latest trends in EEE.",
      date: new Date('2024-12-10'), 
      image: "https://images.unsplash.com/photo-1582653291997-0639916b5b3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/news/international-conference-2024",
      category: "Research",
      type: "event"
    },
  ];
  
  export type Event = typeof events[0];
  
  export const formatDate = (date: Date) => {
    return {
      day: date.toLocaleDateString('en-US', { day: '2-digit' }),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.toLocaleDateString('en-US', { year: 'numeric' }),
    };
  };