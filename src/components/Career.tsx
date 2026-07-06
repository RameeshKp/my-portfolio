import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Enceladus DLT</h5>
              </div>
              <h3>Jun 2025 - Present</h3>
            </div>
            <p>
              Building mobile features and blockchain integrations for Solana-based
              dApps. Collaborating with cross-functional teams to deliver secure,
              scalable Web3 solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>SayOne Technologies</h5>
              </div>
              <h3>Aug 2023 - Jun 2025</h3>
            </div>
            <p>
              Integrated APIs, third-party libraries, and plugins in React Native
              apps. Resolved performance issues and delivered stable app store releases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Accubits Technologies Inc</h5>
              </div>
              <h3>Dec 2021 - Aug 2023</h3>
            </div>
            <p>
              Delivered blockchain and AI-focused mobile apps, contributed to
              real-world blockchain applications, and implemented wallet features
              across iOS and Android platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>Sanesquare Private Limited</h5>
              </div>
              <h3>Jun 2019 - Dec 2021</h3>
            </div>
            <p>
              Built web applications with Angular, developed hybrid mobile
              features using Ionic, and transitioned into React Native development
              for cross-platform mobile features, testing, debugging, and releases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
