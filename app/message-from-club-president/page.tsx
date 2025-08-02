import React from 'react';

const fullMessage = [
  "Welcome to the EEE Club of the University of Asia Pacific! As your Club President, I am honored to lead this vibrant community of aspiring electrical and electronic engineers who are passionate about innovation, technology, and making a positive impact in our field.",
  "Our EEE Club serves as a bridge between academic learning and practical application, providing students with opportunities to engage in hands-on projects, participate in technical competitions, and collaborate on cutting-edge research initiatives. We believe that learning extends far beyond the classroom, and our club activities are designed to complement your academic journey with real-world experiences.",
  "Throughout the year, we organize various technical workshops, seminars, and guest lectures featuring industry experts and renowned professionals. These events provide invaluable insights into the latest trends and developments in electrical and electronic engineering, helping our members stay ahead of the curve in this rapidly evolving field.",
  "One of our key initiatives is the annual project showcase, where students present their innovative solutions to real-world problems. This platform not only allows students to demonstrate their technical skills but also encourages creative thinking and entrepreneurial spirit among our members.",
  "We maintain strong partnerships with leading technology companies and research institutions, providing our members with internship opportunities, industrial visits, and networking events. These connections often lead to career opportunities and collaborative research projects that benefit both students and the industry.",
  "Our club also emphasizes the importance of community service and social responsibility. We regularly organize outreach programs to promote STEM education in local schools and communities, inspiring the next generation of engineers and contributing to the technological advancement of our society.",
  "As we look towards the future, we are committed to fostering an inclusive environment where every member can thrive, learn, and contribute to the advancement of electrical and electronic engineering. We encourage active participation from all students, regardless of their academic year or specialization.",
  "I invite you to join our dynamic community and be part of the exciting journey ahead. Together, we can push the boundaries of innovation, create meaningful solutions, and build a brighter future through the power of electrical and electronic engineering."
];

export default function MessageFromClubPresidentPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Message from the Club President</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">Samiul Alam Shajal</h2>
          <div className="space-y-6 text-gray-600 text-justify">
            {fullMessage.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}