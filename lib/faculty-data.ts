export interface AcademicProfile {
  platform: 'Google Scholar' | 'ResearchGate' | 'ORCID' | 'Academia.edu' | 'LinkedIn' | 'IEEE Xplore';
  url: string;
  profileId?: string;
}

export type FacultyMember = {
  id: string;
  name: string;
  title: string;
  role:
    | "HOD"
    | "Professor"
    | "Associate Professor"
    | "Assistant Professor"
    | "Lecturer"
    | "On Leave";
  image: string;
  bio: string;
  email: string;
  phone: string;
  room: number;
  education: {
    degree: string;
    institution: string;
    year?: string;
  }[];
  researchInterests: string[];

  academicExperience?: {
    position: string;
    institute: string;
    period: string;
    description?: string;
  }[];

  professionalMemberships?: string[];

  recentPublications?: {
    type: "Journal" | "Conference";
    title: string;
    authors: string;
    venue: string;
    year: number;
    impactFactor?: number;
  }[];

  administrativeRoles?: {
    title: string;
    organization: string;
    period: string;
    description?: string;
  }[];

  academicProfiles?: AcademicProfile[];
};

export const facultyMembers: FacultyMember[] = [
  // Head of Department
  {
    id: "mr-a-h-m-zadidul-karim",
    name: "Dr. [HOD Name]",
    title: "Head of the Department & Professor",
    role: "HOD",
    image: "https://i.ibb.co/placeholder/hod.jpg",
    bio: "Dr. [HOD Name] serves as the Head of the Department of Electrical and Electronic Engineering at University of Asia Pacific. With over [X] years of experience in academia and research, [he/she] leads our department with a vision of excellence in engineering education and cutting-edge research. [His/Her] expertise spans across [research areas], and [he/she] has published extensively in top-tier international journals and conferences.",
    email: "hod.eee@uap-bd.edu",
    phone: "+880-2-8634653",
    room: 601,
    education: [
      {
        degree: "Ph.D. in Electrical Engineering",
        institution: "[University Name]",
        year: "[Year]"
      },
      {
        degree: "M.Sc. in Electrical Engineering",
        institution: "[University Name]",
        year: "[Year]"
      },
      {
        degree: "B.Sc. in Electrical and Electronic Engineering",
        institution: "[University Name]",
        year: "[Year]"
      }
    ],
    researchInterests: [
      "Power Systems",
      "Renewable Energy",
      "Smart Grid Technology",
      "Control Systems",
      "Signal Processing"
    ],
    academicExperience: [
      {
        position: "Head of Department & Professor",
        institute: "University of Asia Pacific",
        period: "[Year] - Present",
        description: "Leading the EEE department with focus on academic excellence and research innovation"
      },
      {
        position: "Professor",
        institute: "University of Asia Pacific",
        period: "[Year] - [Year]",
        description: "Teaching and research in electrical engineering"
      }
    ],
    professionalMemberships: [
      "IEEE Senior Member",
      "Institution of Engineers, Bangladesh (IEB)",
      "Bangladesh Electronics Society (BES)"
    ],
    recentPublications: [
      {
        type: "Journal",
        title: "[Recent Publication Title]",
        authors: "[Authors]",
        venue: "[Journal Name]",
        year: 2024,
        impactFactor: 3.5
      }
    ],
    administrativeRoles: [
      {
        title: "Head of Department",
        organization: "EEE Department, University of Asia Pacific",
        period: "[Year] - Present",
        description: "Strategic leadership and academic administration"
      }
    ],
    academicProfiles: [
      { platform: 'Google Scholar', url: 'https://scholar.google.com/citations?user=XXXXXXX' },
      { platform: 'ResearchGate', url: 'https://www.researchgate.net/profile/HOD-Name' },
      { platform: 'ORCID', url: 'https://orcid.org/0000-0000-0000-0000' },
      { platform: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org/author/XXXXXXX' }
    ]
  },
  // Professors
  {
  id: "dr-g-r-ahmed-jamal",
  name: "Dr. G. R. Ahmed Jamal",
  title: "Professor",
  role: "Professor",
  image: "/images/faculties/dr-g-r-ahmed-jamal.jpg",
  bio: "Dr. G. R. Ahmed Jamal is a Professor in the Department of Electrical and Electronic Engineering at UAP. His academic focus includes nano materials and nano electronics. He has a strong background in both teaching and research in these fields.",
  email: "ahmed.eee@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2022"
    },
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2012"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2003"
    }
  ],
  researchInterests: [
    "Nano materials",
    "Nano electronics"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    {
      platform: "Google Scholar",
      url: "https://scholar.google.com/citations?user=i3ImV9EAAAAJ&hl=en"
    }
    // You can add more profiles as needed:
    // {
    //   platform: "ResearchGate",
    //   url: "https://www.researchgate.net/profile/Professor-Name"
    // },
    // {
    //   platform: "ORCID",
    //   url: "https://orcid.org/0000-0000-0000-0000"
    // }
  ]
},

{
  id: "dr-md-shofiqul-islam",
  name: "Dr. Md. Shofiqul Islam",
  title: "Professor",
  role: "Professor",
  image: "/images/faculties/dr-md-shofiqul-islam.jpg",
  bio: "Dr. Md. Shofiqul Islam is a Professor in the Department of Electrical and Electronic Engineering at UAP. His research interests include organic solar cell devices, PCF-based plasmonic and terahertz sensors, and vertical devices such as silicon microneedles.",
  email: "dmsi@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D. in Electrical and Electronic Engineering",
      institution: "Toyohashi University of Technology, Japan",
      year: "2007"
    },
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2002"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "1999"
    }
  ],
  researchInterests: [
    "Organic solar cell devices",
    "PCF-based plasmonic sensors",
    "Tera-Hertz sensors",
    "Vertical devices (Si microneedles)"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    {
      platform: "Google Scholar",
      url: "https://scholar.google.com/citations?user=3eVh9rYAAAAJ&hl=en"
    }
  ]
},

{
  id: "dr-tapan-kumar-chakraborty",
  name: "Dr. Tapan Kumar Chakraborty",
  title: "Professor",
  role: "Professor",
  image: "/images/faculties/dr-tapan-kumar-chakraborty.jpg",
  bio: "Dr. Tapan Kumar Chakraborty is a Professor in the Department of Electrical and Electronic Engineering at UAP. His areas of specialization include phase change memory, electronic devices and circuits, and power electronics. He has extensive experience in both research and higher education.",
  email: "tkc@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D.",
      institution: "Kanazawa University, Japan",
      year: "1998"
    },
    {
      degree: "M.Engg.",
      institution: "University of Roorkee, India",
      year: "1988"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "1984"
    }
  ],
  researchInterests: [
    "Phase Change Memory",
    "Electronic devices and circuits",
    "Power Electronics"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    {
     platform: "Google Scholar",
      url: "https://scholar.google.com/citations?hl=en&user=edvXv8YAAAAJ"
    }
  ],
},

{
  id: "dr-quazi-deen-mohd-khosru",
  name: "Dr. Quazi Deen Mohd Khosru",
  title: "Professor",
  role: "Professor",
  image: "/images/faculties/dr-quazi-deen-mohd-khosru.jpg",
  bio: "Dr. Quazi Deen Mohd Khosru is a Professor and the Dean of the Faculty of Electrical and Electronic Engineering at BUET. His area of expertise lies in solid-state electronic devices, and he has a long-standing academic and research career in semiconductor and device technology.",
  email: "qdmkhosru@eee.buet.ac.bd",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D. in Electrical Engineering",
      institution: "Osaka University, Osaka, Japan",
      year: "1994"
    },
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "1990"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Aligarh Muslim University, Aligarh, India",
      year: "1986"
    }
  ],
  researchInterests: [
    "Solid-state Electronic Devices"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},

{
  id: "dr-enamul-basher",
  name: "Dr. Enamul Basher",
  title: "Professor",
  role: "Professor",
  image: "/images/faculties/dr-enamul-basher.jpg",
  bio: "Dr. Enamul Basher is a Professor in the Department of Electrical and Electronic Engineering at UAP and the Vice Chancellor of the University of Scholars. His areas of expertise include electrical machines and drives, control engineering, and power systems.",
  email: "enamul.basher@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D.",
      institution: "Russia",
      year: ""
    }
  ],
  researchInterests: [
    "Electrical Machine and Drives",
    "Control Engineering",
    "Power System"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "dr-md-abdus-salam-akanda",
  name: "Dr. Md. Abdus Salam Akanda",
  title: "Professor",
  role: "Professor",
  image: "/images/faculties/dr-md-abdus-salam-akanda.jpg",
  bio: "Dr. Md. Abdus Salam Akanda is a Professor at BUET. He has conducted postdoctoral research at Tohoku University in Japan under the JSPS Fellowship. His research interests span applied mechanics, nondestructive testing and evaluation (NDT&E), and micro/nano mechanics.",
  email: "masalamakanda@me.buet.ac.bd",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Postdoctoral Fellowship (JSPS Fellow)",
      institution: "Tohoku University, Japan",
      year: "2010"
    },
    {
      degree: "Ph.D. in Electrical and Electronic Engineering",
      institution: "Tohoku University, Japan",
      year: "2002"
    },
    {
      degree: "M.Sc. Engg in Mechanical Engineering",
      institution: "BUET",
      year: "1997"
    },
    {
      degree: "B.Sc. Engg in Mechanical Engineering",
      institution: "BUET",
      year: "1993"
    }
  ],
  researchInterests: [
    "Applied Mechanics",
    "Nondestructive Testing and Evaluation (NDT&E)",
    "Micro/Nano Mechanics"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},



  // Associate Professors
  {
    id: "mr-a-h-m-zadidul-karim",
    name: "Mr. A.H.M. Zadidul Karim",
    title: "Associate Professor & Head",
    role: "Associate Professor",
    image: "/images/faculties/mr-a-h-m-zadidul-karim.jpg",
    bio: "Mr. A.H.M. Zadidul Karim is an Associate Professor and the Head of the Department of Electrical and Electronic Engineering at UAP. His specialization is in biomedical signal and image processing, and he has experience in both teaching and academic leadership.",
    email: "zadid@uap-bd.edu",
    phone: "+880-17****-***",
    room: "",
    education: [
      {
        degree: "M.Sc. in Electrical and Electronic Engineering",
        institution: "BUET",
        year: "2010"
      },
      {
        degree: "B.Sc. in Electrical and Electronic Engineering",
        institution: "Ahsanullah University of Science and Technology (AUST)",
        year: "2004"
      }
    ],
    researchInterests: [
      "Biomedical signal and image processing"
    ],
    academicExperience: [],
    professionalMemberships: [],
    recentPublications: [],
    administrativeRoles: [],
    academicProfiles: []
  },
  {
  id: "dr-tahsina-farah-sanam",
  name: "Dr. Tahsina Farah Sanam",
  title: "Associate Professor",
  role: "Associate Professor",
  image: "/images/faculties/dr-tahsina-farah-sanam.jpg",
  bio: "Dr. Tahsina Farah Sanam is an Associate Professor at BUET. Her research interests span artificial intelligence, machine learning, Internet of Things (IoT), smart healthcare, assistive living technologies, and smart city connectivity. She earned her Ph.D. in Electrical and Computer Engineering from Rutgers University, USA.",
  email: "tahsina@iat.buet.ac.bd",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D. in Electrical and Computer Engineering",
      institution: "Rutgers University, New Brunswick, NJ, USA",
      year: "2020"
    },
    {
      degree: "M.Sc. in Electrical and Computer Engineering",
      institution: "BUET",
      year: "2012"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2009"
    }
  ],
  researchInterests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Internet of Things (IoT)",
    "Smart Healthcare",
    "Assistive Living",
    "Smart City and Connectivity"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "dr-shuva-ghosh",
  name: "Dr. Shuva Ghosh",
  title: "Associate Professor",
  role: "Associate Professor",
  image: "/images/faculties/dr-shuva-ghosh.jpg",
  bio: "Dr. Shuva Ghosh is an Associate Professor at BUET in the Department of Industrial and Production Engineering. He completed his Ph.D. in Engineering Management from Missouri University of Science & Technology, USA. His academic focus lies in operations management, supported by extensive experience in IPE education and research.",
  email: "shuvaghosh@ipe.buet.ac.bd",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D. in Engineering Management",
      institution: "Missouri University of Science & Technology, Rolla, MO, USA",
      year: "2013"
    },
    {
      degree: "M.Sc. in Industrial and Production Engineering",
      institution: "BUET",
      year: "2009"
    },
    {
      degree: "B.Sc. in Industrial and Production Engineering",
      institution: "BUET",
      year: "2006"
    }
  ],
  researchInterests: [
    "Operations Management"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},



  // Assistant Professors
  {
  id: "dr-tasnia-hossain",
  name: "Dr. Tasnia Hossain",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/dr-tasnia-hossain.jpg",
  bio: "Dr. Tasnia Hossain is an Assistant Professor at the University of Asia Pacific. She completed her Ph.D. from CNRS-CHREA, University of Nice Sophia Antipolis, France, with a focus on photovoltaic and semiconductor materials. Her academic and research interests include thin film photovoltaic materials, plasmonic solar cells, and Group-III nitride semiconductors.",
  email: "tasnia@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D.",
      institution: "CNRS-CHREA, University of Nice Sophia Antipolis, France",
      year: "2012"
    },
    {
      degree: "M.Sc. in Applied Physics, Electronics and Communication Engineering (APECE)",
      institution: "University of Dhaka",
      year: "2006"
    },
    {
      degree: "B.Sc. in Applied Physics, Electronics and Communication Engineering (APECE)",
      institution: "University of Dhaka",
      year: "2004"
    }
  ],
  researchInterests: [
    "Thin film photovoltaic materials",
    "Plasmonic solar cell",
    "Group-III Nitride Semiconductors"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "dr-tishna-sabrina",
  name: "Dr. Tishna Sabrina",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/dr-tishna-sabrina.jpg",
  bio: "Dr. Tishna Sabrina is an Assistant Professor at the University of Asia Pacific. She completed her Ph.D. from Monash University, Australia, with a specialization in communication. She has a solid academic background and experience in the field of Electrical and Electronic Engineering.",
  email: "tishna@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D.",
      institution: "Monash University, Australia",
      year: "2014"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2005"
    }
  ],
  researchInterests: [
    "Communication"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},

{
  id: "dr-md-sultan-mahmud",
  name: "Dr. Md Sultan Mahmud",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/dr-md-sultan-mahmud.jpg",
  bio: "Dr. Md Sultan Mahmud is an Assistant Professor at the University of Asia Pacific. He completed his Ph.D. in Micro-Nano Engineering from Nagoya University, Japan. His academic and research interests span a wide range of energy-related fields, including semiconductor materials, solar PV, energy storage systems, fuel cells, and thermoelectric devices.",
  email: "sultan_mahmud@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D. in Micro-Nano Engineering",
      institution: "Nagoya University, Japan",
      year: "2024"
    },
    {
      degree: "M.Tech in Energy Engineering",
      institution: "Pondicherry University, India",
      year: "2017"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific",
      year: "2014"
    }
  ],
  researchInterests: [
    "Semiconductor materials",
    "Solar PV",
    "Energy Storage systems",
    "Fuel cells",
    "Thermoelectric"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "ms-salma-nazia-rahman",
  name: "Ms. Salma Nazia Rahman",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/ms-salma-nazia-rahman.jpg",
  bio: "Ms. Salma Nazia Rahman is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. She holds an M.Sc. in Electrical and Electronic Engineering from BUET and a B.Sc. from RUET. Her area of specialization is Power Electronics.",
  email: "salma@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2013"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "RUET",
      year: "2006"
    }
  ],
  researchInterests: [
    "Power Electronics"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "mr-muhammad-towhidur-rahman",
  name: "Mr. Muhammad Towhidur Rahman",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-muhammad-towhidur-rahman.jpg",
  bio: "Mr. Muhammad Towhidur Rahman is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He holds a Master's degree in Biomedical Physics and Technology from the University of Dhaka and a Bachelor's degree in Electrical and Electronic Engineering from AUST. His research interests include biomedical signal analysis and data analysis.",
  email: "towhid@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "M.Sc. in Biomedical Physics and Technology",
      institution: "University of Dhaka",
      year: "2014"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "AUST",
      year: "2008"
    }
  ],
  researchInterests: [
    "Biomedical Signal Analysis",
    "Data Analysis"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "mr-m-abdullah-al-amin",
  name: "Mr. M. Abdullah Al Amin",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-m-abdullah-al-amin.jpg",
  bio: "Mr. M. Abdullah Al Amin is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He obtained his M.Sc. in Electrical and Electronic Engineering from IUT and his B.Sc. from AUST. His research specialization focuses on Renewable Energy.",
  email: "masumeee@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "IUT",
      year: "2019"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "AUST",
      year: "2008"
    }
  ],
  researchInterests: [
    "Renewable Energy"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "mr-masum-howlader",
  name: "Mr. Masum Howlader",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-masum-howlader.jpg",
  bio: "Mr. Masum Howlader is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his M.Sc. degrees from Karlsruhe Institute of Technology (KIT), Germany and KTH, Sweden. He obtained his B.Sc. in Electrical and Electronic Engineering from IUT. His specialization includes power system stability and HVDC systems.",
  email: "masum_eee@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "M.Sc. in Electrical Engineering",
      institution: "Karlsruhe Institute of Technology (KIT), Germany",
      year: "2014"
    },
    {
      degree: "M.Sc. in Electrical Engineering",
      institution: "KTH, Sweden",
      year: ""
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "IUT",
      year: "2009"
    }
  ],
  researchInterests: [
    "Power System Stability",
    "HVDC"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "mr-muhammad-ahad-rahman-miah",
  name: "Mr. Muhammad Ahad Rahman Miah",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-muhammad-ahad-rahman-miah.jpg",
  bio: "Mr. Muhammad Ahad Rahman Miah is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his M.Engg. from the Asian Institute of Technology (AIT), Thailand, and his B.Sc. from UAP. His research interests lie in Power Systems and Renewable Energy.",
  email: "ahad@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "M.Engg. in Electrical Engineering",
      institution: "Asian Institute of Technology (AIT), Thailand",
      year: "2013"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2010"
    }
  ],
  researchInterests: [
    "Power System",
    "Renewable Energy"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "mr-shaikh-rashedur-rahman",
  name: "Mr. Shaikh Rashedur Rahman",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-shaikh-rashedur-rahman.jpg",
  bio: "Mr. Shaikh Rashedur Rahman is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He obtained his M.Sc. from IUT and B.Sc. from UAP. His areas of specialization include Power Systems and Renewable Energy.",
  email: "shaikh.eee@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2016"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2012"
    }
  ],
  researchInterests: [
    "Power System",
    "Renewable Energy"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},

{
  id: "mr-khandaker-sultan-mahmood",
  name: "Mr. Khandaker Sultan Mahmood",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-khandaker-sultan-mahmood.jpg", // Use this path or update if you have the actual image
  bio: "Mr. Khandaker Sultan Mahmood is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from the Islamic University of Technology (IUT) in 2011. His areas of specialization include Power Electronics and Control Systems.",
  email: "khandaker.eee@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2011"
    }
  ],
  researchInterests: [
    "Power Electronics",
    "Control Systems"
  ],
  academicExperience: [], // Add details if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available, e.g., Google Scholar link
},
{
  id: "ms-tanima-tasmin-chowdhury",
  name: "Ms. Tanima Tasmin Chowdhury",
  title: "Assistant Professor and Advisor, IEEE UAP WIE AG",
  role: "Assistant Professor",
  image: "/images/faculties/ms-tanima-tasmin-chowdhury.jpg", // Update if you have a photo
  bio: "Ms. Tanima Tasmin Chowdhury is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific and serves as Advisor for the IEEE UAP Women in Engineering Affinity Group (WIE AG). She earned her M.Sc. and B.Sc. degrees in Electrical and Electronic Engineering from BUET, in 2019 and 2013 respectively. Her specialization is in Biomedical Signal Processing.",
  email: "tanima-eee@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2019"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2013"
    }
  ],
  researchInterests: [
    "Biomedical Signal Processing"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [
    "Advisor, IEEE UAP Women in Engineering Affinity Group (WIE AG)"
  ],
  recentPublications: [], // Add if available
  administrativeRoles: [
    "Advisor, IEEE UAP WIE AG"
  ],
  academicProfiles: [] // Add if available
},

{
  id: "mr-md-khairul-alam",
  name: "Mr. Md. Khairul Alam",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-md-khairul-alam.jpg", // Update if you have an image
  bio: "Mr. Md. Khairul Alam is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his M.Sc. in Electrical and Electronic Engineering from the Islamic University of Technology (IUT) in 2019 and his B.Sc. from the University of Asia Pacific in 2010. His specialization is Embedded Systems.",
  email: "khairul@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2019"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2010"
    }
  ],
  researchInterests: [
    "Embedded Systems"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "mr-md-abdullah-al-mahmud",
  name: "Mr. Md. Abdullah Al Mahmud",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-md-abdullah-al-mahmud.jpg", // Update with actual image if available
  bio: "Mr. Md. Abdullah Al Mahmud is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He earned his M.Sc. in Electrical and Electronic Engineering from the Islamic University of Technology (IUT) in 2021 and his B.Sc. from the University of Asia Pacific in 2013. His specializations include Optical Fiber Designing and Biomedical Image Processing.",
  email: "abdullah-eee@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2021"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2013"
    }
  ],
  researchInterests: [
    "Optical Fiber Designing",
    "Biomedical Image Processing"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "mr-kazi-mahtab-kadir",
  name: "Mr. Kazi Mahtab Kadir",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-kazi-mahtab-kadir.jpg", // Update if you have the actual image
  bio: "Mr. Kazi Mahtab Kadir is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He obtained his M.Engg. from the University of Houston, TX, USA in 2013 and his B.Sc. in Electrical and Electronic Engineering from the Islamic University of Technology (IUT) in 2010. His areas of specialization include Power Systems and Renewable Energy.",
  email: "kmkadir@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Engg.",
      institution: "University of Houston, TX, USA",
      year: "2013"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2010"
    }
  ],
  researchInterests: [
    "Power System",
    "Renewable Energy"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "sakhawat-hossen-rakib",
  name: "Mr. Sakhawat Hossen Rakib",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/sakhawat-hossen-rakib.jpg", // update with actual path or URL
  bio: "Mr. Sakhawat Hossen Rakib is an Assistant Professor in the Department of Electrical and Electronic Engineering at UAP. His specialization is in Biomedical Engineering.",
  email: "rakib.h.eee@uap-bd.edu",
  phone: "",
  room: "",
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2015"
    }
  ],
  researchInterests: [
    "Biomedical Engineering"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: []
},
{
  id: "dr-mohammad-jane-alam-khan",
  name: "Dr. Mohammad Jane Alam Khan",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/dr-mohammad-jane-alam-khan.jpg", // Update if you have the image
  bio: "Dr. Mohammad Jane Alam Khan is an Assistant Professor at BUET. He earned his Ph.D. from Rensselaer Polytechnic Institute, USA in 2020, his M.Sc. Engg. from BUET in 2015, and his B.Sc. Engg. from BUET in 2012. His research specializes in Dislocations and Plasticity, Mechanics of Materials, Energetic Materials, and Molecular Dynamics.",
  email: "ronin@me.buet.ac.bd",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "Ph.D.",
      institution: "Rensselaer Polytechnic Institute, USA",
      year: "2020"
    },
    {
      degree: "M.Sc. Engg.",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2015"
    },
    {
      degree: "B.Sc. Engg.",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2012"
    }
  ],
  researchInterests: [
    "Dislocations and Plasticity",
    "Mechanics of Materials",
    "Energetic Materials",
    "Molecular Dynamics"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},






  // Lecturers
{
  id: "khaled-mahmud",
  name: "Khaled Mahmud",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/khaled-mahmud.jpg",
  bio: "Khaled Mahmud is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from BUET in 2023. His areas of specialization include Nanomaterials, Semiconductor Devices, and Valleytronics.",
  email: "khaled_mahmud@uap-bd.edu",
  phone: "",
  room: "",
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2023"
    }
  ],
  researchInterests: [
    "Nanomaterials",
    "Semiconductor Devices",
    "Valleytronics"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: []
},
{
  id: "ms-munmun-akter",
  name: "Ms. Munmun Akter",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/ms-munmun-akter.jpg", // Update with actual image path if available
  bio: "Ms. Munmun Akter is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. She completed her B.Sc. in Electrical and Electronic Engineering from the University of Asia Pacific in 2016. Her areas of specialization include Thin Film Solar Cells and Communication.",
  email: "munuapeee@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2016"
    }
  ],
  researchInterests: [
    "Thin Film Solar Cell",
    "Communication"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "dewan-ashikur-rahaman",
  name: "Dewan Ashikur Rahaman",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/dewan-ashikur-rahaman.jpg", // Update with actual image path if available
  bio: "Dewan Ashikur Rahaman is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from UAP in 2022 and is currently pursuing his M.Sc. in the same field. His areas of specialization include Power System Analysis, Power System Contingency Analysis, Power System Stability, Renewable Energy, and Power Electronics.",
  email: "ashikdewan.eee@gmail.com",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering (Ongoing)",
      institution: "University of Asia Pacific (UAP)",
      year: ""
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2022"
    }
  ],
  researchInterests: [
    "Power System Analysis",
    "Power System Contingency Analysis",
    "Power System Stability",
    "Renewable Energy",
    "Power Electronics"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},

{
  id: "usama-ibna-alam",
  name: "Usama Ibna Alam",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/usama-ibna-alam.jpg", // Replace with actual image path if available
  bio: "Usama Ibna Alam is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from BUET in 2024 and is currently pursuing his M.Sc. in the same field. His areas of specialization include Signal Processing and Large Language Models (LLMs).",
  email: "usama@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering (Ongoing)",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: ""
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2024"
    }
  ],
  researchInterests: [
    "Signal Processing",
    "Large Language Models (LLMs)"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "mr-ibnun-nur-akash",
  name: "Mr. Ibnun Nur Akash",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/mr-ibnun-nur-akash.jpg", // Replace with actual image path if available
  bio: "Mr. Ibnun Nur Akash is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from the Islamic University of Technology (IUT) in 2024. Further details about his specialization will be provided soon.",
  email: "", // Email will be provided soon
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2024"
    }
  ],
  researchInterests: [], // Will be provided soon
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "mr-md-sharif-uddin",
  name: "Mr. Md. Sharif Uddin",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/mr-md-sharif-uddin.jpg", // Replace with actual image path if available
  bio: "Mr. Md. Sharif Uddin is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from BUET in 2024. Further details about his specialization will be provided soon.",
  email: "", // Email will be provided soon
  phone: "", // Add if available
  room: "",  // Add if available
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2024"
    }
  ],
  researchInterests: [], // Will be provided soon
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "mr-md-sabbir-ahmed",
  name: "Mr. Md. Sabbir Ahmed",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/mr-md-sabbir-ahmed.jpg", // Replace with actual image path if available
  bio: "Mr. Md. Sabbir Ahmed is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from BUET in 2024. Further details about his specialization will be provided soon.",
  email: "", // Email will be provided soon
  phone: "", // Add if available
  room: "",  // Add if available
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2024"
    }
  ],
  researchInterests: [], // Will be provided soon
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},

  // On Leave Faculty
  {
    id: "on-leave-faculty-1",
    name: "Dr. On Leave Faculty 1",
    title: "Associate Professor (On Leave)",
    role: "On Leave",
    image: "https://i.ibb.co/placeholder/on-leave-1.jpg",
    bio: "Currently on academic leave for research purposes.",
    email: "onleave1@uap-bd.edu",
    phone: "",
    room: "",
    education: [],
    researchInterests: [],
    academicExperience: [],
    professionalMemberships: [],
    recentPublications: [],
    administrativeRoles: [],
    academicProfiles: []
  }
];
  
   // Helper functions
   export const getFacultyById = (id: string): FacultyMember | undefined => {
  return facultyMembers.find(faculty => faculty.id === id);
};

export const getFacultyByRole = (role: FacultyMember['role']): FacultyMember[] => {
  return facultyMembers.filter(faculty => faculty.role === role);
};

export const getAllRoles = (): FacultyMember['role'][] => {
  return Array.from(new Set(facultyMembers.map(faculty => faculty.role)));
};

// Fixed type export
export type Faculty = typeof facultyMembers[0];
