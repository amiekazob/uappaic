export const NewsEvents = [
  {
    id: 1,
    title: "UAP Hosted TechTron 2025",
    shortDescription: "TechTron 2025 celebrated innovation and engineering excellence at UAP.",
    date: "2025-04-25T00:00:00Z",
    images: [
      "https://i.ibb.co/spXhW9tj/image.png"
    ],
    contentSections: [
      {
        sectionTitle: "Opening Remarks",
        sectionDescription: "TechTron 2025, the University of Asia Pacific (UAP)'s most anticipated flagship technology event, commenced on Friday, 25 April, with a vibrant celebration of innovation, engineering excellence and academic-industry collaboration. The national-level festival has been jointly organised by the UAP EEE Project Club and the IEEE UAP Student Branch, under the Department of Electrical and Electronic Engineering (EEE), UAP. The grand opening ceremony took place at the UAP Plaza, with Prof. Dr. Qumrul Ahsan, Vice Chancellor of UAP, as chief guest."
      }
    ],
    highlights: [
      "Opening by UAP Vice Chancellor",
      "Student project showcase",
      "Academic and industry collaboration"
    ],
    category: "Academic",
    type: "event",
    link: "/news/tectron-2025"
  },
  {
    id: 2,
    title: "EEE team at KUET Bitfest 2.0",
    shortDescription: "Team EEE Amplifier from UAP took part in the Inter University Programming Contest at KUET BitFest 2025.",
    date: "2025-01-05T00:00:00Z",
    images: [
      "https://i.ibb.co/Rp15h80q/Whats-App-Image-2025-06-29-at-00-49-16-d7720f7f.jpg"
    ],
    contentSections: [
      {
        sectionTitle: "Inter University Programming Contest",
        sectionDescription: "On January 5th, 2025, Team EEE Amplifier from the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific (UAP) proudly participated in the Inter University Programming Contest segment of KUET BitFest 2025, held at Khulna University of Engineering & Technology (KUET). KUET BitFest is one of the country's most prestigious annual technology festivals, bringing together top student talents from leading universities across Bangladesh. The Inter University Programming Contest was a key highlight of the event, designed to challenge participants with algorithmic problem-solving and real-time coding tasks under pressure. Team EEE Amplifier showcased their programming skills, teamwork, and critical thinking in a highly competitive environment, gaining valuable experience and insights from one of the most dynamic platforms in the tech community. Their participation reflects the growing passion for competitive programming within UAP's EEE Department and highlights the dedication of its students to engage in national-level contests and elevate their technical capabilities."
      }
    ],
    highlights: [
      "Inter University Programming Contest",
      "Student Programming Skills",
      "Academic and industry collaboration"
    ],
    category: "Academic",
    type: "event",
    link: "/news/eee-participate-bitfest-2025"
  },
  {
    id: 3,
    title: "UAP EEE Team Became Champion",
    shortDescription: "Team Supersonic emerged as winners at the WIE BD Summit 2024 Project Idea Competition.",
    date: "2024-11-15T00:00:00Z",
    images: [
      "https://i.ibb.co/ymTtMzsW/IMG-20250711-WA0005.jpg"
    ],
    contentSections: [
      {
        sectionTitle: "Winner Announcement",
        sectionDescription: "Winner Announcement – IEEE WIE BD Summit 2024. We are thrilled to share that our team Supersonic emerged as winners at the WIE BD Summit 2024 Project Idea Competition, held during the prestigious RAAICON 2024 at BUET! Organized by IEEE Bangladesh Section and IEEE Women in Engineering Bangladesh Section, and co-hosted by IEEE BUET Student Branch, this summit brought together the brightest minds in robotics, automation, AI, and IoT. A heartfelt thanks to the organizers, mentors, and everyone who supported us. Onward and upward!"
      }
    ],
    highlights: [
      "IEEE WIE BD Summit 2024 winners",
      "Project Idea Competition",
      "RAAICON 2024 at BUET"
    ],
    category: "Academic",
    type: "event",
    link: "/news/IEEE-WIE-2024"
  }
  
    
       
];

export const events = NewsEvents;
export type Event = typeof NewsEvents[0];

export const formatDate = (date: string | Date): { day: string; month: string; year: string } => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return {
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }),
    year: d.toLocaleDateString('en-US', { year: 'numeric' }),
  };
};