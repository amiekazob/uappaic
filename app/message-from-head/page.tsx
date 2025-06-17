import React from 'react';

const fullMessage = [
  "The Department of Electrical and Electronic Engineering (EEE) offers undergraduate and Master's programs in EEE with a vision for creating quality electrical engineers. At present we enroll 250 students per year in two semesters. So far more than 1600 students graduated from this department since the inception of the department in 2004.",
  "The department is quite rich with 25 highly qualified and senior faculty members with a balanced distribution of professors, associate professors, assistant professors and lecturers.Most of the faculty members hold Masters or higher degrees including Ph.Ds from well-reputed local and foreign universities in USA, Europe, Australia, France, Japan and Thailand. Besides, we have a number of part time faculty members from nationally reputed public universities. The specialization of the faculty members spreads in all three major areas of Electronics, Power and Communication Engineering. The current teacher–student ratio of the department is 1:25.",
  "The infrastructural strength of the department is reflected through its 19 well equipped laboratories with modern kits and softwares. These laboratories are used to conduct undergraduate classes as well as to perform undergraduate and graduate research works. Department follows a continuous development process by adding state of the art instruments to these laboratories.",
  "Besides the academic activities, the Department has a number of co-curricular and extracurricular clubs namely Project Club, Math Club, Programming Club, Debate Club, Cultural Club and Sports Club. These clubs organize several co-curricular and extracurricular activities throughout the year for overall building of the students. Our students frequently bring glory to us by achieving prestigious positions in various co-curricular and extra-curricular activities. The department also has vibrant IEEE UAP student branch which is affiliated with IEEE (world's largest professional body of the engineers) through IEEE Bangladesh section. Through IEEE UAP student branch, students get the opportunity to visit industrial sites, can collaborate with IEEE student branch of other universities and receive various training and workshops from IEEE Bangladesh section.",
  "The department value the industry-academia linkage and maintain active collaboration with the industry. We have an industry advisory panel comprising representatives from leading govt. and private organizations in the field of electronics, telecommunication and power. The department organizes period meeting with this advisory panel and incorporate their ideas in teaching-learning activities. The department also organizes different programs in collaboration with the industries.",
  "The graduates of the department are proving their competence in different government and private organizations in Bangladesh. Many of them hold senior and leading positions in those organizations and some are working abroad. Besides, a good number of graduates are pursuing higher studies in Bangladesh and well reputed foreign universities. The department value its graduates by forming an active alumni association and invites successful alumni in every semester to deliver seminar and workshops as well to guide current students for their future career.",
  "As a recognition of our excellence, in 2018, external peer reviewers under Higher Education Quality Enhancement Project of UGC rated the department as 'Very Good'. Besides, the undergraduate program of the department also received accreditation from Board of Accreditation for Engineering and Technical Education (BAETE) of Institute of Engineers, Bangladesh (IEB) in 2014 and 2018.",
  "On behalf of the Department of Electrical and Electronic Engineering, I would like to invite you to explore the department of EEE at UAP through our departmental website as well as by paying a visit to the permanent City Campus of UAP located in the heart of the city."
];

export default function MessageFromHeadPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Message from Head of the Department</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">Associate Professor A.H.M. Zadidul Karim</h2>
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