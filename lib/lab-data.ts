export interface Lab {
  id: string;
  name: string;
  description?: string;
  category?: 'Electronics' | 'Power' | 'Communications' | 'Control' | 'Computer' | 'Research';
  image: string;
  equipment?: string[];
  applications?: string[];
  supervisor?: string;
  location?: string;
  capacity: number;
}

export const labs: Lab[] = [
  {
    id: 'electrical-circuit-lab-1',
    name: 'Electrical Circuits I Laboratory',
    image: '/images/lab/electrical-circuit-1.jpg',
    capacity: 25
  },
 {
    id: 'electrical-circuit-lab-2',
    name: 'Electrical Circuits II Laboratory',
    image: '/images/lab/electrical-circuit-2.jpg',
    capacity: 25
  },

  {
    id: 'electronic-lab-1',
    name: 'Electronic Circuits I Laboratory',
    image: '/images/lab/electronic-circuit-1.jpg',
    capacity: 25
  },
  
  {
    id: 'electrical-machines-1',
    name: 'Electrical Machines I Laboratory',
    image: '/images/lab/electrical-machines-1.jpg',
    capacity: 25
  },
  
 {
    id: 'matlab-lab',
    name: 'MATLAB and Python Programming Laboratory',
    image: '/images/lab/matlab-lab.jpg',
    capacity: 25
  },
  
 {
    id: 'electronic-lab-2',
    name: 'Electronic Circuits II Laboratory',
    image: '/images/lab/electronic-circuit-2.jpg',
    capacity: 25
  },
   {
    id: 'electrical-machines-lab-2',
    name: 'Electrical Machines II Laboratory',
    image: '/images/lab/electrical-machines-II.jpg',
    capacity: 25
  },

  {
    id: 'digital-electronic-lab',
    name: 'Digital Electronics Laboratory',
    image: '/images/lab/digital-electronics-lab.jpg',
    capacity: 25
  },
  
 {
    id: 'power-system-analysis-lab-1',
    name: 'Power System Analysis I Laboratory',
    image: '/images/lab/digital-electronics-lab.jpg',
    capacity: 25
  },

   {
    id: 'communication-engineeting-laboratory',
    name: 'Communication Engineeting Laboratory',
    image: '/images/lab/communication-engineeting-laboratory.jpg',
    capacity: 25
  },
   {
    id: 'digital-signal-lab',
    name: 'Digital Signal Processing Laboratory',
    image: '/images/lab/-engineeting-laboratory.jpg',
    capacity: 25
  },
 {
    id: 'control-systems-lab',
    name: 'Control Systems Laboratory',
    image: '/images/lab/control-systems-lab.jpg',
    capacity: 25
  },
 {
    id: 'numerical-technique-lab',
    name: 'Numerical Technique Laboratory',
    image: '/images/lab/numerical-technique-lab.jpg',
    capacity: 25
  },
 {
    id: 'embedded-system-lab',
    name: 'Microprocessor and Embedded System Laboratory',
    image: '/images/lab/embedded-system-lab',
    capacity: 25
  },
 {
    id: 'elective-2-lab',
    name: 'Elective II Laboratory',
    image: '/images/lab/elective-2-lab',
    capacity: 25
  },
 {
    id: 'power-electronics-lab',
    name: 'Power Electronics Laboratory',
    image: '/images/lab/elective-2-lab',
    capacity: 25
  },
  {
    id: 'elective-4-lab',
    name: 'Elective IV Laboratory',
    image: '/images/lab/elective-4-lab',
    capacity: 25
  },

   {
    id: 'bio-medical-lab',
    name: 'Biomedical Electronics Laboratory',
    image: '/images/lab/bio-medical.jpg',
    capacity: 25
  },

];