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
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 301, EEE Building',
    capacity: 25
  },
  {
    id: 'digital-electronics-lab',
    name: 'Microprocessor and Embedded System Laboratory',
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
    id: 'control-systems-lab',
    name: 'Control Systems Laboratory',
    description: 'Advanced laboratory for control system design, analysis, and implementation with modern control techniques.',
    category: 'Control',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1470&auto=format&fit=crop',
    equipment: ['Control System Trainers', 'MATLAB/Simulink', 'PLC Systems', 'Servo Motors', 'Data Acquisition Systems'],
    applications: ['PID Control', 'State Space Analysis', 'Digital Control', 'Process Control'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 303, EEE Building',
    capacity: 25
  },

  {
    id: 'numerical-technique-lab',
    name: 'Numerical Technique Laboratory',
    description: 'Computer laboratory for numerical analysis and computational methods in electrical engineering.',
    category: 'Computer',
    image: 'https://iili.io/FIZAv44.jpg',
    equipment: ['High-Performance Computers', 'MATLAB', 'Python', 'Numerical Software', 'Simulation Tools'],
    applications: ['Numerical Analysis', 'Mathematical Modeling', 'Algorithm Development', 'Scientific Computing'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 304, EEE Building',
    capacity: 30
  },

  {
    id: 'power-system-analysis-lab',
    name: 'Power System Analysis I Laboratory',
    description: 'Laboratory for power system analysis, load flow studies, and electrical network analysis.',
    category: 'Power',
    image: 'https://iili.io/FIZAv44.jpg',
    equipment: ['Power System Simulators', 'Load Flow Software', 'Protection Relays', 'Power Meters', 'Network Analyzers'],
    applications: ['Load Flow Analysis', 'Fault Analysis', 'Power System Protection', 'Grid Stability'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 305, EEE Building',
    capacity: 25
  },
  {
    id: 'electrical-machines-ii-lab',
    name: 'Electrical Machines II Laboratory',
    description: 'Advanced laboratory for studying AC machines, synchronous motors, and induction machines.',
    category: 'Machine',
    image: 'https://iili.io/FIZAv44.jpg',
    equipment: ['AC Motor Test Rigs', 'Synchronous Machines', 'Induction Motors', 'Power Analyzers', 'Torque Meters'],
    applications: ['AC Machine Testing', 'Motor Control', 'Efficiency Analysis', 'Performance Characteristics'],
    supervisor: 'Mr. Muhammad Ahad Rahman Miah',
    location: 'Room 306, EEE Building',
    capacity: 20
  },

  {
    id: 'electrical-circuit-ii-lab',
    name: 'Electrical Circuit II Laboratory',
    description: 'Laboratory for advanced circuit analysis including AC circuits, resonance, and network theorems.',
    category: 'Machine',
    image: 'https://i.ibb.co/tTzb1Sg8/image.png',
    equipment: ['AC Circuit Trainers', 'RLC Meters', 'Network Analyzers', 'Signal Generators', 'Power Meters'],
    applications: ['AC Circuit Analysis', 'Resonance Studies', 'Network Theorems', 'Filter Design'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 307, EEE Building',
    capacity: 25
  },

  {
    id: 'electrical-circuit-i-lab',
    name: 'Electrical Circuit I Laboratory',
    description: 'Fundamental laboratory for basic electrical circuits, DC analysis, and circuit theorems.',
    category: 'Electronics',
    image: 'https://i.ibb.co/21Y0GMjZ/image.png',
    equipment: ['DC Circuit Trainers', 'Multimeters', 'Power Supplies', 'Resistor Networks', 'Basic Instruments'],
    applications: ['DC Circuit Analysis', 'Ohm\'s Law', 'Kirchhoff\'s Laws', 'Circuit Theorems'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 308, EEE Building',
    capacity: 30
  },

  {
    id: 'electrical-machines-i-lab',
    name: 'Electrical Machines I Laboratory',
    description: 'Laboratory for studying DC machines, transformers, and basic electrical machine principles.',
    category: 'Power',
    image: 'https://iili.io/FIZAv44.jpg',
    equipment: ['DC Motor Test Rigs', 'Transformers', 'Generator Sets', 'Loading Equipment', 'Measuring Instruments'],
    applications: ['DC Machine Testing', 'Transformer Analysis', 'Efficiency Measurements', 'Characteristic Curves'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 309, EEE Building',
    capacity: 20
  },

  {
    id: 'computer-programming-lab',
    name: 'Computer Programming Laboratory',
    description: 'Computer laboratory for programming fundamentals, algorithms, and software development.',
    category: 'Computer',
    image: 'https://i.ibb.co/20GK5TBQ/image.png',
    equipment: ['Personal Computers', 'Programming IDEs', 'Compilers', 'Development Tools', 'Network Setup'],
    applications: ['C/C++ Programming', 'Algorithm Development', 'Data Structures', 'Software Engineering'],
    supervisor: 'Prof. Dr. Tishna Sabrina',
    location: 'Room 310, EEE Building',
    capacity: 35
  },

  {
    id: 'electronic-circuits-i-lab',
    name: 'Electronic Circuits I Laboratory',
    description: 'Laboratory for studying electronic circuits, diodes, transistors, and amplifier circuits.',
    category: 'Electronics',
    image: 'https://i.ibb.co/JjsJd7DF/image.png',
    equipment: ['Oscilloscopes', 'Function Generators', 'Breadboards', 'Electronic Components', 'Power Supplies'],
    applications: ['Diode Circuits', 'Transistor Analysis', 'Amplifier Design', 'Electronic Circuit Testing'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 311, EEE Building',
    capacity: 25
  },

  {
    id: 'electronic-circuits-ii-lab',
    name: 'Electronic Circuits II Laboratory',
    description: 'Advanced laboratory for studying operational amplifiers, active filters, and integrated circuits.',
    category: 'Electronics',
    image: 'https://i.ibb.co/JjsJd7DF/image.png',
    equipment: ['Op-Amp Trainers', 'IC Testers', 'Signal Generators', 'Spectrum Analyzers', 'PCB Prototyping'],
    applications: ['Op-Amp Circuits', 'Active Filters', 'IC Testing', 'Circuit Design'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 312, EEE Building',
    capacity: 25
  },

  {
    id: 'project-research-lab',
    name: 'Project and Research Laboratory',
    description: 'Advanced research facility for final year projects, thesis work, and innovative research in electrical engineering.',
    category: 'Research',
    image: 'https://i.ibb.co/pvm88y7M/image.png',
    equipment: ['Research Workstations', 'Simulation Software', 'Prototyping Tools', 'Measurement Equipment', 'Development Boards'],
    applications: ['Final Year Projects', 'Research Work', 'Innovation Development', 'Thesis Preparation'],
    supervisor: 'Md. Khairul Alam',
    location: 'Room 507, EEE Building',
    capacity: 20
  },

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