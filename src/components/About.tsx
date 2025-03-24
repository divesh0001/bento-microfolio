
import { useState } from "react";
import { cn } from "@/lib/utils";

type TabType = "education" | "skills" | "achievements";

const About = () => {
  const [activeTab, setActiveTab] = useState<TabType>("education");

  const educationData = [
    {
      institution: "Bennett University",
      degree: "B.Tech in Computer Science & Engineering",
      duration: "2022 - 2026 (Expected)",
      details: "CGPA: 9.41/10",
    },
    {
      institution: "St. Xavier's School",
      degree: "Higher Secondary",
      duration: "2019 - 2021",
      details: "Percentage: 88.6",
    },
    {
      institution: "St. Xavier's School",
      degree: "Secondary Education",
      duration: "2017 - 2019",
      details: "Percentage: 92.4",
    },
  ];

  const skillsData = {
    languages: ["Python", "C++", "HTML", "CSS", "JavaScript"],
    aiMl: ["TensorFlow", "PyTorch", "NLP", "Pandas", "NumPy", "YOLO"],
    tools: ["Git", "Atlassian Jira", "GitHub", "Canva", "Visual Studio Code"],
    databases: ["MongoDB", "MySQL"],
    cloud: ["AWS", "Microsoft Azure"],
    coursework: ["Data Structures and Algorithms", "Data Science (Specialization)", "Operating Systems", "DBMS", "Computer Networks"]
  };

  const achievementsData = [
    "Completed Pw Skills Data Science Masters 2.0 course (9 months).",
    "Scored 92.15 percentile in JEE Mains 2022.",
    "3rd prize in Spin The Code contest by GeeksForGeeks (Dec 2022).",
    "Outstanding project award at the Hackeye Competition, securing a top 15 position.",
    "Google Cloud Certified: Cloud Computing Foundations Certificate.",
    "Recognized as a top 110 student in the Google Cloud Study Jam at Bennett University.",
    "Tech Head, Data Science Society, Bennett University",
    "Organizer, Inter-College Hackathon ENIGMA (April 2024)",
    "Sports Captain and General Secretary, St. Xavier's School"
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold animate-slide-in">About Me</h2>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="flex space-x-1 overflow-x-auto pb-2">
            {["education", "skills", "achievements"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabType)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all",
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-transparent text-black hover:bg-black/5"
                )}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="glass rounded-2xl p-8 animate-fade-in">
            {activeTab === "education" && (
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-start">
                    <div className="md:w-1/3 mb-2 md:mb-0">
                      <div className="text-sm text-neutral-500">{item.duration}</div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-lg font-semibold">{item.institution}</h3>
                      <div className="text-neutral-700">{item.degree}</div>
                      <div className="text-sm text-neutral-600 mt-1">{item.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "skills" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsData.languages.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-black/5 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">AI/ML Tools & Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsData.aiMl.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-black/5 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tools & Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsData.tools.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-black/5 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Databases</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsData.databases.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-black/5 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cloud Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsData.cloud.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-black/5 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Coursework</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsData.coursework.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-black/5 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "achievements" && (
              <div className="space-y-3">
                <ul className="list-disc pl-5 space-y-2">
                  {achievementsData.map((achievement, index) => (
                    <li key={index} className="text-neutral-700">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
