// News data for the UAP EEE Department
// This file contains all news items separate from events

export interface NewsItem {
  id: number;
  title: string;
  shortDescription: string;
  date: string;
  order: number;
  images: string[];
  contentSections: {
    sectionTitle: string;
    sectionDescription: string;
    images?: string[]; // Unlimited images per section
  }[];
  highlights?: string[];
  category: string;
  type: 'news';
  link: string;
  slug: string;
}

export const NewsData: NewsItem[] = [
 {
  id: 1,
  title: "Team EEE_AMPLIFIER Represents UAP at KUET Inter University Programming Contest 2025",
  shortDescription: "Team EEE_AMPLIFIER from UAP EEE participated in KUET Inter University Programming Contest 2025, solving one problem alongside two CSE teams.",
  date: "2025-01-04T00:00:00Z",
  order: 1,
  images: [
    "/images/news/kuet_contest_2025/1.jpg",
    "/images/news/kuet_contest_2025/2.jpg",
    "/images/news/kuet_contest_2025/3.jpg",
    "/images/news/kuet_contest_2025/4.jpg",
    "/images/news/kuet_contest_2025/5.jpg",
    "/images/news/kuet_contest_2025/6.jpg",
    "/images/news/kuet_contest_2025/7.jpg",
    "/images/news/kuet_contest_2025/8.jpg",
    "/images/news/kuet_contest_2025/9.jpg"
  
  ],
  contentSections: [
    {
      sectionTitle: "Participation Overview",
      sectionDescription: "On 4th January 2025, Team 'EEE_AMPLIFIER' from the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific (UAP), participated in the KUET Inter University Programming Contest 2025. The team successfully solved one problem during the event, demonstrating their technical competence and enthusiasm.",
      images: [
        "/images/news/kuet_contest_2025/1.jpg"
      ]
    },
    {
      sectionTitle: "Performance and Teamwork",
      sectionDescription: "In addition to the EEE team, two teams from the Department of Computer Science and Engineering (CSE), UAP, also participated and solved the same problem. This collective achievement reflects the dedication and potential of UAP’s growing programming community."
    },
    {
      sectionTitle: "Looking Ahead",
      sectionDescription: "Although all three teams solved one problem, the experience has motivated them to aim higher in upcoming contests. The university community is proud of their effort and looks forward to supporting their future achievements."
    }
  ],
  highlights: [
    "Participation in KUET Inter University Programming Contest 2025",
    "Team EEE_AMPLIFIER from UAP EEE solved one problem",
    "Two CSE teams from UAP also solved the same problem",
    "Valuable experience gained for future contests"
  ],
  category: "Competition",
  type: "news",
  link: "/news/kuet-contest-2025",
  slug: "kuet-contest-2025"
},
 {
  id: 2,
  title: "Team EEE_AMPLIFIER Shines at UIU Inter University Programming Contest 2025",
  shortDescription: "Team EEE_AMPLIFIER from UAP EEE participated in the UIU Inter University Programming Contest 2025 and successfully solved two problems.",
  date: "2025-01-18T00:00:00Z",
  order: 2,
  images: [
    "/images/news/uiu_contest_2025/1.jpg",
    "/images/news/uiu_contest_2025/2.jpg",
    "/images/news/uiu_contest_2025/3.jpg",
    "/images/news/uiu_contest_2025/4.jpg"
    
  ],
  contentSections: [
    {
      sectionTitle: "Contest Participation",
      sectionDescription: "On 18th January 2025, Team 'EEE_AMPLIFIER' from the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific (UAP), participated in the UIU Inter University Programming Contest 2025. The team successfully solved two problems during the competition, demonstrating significant growth in their programming skills.",
      images: [
        "/images/news/uiu_contest_2025/1.jpg",
      ]
    },
    {
      sectionTitle: "Achievements and Motivation",
      sectionDescription: "This accomplishment reflects the team's hard work and evolving technical capabilities. It also highlights the strength of UAP’s programming ecosystem. Congratulations to the team for their performance!"
    },
    {
      sectionTitle: "Looking Ahead",
      sectionDescription: "We are confident that this experience will motivate the team to reach even greater heights in future contests. Let’s continue to support and encourage their journey toward excellence."
    }
  ],
  highlights: [
    "Participation in UIU Inter University Programming Contest 2025",
    "EEE_AMPLIFIER solved two problems",
    "Demonstrated technical growth and teamwork",
    "Encouraging performance for future contests"
  ],
  category: "Competition",
  type: "news",
  link: "/news/uiu-contest-2025",
  slug: "uiu-contest-2025"
},
{
  id: 3,
  title: "EEE Programming and AI Club Visits Elliotganj Rajendra Bishwanath High School",
  shortDescription: "The Programming and AI Club of UAP EEE visited Elliotganj Rajendra Bishwanath High School to discuss technology, AI, and future collaboration.",
  date: "2025-04-08T00:00:00Z",
  order: 3,
  images: [

    "/images/news/elliotganj_visit_2025/1.jpg",
    "/images/news/elliotganj_visit_2025/2.jpg",
    "/images/news/elliotganj_visit_2025/3.jpg",
    "/images/news/elliotganj_visit_2025/4.jpg",
    "/images/news/elliotganj_visit_2025/5.jpg",
    "/images/news/elliotganj_visit_2025/6.jpg"
    
  ],
  contentSections: [
    {
      sectionTitle: "Purpose of Visit",
      sectionDescription: "On 8th April 2025, the Programming and AI Club of the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific (UAP), responded to a request from the Headmaster of Elliotganj Rajendra Bishwanath High School.",
      images: [
        "/images/news/elliotganj_visit_2025/1.jpg",
      ]
    },
    {
      sectionTitle: "Activities Conducted",
      sectionDescription: "The day began with a meeting with the Headmaster, followed by engaging discussions with faculty members on the evolution of technology and artificial intelligence. The club shared insights and expressed its commitment to supporting co-curricular development."
    },
    {
      sectionTitle: "Lab Visit and Future Plans",
      sectionDescription: "The visit concluded with a tour of the school's Programming and Robotics Lab and a productive conversation with the student club's executive committee. The Programming and AI Club of UAP looks forward to future collaboration."
    }
  ],
  highlights: [
    "Visit to Elliotganj Rajendra Bishwanath High School",
    "Discussions on technology and AI with faculty",
    "Support pledged for co-curricular activities",
    "Visit to Programming and Robotics Lab"
  ],
  category: "Outreach",
  type: "news",
  link: "/news/elliotganj-visit-2025",
  slug: "elliotganj-visit-2025"
}

];

export const news = NewsData;

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};