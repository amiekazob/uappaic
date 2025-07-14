export interface EntrepreneurshipType {
  id: string
  title: string
  shortDescription: string
  date: string
  images: string[]
  contentSections: {
    title: string
    content: string
  }[]
  highlights: string[]
  category: string
  type: 'startup' | 'business' | 'innovation' | 'social-enterprise' | 'tech-venture'
  link: string
  founder?: string
  company?: string
  valuation?: string
  employees?: string
}

export const entrepreneurshipData: EntrepreneurshipType[] = [
  {
    id: "tech-startup-2024",
    title: "EEE Alumni Launches AI-Powered Smart Grid Solution",
    shortDescription: "Recent graduate develops innovative smart grid technology that optimizes energy distribution using machine learning algorithms.",
    date: "2024-01-15",
    images: [ "/images/our-achievements/department-ieb-accreditation/1.jpg"],
    contentSections: [
      {
        title: "Innovation Overview",
        content: "Our alumnus has successfully launched a groundbreaking startup focused on AI-powered smart grid solutions. The company develops advanced algorithms that optimize energy distribution and reduce power wastage by up to 30%."
      },
      {
        title: "Market Impact",
        content: "The startup has already secured partnerships with three major utility companies and received $2M in seed funding. The technology is being piloted in smart cities across Bangladesh."
      }
    ],
    highlights: [
      "$2M seed funding secured",
      "30% reduction in energy wastage",
      "Partnerships with 3 utility companies",
      "Featured in TechCrunch Bangladesh"
    ],
    category: "Technology",
    type: "tech-venture",
    link: "/campus-life/entrepreneurship/tech-startup-2024",
    founder: "Md. Rahman Ahmed (EEE '22)",
    company: "GridSmart Technologies",
    valuation: "$8M",
    employees: "15+"
  },
  {
    id: "iot-innovation-2023",
    title: "Student Entrepreneur Creates IoT-Based Home Automation System",
    shortDescription: "Current student develops affordable IoT solutions for home automation, making smart homes accessible to middle-class families.",
    date: "2023-09-20",
    images: ["/images/entrepreneurship/iot-home-automation.jpg"],
    contentSections: [
      {
        title: "Product Innovation",
        content: "This innovative IoT-based home automation system provides smart home capabilities at 60% lower cost than existing solutions. The system includes voice control, mobile app integration, and energy monitoring."
      },
      {
        title: "Business Growth",
        content: "Started as a final year project, the venture has grown to serve over 500 households in Dhaka. The company has expanded to include commercial automation solutions."
      }
    ],
    highlights: [
      "500+ households served",
      "60% cost reduction vs competitors",
      "Winner of UAP Innovation Challenge 2023",
      "Expanding to commercial markets"
    ],
    category: "IoT & Automation",
    type: "startup",
    link: "/campus-life/entrepreneurship/iot-innovation-2023",
    founder: "Fatima Khatun (EEE '24)",
    company: "SmartHome BD",
    valuation: "$1.2M",
    employees: "8+"
  },
  {
    id: "renewable-energy-2023",
    title: "Alumni-Founded Solar Energy Company Expands Across Bangladesh",
    shortDescription: "EEE graduates establish successful solar energy company providing clean energy solutions to rural communities.",
    date: "2023-06-10",
    images: ["/images/entrepreneurship/solar-energy-company.jpg"],
    contentSections: [
      {
        title: "Mission & Vision",
        content: "Founded by three EEE alumni, SolarTech Bangladesh aims to provide affordable solar energy solutions to rural communities. The company has installed over 10,000 solar panels across 50 villages."
      },
      {
        title: "Social Impact",
        content: "The company's initiatives have brought electricity to remote areas for the first time, enabling children to study after dark and supporting local businesses with reliable power supply."
      }
    ],
    highlights: [
      "10,000+ solar panels installed",
      "50 villages electrified",
      "$5M revenue in 2023",
      "100+ jobs created in rural areas"
    ],
    category: "Renewable Energy",
    type: "social-enterprise",
    link: "/campus-life/entrepreneurship/renewable-energy-2023",
    founder: "Team of 3 EEE Alumni ('20, '21)",
    company: "SolarTech Bangladesh",
    valuation: "$12M",
    employees: "45+"
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