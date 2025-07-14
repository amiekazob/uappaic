export interface StudentLifeType {
  id: string
  title: string
  shortDescription: string
  date: string
  images: string[]
  contentSections: {
    heading: string
    content: string
  }[]
  highlights: string[]
  category: string
  type: 'transition' | 'orientation' | 'academic-journey' | 'personal-growth' | 'career-preparation' | 'graduation'
  link: string
  studentYear?: string
  journeyStage?: string
  location?: string
  mentorSupport?: string
}

export const studentLifeData: StudentLifeType[] = [
  {
    id: 'freshman-orientation-2024',
    title: 'From High School to University: The Great Transition',
    shortDescription: 'The transformative journey of new students as they navigate from their familiar school environment to the exciting world of university life.',
    date: '2024-03-15',
    images: ['/images/campus life/freshman-orientation.jpg'],
    contentSections: [
      {
        heading: 'Leaving the Comfort Zone',
        content: 'Students share their experiences of leaving behind the structured environment of high school and embracing the freedom and responsibility of university life. The transition involves adapting to new learning styles, managing time independently, and building new social connections.'
      },
      {
        heading: 'Building New Foundations',
        content: 'The orientation program helps students establish strong academic and social foundations, connecting them with mentors, study groups, and support systems that will guide them throughout their university journey.'
      }
    ],
    highlights: [
      'Personalized mentorship from senior students',
      'Campus navigation and resource discovery',
      'Academic planning and goal setting',
      'Social integration activities and ice-breakers'
    ],
    category: 'New Student Experience',
    type: 'transition',
    link: '/campus-life/student-life-in-eee/freshman-orientation-2024',
    studentYear: 'Freshman',
    journeyStage: 'University Entry',
    location: 'UAP Campus',
    mentorSupport: 'Senior student mentors and faculty advisors'
  },
  {
    id: 'academic-awakening-2024',
    title: 'The Academic Awakening: Discovering Your Passion',
    shortDescription: 'Second-year students explore specialized fields within EEE, discovering their true academic passions and career interests.',
    date: '2024-02-20',
    images: ['/images/campus life/academic-awakening.jpg'],
    contentSections: [
      {
        heading: 'Exploring Specializations',
        content: 'Students delve deeper into various EEE specializations including power systems, telecommunications, electronics, and renewable energy. This exploration phase helps them identify their strengths and interests.'
      },
      {
        heading: 'Research Opportunities',
        content: 'Introduction to research methodologies and opportunities to work with faculty on cutting-edge projects, fostering critical thinking and innovation skills.'
      }
    ],
    highlights: [
      'Hands-on laboratory experiences',
      'Faculty-guided research projects',
      'Industry guest lectures and workshops',
      'Peer collaboration on complex problems'
    ],
    category: 'Academic Development',
    type: 'academic-journey',
    link: '/campus-life/student-life-in-eee/academic-awakening-2024',
    studentYear: 'Sophomore',
    journeyStage: 'Specialization Discovery',
    location: 'EEE Labs & Classrooms',
    mentorSupport: 'Faculty advisors and research supervisors'
  },
  {
    id: 'leadership-emergence-2024',
    title: 'Emerging Leaders: Taking Charge of Your Journey',
    shortDescription: 'Third-year students step into leadership roles, organizing events, leading projects, and mentoring junior students.',
    date: '2024-01-10',
    images: ['/images/campus life/leadership-emergence.jpg'],
    contentSections: [
      {
        heading: 'Student Leadership',
        content: 'Students take on leadership roles in student organizations, academic clubs, and community service projects. They learn to balance academic responsibilities with leadership commitments.'
      },
      {
        heading: 'Mentoring Others',
        content: 'Experienced students become mentors to freshmen and sophomores, sharing their journey experiences and providing guidance on academic and personal challenges.'
      }
    ],
    highlights: [
      'Student government participation',
      'Event organization and management',
      'Peer mentoring programs',
      'Community outreach initiatives'
    ],
    category: 'Leadership Development',
    type: 'personal-growth',
    link: '/campus-life/student-life-in-eee/leadership-emergence-2024',
    studentYear: 'Junior',
    journeyStage: 'Leadership Development',
    location: 'Campus-wide',
    mentorSupport: 'Student affairs office and alumni mentors'
  },
  {
    id: 'career-preparation-2024',
    title: 'Preparing for Tomorrow: Career Readiness Journey',
    shortDescription: 'Final-year students prepare for their professional careers through internships, job preparation, and industry connections.',
    date: '2023-12-05',
    images: ['/images/campus life/career-preparation.jpg'],
    contentSections: [
      {
        heading: 'Industry Readiness',
        content: 'Students engage in intensive career preparation including resume building, interview skills, technical assessments, and industry networking events.'
      },
      {
        heading: 'Real-World Experience',
        content: 'Internship programs and capstone projects provide hands-on experience in professional environments, bridging the gap between academic learning and industry practice.'
      }
    ],
    highlights: [
      'Industry internship placements',
      'Career counseling and guidance',
      'Professional networking events',
      'Job placement assistance'
    ],
    category: 'Career Development',
    type: 'career-preparation',
    link: '/campus-life/student-life-in-eee/career-preparation-2024',
    studentYear: 'Senior',
    journeyStage: 'Career Preparation',
    location: 'Industry Partners & Campus',
    mentorSupport: 'Career services and industry professionals'
  },
  {
    id: 'graduation-celebration-2024',
    title: 'The Journey Culminates: Graduation and Beyond',
    shortDescription: 'Celebrating the completion of the university journey and the beginning of professional careers or advanced studies.',
    date: '2023-11-15',
    images: ['/images/campus life/graduation-celebration.jpg'],
    contentSections: [
      {
        heading: 'Achievement Recognition',
        content: 'Graduation ceremony celebrates the academic achievements and personal growth of students throughout their university journey, recognizing their transformation from freshmen to accomplished graduates.'
      },
      {
        heading: 'Alumni Network',
        content: 'Graduates join the prestigious UAP EEE alumni network, maintaining connections with their alma mater and supporting future generations of students.'
      }
    ],
    highlights: [
      'Graduation ceremony and celebration',
      'Alumni network induction',
      'Career placement success stories',
      'Continuing education opportunities'
    ],
    category: 'Graduation & Alumni',
    type: 'graduation',
    link: '/campus-life/student-life-in-eee/graduation-celebration-2024',
    studentYear: 'Graduate',
    journeyStage: 'Completion & Transition',
    location: 'UAP Auditorium',
    mentorSupport: 'Alumni association and career services'
  }
]

// Utility function to format dates
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}