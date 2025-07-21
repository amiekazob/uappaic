export interface Lab {
  id: string;
  name: string;
  description: string;
  category: 'Electronics' | 'Power' | 'Communications' | 'Control' | 'Computer' | 'Research';
  image: string;
  equipment: string[];
  applications: string[];
  supervisor: string;
  location: string;
  capacity: number;
}

export const labs: Lab[] = [
  {
    id: 'electrical-circuit-lab-1',
    name: 'Electrical Circuits I Laboratory',
    description: 'This foundational laboratory course provides hands-on experience with fundamental electrical circuit principles, serving as the cornerstone of the UAP EEE curriculum. Students engage with basic circuit analysis, measurement techniques, and component characterization through carefully designed experiments that bridge theoretical knowledge with practical application.',
    category: 'Electronics',
    image: '/images/lab/electrical-circuit-1.jpg',
    equipment: [
      'Digital Multimeters (Fluke 87V)',
      'DC Power Supplies (0-30V, 0-3A)',
      'Function Generators (up to 10 MHz)',
      'Digital Oscilloscopes (100 MHz, 4-channel)',
      'Breadboards and Prototyping Kits',
      'Resistor, Capacitor, and Inductor Sets',
      'Variable Resistors and Potentiometers',
      'Signal Generators and Frequency Counters',
      'Component Testers and LCR Meters',
      'Circuit Simulation Software (PSpice, Multisim)'
    ],
    applications: [
      'Basic Circuit Analysis and Verification',
      'Ohm\'s Law and Power Calculations',
      'Series and Parallel Circuit Configurations',
      'Kirchhoff\'s Voltage and Current Laws',
      'Thevenin and Norton Equivalent Circuits',
      'AC Circuit Analysis with Phasors',
      'Frequency Response Measurements',
      'Filter Design and Implementation',
      'Resonance Phenomena in RLC Circuits',
      'Measurement Techniques and Instrumentation'
    ],
    supervisor: 'Dr. Mohammad Rahman',
    location: '5th Floor, UAP Plaza',
    capacity: 24
  },
  {
    id: 'electrical-circuit-lab-2',
    name: 'Electrical Circuits II Laboratory',
    description: 'Building upon circuit fundamentals, this laboratory supports EEE 104 - Electrical Circuits II by exploring AC circuit analysis and frequency domain concepts. Students work with sinusoidal sources, phasor analysis, and complex impedance calculations. Experiments include RLC circuit analysis, resonance phenomena, three-phase power systems, and frequency response characteristics. Using advanced oscilloscopes and power analyzers, students measure real and reactive power, analyze filter circuits, and study the behavior of electrical networks under varying frequency conditions. This lab bridges the gap between basic circuit theory and practical power system applications.',
    category: 'Electronics',
    image: '/images/lab/electrical-circuit-2.jpg',
    equipment: ['Oscilloscopes', 'LCR Meters', 'Three-phase lamb Board', 'Vairac', 'Function Generator'],
    applications: ['Three-phase Systems', 'Resonance Analysis', 'Filter Design', 'Complex Power Analysis', 'Frequency Response'],
    supervisor: 'Mr. Muhammad Ahad Rahman Miah',
    location: '5th Floor, UAP Plaza',
    capacity: 25
  },
  {
  id: 'computer-programming-lab',
  name: 'Computer Programming Laboratory',
  description: 'This laboratory supports foundational programming education for electrical and electronics engineering students, focusing on the C programming language. It provides hands-on experience in developing algorithms and implementing numerical methods to solve engineering problems such as linear equations, matrix operations, and differential equations. Through practical sessions, students gain skills in using C for file handling, data processing, and mathematical modeling. Emphasis is placed on structured programming, control statements, function usage, and array manipulation. The lab cultivates algorithmic thinking and debugging skills, preparing students for future applications in embedded systems, real-time computing, and technical research.',
  category: 'Computer',
  image: '/images/lab/computer-programming-lab.jpg',
  equipment: ['High-performance Computers', 'Code::Blocks IDE', 'GCC Compiler', 'C Debugging Tools', 'Numerical Libraries for C'],
  applications: ['Numerical Methods', 'C Programming', 'Algorithm Development', 'Data Processing', 'Engineering Computation'],
  supervisor: 'Dr. Tishna Sabrina',
  location: '5th Floor, UAP Plaza',
  capacity: 25,
  learningOutcomes: [
    'Write efficient C programs to solve engineering problems',
    'Implement numerical algorithms using arrays, loops, and functions',
    'Understand file I/O, data types, and memory management in C',
    'Apply computational techniques to linear algebra and calculus problems',
    'Debug and validate C programs effectively for real-world use cases'
  ],
  safetyRequirements: [
    'Proper handling of computer equipment and peripherals',
    'Awareness of electrical safety in lab environments',
    'No food or drink near lab hardware',
    'Routine system software maintenance protocols',
    'Secure login and logout practices to protect digital work'
  ],
  duration: '3 hours per session',
  difficulty: 'Beginner to Intermediate',
  practicalHours: 42,
  theoryHours: 8,
  assessmentMethods: [
    'Code implementation and problem-solving tasks (40%)',
    'Lab reports and code documentation (30%)',
    'Final programming project or exam (30%)'
  ],
  labManual: '/documents/computer-programming-c-lab-manual.pdf',
  relatedCourses: [
    'Data Structures and Algorithms',
    'Microcontroller Programming',
    'Embedded Systems',
    'Numerical Techniques in Engineering'
  ],
  industryRelevance: [
    'Embedded C programming in electronics',
    'Software development for microcontrollers and processors',
    'Numerical computations in engineering analysis tools',
    'Automation and control systems',
    'Low-level system programming for real-time applications'
  ],
  researchOpportunities: [
    'Efficient algorithm design for embedded systems',
    'C-based simulation tools for circuit analysis',
    'Real-time data acquisition and processing in C'
  ],
  certifications: [
    'C Programming Proficiency',
    
  ]
},

  {
    id: 'electrical-machines-1',
    name: 'Electrical Machines I Laboratory',
    description: 'Supporting EEE 204 - Electrical Machines I, this laboratory provides comprehensive hands-on experience with DC machines and transformers. Students conduct experiments on DC motor and generator characteristics, speed-torque relationships, and efficiency measurements. Transformer testing includes open-circuit, short-circuit, and load tests to determine equivalent circuits and performance parameters. The lab covers motor starting methods, speed control techniques, and power measurement in rotating machines. Through practical exercises, students learn machine testing standards, safety procedures, and the relationship between theoretical machine models and real-world performance, preparing them for advanced power system studies.',
    category: 'Power',
    image: '/images/lab/electrical-machines-II.jpg',
    equipment: ['AC Ameter', 'AC Voltmeter','AC Wattmeter', 'Inductor Bank','Capacitor Bank','Induction Motor 3Q'],
    applications: ['DC Motor Characteristics', 'Transformer Testing', 'Efficiency Measurements', 'Load Testing', 'Speed Control'],
    supervisor: 'Ms. Tanima Tasnim Chowdhury',
    location: 'EEE Building',
    capacity: 25,
    learningOutcomes: [
      'Analyze DC machine characteristics and performance',
      'Conduct comprehensive transformer testing procedures',
      'Measure efficiency and losses in electrical machines',
      'Understand speed-torque relationships in motors',
      'Apply machine testing standards and protocols',
      'Design motor control and starting circuits'
    ],
    safetyRequirements: [
      'High voltage safety protocols for machine testing',
      'Rotating machinery safety procedures',
      'Electrical isolation and lockout procedures',
      'Personal protective equipment requirements',
      'Emergency stop and safety interlock systems'
    ],
    duration: '3 hours per session',
    difficulty: 'Intermediate',
    practicalHours: 45,
    theoryHours: 9,
    assessmentMethods: [
      'Machine testing reports and analysis (45%)',
      'Practical machine operation skills (30%)',
      'Efficiency calculation projects (25%)'
    ],
    labManual: '/documents/electrical-machines-i-lab-manual.pdf',
    relatedCourses: [
      'Electrical Machines II',
      'Power Systems I',
      'Power Electronics',
      'Control Systems'
    ],
    industryRelevance: [
      'Industrial motor testing and maintenance',
      'Power system transformer analysis',
      'Electric vehicle motor design',
      'Renewable energy generator systems',
      'Industrial automation and motor drives'
    ],
    researchOpportunities: [
      'High-efficiency machine design',
      'Advanced motor control techniques',
      'Renewable energy machine applications'
    ],
    certifications: [
      'Electrical Machine Testing Certification',
      'Industrial Motor Safety Qualification'
    ]
  },
  {
    id: 'matlab-lab',
    name: 'MATLAB and Python Programming Laboratory',
    description: 'This computational laboratory supports multiple courses including EEE 212 - Computer Programming and various analysis courses by teaching programming skills specific to electrical engineering applications. Students learn MATLAB programming for circuit analysis, signal processing, and control system design. Python programming covers data analysis, numerical methods, and engineering problem-solving. The lab includes Simulink for system modeling, signal processing toolboxes for filter design, and control system toolboxes for stability analysis. Students develop skills in algorithm development, data visualization, and simulation techniques that are essential for modern electrical engineering practice and research.',
    category: 'Computer',
    image: '/images/lab/matlab-lab.jpg',
    equipment: ['High-performance Computers', 'MATLAB Software', 'Python IDEs', 'Simulink', 'Signal Processing Toolboxes'],
    applications: ['Circuit Simulation', 'Signal Processing', 'Control System Design', 'Data Analysis', 'Algorithm Development'],
    supervisor: 'Mr. Kazi Mahtab Kadir',
    location: 'Room 705, CSE Floor',
    capacity: 25,
    learningOutcomes: [
      'Develop proficiency in MATLAB programming for engineering applications',
      'Apply Python for data analysis and numerical computations',
      'Create simulation models using Simulink',
      'Implement signal processing algorithms',
      'Design and analyze control systems computationally',
      'Visualize engineering data and results effectively'
    ],
    safetyRequirements: [
      'Computer laboratory safety guidelines',
      'Software licensing compliance',
      'Data backup and security protocols',
      'Ergonomic workstation setup',
      'Electrical safety for computer equipment'
    ],
    duration: '3 hours per session',
    difficulty: 'Beginner',
    practicalHours: 45,
    theoryHours: 9,
    assessmentMethods: [
      'Programming assignments and projects (50%)',
      'Algorithm implementation tests (30%)',
      'Simulation model development (20%)'
    ],
    labManual: '/documents/matlab-python-lab-manual.pdf',
    relatedCourses: [
      'Signal Processing',
      'Control Systems',
      'Numerical Methods',
      'Digital Signal Processing'
    ],
    industryRelevance: [
      'Engineering simulation and modeling',
      'Data analysis in industrial systems',
      'Algorithm development for embedded systems',
      'Research and development computational tools',
      'Automation and control system programming'
    ],
    researchOpportunities: [
      'Advanced simulation techniques',
      'Machine learning applications in engineering',
      'Computational optimization methods'
    ],
    certifications: [
      'MATLAB Programming Proficiency',
      'Python for Engineers Certification'
    ]
  },
  {
    id: 'electronic-lab-2',
    name: 'Electronic Circuits II Laboratory',
    description: 'This advanced laboratory supports EEE 206 - Electronic Circuits II by exploring sophisticated analog circuit design and analysis. Students work extensively with operational amplifiers, designing and testing inverting, non-inverting, and differential amplifiers. The lab covers active filter design, oscillator circuits, and feedback system analysis. Integrated circuit applications include voltage regulators, comparators, and specialized analog ICs. Students learn advanced measurement techniques using precision instruments, study frequency compensation, and analyze stability in feedback systems. This laboratory prepares students for complex analog system design and provides the foundation for mixed-signal circuit applications.',
    category: 'Electronics',
    image: '/images/lab/electronic-circuit-2.jpg',
    equipment: ['Op-Amp Trainers', 'IC Testers', 'Feedback Analysis Setup', 'Active Filter Kits', 'Precision Instruments'],
    applications: ['Op-Amp Circuits', 'Active Filters', 'Feedback Analysis', 'Oscillator Design', 'IC Applications'],
    supervisor: 'Ms. Salma Nazia Rahman',
    location: 'EEE Building',
    capacity: 25,
    learningOutcomes: [
      'Design and analyze operational amplifier circuits',
      'Implement active filter designs for various applications',
      'Understand feedback systems and stability analysis',
      'Design oscillator circuits and analyze their performance',
      'Apply advanced analog integrated circuits',
      'Perform precision measurements in analog circuits'
    ],
    safetyRequirements: [
      'Precision instrument handling procedures',
      'IC static protection protocols',
      'High-gain circuit stability precautions',
      'Oscilloscope probe safety guidelines',
      'Component thermal management'
    ],
    duration: '3 hours per session',
    difficulty: 'Advanced',
    practicalHours: 42,
    theoryHours: 12,
    assessmentMethods: [
      'Advanced circuit design projects (45%)',
      'Filter design and implementation (30%)',
      'Feedback system analysis reports (25%)'
    ],
    labManual: '/documents/electronics-ii-lab-manual.pdf',
    relatedCourses: [
      'Communication Systems',
      'Control Systems',
      'Signal Processing',
      'Power Electronics'
    ],
    industryRelevance: [
      'Analog IC design and testing',
      'Precision instrumentation systems',
      'Audio and video signal processing',
      'Medical device electronics',
      'Industrial control and automation'
    ],
    researchOpportunities: [
      'Low-noise amplifier design',
      'High-speed analog circuit optimization',
      'Mixed-signal circuit development'
    ],
    certifications: [
      'Advanced Analog Design Certification',
      'Precision Measurement Proficiency'
    ]
  },
  {
    id: 'electrical-machines-lab-2',
    name: 'Electrical Machines II Laboratory',
    description: 'This laboratory supports EEE 208 - Electrical Machines II by providing in-depth study of AC machines and advanced rotating machine concepts. Students conduct comprehensive experiments on three-phase induction motors, including no-load, blocked-rotor, and load tests to determine equivalent circuits and performance characteristics. Synchronous machine experiments cover synchronization procedures, V-curves, and power-angle characteristics. The lab includes variable frequency drive operation, motor control techniques, and power quality analysis in motor-driven systems. Students learn industrial motor testing standards, efficiency measurement techniques, and modern motor control strategies essential for power system and industrial automation applications.',
    category: 'Power',
    image: '/images/lab/electrical-machines-II.jpg',
    equipment: ['Induction Motors', 'Synchronous Machines', 'Variable Frequency Drives', 'Power Quality Analyzers', 'Motor Control Centers'],
    applications: ['AC Motor Testing', 'Synchronous Machine Analysis', 'Motor Control', 'Power Quality Assessment', 'Efficiency Testing'],
    supervisor: 'MR. Khairul Alam',
    location: 'EEE Building',
    capacity: 25,
    learningOutcomes: [
      'Analyze three-phase induction motor characteristics and performance',
      'Understand synchronous machine operation and control',
      'Implement motor starting and speed control methods',
      'Evaluate motor efficiency and energy consumption',
      'Design variable frequency drive systems',
      'Perform industrial motor testing and condition monitoring'
    ],
    safetyRequirements: [
      'High voltage safety protocols (up to 480V)',
      'Rotating machinery safety procedures',
      'Personal protective equipment mandatory',
      'Emergency stop system familiarity',
      'Electrical isolation and lockout procedures'
    ],
    duration: '3 hours per session',
    difficulty: 'Advanced',
    practicalHours: 45,
    theoryHours: 15,
    assessmentMethods: [
      'Motor testing and analysis reports (40%)',
      'Drive system design projects (35%)',
      'Efficiency optimization assignments (25%)'
    ],
    labManual: '/documents/electrical-machines-ii-lab-manual.pdf',
    relatedCourses: [
      'Power Systems Engineering',
      'Power Electronics',
      'Industrial Automation',
      'Renewable Energy Systems'
    ],
    industryRelevance: [
      'Industrial motor drive systems',
      'Power plant generator operations',
      'Manufacturing automation systems',
      'Electric vehicle motor control',
      'Renewable energy conversion systems'
    ],
    researchOpportunities: [
      'High-efficiency motor design',
      'Advanced motor control algorithms',
      'Condition monitoring and predictive maintenance'
    ],
    certifications: [
      'Industrial Motor Testing Certification',
      'VFD Systems Proficiency Certificate'
    ]
  },
  {
    id: 'digital-electronic-lab',
    name: 'Digital Electronics Laboratory',
    description: 'Supporting EEE 210 - Digital Electronics, this laboratory provides comprehensive hands-on experience with digital logic design and computer fundamentals. Students design and implement combinational circuits using logic gates, multiplexers, and decoders. Sequential circuit experiments include flip-flops, counters, and finite state machines. The lab covers Boolean algebra implementation, Karnaugh map simplification, and digital system design methodologies. FPGA programming introduces hardware description languages and programmable logic concepts. Students learn digital troubleshooting techniques, timing analysis, and the bridge between digital logic theory and practical computer system implementation.',
    category: 'Electronics',
    image: '/images/lab/digital-electronics-lab.jpg',
    equipment: ['Logic Trainers', 'FPGA Boards', 'Digital Oscilloscopes', 'Logic Analyzers', 'Microprocessor Kits'],
    applications: ['Logic Gate Design', 'Sequential Circuits', 'Counter Design', 'Memory Systems', 'Microprocessor Programming'],
    supervisor: 'Mr. A.H.M. Zadidul Karim',
    location: 'EEE Building',
    capacity: 25,
    learningOutcomes: [
      'Design and implement combinational logic circuits',
      'Understand sequential circuit operation and timing',
      'Program and configure FPGA devices',
      'Analyze digital system performance and optimization',
      'Interface digital circuits with microprocessors',
      'Use digital design tools and simulation software'
    ],
    safetyRequirements: [
      'Static electricity protection for ICs',
      'Proper handling of FPGA boards',
      'Logic analyzer probe safety',
      'Power supply voltage verification',
      'Component insertion/removal procedures'
    ],
    duration: '3 hours per session',
    difficulty: 'Intermediate',
    practicalHours: 39,
    theoryHours: 12,
    assessmentMethods: [
      'Digital circuit design projects (40%)',
      'FPGA implementation assignments (35%)',
      'Logic analysis and troubleshooting (25%)'
    ],
    labManual: '/documents/digital-electronics-lab-manual.pdf',
    relatedCourses: [
      'Microprocessors and Microcontrollers',
      'Computer Architecture',
      'Embedded Systems',
      'Digital Signal Processing'
    ],
    industryRelevance: [
      'Digital system design and verification',
      'FPGA-based product development',
      'Embedded system programming',
      'Hardware-software co-design',
      'IoT device development'
    ],
    researchOpportunities: [
      'High-speed digital circuit design',
      'Low-power digital system optimization',
      'Hardware acceleration for AI/ML'
    ],
    certifications: [
      'Digital Design Fundamentals Certificate',
      'FPGA Programming Proficiency'
    ]
  },
  {
    id: 'power-system-analysis-lab-1',
    name: 'Power System Analysis I Laboratory',
    description: 'This laboratory complements EEE 302 - Power System Analysis I by providing practical experience with power system modeling and analysis techniques. Students use industry-standard software like ETAP and PowerWorld to perform load flow studies, fault analysis, and stability assessments. The lab covers power system protection coordination, relay settings, and grid interconnection studies. Experiments include transmission line modeling, transformer modeling, and generator representation in power flow studies. Students learn to interpret power system simulation results, analyze system stability margins, and understand the practical aspects of power system planning and operation that are crucial for power engineering careers.',
    category: 'Power',
    image: '/images/lab/electrical-machines-II.jpg',
    equipment: ['AC Voltmeter', 'AC Ammeter', '3 phase transformer', 'Inductive Load', 'Capacitor Bank'],
    applications: ['Load Flow Analysis', 'Fault Analysis', 'Stability Studies', 'Protection Coordination', 'Power Quality'],
    supervisor: 'Mr. Shaikh Rashedur Rahman',
    location: 'EEE Building',
    capacity: 25,
    learningOutcomes: [
      'Perform load flow analysis using industry-standard software',
      'Analyze power system faults and protection coordination',
      'Understand transmission line and transformer modeling',
      'Evaluate power system stability and security',
      'Design protection schemes for power system components',
      'Interpret power system simulation results and recommendations'
    ],
    safetyRequirements: [
      'Software simulation safety protocols',
      'High voltage equipment awareness',
      'Power system operation safety guidelines',
      'Emergency procedures for power system faults',
      'Electrical safety in power laboratories'
    ],
    duration: '3 hours per session',
    difficulty: 'Advanced',
    practicalHours: 42,
    theoryHours: 15,
    assessmentMethods: [
      'Power system analysis reports (45%)',
      'Software simulation projects (35%)',
      'Protection coordination assignments (20%)'
    ],
    labManual: '/documents/power-system-analysis-lab-manual.pdf',
    relatedCourses: [
      'Power System Protection',
      'Power System Economics',
      'Renewable Energy Systems',
      'Smart Grid Technology'
    ],
    industryRelevance: [
      'Power utility system planning and operation',
      'Grid modernization and smart grid implementation',
      'Renewable energy integration studies',
      'Power system consulting and engineering services',
      'Energy management and optimization'
    ],
    researchOpportunities: [
      'Smart grid technology development',
      'Renewable energy integration optimization',
      'Power system resilience and security'
    ],
    certifications: [
      'Power System Analysis Software Proficiency',
      'Grid Integration Specialist Certificate'
    ]
  },
  {
    id: 'communication-engineering-laboratory',
    name: 'Communication Engineering Laboratory',
    description: 'Supporting EEE 310 - Communication Engineering, this laboratory provides comprehensive experience with analog and digital communication systems. Students implement various modulation techniques including AM, FM, ASK, FSK, and PSK using communication trainers and software-defined radio platforms. The lab covers channel coding, error correction techniques, and digital signal transmission over various media. Antenna design and propagation experiments demonstrate wireless communication principles. Students learn to use spectrum analyzers, network analyzers, and communication test equipment while studying practical aspects of telecommunication systems, preparing them for careers in telecommunications and wireless technology.',
    category: 'Communications',
    image: '/images/lab/communication-engineeting-lab.jpg',
    equipment: ['Communication Trainers', 'Spectrum Analyzers', 'Signal Generators', 'Antenna Systems', 'Modulation Kits'],
    applications: ['Modulation Techniques', 'Signal Transmission', 'Antenna Design', 'Channel Coding', 'Wireless Communication'],
    supervisor: 'Dr. Communication Systems',
    location: 'EEE Building',
    capacity: 25,
    learningOutcomes: [
      'Implement analog and digital modulation techniques',
      'Design and analyze communication system performance',
      'Use professional communication test equipment',
      'Understand channel coding and error correction',
      'Design antennas and analyze propagation characteristics',
      'Apply software-defined radio concepts'
    ],
    safetyRequirements: [
      'RF radiation safety protocols',
      'Spectrum analyzer operation safety',
      'Antenna handling and installation safety',
      'High-frequency equipment safety procedures',
      'Communication equipment grounding protocols'
    ],
    duration: '3 hours per session',
    difficulty: 'Advanced',
    practicalHours: 42,
    theoryHours: 15,
    assessmentMethods: [
      'Communication system design projects (45%)',
      'Modulation and demodulation analysis (30%)',
      'Antenna design and testing reports (25%)'
    ],
    labManual: '/documents/communication-engineering-lab-manual.pdf',
    relatedCourses: [
      'Digital Communications',
      'Wireless Communications',
      'Antenna and Propagation',
      'Microwave Engineering'
    ],
    industryRelevance: [
      'Telecommunications and mobile networks',
      'Satellite communication systems',
      'Broadcasting and media technology',
      'Wireless sensor networks and IoT',
      'Defense and aerospace communications'
    ],
    researchOpportunities: [
      '5G and beyond wireless technologies',
      'Software-defined radio development',
      'Advanced antenna design research'
    ],
    certifications: [
      'RF and Microwave Engineering Certificate',
      'Wireless Communication Systems Proficiency'
    ]
  },
  {
    id: 'digital-signal-lab',
    name: 'Digital Signal Processing Laboratory',
    description: 'This laboratory supports EEE 312 - Digital Signal Processing by providing hands-on experience with DSP algorithms and real-time signal processing. Students implement digital filters, FFT algorithms, and signal analysis techniques using DSP processors and MATLAB. The lab covers audio processing, image processing, and biomedical signal analysis applications. Real-time DSP experiments include adaptive filtering, noise reduction, and signal enhancement techniques. Students learn to program DSP hardware, optimize algorithms for real-time performance, and understand the practical constraints of digital signal processing systems used in telecommunications, audio processing, and control applications.',
    category: 'Communications',
    image: '/images/lab/digital-electronics-lab.jpg',
    equipment: ['DSP Processors', 'Real-time Systems', 'Filter Design Software', 'Audio Processing Equipment', 'FPGA DSP Boards'],
    applications: ['Digital Filter Design', 'FFT Analysis', 'Audio Processing', 'Image Processing', 'Real-time DSP'],
    supervisor: 'Ms. Tanima Tasmin Chowdhury',
    location: 'Room 402, EEE Building',
    capacity: 25,
    learningOutcomes: [
      'Design and implement digital filters for various applications',
      'Analyze signals using FFT and spectral analysis techniques',
      'Develop real-time DSP algorithms and applications',
      'Program DSP processors and FPGA-based systems',
      'Apply adaptive filtering and noise reduction techniques',
      'Understand DSP hardware constraints and optimization'
    ],
    safetyRequirements: [
      'DSP processor handling and ESD protection',
      'Audio equipment volume and hearing protection',
      'FPGA programming safety protocols',
      'Real-time system operation procedures',
      'Software and hardware debugging safety'
    ],
    duration: '3 hours per session',
    difficulty: 'Advanced',
    practicalHours: 42,
    theoryHours: 15,
    assessmentMethods: [
      'DSP algorithm implementation projects (45%)',
      'Filter design and analysis reports (30%)',
      'Real-time DSP system development (25%)'
    ],
    labManual: '/documents/digital-signal-processing-lab-manual.pdf',
    relatedCourses: [
      'Digital Communications',
      'Audio and Speech Processing',
      'Image Processing',
      'Biomedical Signal Processing'
    ],
    industryRelevance: [
      'Telecommunications and wireless systems',
      'Audio and multimedia processing',
      'Biomedical signal analysis and devices',
      'Radar and sonar signal processing',
      'Consumer electronics and entertainment'
    ],
    researchOpportunities: [
      'Advanced DSP algorithm development',
      'Machine learning for signal processing',
      'Real-time embedded DSP systems'
    ],
    certifications: [
      'DSP Programming Certificate',
      'MATLAB Signal Processing Toolbox Proficiency'
    ]
  },
  {
    id: 'control-systems-lab',
    name: 'Control Systems Laboratory',
    description: 'This laboratory supports EEE 317 - Control Systems by providing practical experience with control system design, analysis, and implementation. Students work with PID controllers, studying tuning methods and performance optimization for various plant dynamics. The lab covers classical control techniques including root locus design, Bode plots, and Nyquist stability analysis. Modern control experiments include state-space representation, pole placement, and optimal control design. Using LabVIEW and real-time control hardware, students implement digital control algorithms and study the effects of sampling, quantization, and computational delays. This hands-on experience bridges theoretical control concepts with practical industrial automation applications.',
    category: 'Control',
    image: '/images/lab/control-systems-labs.jpg',
    equipment: ['Control System Trainers', 'PID Controllers', 'Servo Systems', 'Data Acquisition Systems', 'LabVIEW Software'],
    applications: ['PID Control', 'Root Locus Design', 'Frequency Response', 'State Space Analysis', 'Digital Control'],
    supervisor: 'Dr. Tishna Sabrina',
    location: 'EEE Building',
    capacity: 25,
    learningOutcomes: [
      'Design and tune PID controllers for various systems',
      'Analyze system stability using classical control methods',
      'Implement state-space control design techniques',
      'Understand digital control system implementation',
      'Apply modern control theory to practical systems',
      'Use control system design and simulation software'
    ],
    safetyRequirements: [
      'Servo system mechanical safety protocols',
      'Real-time system operation procedures',
      'Data acquisition system safety guidelines',
      'LabVIEW programming safety practices',
      'Control loop stability precautions'
    ],
    duration: '3 hours per session',
    difficulty: 'Advanced',
    practicalHours: 42,
    theoryHours: 15,
    assessmentMethods: [
      'Control system design projects (45%)',
      'PID tuning and optimization reports (30%)',
      'Digital control implementation (25%)'
    ],
    labManual: '/documents/control-systems-lab-manual.pdf',
    relatedCourses: [
      'Modern Control Theory',
      'Digital Control Systems',
      'Robotics and Automation',
      'Process Control'
    ],
    industryRelevance: [
      'Industrial automation and process control',
      'Robotics and mechatronics systems',
      'Automotive control systems',
      'Aerospace and defense applications',
      'Manufacturing and production control'
    ],
    researchOpportunities: [
      'Advanced control algorithm development',
      'Machine learning in control systems',
      'Autonomous system control design'
    ],
    certifications: [
      'Industrial Control Systems Certificate',
      'LabVIEW Programming Proficiency'
    ]
  },

  {
    id: 'numerical-technique-lab',
    name: 'Numerical Technique Laboratory',
    description: 'Supporting EEE 320 - Numerical Techniques, this laboratory focuses on computational methods essential for solving complex engineering problems. Students implement numerical algorithms for solving linear and nonlinear equations, differential equations, and optimization problems relevant to electrical engineering. The lab covers matrix operations, eigenvalue problems, and numerical integration techniques used in circuit analysis and field calculations. Programming exercises in MATLAB and Python include curve fitting, interpolation, and statistical analysis of engineering data. Students develop computational thinking skills and learn to validate numerical solutions, preparing them for advanced engineering analysis and research applications.',
    category: 'Computer',
    image: '/images/lab/electronic-circuit-2.jpg',
    equipment: ['High-performance Computers', 'MATLAB', 'Python', 'Mathematica', 'Numerical Software Packages'],
    applications: ['Numerical Analysis', 'Optimization', 'Differential Equations', 'Matrix Operations', 'Computational Methods'],
    supervisor: 'Dr. Numerical Methods',
    location: 'Room 102, Computer Lab',
    capacity: 25,
    learningOutcomes: [
      'Implement numerical algorithms for engineering problem solving',
      'Solve linear and nonlinear equation systems computationally',
      'Apply numerical methods to differential equations',
      'Perform matrix operations and eigenvalue analysis',
      'Develop optimization algorithms for engineering applications',
      'Validate and analyze numerical solution accuracy'
    ],
    safetyRequirements: [
      'Computer laboratory safety protocols',
      'Software licensing compliance',
      'Data backup and security procedures',
      'Ergonomic workstation setup',
      'Electrical safety in computer labs'
    ],
    duration: '3 hours per session',
    difficulty: 'Intermediate',
    practicalHours: 39,
    theoryHours: 12,
    assessmentMethods: [
      'Algorithm implementation projects (50%)',
      'Numerical analysis reports (30%)',
      'Optimization problem solutions (20%)'
    ],
    labManual: '/documents/numerical-techniques-lab-manual.pdf',
    relatedCourses: [
      'Engineering Mathematics',
      'Advanced Engineering Analysis',
      'Research Methods',
      'Computational Engineering'
    ],
    industryRelevance: [
      'Engineering simulation and modeling',
      'Optimization in design and manufacturing',
      'Data analysis and machine learning',
      'Scientific computing applications',
      'Research and development methodologies'
    ],
    researchOpportunities: [
      'Advanced numerical algorithm development',
      'High-performance computing applications',
      'Machine learning and AI integration'
    ],
    certifications: [
      'Computational Engineering Certificate',
      'MATLAB Programming Proficiency'
    ]
  },
  {
    id: 'embedded-system-lab',
    name: 'Microprocessor and Embedded System Laboratory',
    description: 'This laboratory complements EEE 406 - Microprocessor and Embedded Systems by providing comprehensive hands-on experience with microcontroller programming and embedded system design. Students learn assembly language and C programming for microcontrollers, implementing real-time applications and hardware interfacing projects. The lab covers interrupt handling, timer programming, and communication protocols including SPI, I2C, and UART. IoT applications using Arduino and Raspberry Pi demonstrate modern embedded system concepts. Students develop skills in hardware-software integration, real-time system design, and embedded programming techniques essential for modern electronic product development and industrial automation.',
    category: 'Computer',
    image: '/images/lab/digital-electronics-lab.jpg',
    equipment: ['Microcontroller Boards', 'Arduino', 'Raspberry Pi', 'Embedded Development Tools', 'Real-time Systems'],
    applications: ['Microcontroller Programming', 'Embedded C', 'IoT Applications', 'Real-time Systems', 'Hardware Interfacing'],
    supervisor: 'Dr. Embedded Systems',
    location: 'Room 206, EEE Building',
    capacity: 25,
    learningOutcomes: [
      'Program microcontrollers using assembly and C languages',
      'Design and implement real-time embedded systems',
      'Interface hardware components with microcontrollers',
      'Implement communication protocols (SPI, I2C, UART)',
      'Develop IoT applications and wireless connectivity',
      'Debug and optimize embedded system performance'
    ],
    safetyRequirements: [
      'Microcontroller handling and ESD protection',
      'Power supply safety for embedded systems',
      'Proper breadboard and PCB handling',
      'Wireless communication safety protocols',
      'Real-time system debugging safety'
    ],
    duration: '3 hours per session',
    difficulty: 'Intermediate',
    practicalHours: 42,
    theoryHours: 12,
    assessmentMethods: [
      'Embedded system design projects (45%)',
      'Microcontroller programming assignments (35%)',
      'IoT application development (20%)'
    ],
    labManual: '/documents/embedded-systems-lab-manual.pdf',
    relatedCourses: [
      'Real-time Systems',
      'IoT and Wireless Systems',
      'Robotics and Automation',
      'Computer Architecture'
    ],
    industryRelevance: [
      'IoT device development and deployment',
      'Industrial automation and control systems',
      'Consumer electronics and smart devices',
      'Automotive embedded systems',
      'Medical device programming and control'
    ],
    researchOpportunities: [
      'Edge computing and AI at the edge',
      'Low-power embedded system design',
      'Wireless sensor network development'
    ],
    certifications: [
      'Embedded Systems Programming Certificate',
      'IoT Development Proficiency'
    ]
  },

  {
    id: 'power-electronics-lab',
    name: 'Power Electronics Laboratory',
    description: 'Supporting EEE 404 - Power Electronics, this laboratory provides comprehensive experience with power electronic devices and converter systems. Students study switching devices including MOSFETs, IGBTs, and their characteristics under various operating conditions. The lab covers DC-DC converters, AC-DC rectifiers, and DC-AC inverters with emphasis on efficiency, thermal management, and electromagnetic compatibility. Motor drive experiments include variable frequency drives, servo control systems, and renewable energy interface converters. Students learn power electronic design principles, simulation techniques, and safety procedures essential for industrial power conversion applications and renewable energy systems.',
    category: 'Power',
    image: '/images/lab/power-electronics-lab.jpg',
    equipment: ['Power Electronic Converters', 'IGBT Modules', 'Motor Drives', 'Power Quality Analyzers', 'Thermal Imaging'],
    applications: ['Converter Design', 'Motor Drives', 'Power Quality', 'Renewable Energy Systems', 'Industrial Automation'],
    supervisor: 'Dr. Power Electronics',
    location: 'Room 304, EEE Building',
    capacity: 25,
    learningOutcomes: [
      'Analyze power electronic switching devices and their characteristics',
      'Design and implement various power converter topologies',
      'Understand motor drive systems and control techniques',
      'Evaluate power converter efficiency and thermal management',
      'Apply power electronics in renewable energy systems',
      'Use power electronic simulation and design software'
    ],
    safetyRequirements: [
      'High voltage and high current safety protocols',
      'Power electronic device handling procedures',
      'Thermal safety and heat sink requirements',
      'EMI/EMC safety guidelines',
      'Emergency shutdown and isolation procedures'
    ],
    duration: '3 hours per session',
    difficulty: 'Advanced',
    practicalHours: 45,
    theoryHours: 15,
    assessmentMethods: [
      'Power converter design projects (45%)',
      'Motor drive implementation and testing (35%)',
      'Efficiency optimization assignments (20%)'
    ],
    labManual: '/documents/power-electronics-lab-manual.pdf',
    relatedCourses: [
      'Motor Drives and Control',
      'Renewable Energy Systems',
      'Smart Grid Technology',
      'Electric Vehicle Technology'
    ],
    industryRelevance: [
      'Industrial motor drive and automation systems',
      'Renewable energy conversion and grid integration',
      'Electric vehicle charging infrastructure',
      'Power supply design for electronic systems',
      'Energy storage and battery management systems'
    ],
    researchOpportunities: [
      'Wide bandgap semiconductor device applications',
      'High-efficiency power converter design',
      'Grid-tied renewable energy systems'
    ],
    certifications: [
      'Power Electronics Design Certificate',
      'Motor Drive Systems Proficiency'
    ]
  },
  
  {
    id: 'bio-medical-lab',
    name: 'Biomedical Electronic Lab',
    description: 'Supporting EEE 456 - Biomedical Instrumentation Sessional, this specialized laboratory focuses on the intersection of electrical engineering and healthcare technology. Students design and test biomedical instrumentation including ECG, EMG, and PPG systems, learning about biosignal acquisition, processing, and analysis. The lab covers medical device safety standards, patient isolation techniques, and regulatory compliance requirements. Experiments include medical imaging principles, therapeutic device design, and telemedicine systems. Students develop skills in biocompatible circuit design, signal processing for biological systems, and understanding the unique challenges of medical electronics, preparing them for careers in the rapidly growing healthcare technology sector.',
    category: 'Electronics',
    image: '/images/lab/bio-medical.jpg',
    equipment: ['ECG Trainer Set', 'EMG Trainer Set', 'PPG Trainer Set', 'Digital Oscilloscope', 'Function Generator', 'Trainer Board'],
    applications: ['Medical Instrumentation', 'Biosignal Processing', 'Medical Device Design', 'Healthcare Technology', 'Patient Safety'],
    supervisor: 'Dr. Biomedical Engineering',
    location: 'Room 507, EEE Building',
    capacity: 25,
    learningOutcomes: [
      'Design and test biomedical instrumentation systems',
      'Understand biosignal acquisition and processing techniques',
      'Apply medical device safety standards and regulations',
      'Develop biocompatible electronic circuits and systems',
      'Analyze medical imaging and diagnostic systems',
      'Implement telemedicine and remote monitoring solutions'
    ],
    safetyRequirements: [
      'Medical device safety standards (IEC 60601)',
      'Patient isolation and electrical safety protocols',
      'Biocompatibility testing procedures',
      'Sterilization and contamination control',
      'Regulatory compliance guidelines (FDA, CE)'
    ],
    duration: '3 hours per session',
    difficulty: 'Advanced',
    practicalHours: 42,
    theoryHours: 15,
    assessmentMethods: [
      'Medical device design projects (50%)',
      'Biosignal analysis reports (30%)',
      'Safety and regulatory compliance assignments (20%)'
    ],
    labManual: '/documents/biomedical-electronics-lab-manual.pdf',
    relatedCourses: [
      'Medical Device Design',
      'Biosignal Processing',
      'Healthcare Technology',
      'Regulatory Affairs'
    ],
    industryRelevance: [
      'Medical device development and manufacturing',
      'Healthcare technology and digital health',
      'Diagnostic equipment design and testing',
      'Telemedicine and remote patient monitoring',
      'Regulatory affairs and medical device approval'
    ],
    researchOpportunities: [
      'Advanced biosensor development',
      'AI-powered medical diagnostics',
      'Wearable health monitoring systems'
    ],
    certifications: [
      'Medical Device Design Certificate',
      'Biomedical Instrumentation Proficiency'
    ]
  }
];