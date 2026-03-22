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
                <h5>Accubits Technologies Inc / Sanesquare Pvt Ltd</h5>
              </div>
              <h3>Jun 2019 - Aug 2023</h3>
            </div>
            <p>
              Delivered blockchain and AI-focused mobile apps, implemented wallet
              features on iOS and Android, and built web/hybrid apps before
              transitioning fully to React Native.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
