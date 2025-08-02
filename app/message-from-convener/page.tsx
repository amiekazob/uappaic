import React from 'react';

const fullMessage = [
  "Welcome to the Programming and AI Club of the Department of Electrical and Electronic Engineering at the University of Asia Pacific! As the Convener of this dynamic club, I am delighted to share our vision and the exciting opportunities that await you.",
  "Our Programming and AI Club stands at the forefront of technological innovation, bridging the gap between traditional electrical engineering and the rapidly evolving fields of artificial intelligence, machine learning, and advanced programming. We are committed to nurturing the next generation of engineers who will shape the future of technology.",
  "The club focuses on developing practical skills in programming languages such as Python, C++, Java, and emerging technologies like machine learning frameworks, IoT development, and embedded systems programming. Our hands-on approach ensures that theoretical knowledge is complemented by real-world application and industry-relevant experience.",
  "We organize regular workshops, coding bootcamps, and hackathons that challenge our members to think creatively and solve complex problems. These events provide platforms for collaborative learning, peer-to-peer knowledge sharing, and the development of innovative solutions to contemporary engineering challenges.",
  "Our club maintains strong connections with leading technology companies, research institutions, and industry professionals. Through guest lectures, industrial visits, and mentorship programs, we provide our members with valuable insights into career opportunities and the latest trends in programming and artificial intelligence.",
  "We encourage participation in national and international programming competitions, AI challenges, and research conferences. These experiences not only enhance technical skills but also build confidence, leadership qualities, and a global perspective on technological advancement.",
  "Beyond technical development, we emphasize the importance of ethical AI development, responsible programming practices, and the social impact of technology. Our members are encouraged to consider how their skills can contribute to solving societal challenges and improving quality of life.",
  "I invite all students, regardless of their current programming experience, to join our vibrant community. Whether you are a beginner eager to learn or an experienced programmer looking to advance your skills, our club offers a supportive environment for growth, innovation, and excellence in the exciting intersection of electrical engineering, programming, and artificial intelligence."
];

export default function MessageFromConvenerPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Message from the Convener of the Club</h1>
          
          {/* Convener Profile Section */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src="/images/committee/Convener/1.jpg" 
                  alt="Ms. Munmun Akter - Convener" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-200"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Ms. Munmun Akter</h2>
                <p className="text-lg md:text-xl font-semibold text-blue-600 mb-2">Lecturer & Convener, Programming and AI Club</p>
                <p className="text-base text-gray-600">Department of Electrical and Electronic Engineering<br />University of Asia Pacific</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 text-gray-600 text-justify leading-relaxed">
            {fullMessage.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}