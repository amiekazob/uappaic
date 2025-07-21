import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Class Routine | Department of EEE - UAP',
  description: 'View the current class routine for the Department of Electrical and Electronic Engineering at University of Asia Pacific.',
}

export default function ClassRoutinePage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/pdf/Class_Routine.pdf"
        className="w-full h-full border-0"
        title="Class Routine PDF"
      >
        <p className="p-4 text-center text-gray-600">
          Your browser does not support PDFs. 
          <a href="/pdf/Class_Routine.pdf" className="text-blue-600 hover:underline">
            Download the PDF
          </a> to view it.
        </p>
      </iframe>
    </div>
  )
}