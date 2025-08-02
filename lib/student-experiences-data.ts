export interface StudentExperience {
  id: string
  title: string
  date: string
  images: string[]
  contentSections: {
    type: 'paragraph' | 'quote' | 'list'
    content: string | string[]
  }[]
  category: string
  type: 'academic' | 'research' | 'internship' | 'project' | 'achievement'
  student: {
    name: string
    year: string
    program: string
    image?: string
  }
  slug: string
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const StudentExperiencesData: StudentExperience[] = [
  {
    id: '1',
    title: 'From Classroom to Silicon Valley: My Journey to Google',
    date: '2024-01-15',
    images: ['/images/student-stories/abid-journey-cover.svg'],
    contentSections: [
      {
        type: 'paragraph',
        content: 'When I first stepped into the EEE department at UAP, I never imagined that four years later I would be working at Google as a Software Engineer. This is the story of how the EEE Club and our amazing faculty shaped my journey to one of the world\'s most prestigious tech companies.'
      },
      {
        type: 'quote',
        content: 'The technical workshops and coding competitions at EEE Club gave me the confidence to apply for international internships. The problem-solving skills I developed here were crucial during my Google interviews.'
      },
      {
        type: 'paragraph',
        content: 'My journey began in my second year when I joined the EEE Club\'s programming team. The club\'s emphasis on practical learning and real-world projects helped me build a strong foundation in software development. I participated in multiple hackathons and coding competitions, which not only improved my technical skills but also taught me how to work under pressure.'
      },
      {
        type: 'list',
        content: [
          'Participated in 15+ coding competitions',
          'Led 3 major club projects including IoT-based smart campus system',
          'Mentored 20+ junior students in programming',
          'Completed internships at local tech companies before landing Google'
        ]
      },
      {
        type: 'paragraph',
        content: 'The support from faculty members like Dr. Rahman and the collaborative environment at EEE Club made all the difference. Today, as I work on cutting-edge AI projects at Google, I carry with me the values and skills I learned at UAP.'
      }
    ],
    category: 'Career Success',
    type: 'achievement',
    student: {
      name: 'Fatima Khan',
      year: 'Class of 2023',
      program: 'BSc in EEE',
      image: '/images/student-stories/fatima-khan.jpg'
    },
    slug: 'fatima-khan-google-journey'
  },
  {
    id: '2',
    title: 'Building Bangladesh\'s First Student-Led Renewable Energy Startup',
    date: '2024-02-20',
    images: ['/images/student-stories/programming-club.svg'],
    contentSections: [
      {
        type: 'paragraph',
        content: 'What started as a final year project in renewable energy systems has now become Bangladesh\'s first student-led clean energy startup. Our company, SolarTech BD, is now providing affordable solar solutions to rural communities across the country.'
      },
      {
        type: 'quote',
        content: 'The entrepreneurship workshops and innovation labs at EEE Club gave us the platform to turn our academic project into a real business that\'s making a difference in people\'s lives.'
      },
      {
        type: 'paragraph',
        content: 'The idea came during our third year when we were working on a project about sustainable energy solutions. With guidance from our professors and support from the EEE Club\'s innovation lab, we developed a low-cost solar panel system specifically designed for rural Bangladesh.'
      },
      {
        type: 'list',
        content: [
          'Developed 5 patent-pending solar technologies',
          'Served 500+ rural households with clean energy',
          'Won National Innovation Award 2024',
          'Raised $50,000 in seed funding',
          'Created 15 jobs for fellow engineering graduates'
        ]
      },
      {
        type: 'paragraph',
        content: 'Today, SolarTech BD is expanding to other South Asian countries. None of this would have been possible without the strong foundation in both technical skills and entrepreneurial thinking that I gained at UAP\'s EEE department.'
      }
    ],
    category: 'Entrepreneurship',
    type: 'project',
    student: {
      name: 'Ahmed Rahman',
      year: 'Class of 2024',
      program: 'BSc in EEE',
      image: '/images/student-stories/ahmed-rahman.jpg'
    },
    slug: 'ahmed-rahman-renewable-startup'
  },
  {
    id: '3',
    title: 'Bridging Theory and Practice: My Internship at Samsung R&D',
    date: '2024-06-18',
    images: ['/images/student-stories/dhaka-city-college.svg'],
    contentSections: [
      {
        type: 'paragraph',
        content: 'My internship at Samsung R&D Bangladesh was a transformative experience that bridged the gap between academic learning and industry practice. Working on cutting-edge semiconductor research, I gained invaluable insights into how theoretical knowledge translates into real-world innovations.'
      },
      {
        type: 'quote',
        content: 'The research methodologies and analytical thinking I developed at EEE Club prepared me perfectly for the rigorous R&D environment at Samsung. My supervisors were impressed with my problem-solving approach.'
      },
      {
        type: 'list',
        content: [
          'Contributed to 2 patent applications in semiconductor technology',
          'Developed testing protocols for next-generation memory chips',
          'Collaborated with international research teams',
          'Presented findings at Samsung Global R&D Conference'
        ]
      }
    ],
    category: 'Industry Experience',
    type: 'internship',
    student: {
      name: 'Karim Abdullah',
      year: 'Class of 2024',
      program: 'BSc in EEE',
      image: '/images/student-stories/karim-abdullah.jpg'
    },
    slug: 'karim-abdullah-samsung-internship'
  }
]

export const getExperienceBySlug = (slug: string): StudentExperience | undefined => {
  return StudentExperiencesData.find(experience => experience.slug === slug)
}

export const getExperiencesByCategory = (category: string): StudentExperience[] => {
  return StudentExperiencesData.filter(experience => experience.category === category)
}

export const getExperiencesByType = (type: string): StudentExperience[] => {
  return StudentExperiencesData.filter(experience => experience.type === type)
}

export const getAllCategories = (): string[] => {
  const categories = StudentExperiencesData.map(experience => experience.category)
  return [...new Set(categories)]
}

export const getAllTypes = (): string[] => {
  const types = StudentExperiencesData.map(experience => experience.type)
  return [...new Set(types)]
}