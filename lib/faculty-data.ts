export type FacultyMember = {
  id: string;
  name: string;
  title: string;
  role: 'HOD' | 'Professor' | 'Associate Professor' | 'Assistant Professor' | 'Lecturer';
  image: string;
  bio: string;
  email: string;
  phone: string;
  education: string[];
  researchInterests: string[];
};

export const facultyMembers: FacultyMember[] = [
  {
    id: 'ahm-zadidul-karim',
    name: 'Associate Professor A.H.M. Zadidul Karim',
    title: 'Head of the Department & Associate Professor',
    role: 'HOD',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=870&auto=format&fit=crop', 
    bio: "A.H.M. Zadidul Karim is the Head of the Department of EEE, leading the department with a vision for academic and research excellence. His research focuses on renewable energy, smart grid technologies, and power system stability, contributing significantly to the field.",
    email: 'zadidul.karim@uap-bd.edu',
    phone: '+880-17-XXXX-XXXX',
    education: ['PhD in Electrical Engineering, ABC University, USA', 'MSc in Electrical Engineering, XYZ University, UK', 'BSc in Electrical Engineering, BUET, Bangladesh'],
    researchInterests: ['Renewable Energy', 'Power Systems', 'Smart Grids', 'Control Systems']
  },
  {
    id: 'prof-dr-tapan-kumar',
    name: 'Professor Dr. Tapan Kumar Chakraborty',
    title: 'Professor',
    role: 'Professor',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=871&auto=format&fit=crop',
    bio: 'Dr. Tapan Kumar is a distinguished professor with extensive experience in telecommunications and signal processing. He has published numerous papers in high-impact journals.',
    email: 'tapan.c@uap-bd.edu',
    phone: '+880-15-XXXX-XXXX',
    education: ['PhD in Communications, LMN University, Canada'],
    researchInterests: ['Wireless Communications', 'Signal Processing', '5G Technology']
  },
  {
    id: 'dr-jane-doe',
    name: 'Dr. Jane Doe',
    title: 'Associate Professor',
    role: 'Associate Professor',
    image: 'https://images.unsplash.com/photo-1580894732444-84cf70d61f84?q=80&w=870&auto=format&fit=crop',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['VLSI Design', 'Semiconductor Devices', 'Analog Circuits']
  },
  {
    id: 'dr-john-smith',
    name: 'Dr. John Smith',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=774&auto=format&fit=crop',
    bio: "Dr. Smith's work is in the area of control systems and robotics. He is the advisor of the UAP Robotics Club.",
    email: 'john.smith@uap-bd.edu',
    phone: '+880-18-XXXX-XXXX',
    education: ['PhD in Control Systems, UVW University, Japan'],
    researchInterests: ['Control Systems', 'Robotics', 'Automation', 'AI']
  },
  {
    id: 'ms-emily-white',
    name: 'Ms. Emily White',
    title: 'Lecturer',
    role: 'Lecturer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop',
    bio: 'Ms. White teaches foundational courses in electrical circuits and digital logic design. She is passionate about helping students build a strong theoretical foundation.',
    email: 'emily.white@uap-bd.edu',
    phone: '+880-16-XXXX-XXXX',
    education: ['MSc in Electrical Engineering, RST University, Australia'],
    researchInterests: ['Circuit Theory', 'Digital Logic Design', 'Engineering Education']
  },
  {
    id: 'dr-michael-brown',
    name: 'Dr. Michael Brown',
    title: 'Professor',
    role: 'Professor',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=721&auto=format&fit=crop',
    bio: 'Dr. Brown is a seasoned professor with extensive research in power electronics and their application in renewable energy systems.',
    email: 'michael.brown@uap-bd.edu',
    phone: '+880-13-XXXX-XXXX',
    education: ['PhD in Power Electronics, EFG University, Sweden'],
    researchInterests: ['Power Converters', 'Electric Drives', 'Renewable Energy Integration']
  },
]; 