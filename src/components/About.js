import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-4">
      <h1>About</h1>

      <div className="row">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in hendrerit justo. 
            Vestibulum consequat mauris eget justo volutpat, sed finibus urna fermentum.
          </p>
        </div>

        <div className="col-md-6">
          <h3>Our Vision</h3>
          <p>
            Fusce volutpat diam id tellus semper convallis. Sed ac ligula pretium, placerat nunc vitae,
            tristique orci. Nulla ultricies tortor eu libero tincidunt, sed lobortis est iaculis.
          </p>
        </div>
      </div>

      <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>

      <div className="collapse mt-3" id="collapseDetails">
        <div className="card card-body">
          <h3>Additional Details</h3>
          <p>
            Nunc dapibus efficitur dui, vitae lacinia orci auctor vel. Nam non eleifend mauris.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;