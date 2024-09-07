import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs } from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiAxios,
  SiReactrouter,
  SiNestjs,
  SiMysql,
  SiAntdesign,
  // SiFormik,
} from "react-icons/si";
import {
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandMantine,
} from "react-icons/tb";
import { FaBootstrap, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";

const ICons = [
  {
    icons: <DiJavascript1 color="#c286dd" />,
    name: "Javascript",
  },
  {
    icons: <SiTypescript color="#c286dd" />,
    name: "Typescript",
  },
  {
    icons: <DiReact color="#c286dd" />,
    name: "ReactJS",
  },
  {
    icons: <TbBrandReactNative color="#c286dd" />,
    name: "React Native",
  },
  {
    icons: <SiNextdotjs color="#c286dd" />,
    name: "NextJS",
  },
  {
    icons: <DiNodejs color="#c286dd" />,
    name: "NodeJS",
  },

  {
    icons: <SiNestjs color="#c286dd" />,
    name: "NestJS",
  },
  {
    icons: <SiMysql color="#c286dd" />,
    name: "MySQL",
  },
  {
    icons: <SiFirebase color="#c286dd" />,
    name: "Firebase",
  },
  {
    icons: <SiAxios color="#c286dd" />,
    name: "Axios",
  },
  {
    icons: <SiReactrouter color="#c286dd" />,
    name: "React Router",
  },

  {
    icons: <SiAntdesign color="#c286dd" />,
    name: "Ant Design",
  },

  {
    icons: <TbBrandRedux color="#c286dd" />,
    name: "Redux",
  },
  {
    icons: <FaBootstrap color="#c286dd" />,
    name: "Bootstrap",
  },
  {
    icons: <GiMaterialsScience color="#c286dd" />,
    name: "Material UI",
  },
  {
    icons: <TbBrandMantine color="#c286dd" />,
    name: "Mantine",
  },
  {
    icons: <SiAxios color="#c286dd" />,
    name: "Axios",
  },
  {
    icons: <FaHtml5 color="#c286dd" />,
    name: "HTML",
  },
  {
    icons: <FaCss3Alt color="#c286dd" />,
    name: "CSS",
  },
];
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {ICons?.map((item, index) => (
        <Col xs={4} md={2} className="tech-icons">
          {item.icons}
          <h6 style={{ color: "white" }}>{item.name}</h6>
        </Col>
      ))}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiMongodb color="#c286dd" />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFormik color="#c286dd" />
      </Col> */}
    </Row>
  );
}

export default Techstack;
