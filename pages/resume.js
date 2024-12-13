import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
// Data
import { showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div className="w-full max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold font-serif">Felise Amore Pandiora</h1>
              <h2 className="text-xl mt-5 font-serif">{resume.tagline}</h2>
              <div className="mt-2">
                <Socials />
              </div>
              <h2 className="w-5/5 text-xl mt-5 opacity-50 font-serif text-justify">
                {resume.description}
              </h2>
              

              <div className="mt-5">
                <h1 className="text-2xl font-bold font-serif">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-7">
                <h1 className="text-2xl font-bold font-serif">Education</h1>
                <div className="mt-3">
                  <h2 className="text-lg font-serif">{resume.education.universityName}</h2>
                  <h3 className="text-sm opacity-75 font-serif">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-50 font-serif">
                    {resume.education.universityPara}
                  </p>
                </div>
                <div className="mt-3">
                {/* High School Details */}
                <h2 className="text-lg font-serif">{resume.education.highSchoolName}</h2>
                <h3 className="text-sm opacity-75 font-serif">{resume.education.highSchoolDate}</h3>
              </div>
              </div>
              <div className="mt-7">
                <h1 className="text-2xl font-bold font-serif">Skills</h1>
                {resume.skills && (
                  <div className="flex flex-wrap mob:flex-col desktop:flex-row">
                    {resume.skills.map((skills, index) => (
                      <div key={index} className="w-full mob:w-full desktop:w-1/3 py-2">
                        <li className="ml-5 font-serif">{skills}</li>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-7">
                <h1 className="text-2xl font-bold font-serif">Certifications</h1>
                {resume.certifications && (
                  <div className="flex flex-wrap mob:flex-col desktop:flex-row">
                    {resume.certifications.map((certification, index) => (
                      <div key={index} className="w-full mob:w-full desktop:w-1/2 py-2">
                        <li className="ml-5 font-serif">{certification}</li>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-7">
                <h1 className="text-2xl font-bold font-serif">Awards</h1>
                {resume.awards && (
                    <div className="flex flex-wrap mob:flex-col desktop:flex-row">
                      {resume.awards.map((awards, index) => (
                        <div key={index} className="w-full mob:w-full desktop:w-1/2 py-2">
                          <li className="ml-5 font-serif">{awards}</li>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;


