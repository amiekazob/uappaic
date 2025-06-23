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
    id: 'analog-electronics-lab',
    name: 'Analog Electronics Laboratory',
    description: 'A comprehensive laboratory for studying analog electronic circuits, amplifiers, and signal processing systems.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop',
    equipment: ['Oscilloscopes', 'Function Generators', 'Power Supplies', 'Multimeters', 'Breadboards'],
    applications: ['Amplifier Design', 'Filter Circuits', 'Signal Processing', 'Circuit Analysis'],
    supervisor: 'Dr. Jane Doe',
    location: 'Room 301, EEE Building',
    capacity: 25
  },
  {
    id: 'digital-electronics-lab',
    name: 'Digital Electronics Laboratory',
    description: 'Modern facility for digital circuit design, microprocessor programming, and embedded systems development.',
    category: 'Electronics',
    image: 'https://iili.io/FIZAv44.jpg',
    equipment: ['Logic Analyzers', 'FPGA Boards', 'Microcontroller Kits', 'Digital Trainers', 'Programming Tools'],
    applications: ['Digital Logic Design', 'Microprocessor Programming', 'FPGA Development', 'Embedded Systems'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 302, EEE Building',
    capacity: 30
  },
  {
    id: 'power-systems-lab',
    name: 'Power Systems Laboratory',
    description: 'Advanced laboratory for power generation, transmission, and distribution system studies.',
    category: 'Power',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1470&auto=format&fit=crop',
    equipment: ['Power System Simulator', 'Protection Relays', 'Transformers', 'Generators', 'Load Banks'],
    applications: ['Power Flow Analysis', 'Protection Studies', 'Fault Analysis', 'Grid Simulation'],
    supervisor: 'A.H.M. Zadidul Karim',
    location: 'Room 201, EEE Building',
    capacity: 20
  },
  {
    id: 'renewable-energy-lab',
    name: 'Renewable Energy Laboratory',
    description: 'State-of-the-art facility for solar, wind, and other renewable energy system research and development.',
    category: 'Power',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1472&auto=format&fit=crop',
    equipment: ['Solar Panels', 'Wind Turbines', 'Battery Systems', 'Inverters', 'Energy Meters'],
    applications: ['Solar System Design', 'Wind Energy Analysis', 'Energy Storage', 'Grid Integration'],
    supervisor: 'A.H.M. Zadidul Karim',
    location: 'Room 202, EEE Building',
    capacity: 15
  },
  {
    id: 'communications-lab',
    name: 'Communications Laboratory',
    description: 'Modern laboratory for analog and digital communication systems, antenna design, and wireless technologies.',
    category: 'Communications',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop',
    equipment: ['Spectrum Analyzers', 'Signal Generators', 'Antennas', 'RF Test Equipment', 'Software Defined Radio'],
    applications: ['Modulation Techniques', 'Antenna Testing', 'Wireless Communication', 'Signal Analysis'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 401, EEE Building',
    capacity: 25
  },
  {
    id: 'microwave-lab',
    name: 'Microwave Engineering Laboratory',
    description: 'Specialized laboratory for microwave circuit design, antenna measurements, and high-frequency applications.',
    category: 'Communications',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1470&auto=format&fit=crop',
    equipment: ['Network Analyzers', 'Microwave Bench', 'Horn Antennas', 'Waveguides', 'Klystron'],
    applications: ['Microwave Circuits', 'Antenna Design', 'Waveguide Analysis', 'Radar Systems'],
    supervisor: 'Dr. Jane Doe',
    location: 'Room 402, EEE Building',
    capacity: 18
  },
  {
    id: 'control-systems-lab',
    name: 'Control Systems Laboratory',
    description: 'Advanced facility for control system design, automation, and robotics applications.',
    category: 'Control',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop',
    equipment: ['PLC Systems', 'SCADA Software', 'Servo Motors', 'Sensors', 'Control Trainers'],
    applications: ['PID Control', 'Industrial Automation', 'Process Control', 'Robotics'],
    supervisor: 'A.H.M. Zadidul Karim',
    location: 'Room 501, EEE Building',
    capacity: 22
  },
  {
    id: 'robotics-lab',
    name: 'Robotics Laboratory',
    description: 'Cutting-edge laboratory for robotics research, autonomous systems, and artificial intelligence applications.',
    category: 'Control',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop',
    equipment: ['Robotic Arms', 'Mobile Robots', 'Vision Systems', 'AI Processors', 'Simulation Software'],
    applications: ['Robot Programming', 'Computer Vision', 'Machine Learning', 'Autonomous Navigation'],
    supervisor: 'Dr. Jane Doe',
    location: 'Room 502, EEE Building',
    capacity: 20
  },
  {
    id: 'computer-networks-lab',
    name: 'Computer Networks Laboratory',
    description: 'Modern facility for network design, cybersecurity, and internet protocol studies.',
    category: 'Computer',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1434&auto=format&fit=crop',
    equipment: ['Network Switches', 'Routers', 'Servers', 'Security Appliances', 'Network Analyzers'],
    applications: ['Network Configuration', 'Security Testing', 'Protocol Analysis', 'Cloud Computing'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 601, EEE Building',
    capacity: 28
  },
  {
    id: 'embedded-systems-lab',
    name: 'Embedded Systems Laboratory',
    description: 'Comprehensive laboratory for embedded system design, IoT development, and real-time applications.',
    category: 'Computer',
    image: 'https://iili.io/FIZAv44.jpg',
    equipment: ['ARM Boards', 'Arduino Kits', 'Raspberry Pi', 'IoT Sensors', 'Development Tools'],
    applications: ['IoT Development', 'Real-time Systems', 'Sensor Networks', 'Embedded Programming'],
    supervisor: 'Dr. Jane Doe',
    location: 'Room 602, EEE Building',
    capacity: 25
  },
  {
    id: 'vlsi-design-lab',
    name: 'VLSI Design Laboratory',
    description: 'Advanced laboratory for integrated circuit design, semiconductor device modeling, and chip fabrication.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop',
    equipment: ['CAD Workstations', 'IC Design Software', 'Probe Stations', 'Semiconductor Analyzers', 'Clean Room'],
    applications: ['IC Design', 'Layout Design', 'Device Modeling', 'Chip Testing'],
    supervisor: 'Dr. Jane Doe',
    location: 'Room 303, EEE Building',
    capacity: 16
  },
  {
    id: 'signal-processing-lab',
    name: 'Digital Signal Processing Laboratory',
    description: 'Modern facility for digital signal processing, image processing, and multimedia applications.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop',
    equipment: ['DSP Processors', 'MATLAB Software', 'Audio Equipment', 'Image Sensors', 'Processing Boards'],
    applications: ['Audio Processing', 'Image Enhancement', 'Pattern Recognition', 'Filter Design'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 304, EEE Building',
    capacity: 24
  },
  {
    id: 'biomedical-lab',
    name: 'Biomedical Engineering Laboratory',
    description: 'Specialized laboratory for biomedical device development, medical imaging, and healthcare technology.',
    category: 'Research',
    image: 'https://iili.io/FIZAv44.jpg',
    equipment: ['ECG Machines', 'Ultrasound Systems', 'Biosensors', 'Medical Devices', 'Imaging Software'],
    applications: ['Medical Device Design', 'Biosignal Processing', 'Medical Imaging', 'Healthcare IoT'],
    supervisor: 'A.H.M. Zadidul Karim',
    location: 'Room 701, EEE Building',
    capacity: 20
  },
  {
    id: 'optical-communications-lab',
    name: 'Optical Communications Laboratory',
    description: 'Advanced laboratory for fiber optic communications, photonics, and optical networking.',
    category: 'Communications',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop',
    equipment: ['Optical Fibers', 'Laser Diodes', 'Photodetectors', 'Optical Spectrum Analyzer', 'Fiber Splicers'],
    applications: ['Fiber Optic Systems', 'Optical Networks', 'Photonic Devices', 'Laser Technology'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 403, EEE Building',
    capacity: 18
  },
  {
    id: 'smart-grid-lab',
    name: 'Smart Grid Laboratory',
    description: 'State-of-the-art facility for smart grid technologies, energy management, and grid modernization.',
    category: 'Power',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1470&auto=format&fit=crop',
    equipment: ['Smart Meters', 'Grid Simulators', 'Energy Management Systems', 'Communication Modules', 'Data Analytics Tools'],
    applications: ['Smart Grid Design', 'Energy Management', 'Grid Analytics', 'Demand Response'],
    supervisor: 'A.H.M. Zadidul Karim',
    location: 'Room 203, EEE Building',
    capacity: 22
  },
  {
    id: 'machine-learning-lab',
    name: 'Machine Learning Laboratory',
    description: 'Modern laboratory for artificial intelligence, machine learning, and data science applications in engineering.',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop',
    equipment: ['GPU Workstations', 'AI Software', 'Data Servers', 'Cloud Computing Access', 'ML Frameworks'],
    applications: ['Deep Learning', 'Neural Networks', 'Data Mining', 'Predictive Analytics'],
    supervisor: 'Dr. Jane Doe',
    location: 'Room 702, EEE Building',
    capacity: 20
  },
  {
    id: 'instrumentation-lab',
    name: 'Instrumentation Laboratory',
    description: 'Comprehensive laboratory for measurement systems, sensors, and industrial instrumentation.',
    category: 'Control',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop',
    equipment: ['Precision Instruments', 'Calibration Equipment', 'Data Loggers', 'Sensor Arrays', 'Measurement Software'],
    applications: ['Sensor Calibration', 'Measurement Systems', 'Data Acquisition', 'Industrial Monitoring'],
    supervisor: 'A.H.M. Zadidul Karim',
    location: 'Room 503, EEE Building',
    capacity: 24
  },
  {
    id: 'nanotechnology-lab',
    name: 'Nanotechnology Laboratory',
    description: 'Advanced research facility for nanoscale devices, materials characterization, and nanoelectronics.',
    category: 'Research',
    image: 'https://iili.io/FIZAv44.jpg',
    equipment: ['Electron Microscopes', 'AFM Systems', 'Nanofabrication Tools', 'Clean Room Facilities', 'Characterization Equipment'],
    applications: ['Nanomaterials Research', 'Device Fabrication', 'Materials Analysis', 'Nanoelectronics'],
    supervisor: 'Dr. Jane Doe',
    location: 'Room 703, EEE Building',
    capacity: 12
  },
  {
    id: 'automotive-electronics-lab',
    name: 'Automotive Electronics Laboratory',
    description: 'Specialized laboratory for automotive systems, electric vehicles, and transportation technology.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop',
    equipment: ['Vehicle Simulators', 'ECU Programming Tools', 'Battery Test Systems', 'CAN Bus Analyzers', 'Electric Motor Drives'],
    applications: ['Electric Vehicle Design', 'Automotive Control', 'Battery Management', 'Vehicle Networks'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 305, EEE Building',
    capacity: 18
  }
];

// Helper functions
export const getLabById = (id: string): Lab | undefined => {
  return labs.find(lab => lab.id === id);
};

export const getLabsByCategory = (category: Lab['category']): Lab[] => {
  return labs.filter(lab => lab.category === category);
};

export const getAllCategories = (): Lab['category'][] => {
  return Array.from(new Set(labs.map(lab => lab.category)));
};