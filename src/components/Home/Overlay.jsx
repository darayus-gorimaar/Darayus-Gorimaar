import { Scroll } from "@react-three/drei";
import FuturisticSkillBox from "./futuristic-skill-box";
import SciFiContactButtons from "../SciFiContactButtons";
import { ResumePage } from "../Resume/ResumePage";

const skills = [
  {
    name: "React",
    icon: "https://img.icons8.com/plasticine/100/react.png",
  },
  { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
  {
    name: "C++",
    icon: "https://img.icons8.com/fluency/48/c-plus-plus-logo.png",
  },
  {
    name: "HTML/CSS",
    icon: "https://img.icons8.com/color/48/source-code.png",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/javascript--v1.png",
  },
  { name: "PCB Design", icon: "https://img.icons8.com/color/48/circuit.png" },
  {
    name: "Soldering",
    icon: "https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-soldering-electrician-icongeek26-flat-icongeek26.png",
  },
  {
    name: "Machine Learning",
    icon: "https://img.icons8.com/fluency/48/artificial-intelligence--v1.png",
  },
];

const Section = (props) => {
  return (
    <section
      style={{
        opacity: 1,
        height: "100vh", // Full viewport height for spacing
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...props.style, // Apply dynamic styles
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        {props.children}
      </div>
    </section>
  );
};

export const Overlay = () => {
  // const scroll = useScroll();
  // const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  // const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  // //   const [opacityLastSection, setOpacityLastSection] = useState(1);

  // useFrame(() => {
  //   setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
  //   setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
  //   // setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  // });

  return (
    <Scroll
      html
      style={{
        flex: 1,
        justifyContent: "center",
        width: "100%", // Ensure Scroll takes up full width
        height: "100vh", // Ensure Scroll takes up full height
      }}
    >
      <Section
        style={{
          backgroundColor: "transparent",
          color: "black",
          textAlign: "center",
          padding: "20px",
          marginTop: "100px",
        }}
      >
        <h1
          style={{
            backgroundColor: "transparent",
            color: "white",
            fontSize: "5rem",
          }}
        >
          Darayus Gorimaar
        </h1>
        <p style={{ color: "white", fontSize: "1.5rem" }}>
          Hello! My name is Darayus and I am a software and electrical engineer.
          I built this website to showcase some of my projects and experiences.
        </p>
        <p style={{ color: "white", fontSize: "1rem" }}>
          Scroll down to see some of my skills.
        </p>
        <h1 style={{ color: "white", fontSize: "5rem" }}>↓</h1>
      </Section>
      <Section
        style={{
          backgroundColor: "transparent",
          color: "black",
          textAlign: "center",
          padding: "20px",
          marginTop: "70px",
        }}
      >
        <div
          style={{
            // minHeight: "100vh",
            backgroundColor: "transparent",
            padding: "48px 0",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 16px",
            }}
          >
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                marginBottom: "32px",
              }}
            >
              My Skills
            </h1>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)", // 4 equal columns
                gridTemplateRows: "repeat(2, 1fr)", // 2 equal rows
                gap: "24px",
              }}
            >
              {skills.map((skill) => (
                <FuturisticSkillBox
                  key={skill.name}
                  iconSrc={skill.icon}
                  skillName={skill.name}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section
        style={{
          backgroundColor: "transparent",
          color: "black",
          textAlign: "center",
          padding: "20px",
          marginBottom: "250px",
        }}
      >
        <ResumePage />
      </Section>
      {/* <Section
        style={{
          backgroundColor: "white",
          color: "black",
          textAlign: "center",
          padding: "20px",
          marginBottom: "250px",
        }}
      > */}
      <SciFiContactButtons />
      {/* </Section> */}
    </Scroll>
  );
};
