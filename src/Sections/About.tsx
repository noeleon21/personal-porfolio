export default function About(){
  return (
      <div className="flex flex-col md:flex-row md:gap-12 items-center">
    {/* About Card */}
    <div className="md:w-2/3 bg-gradient-to-br from-sky-900 to-indigo-900 rounded-xl shadow-lg p-8 mb-8 md:mb-0">
      <h2 className="text-3xl font-extrabold text-sky-300 mb-4">About Me</h2>
      <p className="text-lg text-white leading-relaxed">
        Cybersecurity Graduate with experience gained through internships in penetration testing, cloud computing, and web development.
        Currently working as a Rapid Global Administrator at Thales, supporting subcontractor management and compliance operations.
      </p>
    </div>
    {/* Skills Card */}
    <div className="md:w-1/3 bg-[#232526] rounded-xl shadow-lg p-8">
      <h3 className="font-semibold text-2xl text-sky-300 mb-4">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {[
          "HTML 5", "JavaScript", "MySQL", "Node.js", "Tailwind CSS", "Git",
          "CSS", "Python", "Github", "Linux", "AWS", "Github Actions",
          "Docker", "Terraform", "Kubernetes", "Google Cloud Platform", "Penetration Testing", "Windows Server", "Postman", "Networking", "React", "CPanel", "Azure"
        ].map(skill => (
          <span
            key={skill}
            className="inline-block bg-sky-700 text-white px-3 py-1 rounded-full text-xs font-medium shadow hover:bg-sky-500 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>

  )
}