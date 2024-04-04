import React from 'react';
import './About.css';

import SaranyaCV from './Saranya-cv.pdf';
import SaranyaInternshipCertificate from './SARANYA.pdf'

const CardWrapper = ({ children }) => {
  return <div className="card-wrapper">{children}</div>;
};

const Card = () => {
  const kietMapLink = 'https://www.google.com/maps/place/Kakinada+Institute+of+Engineering+and+Technology,+Kakinada,+Andhra+Pradesh,+India/';

  return (
    <div className="about-container">
      <p className="additional-text">
        &lsquo;I want to help others make the right decisions, data-driven decisions&rsquo;
      </p>
      <CardWrapper>
        <div className="card">
          <pre className="python-prompt">$ python3</pre>
          <pre className="python-code">
            <code>
              <span className="python-prompt">&gt;&gt;&gt;</span> <span className="python-command">import Saranya</span><br />
              <span className="python-prompt">&gt;&gt;&gt;</span> <span className="python-command">Saranya.age()</span><br />
              <span className="python-prompt"></span> 20<br />
              <span className="python-prompt">&gt;&gt;&gt;</span> <span className="python-command">Saranya.location()</span><br />
              <span className="python-prompt"></span> <a href="https://www.google.com/maps/place/Kakinada,+Andhra+Pradesh,+India/" target="_blank" rel="noopener noreferrer">Kakinada,India</a>
              <span className="comment"> &lt;-- Click to see on map</span><br />
              <span className="python-prompt">&gt;&gt;&gt;</span> <span className="python-command">Saranya.cv()</span><br/>
              <span className="python-prompt"></span> <a href={SaranyaCV} target="_blank" rel="noopener noreferrer">Saranya-cv.pdf</a>
              <span className="comment"> &lt;-- Have a look at my CV before you go further </span><br/>

              <span className="python-prompt">&gt;&gt;&gt;</span> <span className="python-command">Saranya.Internship(DataScience)</span><br/>
              <span className="python-prompt"></span> <a href={SaranyaInternshipCertificate} target="_blank" rel="noopener noreferrer">Saranya-certificate.pdf</a>
              <span className="comment"> &lt;-- Check out my <b>Data Science</b> Internship Certificate</span><br/>

              <span className="python-prompt">&gt;&gt;&gt;</span> <span className="python-command">Saranya.skills()</span><br />
              <span className="python-prompt"></span> {'{'}
              <br />
              <span className="python-prompt"></span> 'Web Development': ['HTML', 'CSS', 'JavaScript'],
              <br />
              <span className="python-prompt"></span> 'Data Science': ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'SQL', 'Google Colab'],
              <br />
              <span className="python-prompt"></span> 'Database': ['Microsoft SQL']
              <br />
              <span className="python-prompt"></span> {'}'}
              <br />
              <span className="python-prompt">&gt;&gt;&gt;</span> <span className="python-command">Saranya.education()</span><br />
              <span className="python-prompt"></span> 'Bachelors in Computer Science and Data Science Engineering at <a href={kietMapLink} target="_blank" rel="noopener noreferrer">Kakinada Institute Of Engineering And Technology</a>',<br/>
              <span className="python-prompt"></span> 'Intermediate in Bhashyam Jr College',<br/>
              <span className="python-prompt"></span> 'Schooling in Bhashyam Public School'.<br/>
              <span className="python-prompt">&gt;&gt;&gt;</span> <span className="python-command">Saranya.Display(Projects)</span><br/>
              <span className="python-code">&#47;&#47;Successfully Compiled. Scroll Down to see....<br/></span>
            </code>
          </pre>
        </div>
      </CardWrapper>

      <div className="code-symbol">
        &lt;/&gt;
      </div>
    </div>
  );
}

export default Card;
