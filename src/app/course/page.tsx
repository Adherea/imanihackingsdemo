import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
function course() {
  return (
    <section>
      <nav className=" flex items-center  text-white justify-between md:px-12 px-5  text-xl bg-[#79c9e0]">
        <div>
          <Image src={logo} width={140} alt="logo" />
        </div>
        <div>
          <ul className="w-fit mx-auto">
            <li>
              <Link href="/" className="group relative text-center">
                Back To Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="">
        <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium pt-12">Online Courses</h1>

        <h1 className="text-center max-w-4xl md:text-2xl mx-auto py-10">Your Journey to Excellence Begins Here: Partner with Our International IT Bootcamp and Access Top Tech Talent from Across the World.</h1>

        <div className="bg-gray-50 p-8">
          <div className="container mx-auto grid lg:grid-cols-4 grid-cols-1 gap-8">
            {/* Full Stack Engineer Course */}
            <div className="bg-white shadow-lg p-6 rounded-lg ">
              <h2 className="text-xl font-bold mb-4">Full Stack Engineer Course</h2>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong>Basics of Frontend Backend Development</strong>
                  <ul className="list-disc ml-6">
                    <li>Python (Flask, FastAPI, Django, Selenium)</li>
                    <li>Go (Echo and Gin) / Swift</li>
                    <li>Javascript (Node.js, Express JS, ReactJS, NextJS)</li>
                    <li>Java (Springboot)</li>
                    <li>HTML, HTMX, PHP, CSS, JS</li>
                    <li>My-SQL, PostgreSQL, MongoDB</li>
                    <li>etc...</li>
                  </ul>
                </li>
                <li>
                  <strong>Skills for OS and Middleware</strong>
                </li>
                <li>
                  <strong>Knowledge and Skills in Cloud Services</strong>
                  <ul className="list-disc ml-6">
                    <li>AWS, Azure, Google Cloud</li>
                  </ul>
                </li>
                <li>
                  <strong>Program Design</strong>
                  <ul className="list-disc ml-6">
                    <li>Frontend Development: UI design and coding using HTML, CSS, and JavaScript</li>
                    <li>Backend Development: Implementing server-side processing using Java, PHP, Ruby, Python, etc.</li>
                    <li>App Development: Learning to develop smartphone apps (iOS and Android) and web apps</li>
                    <li>Infrastructure Construction and Maintenance: Designing and operating systems utilizing cloud services</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Machine Learning Engineer Course */}
            <div className="bg-white shadow-lg p-6 rounded-lg ">
              <h2 className="text-xl font-bold mb-4">Machine Learning Engineer Course</h2>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong>Basics of Coding Development</strong>
                  <ul className="list-disc ml-6">
                    <li>Python (Flask, FastAPI, Django, Selenium)</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>etc...</li>
                  </ul>
                </li>
                <li>
                  <strong>Frameworks and Libraries</strong>
                  <ul className="list-disc ml-6">
                    <li>Scikit-learn</li>
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                    <li>etc....</li>
                  </ul>
                </li>
                <li>
                  <strong>Mathematics and Statistics</strong>
                  <ul className="list-disc ml-6">
                    <li>Probability</li>
                    <li>Regression analysis</li>
                    <li>Hypothesis testing</li>
                    <li>Linear algebra, calculus, probability theory</li>
                    <li>Statistics and machine learning algorithms</li>
                  </ul>
                </li>
                <li>
                  <strong>Data Analysis Skills</strong>
                  <ul className="list-disc ml-6">
                    <li>Data preprocessing</li>
                    <li>Visualization</li>
                    <li>Feature engineering</li>
                  </ul>
                </li>
                <li>
                  <strong>User Experience Design</strong>
                  <ul className="list-disc ml-6">
                    <li>Web scraping</li>
                    <li>Using APIs to collect data from the web</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* UI/UX/Web Designer Course */}
            <div className="bg-white shadow-lg p-6 rounded-lg ">
              <h2 className="text-xl font-bold mb-4">UI/UX/Web Designer Course</h2>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong>Basics of Design Skills</strong>
                  <ul className="list-disc ml-6">
                    <li>Layout, color schemes, and typography</li>
                    <li>Adobe Illustrator, Photoshop, Figma</li>
                    <li>HTML/CSS/JavaScript</li>
                    <li>etc...</li>
                  </ul>
                </li>
                <li>
                  <strong>Marketing Skills</strong>
                  <ul className="list-disc ml-6">
                    <li>Trends of competitors</li>
                    <li>Market changes</li>
                    <li>Web analytics tools, SEO</li>
                  </ul>
                </li>
                <li>
                  <strong>User Perspectives</strong>
                </li>
              </ul>
            </div>

            {/* Data Analyst Course */}
            <div className="bg-white shadow-lg p-6 rounded-lg ">
              <h2 className="text-xl font-bold mb-4">Data Analyst Course</h2>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong>Basics of Programming Skills</strong>
                  <ul className="list-disc ml-6">
                    <li>Python / R</li>
                    <li>Data analysis libraries (Pandas, NumPy)</li>
                    <li>Machine learning libraries (Scikit-learn, TensorFlow)</li>
                  </ul>
                </li>
                <li>
                  <strong>Mathematics and Statistics</strong>
                  <ul className="list-disc ml-6">
                    <li>Probability</li>
                    <li>Regression analysis</li>
                    <li>Hypothesis testing</li>
                    <li>etc...</li>
                  </ul>
                </li>
                <li>
                  <strong>Database Knowledge</strong>
                  <ul className="list-disc ml-6">
                    <li>SQL</li>
                  </ul>
                </li>
                <li>
                  <strong>Analysis Tools</strong>
                  <ul className="list-disc ml-6">
                    <li>Excel to organize and visualize data</li>
                    <li>How to use web scraping and APIs</li>
                    <li>How to use image recognition tools and natural language processing tools by AI</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default course;
