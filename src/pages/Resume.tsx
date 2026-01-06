
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    document.title = "Divesh Saini - Resume";
  }, []);
  
  return (
    <div className="bg-white px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Resume</h1>
        
        <div className="glass p-6 sm:p-8 rounded-2xl mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Divesh Saini</h2>
            <p className="text-neutral-600 mt-2">B.Tech Computer Science & Engineering Student</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="text-sm">sainidivesh259@gmail.com</div>
              <div className="text-sm">+91-9829437891</div>
            </div>
          </div>
          
          <hr className="my-6 border-neutral-200" />
          
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <div className="font-medium">Bennett University</div>
                  <div className="text-sm text-neutral-500">Expected May 2026</div>
                </div>
                <div>B.Tech in Computer Science and Engineering</div>
                <div className="text-sm text-neutral-600">CGPA: 9.20/10.00 • Greater Noida</div>
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="font-medium">St. Xavier's School</div>
                  <div className="text-sm text-neutral-500">March 2021</div>
                </div>
                <div>Higher Secondary Education</div>
                <div className="text-sm text-neutral-600">Percentage: 88.6 • Bhiwadi, Rajasthan</div>
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="font-medium">St. Xavier's School</div>
                  <div className="text-sm text-neutral-500">March 2019</div>
                </div>
                <div>Secondary Education</div>
                <div className="text-sm text-neutral-600">Percentage: 92.4 • Bhiwadi, Rajasthan</div>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Experience</h3>
            <div>
              <div className="flex justify-between">
                <div className="font-medium">Software Engineer Intern — Salescode.ai</div>
              </div>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Engineered an automated data processing module using Java + Next.js to generate CSV reports and distribute them to business analysts.</li>
                <li>• Enhanced the Shield analytics platform by developing UI components and optimizing Jenkins-triggered workflow automation.</li>
                <li>• Developing an internal API Testing Framework to standardize endpoint validation and improve CI/CD reliability across product teams.</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Projects</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between">
                  <div className="font-medium">StocksGod</div>
                  <div className="flex gap-2">
                    <a href="https://github.com/divesh0001/Stocks-God" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Repository</a>
                    <a href="https://stocksgod.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Deployment</a>
                  </div>
                </div>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Engineered a full-stack stock forecasting platform using Stacked LSTM with 2% test error on real-market data.</li>
                  <li>• Elevated prediction performance by 30% through data pipeline refinement and live Tiingo API ingestion.</li>
                  <li>• Deployed an in-platform Botpress financial assistant to streamline user guidance and engagement.</li>
                </ul>
                <div className="text-sm text-neutral-600 mt-2">Tech-Stack: TensorFlow, Keras, LSTM, Python, Flask, Tiingo API, Botpress, MongoDB</div>
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="font-medium">Skin Disease Classification</div>
                  <div className="flex gap-2">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Repository</a>
                  </div>
                </div>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Designed a ResNet50-based model for 5-class disease detection achieving 66% accuracy and 0.88 ROC-AUC.</li>
                  <li>• Delivered real-time diagnosis with confidence scoring for user-uploaded dermatology images.</li>
                  <li>• Benchmarked performance using ROC curves and confusion matrices for higher reliability and medical interpretability.</li>
                </ul>
                <div className="text-sm text-neutral-600 mt-2">Tech-Stack: Python, TensorFlow, Scikit-learn, ResNet50, Pandas, Matplotlib, Seaborn</div>
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="font-medium">Suraksha AI</div>
                  <div className="flex gap-2">
                    <a href="https://github.com/divesh0001/Suraksha_AI" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Repository</a>
                  </div>
                </div>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Applied YOLOv8 for real-time threat recognition on continuous video streams with high inference speed.</li>
                  <li>• Curated and labeled threat datasets, cutting false alerts by 30% and strengthening detection precision.</li>
                  <li>• Integrated the model into a Flask backend for autonomous video analytics and alerting workflows.</li>
                </ul>
                <div className="text-sm text-neutral-600 mt-2">Tech-Stack: Python, Flask, Firebase, OpenCV, YOLOv8, Poetry</div>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="font-medium mb-2">Languages</div>
                <div className="text-sm">Python, C++, HTML, CSS, Javascript</div>
              </div>
              <div>
                <div className="font-medium mb-2">AI/ML Tools & Frameworks</div>
                <div className="text-sm">TensorFlow, PyTorch, NLP, Computer Vision, Pandas, NumPy, YOLO</div>
              </div>
              <div>
                <div className="font-medium mb-2">Tools & Frameworks</div>
                <div className="text-sm">Power BI, Git (Version Control), Atlassian Jira, GitHub, Canva, Visual Studio Code</div>
              </div>
              <div>
                <div className="font-medium mb-2">Databases</div>
                <div className="text-sm">MySQL, MongoDB</div>
              </div>
              <div>
                <div className="font-medium mb-2">Coursework</div>
                <div className="text-sm">Data Structures and Algorithms, Data Science (Specialization), Operating Systems, DBMS, Computer Networks</div>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Achievements</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cleared the ServiceNow Certified System Administrator (CSA) exam and became a certified ServiceNow Administrator.</li>
              <li>Recognized as one of the top 110 students in the Google Cloud Study Jam at Bennett University, earning the Google Cloud Certified: Cloud Computing Foundations Certificate.</li>
              <li>Completed Pw skill Data Science Masters 2.0 course of 9 months.</li>
              <li>Solved 350+ Data Structures and Algorithms problems on LeetCode.</li>
              <li>Won the 3rd prize in Spin The Code contest organised by GeeksForGeeks in December 2022.</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-4">Position of Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tech Head: Data Science Society, Bennett University.</li>
              <li>Organiser of an Inter-College Hackathon ENIGMA in which more than 50 teams have participated from Delhi-NCR region in April 2024.</li>
            </ul>
          </section>
        </div>
        
        <div className="text-center mb-6">
          <a 
            href="#" 
            download="Divesh_Saini_Resume.pdf"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
