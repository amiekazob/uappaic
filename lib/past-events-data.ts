export const PastEventsData = [
 
  {
    id: 1,
    title: "EEE Programming and AI Club Hosted CODEX 1.0",
    shortDescription: "CODEX 1.0 celebrated programming excellence and research innovation at UAP.",
    date: "2025-04-23T00:00:00Z",
    order: 2,
    slug: "codex-1-0",
    images: [
  "/images/past_events/codex_1_0/12.jpg",
  "/images/past_events/codex_1_0/13.jpg",
  "/images/past_events/codex_1_0/14.jpg",
  "/images/past_events/codex_1_0/15.jpg",
  "/images/past_events/codex_1_0/16.jpg",
  "/images/past_events/codex_1_0/17.jpg",
  "/images/past_events/codex_1_0/18.jpg",
 
  "/images/past_events/codex_1_0/20.jpg",
  "/images/past_events/codex_1_0/21.jpg",
  "/images/past_events/codex_1_0/22.jpg",
  "/images/past_events/codex_1_0/23.jpg",
  "/images/past_events/codex_1_0/24.jpg",
  "/images/past_events/codex_1_0/25.jpg",
  "/images/past_events/codex_1_0/26.jpg",
  "/images/past_events/codex_1_0/27.jpg",
  "/images/past_events/codex_1_0/28.jpg",
  "/images/past_events/codex_1_0/29.jpg",
  "/images/past_events/codex_1_0/30.jpg",
  "/images/past_events/codex_1_0/31.jpg"
  ],
    contentSections: [
        {
          sectionTitle: "Event Overview",
          sectionDescription: "On 23rd April 2025, the EEE Programming and AI Club of the University of Asia Pacific (UAP) proudly hosted CODEX 1.0—a landmark event dedicated to celebrating technical prowess, innovation, and academic excellence within the Department of Electrical and Electronic Engineering (EEE).",
          images: [
            "/images/past_events/codex_1_0/1.jpg"
          ]
        },
        {
           sectionTitle: "Intra-Department Programming Contest",
           sectionDescription: "CODEX 1.0 featured a dynamic intra-department programming contest with 23 competitive teams. Each team showcased exceptional problem-solving abilities and collaborative skills. Champion Team: 404_not_found, consisting of Saleh Mohammad Abid and Md Nasir Uddin, secured first place. Other notable teams included Choyon Majumdar & Athoy Datta Anchol, and Abdullah Sarkar Shihab & Saima Sadia Simi.",
           images: [
            "/images/past_events/codex_1_0/1.jpg",
            "/images/past_events/codex_1_0/2.jpg",
            "/images/past_events/codex_1_0/3.jpg",
            "/images/past_events/codex_1_0/4.jpg"
           ]
         },
        {
          sectionTitle: "Seminar on Research and Publications",
          sectionDescription: "Complementing the contest, a seminar titled \"Empowering Students in Research and Publications\" was conducted by Dr. Md. Shafiul Alam, Associate Professor of EEE at UAP. Ranked among the top 2% of scientists globally by Elsevier and Stanford University, Dr. Alam shared valuable insights on academic writing, publishing strategies, and building a strong research profile.",
          images: [
            "/images/past_events/codex_1_0/5.jpg",
            "/images/past_events/codex_1_0/6.jpg",
            "/images/past_events/codex_1_0/7.jpg",
          ]
        },
        {
          sectionTitle: "Impact and Outcome",
          sectionDescription: "Together, the programming contest and the seminar transformed CODEX 1.0 into more than just a competition. It became a platform that fostered innovation, inspired academic excellence, and promoted a strong research culture within the EEE Department.",
          images: [
            "/images/past_events/codex_1_0/8.jpg",
            "/images/past_events/codex_1_0/9.jpg",
            "/images/past_events/codex_1_0/10.jpg",
            "/images/past_events/codex_1_0/11.jpg",
            
          ]
        }
      ],
    highlights: [
      "23 competitive programming teams",
      "Champion Team: 404_not_found",
      "Research seminar by Dr. Md. Shafiul Alam",
      "Top 2% scientist insights on publishing",
      "Fostering academic excellence and innovation"
    ],
    category: "Academic",
    type: "event",
    link: "/past-events/codex-1-0"
  }
];

export const pastEvents = PastEventsData;
export type PastEvent = typeof PastEventsData[0];

export const formatDate = (date: string | Date): { day: string; month: string; year: string } => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return {
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }),
    year: d.toLocaleDateString('en-US', { year: 'numeric' }),
  };
};