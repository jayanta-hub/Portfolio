import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiSwagger,
  SiGithub,
  SiJira,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import { BsMicrosoftTeams } from "react-icons/bs";

const ICons = [
  {
    icons: <SiVisualstudiocode color="#c286dd" />,
    name: "Visual Studio Code",
  },
  {
    icons: <SiPostman color="#c286dd" />,
    name: "Postman",
  },
  {
    icons: <SiSlack color="#c286dd" />,
    name: "Slack",
  },
  {
    icons: <SiSwagger color="#c286dd" />,
    name: "Swagger",
  },
  {
    icons: <SiGithub color="#c286dd" />,
    name: "Github",
  },
  {
    icons: <SiJira color="#c286dd" />,
    name: "Jira",
  },
  {
    icons: <DiGit color="#c286dd" />,
    name: "Git",
  },
  {
    icons: <BsMicrosoftTeams color="#c286dd" />,
    name: "Microsoft Teams",
  },
];
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {ICons?.map((item, index) => (
        <Col xs={4} md={2} className="tech-icons">
          {item.icons}
          <h6 style={{ color: "white" }}>{item.name}</h6>
        </Col>
      ))}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
