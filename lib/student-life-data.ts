export interface StudentLifeType {
  id: string
  title: string
  subtitle: string
  description: string
  publishedDate: string
  priority: number
  coverImage: string
  images: string[]
  content: {
    section: string
    details: string
    images?: string[]
    keyPoints?: string[]
  }[]
  achievements: string[]
  tags: string[]
  category: 'student-stories' | 'academic-milestones' | 'campus-culture' | 'innovation-projects' | 'community-impact'
  experienceType: 'freshman-year' | 'sophomore-year' | 'junior-year' | 'senior-year' | 'graduate-level' | 'alumni-journey'
  slug: string
  // Simplified metadata - only essential info
  metadata: {
    duration?: string
    participants?: number
    academicYear?: string
  }
  // Simplified engagement - just difficulty level
  engagement: {
    difficulty: 'beginner' | 'intermediate' | 'advanced'
  }
  // Single impact summary instead of multiple detailed impacts
  impact: string
}

export const studentLifeData: StudentLifeType[] = [
 
  {
  id: 'every-kilometer-counts',
  title: 'Every Kilometer Counts: A Story of Dreams, Distance, and Discipline',
  subtitle: 'How Focus and Grit Turned a Daily 76 KM Commute into Academic Glory',
  description: 'Meet Saleh Abid — a determined EEE student at UAP whose 76 km daily journey, consistent academic excellence, and leadership as a club coordinator prove that discipline can turn distance into destiny.',
  publishedDate: '2025-07-15',
  priority: 8,
  coverImage:  '/images/student-life-in-eee/every-kilometer-counts/cover.jpg',
  images: [
    '/images/student-life-in-eee/every-kilometer-counts/1.jpg',
  ],
  content: [
    {
      section: 'Strong Academic Foundations',
      details: 'I studied from class 6 to class 10 at a reputable school in our area. During this time, I secured top-three positions in multiple thana-level educational competitions. I passed JSC and SSC exams with GPA-5 from the science group.',
        //images: ['/images/student-life-in-eee/every-kilometer-counts/1.jpg',],
    },
    
    {
      section: 'Building Momentum at Dhaka City College',
      details: 'After SSC, I joined Dhaka City College in the science stream. The environment was competitive, but I stayed consistent and achieved GPA-5 in my HSC exam as well.',
      images: ['/images/student-life-in-eee/every-kilometer-counts/dcc.jpg',]
    },
    {
      section: 'UAP: Excellence Amidst a Daily 76 KM Journey',
      details: 'Currently, I\'m studying Electrical and Electronic Engineering (EEE) at the University of Asia Pacific. My university is 38 kilometers away from my home, and I travel 76 kilometers every day. Despite this challenge, I earned the Vice Chancellor\'s Award in both my 1st and 2nd semesters and currently hold a CGPA of 3.99.',
      images: ['/images/student-life-in-eee/every-kilometer-counts/1.jpg',]
    },
    {
      section: 'Beyond Academics: Leadership and Innovation',
      details: 'I serve as an Event Coordinator for the Programming and AI Club of EEE at UAP, where I help organize workshops, contests, and learning sessions that empower students in the tech space.',
      images: ['/images/student-life-in-eee/every-kilometer-counts/3.jpg']
    },
    {
      section: 'Champion of Codex 1.0',
      details: 'I participated in a programming contest named "Codex 1.0" and became the champion among 23 competing teams. This win boosted my confidence and reaffirmed my passion for problem-solving and programming.',
      images: ['/images/student-life-in-eee/every-kilometer-counts/4.jpg',]
    },
    {
      section: 'A Message for Fellow Students',
      details: 'Dear juniors, always believe in yourself. I studied in a rural school, travel 76 km daily for university, and still manage to perform well. Hard work and consistency matter more than background. Never give up — your journey is just beginning.',
      //images: ["/images/student-stories/motivation-message.jpg"]
    }
  ],
  achievements: [
    'GPA-5 in both SSC and HSC (Science Group)',
    'Vice Chancellor’s Award in 1st and 2nd semesters at UAP',
    'Current CGPA: 3.99 out of 4.00',
    'Champion of "Codex 1.0" Programming Contest',
    'Top 3 placements in several thana-level competitions',
    'Event Coordinator of Programming and AI Club (EEE, UAP)',
    'Travels 76 km daily to attend university classes'
  ],
  tags: [
    'academic-excellence',
    'vc-award',
    'long-distance-travel',
    'student-leader',
    'programming',
    'grit',
    'discipline',
    'uap-eee',
    'motivation'
  ],
  category: 'student-stories',
  experienceType: 'academic-journey',
  slug: 'every-kilometer-counts',
  metadata: {
    //duration: '2022–2025',
    academicYear: '2024'
  },
  engagement: {
    difficulty: 'challenging'
  },
  impact: 'This story reflects how sheer determination, time management, and self-belief can lead to excellence—no matter the obstacles. Saleh Abid’s journey inspires students from all backgrounds to aim high and keep moving forward, one kilometer at a time.'
},



{
  id: 'beyond-books-growth-through-participation',
  title: 'Beyond Books: Growth Through Participation and Curiosity',
  subtitle: 'How a Quiz Competition Sparked a Lifelong Habit of Exploring Beyond the Classroom',
  description: 'From winning a college-wide quiz competition to embracing co-curricular life at UAP, this is the journey of a student who believes learning goes far beyond textbooks.',
  publishedDate: '2025-07-15',
  priority: 2,
  coverImage: '/images/student-life-in-eee/beyond-books-growth-through-participation/1.jpg',
  images: ['/images/student-life-in-eee/beyond-books-growth-through-participation/1.jpg'],

  content: [
      {
        section: 'The Quiz That Sparked It All',
        details: 'During my time at Notre Dame College Mymensingh, I took part in a quiz competition organized for International Mother Language Day. It was open to the entire college, and I was honored to secure first place. That experience was really meaningful for me — it pushed me to study beyond the regular syllabus and dive deep into our rich language heritage.',
        //images: ['/images/student-stories/quiz-stage.jpg']
      },
    {
      section: 'Lessons That Lasted',
      details: 'More than just a win, the experience taught me the value of preparation, curiosity, and stepping outside my comfort zone. It showed me that real learning starts when we challenge ourselves beyond routine coursework.',
      //images: ["/images/student-stories/notre-dame-mymensingh.jpg"]
    },
    {
      section: 'UAP: Keeping the Spirit Alive',
      details: 'Now, as an EEE student at the University of Asia Pacific, I make sure to take part in events, workshops, and club activities. These experiences continue to shape me in ways that traditional classes alone cannot.',
      //images: ["/images/student-stories/uap-event.jpg"]
    },
    {
      section: 'A Message to Juniors',
      details: 'To all my juniors: Don\'t limit yourself to just classes and exams. Join competitions, attend seminars, volunteer, work on projects. These will build your confidence, leadership, and communication skills — and help you make lifelong friends. When I look back, winning that quiz wasn\'t just about coming first. It was about daring to try and building the habit of active participation.',
      //images: ["/images/student-stories/participation-message.jpg"]
    }
  ],
  achievements: [
    '1st Place – International Mother Language Day Quiz Competition at Notre Dame College Mymensingh',
    'Consistent participant in co-curricular events at UAP',
    'Actively involved in workshops, clubs, and student activities'
  ],
  tags: [
    'quiz-competition',
    'co-curricular',
    'student-growth',
    'uap-eee',
    'motivation',
    'language-day',
    'participation',
    'notre-dame-college-mymensingh'
  ],
  category: 'student-stories',
  experienceType: 'cultural-engagement',
  slug: 'beyond-books-growth-through-participation',
  metadata: {
    academicYear: '2024'
  },
  engagement: {
    difficulty: 'moderate'
  },
  impact: 'This story shows how early participation in a quiz competition helped spark a lifelong drive to grow through co-curricular activities. It inspires students to take chances, explore their interests, and develop beyond academics.'
},
{
  id: "the-three-of-us-uap-journey",
  title: "The Three of Us: From Classmates to UAP Companions",
  subtitle: "How Friendship, Challenges, and Curiosity Led Us to UAP",
  description: "A heartwarming journey of three friends — Homaira, Anchol, and Orin — from school days to becoming UAP EEE students, sharing memories of admissions, cultural events, and academic life together.",
  publishedDate: "2025-07-15",
  priority: 3,
  coverImage:  '/images/student-life-in-eee/the-three-of-us-uap-journey/cover.jpg',
  images: [
    "/images/student-life-in-eee/the-three-of-us-uap-journey/1.jpg",
    
  ],
  content: [
    {
      section: "How It All Began",
      details: "We — Homaira, Anchol, and Orin — met in 2014 in school. Orin and Anchol were already friends from kindergarten. I became close with Orin during our school commutes, and Anchol and I bonded during our Class 8 exams, thanks to our consecutive roll numbers.",
      images: ["/images/student-stories/school-days.jpg"]
    },
    {
      section: "SSC to HSC to Admission Struggles",
      details: "We completed SSC in 2021 and then HSC in 2023 from Sarda College, Faridpur. When the university admission season came, we struggled to find the right fit and felt disheartened. Eventually, we discovered UAP and were impressed by its environment, tuition structure, and academics. Together, we applied, interviewed, and enrolled.",
      images: ["/images/student-stories/admission-struggle.jpg"]
    },
    {
      section: "A New Life at UAP",
      details: "We moved to Dhaka on January 24th, 2024, attended orientation the next day, and started classes on January 26th. We made new friends and took part in many events, from fresher's reception to cultural festivals. We began to feel at home.",
      images: ["/images/student-stories/uap-orientation.jpg"]
    },
    {
      section: "Finding Our Place Beyond the Classroom",
      details: "In mid-February, we ran a stall at the 'Pitha Utsab 1431' with our friends. We participated in the 'Codex 1.0' programming contest. Then came Techtron 2025, a national tech fest that truly inspired us. Our friends' photos were even displayed in a photo exhibition organized by LenScape. And all this while, we kept pushing through CTs, assignments, quizzes, and midterms — before we knew it, our first semester was over!",
      images: ["/images/student-stories/pitha-utsab.jpg"]
    }
  ],
  achievements: [
    "Participated in Pitha Utsab 1431 with a group-run stall",
    "Joined Codex 1.0 programming contest",
    "Attended Techtron 2025 and explored student tech projects",
    "Photography selected for UAP EEE Photo Exhibition"
  ],
  tags: [
    "friendship",
    "uap-eee",
    "student-life",
    "cultural-events",
    "tech-events",
    "photo-exhibition",
    "admission-journey",
    "teamwork"
  ],
  category: "student-stories",
  experienceType: "first-semester",
  slug: "the-three-of-us-uap-journey",
  metadata: {
    //duration: "January 2024 – Present",
    academicYear: "2024"
  },
  engagement: {
    difficulty: "moderate"
  },
  impact: "This story captures the essence of transitioning from school friends to university teammates, highlighting how students can thrive together in academics and extracurriculars despite coming from different backgrounds and facing admission struggles."
},


 
  {
    id: 'freshman-survival-story',
    title: 'From Lost to Leader: A Freshman Survival Story',
    subtitle: 'How I Found My Way in University Life',
    description: 'A candid account of navigating the overwhelming first year - from getting lost on campus to finding lifelong friends and discovering my passion for electrical engineering.',
    publishedDate: '2024-06-15',
    priority: 1,
    coverImage: '/images/campus life/freshman-journey.jpg',
    images: [
      '/images/campus life/first-day-campus.jpg',
      '/images/campus life/study-group-formation.jpg',
      '/images/campus life/lab-first-time.jpg'
    ],
    content: [
      {
        section: 'The Overwhelming Beginning',
        details: 'My first day at UAP was terrifying. I got lost trying to find the EEE building, missed my first class, and felt completely out of place among all these confident-looking students.',
        images: ['/images/campus life/first-day-campus.jpg']
      },
      {
        section: 'Finding My Tribe',
        details: 'Everything changed when I joined a study group for Circuit Analysis. These strangers became my closest friends, helping me through late-night problem sets and exam stress.',
        images: ['/images/campus life/study-group-formation.jpg']
      },
      {
        section: 'The Breakthrough Moment',
        details: 'During my first lab session, when I successfully built my first working circuit, I knew I had found my calling. That spark of electricity wasn\'t just in the circuit - it was in me.',
        images: ['/images/campus life/lab-first-time.jpg']
      }
    ],
    achievements: [
      'Survived first semester without dropping out',
      'Made lifelong friends in study group',
      'Built first working circuit',
      'Stopped getting lost on campus',
      'Found my passion for electronics',
      'Became the go-to person for lab help'
    ],
    tags: ['freshman-year', 'survival', 'friendship', 'discovery', 'personal-growth', 'belonging'],
    category: 'student-stories',
    experienceType: 'freshman-year',
    slug: 'freshman-survival-story',
    metadata: {
      duration: '4 years (ongoing)',
      academicYear: '2021-2025'
    },
    engagement: {
      difficulty: 'advanced'
    },
    impact: 'Transformed from a lost freshman to a confident engineering student, proving that with persistence and the right support system, anyone can find their place and passion in university life.'
  },

  /*
  {
    id: 'graduation-day-emotions',
    title: 'The Day I Finally Made It: Graduation Reflections',
    subtitle: 'Four Years of Struggle, Growth, and Triumph',
    description: 'The emotional journey of graduation day - reflecting on sleepless nights, failed exams, comeback stories, and the incredible feeling of finally holding that degree.',
    publishedDate: '2024-04-10',
    priority: 2,
    coverImage: '/images/campus life/graduation-ceremony.jpg',
    images: [
      '/images/campus life/cap-and-gown.jpg',
      '/images/campus life/family-celebration.jpg',
      '/images/campus life/friends-graduation.jpg'
    ],
    content: [
      {
        section: 'The Struggle Was Real',
        details: 'I almost gave up in third year when I failed Microprocessors twice. Sitting in that retake exam, I questioned everything. But my friends and family never stopped believing in me.'
      },
      {
        section: 'The Final Push',
        details: 'Senior year was intense - thesis deadlines, job interviews, and the constant fear of not graduating on time. Those final months tested everything I had learned about perseverance.'
      },
      {
        section: 'Walking Across That Stage',
        details: 'When they called my name and I walked across that stage, four years of struggle flashed before my eyes. My parents crying in the audience made it all worth it.'
      }
    ],
    achievements: [
      'Passed Microprocessors on the third try',
      'Completed thesis despite multiple setbacks',
      'Landed first job before graduation',
      'Made parents proud at graduation ceremony',
      'Proved doubters wrong',
      'Became first in family to earn engineering degree'
    ],
    tags: ['graduation', 'perseverance', 'family-pride', 'struggle', 'triumph', 'achievement'],
    category: 'student-stories',
    experienceType: 'senior-year',
    slug: 'graduation-day-emotions',
    metadata: {
      duration: '8 months',
      academicYear: '2024'
    },
    engagement: {
      difficulty: 'advanced'
    },
    impact: 'Demonstrated that perseverance through academic struggles leads to personal triumph, inspiring other students that failure is not final and graduation dreams are achievable with determination.'
  },
  {
    id: 'midway-crisis-comeback',
    title: 'Rock Bottom to Rising Up: My Midway Crisis',
    subtitle: 'When Everything Fell Apart in Third Year',
    description: 'The honest story of hitting rock bottom in third year - failing courses, losing motivation, and questioning my choice - and how I found the strength to climb back up.',
    publishedDate: '2024-01-15',
    priority: 3,
    coverImage: '/images/campus life/student-struggle.jpg',
    images: [
      '/images/campus life/late-night-study.jpg',
      '/images/campus life/counseling-session.jpg',
      '/images/campus life/comeback-celebration.jpg'
    ],
    content: [
      {
        section: 'The Breaking Point',
        details: 'Third year hit me like a truck. Failed three courses in one semester, lost my scholarship, and started doubting if I was cut out for engineering. I felt like a complete failure.'
      },
      {
        section: 'Finding Help',
        details: 'My advisor noticed my struggle and connected me with counseling services. Talking to someone who understood academic pressure was the first step toward healing and rebuilding my confidence.'
      },
      {
        section: 'The Slow Climb Back',
        details: 'Recovery wasn\'t instant. It took two semesters of retakes, study groups, and small victories to rebuild my GPA and my self-worth. Each passed exam felt like climbing a mountain.'
      }
    ],
    achievements: [
      'Sought help when needed most',
      'Retook and passed all failed courses',
      'Rebuilt GPA from 2.1 to 3.2',
      'Became mental health advocate on campus',
      'Learned that failure isn\'t final',
      'Developed resilience and grit'
    ],
    tags: ['crisis', 'mental-health', 'comeback', 'resilience', 'support', 'recovery'],
    category: 'student-stories',
    experienceType: 'junior-year',
    slug: 'midway-crisis-comeback',
    metadata: {
      duration: '1 semester',
      academicYear: '2024'
    },
    engagement: {
      difficulty: 'beginner'
    },
    impact: 'Showed that mental health struggles and academic failure don\'t define your future, becoming a campus advocate for student wellness and proving that comeback stories are possible.'
  },
  {
    id: 'internship-reality-check',
    title: 'Internship Reality Check: From Theory to Practice',
    subtitle: 'When Real Work Humbled My Classroom Confidence',
    description: 'My first internship was a wake-up call. Everything I thought I knew from textbooks crumbled on day one, but it became the most valuable learning experience of my university life.',
    publishedDate: '2024-05-20',
    priority: 4,
    coverImage: '/images/campus life/internship-experience.jpg',
    images: [
      '/images/campus life/first-day-office.jpg',
      '/images/campus life/mentor-guidance.jpg',
      '/images/campus life/project-completion.jpg'
    ],
    content: [
      {
        section: 'The Humbling First Day',
        details: 'I walked into the office thinking I knew everything about circuits and programming. Within hours, I realized university had only taught me the basics. Real industry problems were completely different.'
      },
      {
        section: 'Learning from Failure',
        details: 'My first project was a disaster. I spent weeks on the wrong approach before my mentor gently showed me industry best practices. It was embarrassing but incredibly educational.'
      },
      {
        section: 'Finding My Professional Voice',
        details: 'By the end of the internship, I had learned more about practical engineering than in three years of university. I also discovered what kind of engineer I wanted to become.'
      }
    ],
    achievements: [
      'Survived the reality check of first day',
      'Learned industry-standard practices',
      'Built first real-world application',
      'Received job offer from internship company',
      'Gained practical problem-solving skills',
      'Discovered career direction'
    ],
    tags: ['internship', 'reality-check', 'learning', 'humility', 'growth', 'career'],
    category: 'student-stories',
    experienceType: 'senior-year',
    slug: 'internship-reality-check',
    metadata: {
      duration: '3 days',
      academicYear: '2024'
    },
    engagement: {
      difficulty: 'advanced'
    },
    impact: 'Bridged the gap between academic theory and industry practice, helping future students understand the importance of real-world experience and professional skill development.'
  },
  {
    id: 'friendship-through-crisis',
    title: 'Friends Who Became Family: Getting Through Together',
    subtitle: 'How My Classmates Saved My University Experience',
    description: 'University isn\'t just about grades and degrees. It\'s about the people who become your chosen family, who celebrate your wins and carry you through your lowest moments.',
    publishedDate: '2024-03-10',
    priority: 5,
    coverImage: '/images/campus life/friendship-bonds.jpg',
    images: [
      '/images/campus life/study-group-fun.jpg',
      '/images/campus life/supporting-friend.jpg',
      '/images/campus life/celebration-together.jpg'
    ],
    content: [
      {
        section: 'The Group That Stuck',
        details: 'We met in first year during a particularly brutal Physics lab. What started as a study group became a support system that carried us through every semester, every Crisis, every celebration.'
      },
      {
        section: 'Through Thick and Thin',
        details: 'When Rafi\'s father got sick, we took turns bringing him notes. When Sarah failed her first exam, we studied with her until 3 AM. When I got my first job offer, they celebrated like it was their own.'
      },
      {
        section: 'More Than Classmates',
        details: 'Four years later, we\'re not just engineering graduates - we\'re family. These friendships will outlast any job, any achievement. They\'re the real treasure of university life.'
      }
    ],
    achievements: [
      'Built lifelong friendships',
      'Created unbreakable support system',
      'Learned to be there for others',
      'Experienced unconditional friendship',
      'Made university feel like home',
      'Found my chosen family'
    ],
    tags: ['friendship', 'support-system', 'chosen-family', 'loyalty', 'bonds', 'university-life'],
    category: 'student-stories',
    experienceType: 'all-years',
    slug: 'friendship-through-crisis',
    metadata: {
      academicYear: '2024'
    },
    engagement: {
      difficulty: 'beginner'
    },
    impact: 'Highlighted the importance of genuine friendships and support systems in university success, showing that academic achievement is enhanced by strong personal relationships and mutual support.'
  }
*/


]

// Utility functions for data manipulation
export const getStudentLifeByCategory = (category: StudentLifeType['category']): StudentLifeType[] => {
  return studentLifeData.filter(item => item.category === category)
}

export const getStudentLifeByExperienceType = (type: StudentLifeType['experienceType']): StudentLifeType[] => {
  return studentLifeData.filter(item => item.experienceType === type)
}

export const getStudentLifeByTag = (tag: string): StudentLifeType[] => {
  return studentLifeData.filter(item => item.tags.includes(tag))
}

export const formatPublishedDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const getSortedStudentLife = (): StudentLifeType[] => {
  return [...studentLifeData].sort((a, b) => a.priority - b.priority)
}

export const getRecentStudentLife = (limit: number = 3): StudentLifeType[] => {
  return [...studentLifeData]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit)
}