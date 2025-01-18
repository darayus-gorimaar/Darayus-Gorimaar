import { Canvas } from "@react-three/fiber";
import { ResumeExperience } from "./ResumeExperience";
import { FuturisticDropdown } from "./futuristic-dropdown";
import { useState } from "react";

const jobs = [
  {
    title: "R&D Embedded Software Engineer - Keysight Technologies",
    information: (
      <div>
        <h3>Colorado Springs, Colorado</h3>
        <p>
          Created and documented comprehensive unit tests, providing a roadmap
          for ongoing development. Designed and implemented new Arbitrary
          Waveform Generator architecture in C++ and documentation (for
          technical audiences). This resulted in a 90% reduction in glitches
          when modifying waveform configurations. Logged stories, tasks, and
          bugs in Jira as part of agile practices, facilitating effective issue
          prioritization to manage multiple tasks simultaneously within the
          Agile development framework. Integrated three key features into
          oscilloscopes using Git version control software, including Bandwidth
          Filtering, Arbitrary Waveform Generation, and Demo and Training
          Signals. Collaborated with hardware, chip design, and marketing teams
          on a daily basis to foster a cross-functional approach to product
          development. Resolved five critical and serious customer defects,
          playing a key role in timely delivery of a release build, which was
          essential to the project’s market success.
        </p>
        <h1>Extracurricular Experience </h1>
        <h2> Hackathon Team Leader and Organizer</h2>
        <p>
          Prototyped a Python-based web scraper GUI to streamline and expedite
          the sourcing of parts for the supply chain department. Automated the
          extraction and analysis of pertinent data from online sources.
        </p>
        <h2>Next Gen Leadership Team Member</h2>
        <p>
          Coordinated local volunteering efforts collaborating with
          organizations like Habitat for Humanity and Ronald McDonald House
          Charities with consistent 100% turnout.
        </p>
      </div>
    ),
  },
  {
    title: "Electrical Engineering Co-op - PAX Labs",
    information: (
      <div>
        <h3>San Francisco, California</h3>
        <p>
          Ideated an innovative clog mitigation technique to significantly
          improve user experience of the PAX Era vaporizer, completely resolving
          a critical failure in 25% of pods and ensuring project delivery stayed
          on schedule. Validated new pod and vaporizer builds reliability
          through electrical engineering test suites. Analyzed data and
          presented recommendations to project managers for informed
          decision-making. Investigated points of failure in pre-production
          vaporizers using root cause analysis. Performed visual inspection,
          signal integrity analysis, power consumption analysis, and thermal
          imaging to identify sources of performance issues. Coordinated efforts
          with firmware team to troubleshoot and resolve cross-functional
          integration challenges.
        </p>
        <h1>Heater Coil Characterization Test Rig </h1>
        <p>
          Created a new rig to test 8 heater coils at once, increasing the
          number of devices under test possible by 700%. Drafted technical
          specifications and procedural guides for test rig, ensuring clarity
          and accessibility for engineering teams. Utilized Arduino, Python,
          RS-232 communication, and a custom board designed with Altium Designer
          to capture and log data, contributing to product improvement and
          reliability.
        </p>
      </div>
    ),
  },
  {
    title:
      "Electrical Wiring Harness Engineer Co-op - Lockheed Martin - Sikorsky Aircraft",
    information: (
      <div>
        <h3>Stratford, Connecticut</h3>
        <p>
          Generated comprehensive technical reports detailing proposed
          modifications and submitted them through the company database for
          executive approval, ensuring seamless integration of changes across
          various aircraft models. Revitalized wiring diagrams to establish
          alignment with modern technological standards and maintained
          documentation accuracy, ensuring compliance with updated
          specifications. Addressed technical inquiries from suppliers by
          implementing strategic engineering changes and offering clear, concise
          explanations to resolve issues.
        </p>
      </div>
    ),
  },
];

export const ResumePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Canvas
        style={{
          height: "20vh",
          width: "80vw",
          backgroundColor: "transparent",
        }}
        camera={{ fov: 30, position: [1, 0.3, 1], near: 0.1, far: 1000 }}
      >
        <ResumeExperience />
      </Canvas>
      <div
        style={{
          flex: 1,
          width: "80vw",
          display: "flex",
          flexDirection: "column", // Arrange children vertically
          justifyContent: "center", // Center children vertically
          alignItems: "center", // Center children horizontally
          backgroundColor: "transparent",
        }}
      >
        {jobs.map((job, index) => (
          <FuturisticDropdown
            key={index}
            title={job.title}
            information={job.information}
          />
        ))}
      </div>
    </div>
  );
};
