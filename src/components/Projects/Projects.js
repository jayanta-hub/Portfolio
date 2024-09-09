import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imagility from "../../Assets/Projects/imagility.png";
import otp from "../../Assets/Projects/rnotp.png";
import modal from "../../Assets/Projects/rnmodal.png";
import yellow from "../../Assets/Projects/yellow.png";
import tim from "../../Assets/Projects/tim.png";
import notification from "../../Assets/Projects/notification.png";
import data from "../../Assets/Projects/datainjection.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={otp}
              isBlog={false}
              title="Rn-otp-inputs"
              description="rn-otp-inputs is a tiny Javascript library which provides an elegant UI for the end user to input one time passcode (OTP). It handles autocomplete functionality and it display remaining time for OTP. It also features a carefully crafted flow to handle edge cases for volatile user gestures. We provide default UI, but you can always customize the appearance as you like."
              ghLink="https://github.com/jayanta-hub/rn-otp-inputs#readme"
              demoLink="https://www.npmjs.com/package/rn-otp-inputs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={modal}
              isBlog={false}
              title="Rn-draggable-modal"
              description="rn-draggable-modal is a tiny Javascript library which provides an elegant UI for the end user to use customize modal. It also features a carefully crafted flow to handle edge cases for volatile user gestures. We provide default UI, but you can always customize the appearance as you like."
              ghLink="https://github.com/jayanta-hub/rn-draggable-modal#readme"
              demoLink="https://www.npmjs.com/package/rn-draggable-modal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yellow}
              isBlog={false}
              isGh={false}
              title="Yellow Class"
              description="Yellow Class is a new-age fun-learning platform where kids can learn from a wide
                    range of classes like dancing, drawing, personality development, creative writing and
                    so on.
                    Created a web application which allows marketing and support organizations to
                    provide a visibility of their Product Hierarchies, order status and details of the
                    delivery.
                    Enhanced the quality of inventory application mainly used by dealers/ clients based on
                    defects occurred."
              demoLink="https://www.yellowclass.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagility}
              isBlog={false}
              title="IMAGILITY"
              description="Imagility is a cloud-based immigration platform leading the way in innovation, and
              offering Petitioners, Attorneys and Beneficiaries a never-seen before combination of
              automation, transparency, and collaboration. Imagility packages powerful Immigration
              tracking, case management, client management features among others, all rolled into
              one cloud-based platform, automating manual processes and improving visa outcomes
              for all stakeholders.
              Responsible for the development of React Components and maintain the stat
              management using Redux.
              Developed 10 numbers of individual mobile applications like Petitoner, Student,
              Family etc.
              Completed all mobile applications for both android and iOS on react native and
              JavaScript for both app store and play store.
              Having expertise on Xcode and Transporter for iOS application publish to app store.
              Enhanced the quality of inventory application mainly used by users/ clients based on
              defects occurred."
              demoLink="https://imagility.co/mobile-apps-individual/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="Flip-Event-Service"
              description="Flip-Event-Service is a comprehensive service designed to monitor events such as CI/
              CD, code changes, AWS, and Slack activities in GitHub, GitLab, Slack, and AWS.
              These events are stored in a database for further analysis.
              A Flip Webhook, implemented as a Lambda function and exposed through the API
              Gateway, has been created.
              This webhook performs basic validation to ensure that events originate from
              authorized sources and then pushes them to a Standard queue. The Flip event service,
              developed using NestJS, seamlessly integrates with various event sources for each
              customer. It retrieves specific data associated with these events from the sources at
              regular intervals of 15 minutes."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notification}
              isBlog={false}
              title="Notification-Server"
              description="The Notification-Server is a service specifically created to offer Push notifications,
              SMS messaging, and email services to subscribers. Subscribers can access and view
              essential details such as schedule dates and descriptions for notifications, emails, and
              SMS messages. Additionally, subscribers have the capability to configure their
              preferred service provider, including popular options such as Amazon and Twilio.
              Subscriber user need to login to enter the system.
              As a Subscriber user, ability to access and update my account details as needed.
              Additionally, user able to view the count of each service available in the dashboard.
              This functionality allows user to manage and maintain accurate information for user’s
              account, while also providing user with a clear overview of the available services.
              Subscriber have ability to configure services by providing the necessary details and
              then save that information. This functionality allows me to customise and personalise
              the services according to my specific requirements."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tim}
              isBlog={false}
              title="T.I.M (Tax in minute)"
              description={`Led the development of "Tax in Minute," a robust tax management
              application designed to streamline tax services with a focus on user-specific needs. The
              application supports four distinct user roles—Customer, Admin, Consultant, and Service
              Manager—and incorporates key features including secure payment processing and a mobile
              app exclusively for customers.`}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
