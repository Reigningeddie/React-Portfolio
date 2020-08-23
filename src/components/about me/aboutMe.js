import React from 'react';

function AboutMe () {
    return (
        <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="page-header">
              <h1>About Me</h1>
            </div>
            <div class="row">
              <div class="col-md-3">
                <img src="200x200.jpg" alt="pic from cabo" class="img-thumbnail" ></img>
              </div>
              <div class="col-md-9">
                <p>
                  My name is Eduardo, everyone calls me Eddie. I enjoy to golf and paint on my freetime.
                  I have worked at In N Out burger for 7 years, which the company has treated me very well
                  the time I have been with them. I hope to learn some valuable skills in this bootcamp to 
                  jumpstart a new career.
                </p>
              </div>
            </div>
          </div>
          {/* <!--Create Card taking up 4 Columns--> */}
          <div class="col-md-4">
            <div class="card mt-2">
              <div class="card-body">
                <h5 class="card-title">Name:</h5>
                <a class="card-subtitle mb-2 text-muted">Eduardo Aguilar</a>
                <h5 class="card-title">Github:</h5>
                <a class="card-subtitle mb-2 text-muted" href="https://github.com/Reigningeddie">Reigningeddie</a>
                <h5 class="card-title">LinkedIn:</h5>
                <a href="https://www.linkedin.com/in/eduardo89aguilar/" class="card-subtitle mb-2 text-muted">eduardo89aguilar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutMe;