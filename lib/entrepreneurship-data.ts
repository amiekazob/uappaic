export interface EntrepreneurshipType {
  id: string
  title: string
  shortDescription: string
  date: string
  order: number
  images: string[]
  contentSections: {
    title: string
    content: string
    images?: string[]
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
  id: "fastpower-nucl-ev-mou-2025",
  title: "🚗 UAP EEE Alumnus & Steadfast Courier Chairman Leads $15M EV Venture with NUCL",
  shortDescription: "KM Reidwanul Bari Zion, alumnus of UAP EEE and Chairman of both FastPower Tech and Steadfast Courier Ltd, leads a landmark $15M partnership with China's NUCL to launch EV assembly lines and nationwide charging infrastructure in Bangladesh.",
  date: "2025-05-01",
  order: 1,
  images: [
    "/images/our-alumni-and-student-in-entrepreneurship/fastpower-nucl-ev-mou-2025/1.jpg"
  ],
  contentSections: [
    {
      title: "Partnership Announcement",
      content: "On May 1, 2025, FastPower Tech signed a major joint venture MoU with China's NUCL in Guangzhou, marking a pivotal moment in Bangladesh's transition to electric vehicles (EVs). The signing ceremony was attended by key stakeholders from both companies, including KM Reidwanul Bari Zion, a distinguished alumnus of the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific (UAP), and the Chairman of FastPower Tech and Steadfast Courier Ltd. This agreement sets the foundation for a national EV ecosystem built on sustainable technology and global collaboration.",
      images: [
        "/images/our-alumni-and-student-in-entrepreneurship/fastpower-nucl-ev-mou-2025/1.jpg"
      ]
    },
    {
      title: "Investment & Operations",
      content: "Under this joint venture, FastPower Tech and NUCL will invest $15 million to establish local assembly lines for Extended-Range Electric Vehicles (EREVs) and Plug-in Hybrid Electric Vehicles (PHEVs). Trial operations are scheduled to commence within six months, and the manufacturing plant will be strategically located in a Bangladeshi economic zone. The investment aims to accelerate local production capacity, reduce import dependency, and create high-skilled job opportunities in the EV sector."
    },
    {
      title: "Technology and Infrastructure",
      content: "The collaboration brings cutting-edge NEV (New Energy Vehicle) technologies to Bangladesh, including AI-driven EV diagnostics, cloud-based battery management, and modular vehicle architecture. Additionally, the initiative includes building a network of EV charging stations under NUCL's CAR CLOUD infrastructure, ensuring seamless mobility across the country. These tech-forward efforts are expected to lay the groundwork for a smart, connected, and eco-friendly transportation system."
    },
    {
      title: "Strategic Vision",
      content: "This venture merges the strengths of NUCL's advanced EV technologies, FastPower Tech's industry leadership, and Steadfast Courier Ltd's robust logistics infrastructure. Together, the alliance seeks to redefine urban and inter-city transportation through innovation and strategic deployment. Zion's leadership reflects how engineering alumni from UAP are influencing national development and leading global-standard technological transformations."
    },
    {
      title: "Environmental Impact",
      content: "The FastPower-NUCL partnership is aligned with Bangladesh's national agenda for reducing fossil fuel dependency and greenhouse gas emissions. By promoting clean transportation alternatives and local EV manufacturing, the project is expected to significantly lower the country's carbon footprint. It's a step toward achieving the Sustainable Development Goals (SDGs), particularly those related to climate action, sustainable industry, and clean energy."
    }
  ],
  highlights: [
    "Led by UAP EEE alumnus KM Reidwanul Bari Zion",
    "Chairman of both FastPower Tech & Steadfast Courier Ltd",
    "Joint $15M investment with China's NUCL",
    "EV plant and charging infrastructure planned across Bangladesh",
    "Focus on sustainability, innovation, and energy efficiency"
  ],
  category: "Green Technology",
  type: "innovation",
  link: "/campus-life/our-alumni-and-student-in-entrepreneurship/fastpower-nucl-ev-mou-2025",
  founder: "KM Reidwanul Bari Zion (EEE Alumnus)",
  company: "FastPower Tech & Steadfast Courier Ltd",
  valuation: "$15M",
  employees: "50+"
},

  {
  id: "agribridge-agritech-2025",
  title: "🌾 From Vision to Venture: AgriBridge – An AgriTech Startup Journey by UAP EEE Students",
  shortDescription: "Md. Mehedi Hasan Munna and his team from UAP EEE launch AgriBridge—an innovative agri-tech platform that empowers farmers and connects them to urban micro-investors, showcased at Ideathon 3.0 and BPO Summit Bangladesh 2025.",
  date: "2025-06-21",
  order: 2,
  images: [
     "/images/our-alumni-and-student-in-entrepreneurship/agribridge-agritech-2025/display.jpg"
    
  ],
  contentSections: [
    {
      title: "Startup Introduction",
      content: "AgriBridge is an innovative agri-tech startup founded by Md. Mehedi Hasan Munna, a student of the Department of Electrical and Electronic Engineering at the University of Asia Pacific (UAP). With a mission to bridge the gap between rural farmers and urban micro-investors, the startup aims to create a more inclusive, efficient, and sustainable agricultural ecosystem in Bangladesh. Through technology, AgriBridge empowers smallholder farmers with tools for financial inclusion, supply chain support, and direct market access.",
      images: ["/images/our-alumni-and-student-in-entrepreneurship/agribridge-agritech-2025/1.jpg", "/images/our-alumni-and-student-in-entrepreneurship/agribridge-agritech-2025/2.jpg"]
    },
    {
      title: "BPO Summit 2025 Launch",
      content: "AgriBridge made its national debut on June 21, 2025, at the BPO Summit Bangladesh, held at Senaprangon, Dhaka. Themed 'BPO 2.0: Revolution to Innovation,' the event gathered visionary entrepreneurs, tech leaders, and social changemakers. Amidst dozens of startups, AgriBridge stood out for its focus on rural empowerment and agri-digitalization. Md. Mehedi Hasan Munna presented the platform, emphasizing its potential to eliminate middlemen, reduce post-harvest losses, and foster climate-resilient farming. The startup's participation highlighted the role of engineering students in tackling national challenges through innovation.",
      images: ["/images/our-alumni-and-student-in-entrepreneurship/agribridge-agritech-2025/3.jpg"]
    
    },

    {
      title: "Participation in Ideathon 3.0",
      content: "Prior to the BPO Summit, AgriBridge was presented at Ideathon 3.0, held on May 12, 2025, and organized by the Career Development Club of UAP. Competing with teams from 17+ top institutions including DU, BRAC, BUP, KUET, and IUT, the AgriBridge team pitched their concept: 'A Digital Ecosystem for Sustainable Farming.' Judges praised the startup for its well-structured approach to modernizing agriculture, highlighting features like cold chain logistics, crop tracking, and urban investment channels. This platform was celebrated not just for its tech backbone, but also for its strong alignment with the Sustainable Development Goals (SDGs).",
 images: ["/images/our-alumni-and-student-in-entrepreneurship/agribridge-agritech-2025/4.jpg"]      
    
    },
    {
      title: "Core Features and Technology",
      content: "AgriBridge is powered by a suite of technologies that address long-standing inefficiencies in the agricultural supply chain. Its platform enables city-based individuals to invest in farms via a secure digital interface. The system includes AI-powered crop tracking, predictive analytics for storage and logistics, and mobile-based applications for farmers. Cold chain solutions help prevent spoilage, while smart contracts ensure transparency between investors and farmers. These features converge into a zero-waste, tech-enabled food system that uplifts the rural economy and boosts national food security."
    },
    {
      title: "Meet the Team",
      content: "AgriBridge was founded and developed by a passionate team of three EEE students from UAP:\n🔹 Md. Mehedi Hasan Munna (ID: 24108054) – Founder and Team Leader, with 4+ years of experience managing e-commerce ventures and a keen focus on real-world problem-solving.\n🔹 Mohibul Hossaine Akanda (ID: 24108143) – Tech Developer and System Architect, responsible for platform design and backend development.\n🔹 R. Rafi Khan Siam (ID: 24108147) – Research & Strategy Lead, specializing in sustainable agriculture and economic modeling. \nThe team brings together a blend of technical knowledge, entrepreneurial spirit, and a deep understanding of socio-economic challenges faced by rural communities."
    },
    {
      title: "Vision and Future Plans",
      content: "AgriBridge is not just a startup—it's a movement toward agricultural equity and climate-smart farming. The team envisions a future where every farmer in Bangladesh has access to capital, technology, and fair markets. Over the next two years, the team aims to pilot the platform in northern districts with high post-harvest losses, expand investor outreach, and collaborate with NGOs and government agencies for large-scale deployment. Their goal is to integrate IoT-based crop monitoring and blockchain-backed transaction systems by 2026, making AgriBridge one of the most advanced agri-startups in the region."
    }
  ],
  highlights: [
    "Showcased at BPO Summit Bangladesh 2025",
    "Presented at Ideathon 3.0 alongside 17+ universities",
    "Enables urban-to-rural micro-investment in agriculture",
    "Includes AI, cold chain, and smart contracts",
    "Founded by UAP EEE student Md. Mehedi Hasan Munna"
  ],
  category: "AgriTech",
  type: "student-startup",
  link: "/campus-life/our-alumni-and-student-in-entrepreneurship/agribridge-agritech-2025",
  founder: "Md. Mehedi Hasan Munna (EEE Student)",
  company: "AgriBridge",
  valuation: "Pre-seed",
  employees: "3",
  contact: "agribondhu@gmail.com"
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