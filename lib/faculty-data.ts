export type FacultyMember = {
  id: string;
  name: string;
  title: string;
  role:
    | "HOD"
    | "Professor"
    | "Associate Professor"
    | "Assistant Professor"
    | "Lecturer";
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
};

export const facultyMembers: FacultyMember[] = [
  {
    id: "dr-gr-ahmed-jamal",
    name: "Dr. G R Ahmed Jamal",
    title: "Professor and Dean, School of Engineering",
    role: "Professor",
    image: "https://i.ibb.co/v6bhWTMP/jamal-sir.jpg",
    bio: "Professor G. R. Ahmed Jamal is an eminent academic, visionary educator, and interdisciplinary researcher whose illustrious career spans more than two decades of contribution to the advancement of Electrical and Electronic Engineering. Currently serving as a Professor in the Department of Electrical and Electronic Engineering (EEE) at the University of Asia Pacific (UAP), he is widely recognized for his pioneering work in nanomaterials, nanoelectronics, renewable energy, and signal processing. His intellectual footprint, both in scholarly publication and institutional leadership, stands as a testament to his unwavering commitment to academic excellence, scientific innovation, and national progress.",
    email: "ahmed.eee@uap-bd.edu",
    phone: "+880-17****-***",
    room: 501,
    education: [
      {
        degree: "PhD in Electrical Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2010"
      },
      {
        degree: "MSc in Nanomaterials",
        institution: "Bangladesh University of Engineering Technology",
        year: "2005"
      },
      {
        degree: "BSc in Electrical Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2003"
      }
    ],
    researchInterests: ["Nanomaterials", "Nanoelectronics", "Renewable Energy", "Signal Processing"],
    academicExperience: [
      {
        position: "Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2012 - Present",
        description: "Leading research in nanomaterials and supervising doctoral students."
      }
    ],
    professionalMemberships: [
      "Member, IEEE, Bangladesh Section (ID: 92566706)",
      "Life Member, Bangladesh Physical Society (BPS)"
    ],
    recentPublications: [
      {
        type: "Journal",
        title: "Chirality Dependence of Gas Adsorption Property of Single Wall Carbon Nanotubes",
        authors: "G. R. Ahmed Jamal, M. Rezanur Islam, M. Adnan Rahman, J. Ferdous Meem, R. Akter Sathi",
        venue: "Materials Science Forum, Vol 889, pp. 248-252",
        year: 2017
      }
    ],
    administrativeRoles: [
      {
        title: "Dean of Engineering",
        organization: "University of Asia Pacific",
        period: "2025 - Present",
        description: "Oversees academic and administrative functions of the School of Engineering."
      },
      {
        title: "Head of EEE Department",
        organization: "University of Asia Pacific",
        period: "2022 - 2025",
        description: "Led the EEE department's academic and research initiatives."
      }
    ]
  },
  {
    id: "dr-shofiqul-islam",
    name: "Dr. Shofiqul Islam",
    title: "Professor",
    role: "Professor",
    image: "https://i.ibb.co/placeholder/dr-shofiqul-islam.jpg",
    bio: "Dr. Shofiqul Islam is a distinguished professor in the Department of Electrical and Electronic Engineering with extensive expertise in power systems, renewable energy integration, and smart grid technologies. His research contributions have significantly advanced the field of sustainable energy systems and grid modernization.",
    email: "shofiqul.islam@uap-bd.edu",
    phone: "+880-17****-***",
    room: 502,
    education: [
      {
        degree: "PhD in Power Systems Engineering",
        institution: "University of Manchester, UK",
        year: "2008"
      },
      {
        degree: "MSc in Electrical Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2003"
      },
      {
        degree: "BSc in Electrical Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2001"
      }
    ],
    researchInterests: ["Power Systems", "Renewable Energy", "Smart Grid", "Energy Storage"],
    academicExperience: [
      {
        position: "Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2015 - Present",
        description: "Leading research in power systems and renewable energy integration."
      },
      {
        position: "Associate Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2010 - 2015",
        description: "Conducted research in smart grid technologies and supervised graduate students."
      }
    ],
    professionalMemberships: [
      "Senior Member, IEEE",
      "Member, Institution of Engineers Bangladesh (IEB)",
      "Member, Bangladesh Solar and Renewable Energy Association (BSREA)"
    ],
    recentPublications: [
      {
        type: "Journal",
        title: "Optimal Integration of Renewable Energy Sources in Smart Grid Systems",
        authors: "S. Islam, M. Rahman, A. Hossain",
        venue: "IEEE Transactions on Smart Grid",
        year: 2023,
        impactFactor: 10.1
      }
    ],
    administrativeRoles: [
      {
        title: "Director of Research",
        organization: "School of Engineering, UAP",
        period: "2020 - Present",
        description: "Coordinates research activities across engineering departments."
      }
    ]
  },
  {
    id: "dr-tapan-kumar-chakraborty",
    name: "Dr. Tapan Kumar Chakraborty",
    title: "Professor",
    role: "Professor",
    image: "https://i.ibb.co/placeholder/dr-tapan-kumar.jpg",
    bio: "Dr. Tapan Kumar Chakraborty is a renowned professor specializing in control systems, robotics, and automation. With over 20 years of academic and research experience, he has made significant contributions to the field of intelligent control systems and industrial automation.",
    email: "tapan.chakraborty@uap-bd.edu",
    phone: "+880-17****-***",
    room: 503,
    education: [
      {
        degree: "PhD in Control Systems Engineering",
        institution: "Indian Institute of Technology, Delhi",
        year: "2005"
      },
      {
        degree: "MSc in Electronics and Control Engineering",
        institution: "Jadavpur University, India",
        year: "2000"
      },
      {
        degree: "BSc in Electrical Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "1998"
      }
    ],
    researchInterests: ["Control Systems", "Robotics", "Automation", "Artificial Intelligence"],
    academicExperience: [
      {
        position: "Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2012 - Present",
        description: "Leading research in control systems and robotics."
      },
      {
        position: "Associate Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2008 - 2012",
        description: "Developed advanced control systems curriculum and research programs."
      }
    ],
    professionalMemberships: [
      "Senior Member, IEEE",
      "Member, IEEE Control Systems Society",
      "Member, Institution of Engineers Bangladesh (IEB)"
    ],
    recentPublications: [
      {
        type: "Journal",
        title: "Adaptive Control Strategies for Industrial Robotic Systems",
        authors: "T. K. Chakraborty, S. Ahmed, R. Khan",
        venue: "IEEE Transactions on Industrial Electronics",
        year: 2023,
        impactFactor: 7.7
      }
    ],
    administrativeRoles: [
      {
        title: "Laboratory Coordinator",
        organization: "EEE Department, UAP",
        period: "2015 - Present",
        description: "Oversees all laboratory facilities and equipment in the department."
      }
    ]
  },
  {
    id: "dr-tishna-sabrina",
    name: "Dr. Tishna Sabrina",
    title: "Associate Professor",
    role: "Associate Professor",
    image: "https://i.ibb.co/placeholder/dr-tishna-sabrina.jpg",
    bio: "Dr. Tishna Sabrina is an accomplished associate professor specializing in computer engineering, software development, and digital signal processing. Her research focuses on embedded systems, IoT applications, and machine learning algorithms for engineering applications.",
    email: "tishna.sabrina@uap-bd.edu",
    phone: "+880-17****-***",
    room: 401,
    education: [
      {
        degree: "PhD in Computer Engineering",
        institution: "University of Toronto, Canada",
        year: "2012"
      },
      {
        degree: "MSc in Computer Science",
        institution: "Bangladesh University of Engineering Technology",
        year: "2007"
      },
      {
        degree: "BSc in Computer Science and Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2005"
      }
    ],
    researchInterests: ["Embedded Systems", "IoT", "Machine Learning", "Digital Signal Processing"],
    academicExperience: [
      {
        position: "Associate Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2018 - Present",
        description: "Leading research in embedded systems and IoT applications."
      },
      {
        position: "Assistant Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2013 - 2018",
        description: "Developed computer programming and embedded systems courses."
      }
    ],
    professionalMemberships: [
      "Member, IEEE",
      "Member, ACM",
      "Member, Bangladesh Computer Society (BCS)"
    ],
    recentPublications: [
      {
        type: "Conference",
        title: "IoT-Based Smart Home Automation Using Machine Learning",
        authors: "T. Sabrina, M. Hasan, A. Rahman",
        venue: "IEEE International Conference on IoT",
        year: 2023
      }
    ],
    administrativeRoles: [
      {
        title: "Programming Lab Coordinator",
        organization: "EEE Department, UAP",
        period: "2019 - Present",
        description: "Manages computer programming laboratories and curriculum."
      }
    ]
  },
  {
    id: "mr-muhammad-ahad-rahman-miah",
    name: "Mr. Muhammad Ahad Rahman Miah",
    title: "Assistant Professor",
    role: "Assistant Professor",
    image: "https://i.ibb.co/placeholder/mr-ahad-rahman.jpg",
    bio: "Mr. Muhammad Ahad Rahman Miah is a dedicated assistant professor specializing in electrical machines, power electronics, and motor drives. His research interests include advanced motor control techniques and energy-efficient drive systems.",
    email: "ahad.rahman@uap-bd.edu",
    phone: "+880-17****-***",
    room: 402,
    education: [
      {
        degree: "MSc in Electrical Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2015"
      },
      {
        degree: "BSc in Electrical and Electronic Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2013"
      }
    ],
    researchInterests: ["Electrical Machines", "Power Electronics", "Motor Drives", "Energy Efficiency"],
    academicExperience: [
      {
        position: "Assistant Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2018 - Present",
        description: "Teaching electrical machines and power electronics courses."
      },
      {
        position: "Lecturer",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2016 - 2018",
        description: "Conducted laboratory sessions and assisted in research projects."
      }
    ],
    professionalMemberships: [
      "Member, IEEE",
      "Member, Institution of Engineers Bangladesh (IEB)"
    ],
    recentPublications: [
      {
        type: "Conference",
        title: "Efficiency Optimization of Induction Motor Drives",
        authors: "M. A. R. Miah, S. Islam, T. Chakraborty",
        venue: "International Conference on Electrical Machines",
        year: 2022
      }
    ],
    administrativeRoles: [
      {
        title: "Electrical Machines Lab Supervisor",
        organization: "EEE Department, UAP",
        period: "2019 - Present",
        description: "Supervises electrical machines laboratory activities."
      }
    ]
  },
  {
    id: "md-khairul-alam",
    name: "Md. Khairul Alam",
    title: "Assistant Professor",
    role: "Assistant Professor",
    image: "https://i.ibb.co/placeholder/md-khairul-alam.jpg",
    bio: "Md. Khairul Alam is an enthusiastic assistant professor focusing on research methodology, project supervision, and innovation in electrical engineering. He guides students in their final year projects and research endeavors.",
    email: "khairul.alam@uap-bd.edu",
    phone: "+880-17****-***",
    room: 507,
    education: [
      {
        degree: "MSc in Electrical Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2016"
      },
      {
        degree: "BSc in Electrical and Electronic Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2014"
      }
    ],
    researchInterests: ["Research Methodology", "Innovation", "Project Management", "Engineering Education"],
    academicExperience: [
      {
        position: "Assistant Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2019 - Present",
        description: "Supervising student projects and conducting research methodology courses."
      },
      {
        position: "Lecturer",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2017 - 2019",
        description: "Assisted in various engineering courses and laboratory sessions."
      }
    ],
    professionalMemberships: [
      "Member, IEEE",
      "Member, Institution of Engineers Bangladesh (IEB)"
    ],
    recentPublications: [
      {
        type: "Conference",
        title: "Innovative Approaches in Engineering Education",
        authors: "M. K. Alam, T. Sabrina, G. R. A. Jamal",
        venue: "International Conference on Engineering Education",
        year: 2023
      }
    ],
    administrativeRoles: [
      {
        title: "Project and Research Lab Coordinator",
        organization: "EEE Department, UAP",
        period: "2020 - Present",
        description: "Coordinates final year projects and research activities."
      }
    ]
  },
  {
    id: "ahm-zadidul-karim",
    name: "A.H.M. Zadidul Karim",
    title: "Associate Professor & Head",
    role: "HOD",
    image: "https://i.ibb.co/example-img/zadidul-karim.jpg",
    bio: "Associate Professor A.H.M. Zadidul Karim is a dedicated academic leader serving as the Head of the Department of Electrical and Electronic Engineering. With extensive experience in electrical engineering education and research, he has been instrumental in developing the department's academic programs and fostering innovation in engineering education.",
    email: "zadidul.karim@uap-bd.edu",
    phone: "+880-17-1234-5678",
    room: 12,
    education: [
      {
        degree: "PhD in Electrical Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2015"
      },
      {
        degree: "MSc in Electrical Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2010"
      },
      {
        degree: "BSc in Electrical and Electronic Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2008"
      }
    ],
    researchInterests: ["Power Electronics", "Renewable Energy Systems", "Engineering Education", "Smart Grid Technologies"],
    academicExperience: [
      {
        position: "Associate Professor & Head of Department",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2020 - Present",
        description: "Leading the department's academic and administrative functions while conducting research in power electronics."
      },
      {
        position: "Assistant Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2016 - 2020",
        description: "Conducted research in renewable energy systems and supervised undergraduate projects."
      }
    ],
    professionalMemberships: ["Senior Member, IEEE", "Member, IEB"],
    recentPublications: [
      {
        type: "Journal",
        title: "Advanced Power Electronics for Renewable Energy Integration",
        authors: "A.H.M. Zadidul Karim, S. Rahman, M. Ahmed",
        venue: "IEEE Transactions on Power Electronics",
        year: 2023,
        impactFactor: 6.2
      }
    ],
    administrativeRoles: [
      {
        title: "Head of Department",
        organization: "Department of EEE, UAP",
        period: "2020 - Present",
        description: "Oversees academic and administrative functions of the EEE department."
      }
    ]
  },
  {
    id: "dr-mohammad-rahman",
    name: "Dr. Mohammad Rahman",
    title: "Professor",
    role: "Professor",
    image: "https://i.ibb.co/placeholder/dr-mohammad-rahman.jpg",
    bio: "Dr. Mohammad Rahman is a distinguished professor with expertise in digital signal processing and communication systems. His research contributions have advanced the field of wireless communications and signal processing algorithms.",
    email: "mohammad.rahman@uap-bd.edu",
    phone: "+880-17****-***",
    room: 504,
    education: [
      {
        degree: "PhD in Electrical Engineering",
        institution: "University of Toronto, Canada",
        year: "2010"
      },
      {
        degree: "MSc in Communication Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2005"
      },
      {
        degree: "BSc in Electrical and Electronic Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2003"
      }
    ],
    researchInterests: ["Digital Signal Processing", "Wireless Communications", "5G/6G Technologies", "IoT Systems"],
    academicExperience: [
      {
        position: "Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2015 - Present",
        description: "Leading research in wireless communications and digital signal processing."
      }
    ],
    professionalMemberships: ["Senior Member, IEEE", "Member, IEEE Communications Society"],
    recentPublications: [
      {
        type: "Journal",
        title: "Advanced Signal Processing Techniques for 5G Networks",
        authors: "Dr. Mohammad Rahman, Dr. Sarah Ahmed",
        venue: "IEEE Transactions on Communications",
        year: 2023,
        impactFactor: 5.4
      }
    ]
  },
  {
    id: "dr-sarah-ahmed",
    name: "Dr. Sarah Ahmed",
    title: "Associate Professor",
    role: "Associate Professor",
    image: "https://i.ibb.co/placeholder/dr-sarah-ahmed.jpg",
    bio: "Dr. Sarah Ahmed is an accomplished associate professor specializing in communication systems and network security. Her research focuses on secure communication protocols and network optimization.",
    email: "sarah.ahmed@uap-bd.edu",
    phone: "+880-17****-***",
    room: 403,
    education: [
      {
        degree: "PhD in Communication Engineering",
        institution: "University of Melbourne, Australia",
        year: "2013"
      },
      {
        degree: "MSc in Electronics Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2008"
      },
      {
        degree: "BSc in Electrical and Electronic Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2006"
      }
    ],
    researchInterests: ["Network Security", "Communication Systems", "Wireless Networks", "Cryptography"],
    academicExperience: [
      {
        position: "Associate Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2018 - Present",
        description: "Leading research in network security and communication systems."
      }
    ],
    professionalMemberships: ["Member, IEEE", "Member, ACM"],
    recentPublications: [
      {
        type: "Conference",
        title: "Secure Communication Protocols for IoT Networks",
        authors: "Dr. Sarah Ahmed, M. Hassan",
        venue: "IEEE International Conference on Communications",
        year: 2023
      }
    ]
  },
  {
    id: "prof-ahmed-hassan",
    name: "Prof. Ahmed Hassan",
    title: "Professor",
    role: "Professor",
    image: "https://i.ibb.co/placeholder/prof-ahmed-hassan.jpg",
    bio: "Professor Ahmed Hassan is a senior faculty member with extensive expertise in power systems and electrical machines. His research contributions have significantly advanced the field of power system stability and control.",
    email: "ahmed.hassan@uap-bd.edu",
    phone: "+880-17****-***",
    room: 505,
    education: [
      {
        degree: "PhD in Power Systems Engineering",
        institution: "Imperial College London, UK",
        year: "2008"
      },
      {
        degree: "MSc in Electrical Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2003"
      },
      {
        degree: "BSc in Electrical and Electronic Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2001"
      }
    ],
    researchInterests: ["Power Systems", "Electrical Machines", "Power System Stability", "HVDC Systems"],
    academicExperience: [
      {
        position: "Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2013 - Present",
        description: "Leading research in power systems and electrical machines."
      }
    ],
    professionalMemberships: ["Senior Member, IEEE", "Member, IET"],
    recentPublications: [
      {
        type: "Journal",
        title: "Power System Stability Enhancement Using FACTS Devices",
        authors: "Prof. Ahmed Hassan, Dr. Fatima Khan",
        venue: "IEEE Transactions on Power Systems",
        year: 2023,
        impactFactor: 6.8
      }
    ]
  },
  {
    id: "dr-fatima-khan",
    name: "Dr. Fatima Khan",
    title: "Associate Professor",
    role: "Associate Professor",
    image: "https://i.ibb.co/placeholder/dr-fatima-khan.jpg",
    bio: "Dr. Fatima Khan is an associate professor specializing in power electronics and renewable energy systems. Her research focuses on efficient power conversion and energy storage technologies.",
    email: "fatima.khan@uap-bd.edu",
    phone: "+880-17****-***",
    room: 404,
    education: [
      {
        degree: "PhD in Power Electronics",
        institution: "Technical University of Denmark",
        year: "2014"
      },
      {
        degree: "MSc in Electrical Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2009"
      },
      {
        degree: "BSc in Electrical and Electronic Engineering",
        institution: "Bangladesh University of Engineering Technology",
        year: "2007"
      }
    ],
    researchInterests: ["Power Electronics", "Renewable Energy", "Energy Storage", "Electric Vehicles"],
    academicExperience: [
      {
        position: "Associate Professor",
        institute: "Department of EEE, University of Asia Pacific",
        period: "2019 - Present",
        description: "Leading research in power electronics and renewable energy systems."
      }
    ],
    professionalMemberships: ["Member, IEEE", "Member, IEEE Power Electronics Society"],
    recentPublications: [
      {
        type: "Journal",
        title: "Advanced Power Converters for Electric Vehicle Charging",
        authors: "Dr. Fatima Khan, A. Rahman",
        venue: "IEEE Transactions on Power Electronics",
        year: 2023,
        impactFactor: 6.2
      }
     ]
   },
   {
     id: "dr-rashid-ali",
     name: "Dr. Rashid Ali",
     title: "Associate Professor",
     role: "Associate Professor",
     image: "https://i.ibb.co/placeholder/dr-rashid-ali.jpg",
     bio: "Dr. Rashid Ali is an associate professor with expertise in control systems and automation. His research focuses on advanced control algorithms and industrial automation systems.",
     email: "rashid.ali@uap-bd.edu",
     phone: "+880-17****-***",
     room: 405,
     education: [
       {
         degree: "PhD in Control Systems Engineering",
         institution: "University of Manchester, UK",
         year: "2012"
       },
       {
         degree: "MSc in Electrical Engineering",
         institution: "Bangladesh University of Engineering Technology",
         year: "2007"
       },
       {
         degree: "BSc in Electrical and Electronic Engineering",
         institution: "Bangladesh University of Engineering Technology",
         year: "2005"
       }
     ],
     researchInterests: ["Control Systems", "Automation", "Robotics", "Industrial Control"],
     academicExperience: [
       {
         position: "Associate Professor",
         institute: "Department of EEE, University of Asia Pacific",
         period: "2017 - Present",
         description: "Leading research in control systems and automation technologies."
       }
     ],
     professionalMemberships: ["Member, IEEE", "Member, IEEE Control Systems Society"],
     recentPublications: [
       {
         type: "Journal",
         title: "Advanced Control Algorithms for Industrial Automation",
         authors: "Dr. Rashid Ali, M. Khan",
         venue: "IEEE Transactions on Industrial Electronics",
         year: 2023,
         impactFactor: 7.5
       }
     ]
   },
   {
     id: "dr-nadia-islam",
     name: "Dr. Nadia Islam",
     title: "Assistant Professor",
     role: "Assistant Professor",
     image: "https://i.ibb.co/placeholder/dr-nadia-islam.jpg",
     bio: "Dr. Nadia Islam is an assistant professor specializing in biomedical engineering and signal processing. Her research focuses on medical device development and biomedical signal analysis.",
     email: "nadia.islam@uap-bd.edu",
     phone: "+880-17****-***",
     room: 306,
     education: [
       {
         degree: "PhD in Biomedical Engineering",
         institution: "University of California, San Diego",
         year: "2018"
       },
       {
         degree: "MSc in Electrical Engineering",
         institution: "Bangladesh University of Engineering Technology",
         year: "2013"
       },
       {
         degree: "BSc in Electrical and Electronic Engineering",
         institution: "Bangladesh University of Engineering Technology",
         year: "2011"
       }
     ],
     researchInterests: ["Biomedical Engineering", "Medical Devices", "Signal Processing", "Healthcare Technology"],
     academicExperience: [
       {
         position: "Assistant Professor",
         institute: "Department of EEE, University of Asia Pacific",
         period: "2019 - Present",
         description: "Conducting research in biomedical engineering and medical device development."
       }
     ],
     professionalMemberships: ["Member, IEEE", "Member, IEEE Engineering in Medicine and Biology Society"],
     recentPublications: [
       {
         type: "Conference",
         title: "Advanced Signal Processing for ECG Analysis",
         authors: "Dr. Nadia Islam, S. Ahmed",
         venue: "IEEE International Conference on Biomedical Engineering",
         year: 2023
       }
     ]
   },
   {
     id: "dr-karim-uddin",
     name: "Dr. Karim Uddin",
     title: "Associate Professor",
     role: "Associate Professor",
     image: "https://i.ibb.co/placeholder/dr-karim-uddin.jpg",
     bio: "Dr. Karim Uddin is an associate professor with expertise in microelectronics and VLSI design. His research focuses on low-power circuit design and embedded systems.",
     email: "karim.uddin@uap-bd.edu",
     phone: "+880-17****-***",
     room: 406,
     education: [
       {
         degree: "PhD in Microelectronics",
         institution: "National University of Singapore",
         year: "2014"
       },
       {
         degree: "MSc in Electronics Engineering",
         institution: "Bangladesh University of Engineering Technology",
         year: "2009"
       },
       {
         degree: "BSc in Electrical and Electronic Engineering",
         institution: "Bangladesh University of Engineering Technology",
         year: "2007"
       }
     ],
     researchInterests: ["Microelectronics", "VLSI Design", "Low-Power Circuits", "Embedded Systems"],
     academicExperience: [
       {
         position: "Associate Professor",
         institute: "Department of EEE, University of Asia Pacific",
         period: "2018 - Present",
         description: "Leading research in microelectronics and VLSI design."
       }
     ],
     professionalMemberships: ["Member, IEEE", "Member, IEEE Solid-State Circuits Society"],
     recentPublications: [
       {
         type: "Journal",
         title: "Low-Power VLSI Design for IoT Applications",
         authors: "Dr. Karim Uddin, A. Hassan",
         venue: "IEEE Transactions on Very Large Scale Integration Systems",
         year: 2023,
         impactFactor: 2.8
       }
     ]
   },
   {
     id: "prof-salma-begum",
     name: "Prof. Salma Begum",
     title: "Professor",
     role: "Professor",
     image: "https://i.ibb.co/placeholder/prof-salma-begum.jpg",
     bio: "Professor Salma Begum is a senior faculty member with extensive expertise in electromagnetic theory and antenna design. Her research contributions have advanced the field of wireless communication systems.",
     email: "salma.begum@uap-bd.edu",
     phone: "+880-17****-***",
     room: 506,
     education: [
       {
         degree: "PhD in Electromagnetic Engineering",
         institution: "University of Cambridge, UK",
         year: "2005"
       },
       {
         degree: "MSc in Electronics and Communication",
         institution: "Bangladesh University of Engineering Technology",
         year: "2000"
       },
       {
         degree: "BSc in Electrical and Electronic Engineering",
         institution: "Bangladesh University of Engineering Technology",
         year: "1998"
       }
     ],
     researchInterests: ["Electromagnetic Theory", "Antenna Design", "Microwave Engineering", "RF Systems"],
     academicExperience: [
       {
         position: "Professor",
         institute: "Department of EEE, University of Asia Pacific",
         period: "2010 - Present",
         description: "Leading research in electromagnetic theory and antenna design."
       }
     ],
     professionalMemberships: ["Senior Member, IEEE", "Member, IEEE Antennas and Propagation Society"],
     recentPublications: [
       {
         type: "Journal",
         title: "Novel Antenna Designs for 5G Applications",
         authors: "Prof. Salma Begum, Dr. Tariq Rahman",
         venue: "IEEE Transactions on Antennas and Propagation",
         year: 2023,
         impactFactor: 4.9
       }
     ]
   },
   {
     id: "dr-tariq-rahman",
     name: "Dr. Tariq Rahman",
     title: "Associate Professor",
     role: "Associate Professor",
     image: "https://i.ibb.co/placeholder/dr-tariq-rahman.jpg",
     bio: "Dr. Tariq Rahman is an associate professor specializing in RF and microwave engineering. His research focuses on high-frequency circuit design and wireless communication systems.",
     email: "tariq.rahman@uap-bd.edu",
     phone: "+880-17****-***",
     room: 407,
     education: [
       {
         degree: "PhD in RF Engineering",
         institution: "Georgia Institute of Technology, USA",
         year: "2015"
       },
       {
         degree: "MSc in Electronics Engineering",
         institution: "Bangladesh University of Engineering Technology",
         year: "2010"
       },
       {
         degree: "BSc in Electrical and Electronic Engineering",
         institution: "Bangladesh University of Engineering Technology",
         year: "2008"
       }
     ],
     researchInterests: ["RF Engineering", "Microwave Circuits", "Wireless Communications", "High-Frequency Design"],
     academicExperience: [
       {
         position: "Associate Professor",
         institute: "Department of EEE, University of Asia Pacific",
         period: "2019 - Present",
         description: "Leading research in RF and microwave engineering."
       }
     ],
     professionalMemberships: ["Member, IEEE", "Member, IEEE Microwave Theory and Techniques Society"],
     recentPublications: [
       {
         type: "Conference",
         title: "High-Frequency Circuit Design for Wireless Applications",
         authors: "Dr. Tariq Rahman, Prof. Salma Begum",
         venue: "IEEE International Microwave Symposium",
         year: 2023
       }
     ]
   },
    {
      id: "dr-amina-khatun",
      name: "Dr. Amina Khatun",
      title: "Assistant Professor",
      role: "Assistant Professor",
      image: "https://i.ibb.co/placeholder/dr-amina-khatun.jpg",
      bio: "Dr. Amina Khatun is an assistant professor specializing in computer networks and cybersecurity. Her research focuses on network security protocols and intrusion detection systems.",
      email: "amina.khatun@uap-bd.edu",
      phone: "+880-17****-***",
      room: 307,
      education: [
        {
          degree: "PhD in Computer Networks",
          institution: "University of Waterloo, Canada",
          year: "2019"
        },
        {
          degree: "MSc in Computer Science",
          institution: "Bangladesh University of Engineering Technology",
          year: "2014"
        },
        {
          degree: "BSc in Electrical and Electronic Engineering",
          institution: "Bangladesh University of Engineering Technology",
          year: "2012"
        }
      ],
      researchInterests: ["Network Security", "Cybersecurity", "Intrusion Detection", "Computer Networks"],
      academicExperience: [
        {
          position: "Assistant Professor",
          institute: "Department of EEE, University of Asia Pacific",
          period: "2020 - Present",
          description: "Conducting research in network security and cybersecurity."
        }
      ],
      professionalMemberships: ["Member, IEEE", "Member, ACM"],
      recentPublications: [
        {
          type: "Conference",
          title: "Advanced Intrusion Detection Systems for IoT Networks",
          authors: "Dr. Amina Khatun, M. Rahman",
          venue: "IEEE International Conference on Network Security",
          year: 2023
        }
      ]
    },
    {
      id: "prof-mahmud-hasan",
      name: "Prof. Mahmud Hasan",
      title: "Professor",
      role: "Professor",
      image: "https://i.ibb.co/placeholder/prof-mahmud-hasan.jpg",
      bio: "Professor Mahmud Hasan is a distinguished professor with expertise in digital electronics and computer architecture. His research contributions have advanced the field of high-performance computing systems.",
      email: "mahmud.hasan@uap-bd.edu",
      phone: "+880-17****-***",
      room: 507,
      education: [
        {
          degree: "PhD in Computer Engineering",
          institution: "Stanford University, USA",
          year: "2003"
        },
        {
          degree: "MSc in Electrical Engineering",
          institution: "Bangladesh University of Engineering Technology",
          year: "1998"
        },
        {
          degree: "BSc in Electrical and Electronic Engineering",
          institution: "Bangladesh University of Engineering Technology",
          year: "1996"
        }
      ],
      researchInterests: ["Digital Electronics", "Computer Architecture", "High-Performance Computing", "Parallel Processing"],
      academicExperience: [
        {
          position: "Professor",
          institute: "Department of EEE, University of Asia Pacific",
          period: "2008 - Present",
          description: "Leading research in digital electronics and computer architecture."
        }
      ],
      professionalMemberships: ["Senior Member, IEEE", "Member, ACM"],
      recentPublications: [
        {
          type: "Journal",
          title: "High-Performance Computing Architectures for AI Applications",
          authors: "Prof. Mahmud Hasan, Dr. Ruma Akter",
          venue: "IEEE Transactions on Computers",
          year: 2023,
          impactFactor: 3.7
        }
      ]
    },
    {
      id: "dr-ruma-akter",
      name: "Dr. Ruma Akter",
      title: "Associate Professor",
      role: "Associate Professor",
      image: "https://i.ibb.co/placeholder/dr-ruma-akter.jpg",
      bio: "Dr. Ruma Akter is an associate professor specializing in artificial intelligence and machine learning. Her research focuses on deep learning algorithms and their applications in engineering.",
      email: "ruma.akter@uap-bd.edu",
      phone: "+880-17****-***",
      room: 408,
      education: [
        {
          degree: "PhD in Artificial Intelligence",
          institution: "Massachusetts Institute of Technology, USA",
          year: "2016"
        },
        {
          degree: "MSc in Computer Science",
          institution: "Bangladesh University of Engineering Technology",
          year: "2011"
        },
        {
          degree: "BSc in Electrical and Electronic Engineering",
          institution: "Bangladesh University of Engineering Technology",
          year: "2009"
        }
      ],
      researchInterests: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision"],
      academicExperience: [
        {
          position: "Associate Professor",
          institute: "Department of EEE, University of Asia Pacific",
          period: "2020 - Present",
          description: "Leading research in artificial intelligence and machine learning."
        }
      ],
      professionalMemberships: ["Member, IEEE", "Member, ACM"],
      recentPublications: [
        {
          type: "Journal",
          title: "Deep Learning Approaches for Engineering Applications",
          authors: "Dr. Ruma Akter, Prof. Mahmud Hasan",
          venue: "IEEE Transactions on Neural Networks and Learning Systems",
          year: 2023,
          impactFactor: 14.3
        }
      ]
    },
    {
      id: "dr-nasir-ahmed",
      name: "Dr. Nasir Ahmed",
      title: "Assistant Professor",
      role: "Assistant Professor",
      image: "https://i.ibb.co/placeholder/dr-nasir-ahmed.jpg",
      bio: "Dr. Nasir Ahmed is an assistant professor specializing in renewable energy systems and energy storage. His research focuses on solar energy conversion and battery management systems.",
      email: "nasir.ahmed@uap-bd.edu",
      phone: "+880-17****-***",
      room: 308,
      education: [
        {
          degree: "PhD in Renewable Energy Engineering",
          institution: "Technical University of Munich, Germany",
          year: "2018"
        },
        {
          degree: "MSc in Electrical Engineering",
          institution: "Bangladesh University of Engineering Technology",
          year: "2013"
        },
        {
          degree: "BSc in Electrical and Electronic Engineering",
          institution: "Bangladesh University of Engineering Technology",
          year: "2011"
        }
      ],
      researchInterests: ["Renewable Energy", "Solar Energy", "Energy Storage", "Battery Management"],
      academicExperience: [
        {
          position: "Assistant Professor",
          institute: "Department of EEE, University of Asia Pacific",
          period: "2019 - Present",
          description: "Conducting research in renewable energy systems and energy storage."
        }
      ],
      professionalMemberships: ["Member, IEEE", "Member, IEEE Power and Energy Society"],
      recentPublications: [
        {
          type: "Conference",
          title: "Advanced Battery Management Systems for Electric Vehicles",
          authors: "Dr. Nasir Ahmed, S. Khan",
          venue: "IEEE International Conference on Renewable Energy",
          year: 2023
        }
      ]
    },
    {
      id: "dr-shireen-rahman",
      name: "Dr. Shireen Rahman",
      title: "Associate Professor",
      role: "Associate Professor",
      image: "https://i.ibb.co/placeholder/dr-shireen-rahman.jpg",
      bio: "Dr. Shireen Rahman is an associate professor specializing in telecommunications and optical communications. Her research focuses on fiber optic systems and optical network design.",
      email: "shireen.rahman@uap-bd.edu",
      phone: "+880-17****-***",
      room: 409,
      education: [
        {
          degree: "PhD in Optical Communications",
          institution: "University of Oxford, UK",
          year: "2013"
        },
        {
          degree: "MSc in Telecommunications",
          institution: "Bangladesh University of Engineering Technology",
          year: "2008"
        },
        {
          degree: "BSc in Electrical and Electronic Engineering",
          institution: "Bangladesh University of Engineering Technology",
          year: "2006"
        }
      ],
      researchInterests: ["Optical Communications", "Fiber Optics", "Telecommunications", "Network Design"],
      academicExperience: [
        {
          position: "Associate Professor",
          institute: "Department of EEE, University of Asia Pacific",
          period: "2017 - Present",
          description: "Leading research in optical communications and telecommunications."
        }
      ],
      professionalMemberships: ["Member, IEEE", "Member, Optical Society of America"],
      recentPublications: [
        {
          type: "Journal",
          title: "Advanced Fiber Optic Systems for High-Speed Communications",
          authors: "Dr. Shireen Rahman, A. Islam",
          venue: "IEEE Photonics Technology Letters",
          year: 2023,
          impactFactor: 2.5
        }
      ]
    },
    {
      id: "dr-habib-khan",
      name: "Dr. Habib Khan",
      title: "Assistant Professor",
      role: "Assistant Professor",
      image: "https://i.ibb.co/placeholder/dr-habib-khan.jpg",
      bio: "Dr. Habib Khan is an assistant professor specializing in embedded systems and IoT technologies. His research focuses on smart sensor networks and edge computing.",
      email: "habib.khan@uap-bd.edu",
      phone: "+880-17****-***",
      room: 309,
      education: [
        {
          degree: "PhD in Embedded Systems",
          institution: "ETH Zurich, Switzerland",
          year: "2019"
        },
        {
          degree: "MSc in Computer Engineering",
          institution: "Bangladesh University of Engineering Technology",
          year: "2014"
        },
        {
          degree: "BSc in Electrical and Electronic Engineering",
          institution: "Bangladesh University of Engineering Technology",
          year: "2012"
        }
      ],
      researchInterests: ["Embedded Systems", "IoT Technologies", "Smart Sensors", "Edge Computing"],
      academicExperience: [
        {
          position: "Assistant Professor",
          institute: "Department of EEE, University of Asia Pacific",
          period: "2020 - Present",
          description: "Conducting research in embedded systems and IoT technologies."
        }
      ],
      professionalMemberships: ["Member, IEEE", "Member, IEEE Computer Society"],
      recentPublications: [
        {
          type: "Conference",
          title: "Smart Sensor Networks for Industrial IoT Applications",
          authors: "Dr. Habib Khan, M. Ali",
          venue: "IEEE International Conference on Embedded Systems",
          year: 2023
        }
      ]
    },
    {
      id: "prof-yasmin-ali",
      name: "Prof. Yasmin Ali",
      title: "Professor",
      role: "Professor",
      image: "https://i.ibb.co/placeholder/prof-yasmin-ali.jpg",
      bio: "Professor Yasmin Ali is a distinguished professor with expertise in signal processing and image processing. Her research contributions have advanced the field of medical imaging and computer vision.",
      email: "yasmin.ali@uap-bd.edu",
      phone: "+880-17****-***",
      room: 508,
      education: [
        {
          degree: "PhD in Signal Processing",
          institution: "University of California, Berkeley, USA",
          year: "2004"
        },
        {
          degree: "MSc in Electronics Engineering",
          institution: "Bangladesh University of Engineering Technology",
          year: "1999"
        },
        {
          degree: "BSc in Electrical and Electronic Engineering",
          institution: "Bangladesh University of Engineering Technology",
          year: "1997"
        }
      ],
      researchInterests: ["Signal Processing", "Image Processing", "Medical Imaging", "Computer Vision"],
      academicExperience: [
        {
          position: "Professor",
          institute: "Department of EEE, University of Asia Pacific",
          period: "2009 - Present",
          description: "Leading research in signal processing and image processing."
        }
      ],
      professionalMemberships: ["Senior Member, IEEE", "Member, IEEE Signal Processing Society"],
      recentPublications: [
        {
          type: "Journal",
          title: "Advanced Image Processing Techniques for Medical Diagnosis",
          authors: "Prof. Yasmin Ali, Dr. Nadia Islam",
          venue: "IEEE Transactions on Medical Imaging",
          year: 2023,
          impactFactor: 10.6
        }
      ]
    },
     {
       id: "prof-mohammad-ali",
       name: "Prof. Dr. Mohammad Ali",
       title: "Professor",
       role: "Professor",
       image: "https://i.ibb.co/placeholder/prof-mohammad-ali.jpg",
       bio: "Professor Dr. Mohammad Ali is a distinguished professor with expertise in power systems and electrical machines. His research contributions have significantly advanced the field of power system protection and control.",
       email: "mohammad.ali@uap-bd.edu",
       phone: "+880-17****-***",
       room: 509,
       education: [
         {
           degree: "PhD in Power Systems Engineering",
           institution: "University of Manchester, UK",
           year: "2002"
         },
         {
           degree: "MSc in Electrical Engineering",
           institution: "Bangladesh University of Engineering Technology",
           year: "1997"
         },
         {
           degree: "BSc in Electrical and Electronic Engineering",
           institution: "Bangladesh University of Engineering Technology",
           year: "1995"
         }
       ],
       researchInterests: ["Power Systems", "Electrical Machines", "Power System Protection", "Smart Grids"],
       academicExperience: [
         {
           position: "Professor",
           institute: "Department of EEE, University of Asia Pacific",
           period: "2007 - Present",
           description: "Leading research in power systems and electrical machines."
         }
       ],
       professionalMemberships: ["Senior Member, IEEE", "Member, IET"],
       recentPublications: [
         {
           type: "Journal",
           title: "Advanced Protection Schemes for Smart Grid Systems",
           authors: "Prof. Dr. Mohammad Ali, Dr. Rahman Khan",
           venue: "IEEE Transactions on Power Delivery",
           year: 2023,
           impactFactor: 4.2
         }
       ]
     },
     {
       id: "prof-rahman-khan",
       name: "Prof. Dr. Rahman Khan",
       title: "Professor",
       role: "Professor",
       image: "https://i.ibb.co/placeholder/prof-rahman-khan.jpg",
       bio: "Professor Dr. Rahman Khan is a senior professor with extensive expertise in control systems and automation. His research focuses on advanced control strategies for industrial processes.",
       email: "rahman.khan@uap-bd.edu",
       phone: "+880-17****-***",
       room: 510,
       education: [
         {
           degree: "PhD in Control Engineering",
           institution: "University of Cambridge, UK",
           year: "2001"
         },
         {
           degree: "MSc in Electrical Engineering",
           institution: "Bangladesh University of Engineering Technology",
           year: "1996"
         },
         {
           degree: "BSc in Electrical and Electronic Engineering",
           institution: "Bangladesh University of Engineering Technology",
           year: "1994"
         }
       ],
       researchInterests: ["Control Systems", "Process Automation", "Industrial Control", "Adaptive Control"],
       academicExperience: [
         {
           position: "Professor",
           institute: "Department of EEE, University of Asia Pacific",
           period: "2006 - Present",
           description: "Leading research in control systems and process automation."
         }
       ],
       professionalMemberships: ["Senior Member, IEEE", "Member, IEEE Control Systems Society"],
       recentPublications: [
         {
           type: "Journal",
           title: "Adaptive Control Strategies for Industrial Automation",
           authors: "Prof. Dr. Rahman Khan, Dr. Rashid Ali",
           venue: "IEEE Transactions on Control Systems Technology",
           year: 2023,
           impactFactor: 5.4
         }
       ]
     },
     {
       id: "dr-fatima-begum",
       name: "Dr. Fatima Begum",
       title: "Associate Professor",
       role: "Associate Professor",
       image: "https://i.ibb.co/placeholder/dr-fatima-begum.jpg",
       bio: "Dr. Fatima Begum is an associate professor specializing in digital communications and wireless networks. Her research focuses on advanced modulation techniques and network optimization.",
       email: "fatima.begum@uap-bd.edu",
       phone: "+880-17****-***",
       room: 410,
       education: [
         {
           degree: "PhD in Digital Communications",
           institution: "University of Toronto, Canada",
           year: "2014"
         },
         {
           degree: "MSc in Telecommunications",
           institution: "Bangladesh University of Engineering Technology",
           year: "2009"
         },
         {
           degree: "BSc in Electrical and Electronic Engineering",
           institution: "Bangladesh University of Engineering Technology",
           year: "2007"
         }
       ],
       researchInterests: ["Digital Communications", "Wireless Networks", "Modulation Techniques", "Network Optimization"],
       academicExperience: [
         {
           position: "Associate Professor",
           institute: "Department of EEE, University of Asia Pacific",
           period: "2018 - Present",
           description: "Leading research in digital communications and wireless networks."
         }
       ],
       professionalMemberships: ["Member, IEEE", "Member, IEEE Communications Society"],
       recentPublications: [
         {
           type: "Conference",
           title: "Advanced Modulation Techniques for 5G Networks",
           authors: "Dr. Fatima Begum, Dr. Mohammad Rahman",
           venue: "IEEE International Conference on Communications",
           year: 2023
         }
       ]
     },
     {
       id: "prof-aminul-islam",
       name: "Prof. Dr. Aminul Islam",
       title: "Professor",
       role: "Professor",
       image: "https://i.ibb.co/placeholder/prof-aminul-islam.jpg",
       bio: "Professor Dr. Aminul Islam is a distinguished professor with expertise in semiconductor devices and nanotechnology. His research contributions have advanced the field of nanoelectronics and quantum devices.",
       email: "aminul.islam@uap-bd.edu",
       phone: "+880-17****-***",
       room: 511,
       education: [
         {
           degree: "PhD in Semiconductor Physics",
           institution: "University of Tokyo, Japan",
           year: "2000"
         },
         {
           degree: "MSc in Physics",
           institution: "University of Dhaka",
           year: "1995"
         },
         {
           degree: "BSc in Physics",
           institution: "University of Dhaka",
           year: "1993"
         }
       ],
       researchInterests: ["Semiconductor Devices", "Nanotechnology", "Quantum Electronics", "Nanoelectronics"],
       academicExperience: [
         {
           position: "Professor",
           institute: "Department of EEE, University of Asia Pacific",
           period: "2005 - Present",
           description: "Leading research in semiconductor devices and nanotechnology."
         }
       ],
       professionalMemberships: ["Senior Member, IEEE", "Member, IEEE Electron Devices Society"],
       recentPublications: [
         {
           type: "Journal",
           title: "Quantum Effects in Nanoscale Semiconductor Devices",
           authors: "Prof. Dr. Aminul Islam, Dr. Karim Uddin",
           venue: "IEEE Transactions on Electron Devices",
           year: 2023,
           impactFactor: 3.1
         }
       ]
     },
     {
       id: "mr-rezanur-islam",
       name: "M. Rezanur Islam",
       title: "Lecturer",
       role: "Lecturer",
       image: "https://i.ibb.co/placeholder/mr-rezanur-islam.jpg",
       bio: "M. Rezanur Islam is a dedicated lecturer specializing in circuit analysis and electronics. He is currently pursuing his PhD while teaching undergraduate courses in electrical circuits and electronics.",
       email: "rezanur.islam@uap-bd.edu",
       phone: "+880-17****-***",
       room: 210,
       education: [
         {
           degree: "MSc in Electrical Engineering",
           institution: "Bangladesh University of Engineering Technology",
           year: "2018"
         },
         {
           degree: "BSc in Electrical and Electronic Engineering",
           institution: "Bangladesh University of Engineering Technology",
           year: "2016"
         }
       ],
       researchInterests: ["Circuit Analysis", "Electronics", "Power Electronics", "Renewable Energy"],
       academicExperience: [
         {
           position: "Lecturer",
           institute: "Department of EEE, University of Asia Pacific",
           period: "2019 - Present",
           description: "Teaching undergraduate courses in electrical circuits and electronics."
         }
       ],
       professionalMemberships: ["Student Member, IEEE"],
       recentPublications: [
         {
           type: "Conference",
           title: "Circuit Analysis Techniques for Power Electronics Applications",
           authors: "M. Rezanur Islam, Dr. G. R. Ahmed Jamal",
           venue: "IEEE International Conference on Electrical Engineering",
           year: 2023
         }
       ]
     },
     {
       id: "mr-adnan-rahman",
       name: "M. Adnan Rahman",
       title: "Lecturer",
       role: "Lecturer",
       image: "https://i.ibb.co/placeholder/mr-adnan-rahman.jpg",
       bio: "M. Adnan Rahman is a lecturer specializing in digital systems and computer engineering. He focuses on teaching digital logic design and computer architecture to undergraduate students.",
       email: "adnan.rahman@uap-bd.edu",
       phone: "+880-17****-***",
       room: 211,
       education: [
         {
           degree: "MSc in Computer Engineering",
           institution: "Bangladesh University of Engineering Technology",
           year: "2019"
         },
         {
           degree: "BSc in Electrical and Electronic Engineering",
           institution: "Bangladesh University of Engineering Technology",
           year: "2017"
         }
       ],
       researchInterests: ["Digital Systems", "Computer Architecture", "FPGA Design", "Embedded Systems"],
       academicExperience: [
         {
           position: "Lecturer",
           institute: "Department of EEE, University of Asia Pacific",
           period: "2020 - Present",
           description: "Teaching undergraduate courses in digital systems and computer engineering."
         }
       ],
       professionalMemberships: ["Student Member, IEEE"],
       recentPublications: [
         {
           type: "Conference",
           title: "FPGA-Based Digital System Design for Educational Applications",
           authors: "M. Adnan Rahman, Prof. Mahmud Hasan",
           venue: "IEEE International Conference on Engineering Education",
           year: 2023
         }
       ]
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
