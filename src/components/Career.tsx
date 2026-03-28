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
                <h4>Data Integrations Engineer</h4>
                <h5>Lexmark</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed and delivered 15+ enterprise-scale B2B integrations supporting 10,000+ daily transactions. Built and maintained RESTful APIs using XML, JSON, etc. Implemented Pub-Sub architectures integrating downstreams with Profisee-MDM as master data source.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Solution Engineer (Trainee)</h4>
                <h5>LabVantage Solutions</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Contributed to development and configuration of a large-scale LIMS platform using Java, JavaScript, and SQL. Debugged and resolved platform issues, improving system reliability and cutting recurring bug reports by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE (Intern)</h4>
                <h5>Lexmark</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed internal web applications using React and Spring Boot, improving workflow usability and reducing manual processing time by ~70%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior AI Engineer (Intern)</h4>
                <h5>Third Eye Data</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Worked with Python and PySpark on data processing and analytics tasks, contributing to proof-of-concept tools handling large-scale datasets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
