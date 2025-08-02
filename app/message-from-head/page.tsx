import React from 'react';

const fullMessage = [
  "Welcome to the Programming and AI Club of the Department of Electrical and Electronic Engineering at University of Asia Pacific. As the convener of this dynamic and innovative club, I am thrilled to share our vision of fostering excellence in programming, artificial intelligence, and cutting-edge technology among our students.",
  "Our club was established with the mission to bridge the gap between theoretical knowledge and practical application in the rapidly evolving fields of programming and artificial intelligence. We believe that in today's digital age, proficiency in programming and understanding of AI technologies are essential skills for any electrical and electronic engineer.",
  "The Programming and AI Club serves as a platform where students can explore various programming languages including Python, C++, Java, JavaScript, and specialized frameworks like TensorFlow, PyTorch, and scikit-learn. We organize regular workshops, coding bootcamps, hackathons, and project-based learning sessions that enable our members to develop both fundamental and advanced programming skills.",
  "Our club activities are designed to cater to students of all skill levels. Whether you are a complete beginner taking your first steps into the world of programming or an experienced coder looking to enhance your AI and machine learning capabilities, our club provides comprehensive support through mentorship programs, peer learning sessions, and hands-on projects.",
  "We regularly organize programming competitions, AI challenges, and innovation showcases that not only test our members' technical abilities but also encourage creative problem-solving and teamwork. Our members have consistently performed well in inter-university programming contests and have developed impressive projects in areas such as IoT applications, automation systems, mobile app development, and AI-powered solutions for real-world engineering problems.",
  "The club maintains strong connections with the industry through guest lectures from software engineers, AI researchers, and tech entrepreneurs. These interactions provide our members with valuable insights into current industry trends, career opportunities, and the practical applications of programming and AI in various sectors including automation, robotics, smart systems, and emerging technologies.",
  "As we look towards the future, our club is committed to staying at the forefront of technological advancement. We continuously update our curriculum and activities to include the latest developments in artificial intelligence, machine learning, deep learning, and emerging programming paradigms. Our goal is to prepare our members not just for today's challenges but for the technological landscape of tomorrow.",
  "I invite all students of the EEE department to join our Programming and AI Club and embark on an exciting journey of learning, innovation, and technological excellence. Together, we can build the skills and knowledge necessary to become the next generation of tech-savvy electrical and electronic engineers who will shape the future of technology."
];

export default function MessageFromHeadPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Message from the Convener of the Club</h1>
          
          {/* Convener Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="flex-shrink-0">
              <img 
                src="/images/committee/convener.jpg" 
                alt="Dr. Sarah Ahmed - Club Convener" 
                className="w-48 h-48 rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Dr. Sarah Ahmed</h2>
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">Convener, Programming and AI Club</h3>
              <p className="text-gray-600 mb-2">Associate Professor</p>
              <p className="text-gray-600 mb-2">Department of Electrical and Electronic Engineering</p>
              <p className="text-gray-600">University of Asia Pacific</p>
            </div>
          </div>
          
          <div className="space-y-6 text-gray-600 text-justify">
            {fullMessage.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}