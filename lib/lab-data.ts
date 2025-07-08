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
    name: 'Power Electronics Laboratory',
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
    id: 'digital-electronics-lab',
    name: 'Control Systems Laboratory',
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
    id: 'digital-electronics-lab',
    name: 'Control Systems Laboratory',
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
    id: 'digital-electronics-lab',
    name: 'Numerical Technique Laboratory',
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
    id: 'digital-electronics-lab',
    name: 'Power System Analysis I Laboratory',
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
    id: 'digital-electronics-lab',
    name: 'Electrical Meachines II Laboratory',
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
    id: 'digital-electronics-lab',
    name: 'Electrical Circuit II Laboratory',
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
    id: 'digital-electronics-lab',
    name: 'Electrical Circuit I Laboratory',
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
    id: 'digital-electronics-lab',
    name: 'Electrical Meachines II Laboratory',
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
    id: 'digital-electronics-lab',
    name: 'Computer Programming Laboratory',
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
    id: 'digital-electronics-lab',
    name: 'Electrical Circuit II Laboratory',
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
    id: 'digital-electronics-lab',
    name: 'Electrical Circuit I Laboratory',
    description: 'Modern facility for digital circuit design, microprocessor programming, and embedded systems development.',
    category: 'Electronics',
    image: 'https://iili.io/FIZAv44.jpg',
    equipment: ['Logic Analyzers', 'FPGA Boards', 'Microcontroller Kits', 'Digital Trainers', 'Programming Tools'],
    applications: ['Digital Logic Design', 'Microprocessor Programming', 'FPGA Development', 'Embedded Systems'],
    supervisor: 'Prof. Dr. Tapan Kumar Chakraborty',
    location: 'Room 302, EEE Building',
    capacity: 30
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