export interface Achievement {
  id: string
  title: string
  shortDescription: string
  date: string
  images: string[]
  contentSections: {
    sectionTitle: string
    sectionDescription: string
  }[]
  highlights: string[]
  category: string
  type: 'award' | 'conference' | 'recognition' | 'competition' | 'research' | 'innovation'
  link: string
}

export const achievementsData: Achievement[] = [

  {
    id: "department-ieb-accreditation",
    title: "Department IEB Accreditation",
    shortDescription: "Since its commencement the department is producing quality graduates every year. In the 2015, 152 students and in 016, 114 have earned their B.Sc. degree. Since inception in 2004, the Department has produced 891graduates in B.Sc. in Electrical and Electronic Engineering. In 2014, the department has accredited by the Board of Accreditation for Engineering and Technical Education (BAETE), Bangladesh. As a result the graduates from the department of EEE, UAP can become a member of Institution of Engineers, Bangladesh (IEB).",
    date: "2024-11-15T00:00:00Z",
    images: [
      "/images/our-achievements/department-ieb-accreditation/1.jpg"
    ],
    contentSections: [
      {
        sectionTitle: "Championship Victory",
        sectionDescription: "Team Supersonic from UAP EEE Department emerged as winners at the prestigious IEEE WIE BD Summit 2024 Project Idea Competition. The competition was held during RAAICON 2024 at BUET, organized by IEEE Bangladesh Section and IEEE Women in Engineering Bangladesh Section. This victory demonstrates the exceptional talent and innovative thinking of our students in the fields of robotics, automation, AI, and IoT."
      },
      {
        sectionTitle: "Project Innovation",
        sectionDescription: "The winning project showcased cutting-edge solutions in emerging technologies, reflecting the department's commitment to fostering innovation and research excellence among students. The team's success highlights the quality of education and mentorship provided by the EEE Department."
      }
    ],
    highlights: [
      "First place in IEEE WIE BD Summit 2024",
      "Project Idea Competition winners",
      "Recognition at RAAICON 2024 BUET",
      "Excellence in robotics and AI innovation"
    ],
    category: "Competition",
    type: "competition",
    link: "/achievements/ieee-wie-championship-2024"
  },
{
  id: "negative-pressure-canopy-covid19",
  title: "First Prototype of Negative Pressure Isolation Canopy for COVID-19",
  shortDescription: "EEE student Sakhawat Hossen Rakib developed the first-ever prototype of a negative pressure isolation canopy for COVID-19 under the supervision of Dr. Khondkar Siddique-e-Rabbani.",
  date: "2020-06-01T00:00:00Z",
  images: [],
  contentSections: [
    {
      sectionTitle: "Innovative Medical Engineering",
      sectionDescription: "Sakhawat Hossen Rakib, a student of the EEE Department at UAP, developed the first-ever prototype of a Negative Pressure Isolation Canopy for COVID-19 patients. This innovation was aimed at minimizing the risk of virus transmission in hospitals by creating a controlled airflow environment around infected patients."
    },
    {
      sectionTitle: "Expert Supervision",
      sectionDescription: "The project was supervised by Dr. Khondkar Siddique-e-Rabbani, a renowned biomedical physicist, who guided the research and prototype development. The initiative reflects the department's commitment to applying engineering knowledge for impactful healthcare solutions during the pandemic."
    }
  ],
  highlights: [
    "First-ever negative pressure canopy prototype from UAP",
    "COVID-19 healthcare innovation",
    "Developed by EEE student Sakhawat Hossen Rakib",
    "Supervised by Dr. Khondkar Siddique-e-Rabbani",
    "Contribution to biomedical engineering and public health"
  ],
  category: "Research & Innovation",
  type: "innovation",
  link: "/achievements/negative-pressure-canopy-covid19"
},
{
  id: "mujib-borsho-it-carnival-2020",
  title: "Champion in IDEA Contest – Mujib Borsho IT Carnival 2020",
  shortDescription: "Team UAP_JUVENILE_SQUAD secured the Champion position in the IDEA Contest of Mujib Borsho IT Carnival 2020, showcasing their excellence in innovation and problem-solving.",
  date: "2020-03-01T00:00:00Z",
  images: [],
  contentSections: [
    {
      sectionTitle: "National Level Recognition",
      sectionDescription: "Team UAP_JUVENILE_SQUAD from the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific, achieved the Champion position in the IDEA Contest at the Mujib Borsho IT Carnival 2020. The event celebrated the birth centenary of Bangabandhu Sheikh Mujibur Rahman and aimed to promote tech-based innovation among students nationwide."
    },
    {
      sectionTitle: "Excellence in Innovation",
      sectionDescription: "The team's success in the IDEA Contest reflects their creativity, teamwork, and strong technical foundation. It also highlights the department's dedication to nurturing talent capable of solving real-world problems through technology."
    }
  ],
  highlights: [
    "Champion in IDEA Contest – Mujib Borsho IT Carnival 2020",
    "National recognition for innovation",
    "Team: UAP_JUVENILE_SQUAD",
    "Promoting student-led tech solutions"
  ],
  category: "Competition",
  type: "competition",
  link: "/achievements/mujib-borsho-it-carnival-2020"
},
{
  id: "ieee-wie-bd-summit-2024",
  title: "IEEE WIE BD Summit 2024 Project Competition Winner",
  shortDescription: "UAP EEE students won the IEEE Women in Engineering Bangladesh Section Summit 2024 Project Idea Competition, demonstrating excellence in robotics, automation, AI, and IoT technologies.",
  date: "2024-12-01T00:00:00Z",
  images: [],
  contentSections: [
    {
      sectionTitle: "Outstanding Performance",
      sectionDescription: "Students from the Department of Electrical and Electronic Engineering at UAP showcased exceptional talent by winning the IEEE WIE BD Summit 2024 Project Idea Competition. The competition focused on innovative solutions in emerging technologies including robotics, automation, artificial intelligence, and Internet of Things (IoT)."
    },
    {
      sectionTitle: "Technical Excellence",
      sectionDescription: "The winning project demonstrated advanced technical skills and innovative problem-solving approaches. This achievement reflects the high-quality education and research environment fostered by the EEE Department, preparing students to excel in competitive technical challenges."
    }
  ],
  highlights: [
    "Winner of IEEE WIE BD Summit 2024 Project Competition",
    "Excellence in robotics and automation",
    "Innovation in AI and IoT technologies",
    "Recognition from IEEE Bangladesh Section"
  ],
  category: "Competition",
  type: "competition",
  link: "/achievements/ieee-wie-bd-summit-2024"
},
{
  id: "robo-soccer-2019",
  title: "Champion in ROBO SOCCER 2019",
  shortDescription: "Team UAP_EEE_Alient_BOt claimed the Champion title in ROBO SOCCER 2019, demonstrating superior robotics engineering and teamwork.",
  date: "2019-10-01T00:00:00Z",
  images: [],
  contentSections: [
    {
      sectionTitle: "Robotics Victory",
      sectionDescription: "Team UAP_EEE_Alient_BOt from the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific, emerged as the Champion in ROBO SOCCER 2019. The competition challenged participants to design and program autonomous robots capable of competing in soccer matches."
    },
    {
      sectionTitle: "Technical Brilliance",
      sectionDescription: "This victory highlights the team's outstanding technical abilities in robotics, sensor integration, and strategic programming. It reflects the department's strong foundation in hands-on learning and competitive engineering."
    }
  ],
  highlights: [
    "Champion in ROBO SOCCER 2019",
    "Team: UAP_EEE_Alient_BOt",
    "Robotics and automation excellence",
    "Success through innovation and teamwork"
  ],
  category: "Competition",
  type: "competition",
  link: "/achievements/robo-soccer-2019"
},
{
  id: "smart-ev-charging-award-ahad",
  title: "Top 10 Idea Award – Smart EV Charging Station",
  shortDescription: "Muhammad Ahad Rahman Miah, Assistant Professor of EEE, UAP, was recognized for his innovative idea of a Smart Charging Station for Electric Vehicles using solar power.",
  date: "2023-05-01T00:00:00Z",
  images: [],
  contentSections: [
    {
      sectionTitle: "National Recognition",
      sectionDescription: "Muhammad Ahad Rahman Miah, Assistant Professor of the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific (UAP), received a certificate of achievement from Nasrul Hamid, MP, State Minister for Power, Energy & Mineral Resources, Government of Bangladesh. The award was given in recognition of his idea being selected among the Top 10 at a national-level innovation platform."
    },
    {
      sectionTitle: "Innovative Concept",
      sectionDescription: "His proposed idea — 'Smart Charging Station for Electric Vehicles (EVs) using Solar Power' — promotes sustainable and renewable energy-based solutions for Bangladesh’s growing EV infrastructure. The concept aligns with the country's vision for green energy and smart mobility."
    }
  ],
  highlights: [
    "Top 10 Idea Award recipient",
    "Recognized by Nasrul Hamid, MP",
    "Smart solar-powered EV charging concept",
    "Contribution to sustainable energy solutions"
  ],
  category: "Award",
  type: "award",
  link: "/achievements/smart-ev-charging-award-ahad"
},
{
  id: "ieee-special-session-utar-2018",
  title: "Special Session at IEEE Conference – Malaysia 2018",
  shortDescription: "UAP EEE organized a special session on Power Control and Energy Management at the 7th IEEE Conference on Smart Grid and Clean Energy in Malaysia.",
  date: "2018-05-01T00:00:00Z",
  images: [
    "/images/achievements/ieee-utar-2018.png" // Update path as per your project
  ],
  contentSections: [
    {
      sectionTitle: "International Recognition",
      sectionDescription: "For the first time in Bangladesh, the Department of Electrical and Electronic Engineering (EEE), UAP organized a special session titled 'Power Control and Energy Management' in a foreign platform — the 7th IEEE Conference on Smart Grid and Clean Energy held at UTAR, Malaysia, in May 2018."
    },
    {
      sectionTitle: "Academic Contribution",
      sectionDescription: "Three research papers were presented successfully during this special session. Among them, one paper was honored with the Best Paper Award, showcasing the research excellence of UAP’s EEE department."
    },
    {
      sectionTitle: "Organizing Team",
      sectionDescription: "Dr. Md Shahrukh Adnan Khan served as the Organizer and Session Chair, while Md. Masum Howlader contributed as the Co-Organizer of the session."
    }
  ],
  highlights: [
    "1st international special session by UAP EEE",
    "IEEE Conference at UTAR, Malaysia",
    "3 papers presented, 1 Best Paper Award",
    "Led by Dr. Shahrukh Adnan Khan and Md. Masum Howlader"
  ],
  category: "Conference",
  type: "conference",
  link: "/achievements/ieee-special-session-utar-2018"
}




]

export const achievements = achievementsData
export type AchievementType = typeof achievementsData[0]

export const formatDate = (date: string | Date): { day: string; month: string; year: string } => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return {
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }),
    year: d.toLocaleDateString('en-US', { year: 'numeric' }),
  };
};