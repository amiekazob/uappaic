'use client'

export default function PublicationsPage() {
  // Sample publication data for demo
  const publications = [
    {
      id: 1,
      title: "Smart Grid Implementation in Bangladesh: Challenges and Opportunities",
      authors: "Dr. Mohammad Rahman, Dr. Sarah Ahmed",
      journal: "IEEE Transactions on Smart Grid",
      year: 2024,
      type: "Journal Article"
    },
    {
      id: 2,
      title: "5G Network Optimization Using Machine Learning Algorithms",
      authors: "Prof. Ahmed Hassan, Dr. Fatima Khan",
      journal: "International Conference on Telecommunications",
      year: 2024,
      type: "Conference Paper"
    },
    {
      id: 3,
      title: "Renewable Energy Integration in Power Systems",
      authors: "Dr. Rashid Ali, Dr. Nadia Islam",
      journal: "Journal of Renewable Energy",
      year: 2023,
      type: "Journal Article"
    },
    {
      id: 4,
      title: "IoT-Based Smart Home Energy Management System",
      authors: "Dr. Karim Uddin, Prof. Salma Begum",
      journal: "IEEE Internet of Things Journal",
      year: 2023,
      type: "Journal Article"
    },
    {
      id: 5,
      title: "Advanced Control Systems for Industrial Automation",
      authors: "Dr. Tariq Rahman, Dr. Amina Khatun",
      journal: "International Conference on Control Systems",
      year: 2023,
      type: "Conference Paper"
    },
    {
      id: 6,
      title: "Signal Processing Techniques for Wireless Communications",
      authors: "Prof. Mahmud Hasan, Dr. Ruma Akter",
      journal: "IEEE Signal Processing Magazine",
      year: 2022,
      type: "Journal Article"
    },
    {
      id: 7,
      title: "Artificial Intelligence in Electrical Engineering Applications",
      authors: "Dr. Nasir Ahmed, Dr. Shireen Rahman",
      journal: "AI in Engineering Conference",
      year: 2022,
      type: "Conference Paper"
    },
    {
      id: 8,
      title: "Power Quality Analysis in Distribution Networks",
      authors: "Dr. Habib Khan, Prof. Yasmin Ali",
      journal: "Electric Power Systems Research",
      year: 2022,
      type: "Journal Article"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Publications</h1>
          <p className="text-center mt-4 text-blue-100">
            Research publications from the Department of Electrical and Electronic Engineering
          </p>
        </div>
      </div>

      {/* Publications List */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Recent Publications</h2>
          
          <div className="space-y-6">
            {publications.map((pub) => (
              <div key={pub.id} className="border-l-4 border-blue-500 pl-4 py-3">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {pub.title}
                </h3>
                <p className="text-gray-600 mb-1">
                  <strong>Authors:</strong> {pub.authors}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Published in:</strong> {pub.journal}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {pub.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    {pub.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600">Total Publications</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-green-600">85+</div>
              <div className="text-gray-600">Journal Articles</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-purple-600">65+</div>
              <div className="text-gray-600">Conference Papers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}