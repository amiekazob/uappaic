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
    name: 'Mr. A.H.M. Zadidul Karim',
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
    id: 'Dr. G. R. Ahmed Jamal',
    name: 'Dr. G. R. Ahmed Jamal',
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
    id: 'Dr. Md. Shofiqul Islam',
    name: 'Dr. Md. Shofiqul Islam',
    title: 'Professor',
    role: 'Professor',
    image: 'https://i.ibb.co/htzRm7z/Dr-Md-Shofiqul-Islam.jpg',
    bio: 'Dr. Tapan Kumar is a distinguished professor with extensive experience in telecommunications and signal processing. He has published numerous papers in high-impact journals.',
    email: 'tapan.c@uap-bd.edu',
    phone: '+880-15-XXXX-XXXX',
    education: ['PhD in Communications, LMN University, Canada'],
    researchInterests: ['Organic solar cell devices', 'PCF based plasmonic and tera-Hertz sensors', 'Vertical devices (Si microneedles)']
    
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
    id: 'Dr. Tasnia Hossain',
    name: 'Dr. Tasnia Hossain',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/Jw0Y4Hjj/Dr-Tishna-Sabrina.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Thin film photovoltaic materials and Plasmonic solar cell', 'Group-III Nitride Semiconductors']
  },
 


  {
    id: 'Dr. Tishna Sabrina',
    name: 'Dr. Tishna Sabrina',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/Jw0Y4Hjj/Dr-Tishna-Sabrina.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Thin film photovoltaic materials and Plasmonic solar cell', 'Group-III Nitride Semiconductors']
  },
 


  {
    id: 'Dr. Md Sultan Mahmud',
    name: 'Dr. Md Sultan Mahmud',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/GQpzyvDL/Dr-Md-Sultan-Mahmud.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: [' Semiconductor materials, Solar PV, Energy Storage systems, Fuel cells, Thermoelectric, etc']
  },


  {
    id: 'Ms. Salma Nazia Rahman',
    name: 'Ms. Salma Nazia Rahman',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/GQpzyvDL/Dr-Md-Sultan-Mahmud.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Power Electronics']
  },

 {
    id: 'Mr. Muhammad Towhidur Rahman',
    name: 'Mr. Muhammad Towhidur Rahman',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/xKm0Njyk/Mr-Muhammad-Towhidur-Rahman.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: [' Biomedical Signal Analysis, Data analysis']
  },


 {
    id: 'Mr. M. Abdullah Al Amin',
    name: 'Mr. M. Abdullah Al Amin',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/qM9P8zwp/Mr-M-Abdullah-Al-Amin.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Renewable Energy']
  },



 {
    id: 'Mr. Masum Howlader',
    name: 'Mr. Masum Howlader',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/KxYnNcM2/Mr-Masum-Howlader.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Power system stability, HVDC']
  },


 {
    id: 'Mr. Muhammad Ahad Rahman Miah',
    name: 'Mr. Muhammad Ahad Rahman Miah',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/twZSNcxx/Mr-Muhammad-Ahad-Rahman-Miah.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Power System, Renewable Energy']
  },

 {
    id: 'Mr. Shaikh Rashedur Rahman',
    name: 'Mr. Shaikh Rashedur Rahman',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/Y4kmLKhw/Mr-Shaikh-Rashedur-Rahman.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Power System, Renewable Energy']
  },


 {
    id: 'Mr. Khandaker Sultan Mahmood',
    name: 'Mr. Khandaker Sultan Mahmood',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/6Jm9CRSj/Mr-Khandaker-Sultan-Mahmood.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Power Electronics and Control Systems']
  },


   {
    id: 'Ms. Tanima Tasmin Chowdhury',
    name: 'Ms. Tanima Tasmin Chowdhury',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/F4XvzYgR/Ms-Tanima-Tasmin-Chowdhury.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Biomedical Signal Processing']
  },

 
   {
    id: 'Mr. Md. Khairul Alam',
    name: 'Mr. Md. Khairul Alam',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/RTCy96wY/Mr-Md-Khairul-Alam.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Embedded Systems']
  },



   {
    id: 'Mr. Md. Abdullah Al Mahmud',
    name: 'Mr. Md. Abdullah Al Mahmud',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'Biomedical Signal Processing',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Optical Fiber Designing, Biomedical Image Processing']
  },


  {
    id: 'MS. Tahia Fahrin Karim',
    name: 'MS. Tahia Fahrin Karim',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'Biomedical Signal Processing',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Wireless Comunication']
  },

   {
    id: 'Mr. Kazi Mahtab Kadir',
    name: 'Mr. Kazi Mahtab Kadir',
    title: 'Assistant Professor',
    role: 'Assistant Professor',
    image: 'https://i.ibb.co/ycwkS0HX/Mr-Kazi-Mahtab-Kadir.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: [' Power system, Renewable energy']
  },


   {
    id: 'Mr. Sakhawat Hossen Rakib',
    name: 'Mr. Sakhawat Hossen Rakib',
    title: 'Lecturer',
    role: 'Lecturer',
    image: 'https://i.ibb.co/W1wrf12/Mr-Sakhawat-Hossen-Rakib.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: [' Biomedical Engineering']
  },


   {
    id: 'Ms. Munmun Akter',
    name: 'Ms. Munmun Akter ',
    title: 'Lecturer',
    role: 'Lecturer',
    image: 'https://i.ibb.co/PZ4wPnDT/Ms-Munmun-Akter.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: [' Thin Film Solar Cell, Communication']
  },


   {
    id: 'Dewan Ashikur Rahaman',
    name: 'Dewan Ashikur Rahaman',
    title: 'Lecturer',
    role: 'Lecturer',
    image: 'https://i.ibb.co/3mMJ0vZm/Dewan-Ashikur-Rahaman.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Power System Analysis, Power System Contingency Analysis, Power System Stability, Renewable Energy & Power Electronics.']
  },



   {
    id: 'Khaled Mahmud',
    name: 'Khaled Mahmud',
    title: 'Lecturer',
    role: 'Lecturer',
    image: 'https://i.ibb.co/DHh7PSNC/Khaled-Mahmud.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: [' Nanomaterials, semiconductor devices, valleytronics']
  },


   {
    id: 'Usama Ibna Alam',
    name: 'Usama Ibna Alam',
    title: 'Lecturer',
    role: 'Lecturer',
    image: 'https://i.ibb.co/PsC5TJkw/Usama-Ibna-Alam.jpg',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: ['Signal Processing, Large Language Models (LLMs)']
  },


   {
    id: 'Akil Ahmad Taki',
    name: 'Akil Ahmad Taki',
    title: 'Lecturer',
    role: 'Lecturer',
    image: '',
    bio: 'Dr. Doe specializes in electronics and VLSI design. She is known for her innovative teaching methods and mentorship.',
    email: 'jane.doe@uap-bd.edu',
    phone: '+880-19-XXXX-XXXX',
    education: ['PhD in Microelectronics, PQR University, Germany'],
    researchInterests: [' Machine Learning, Computer Vision, Wireless Communication, Signal Processing']
  },

  





]; 