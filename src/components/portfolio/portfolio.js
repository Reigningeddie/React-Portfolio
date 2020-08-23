import React from 'react';

function Portfolio () {
    return (
        <React.Fragment>
        <div class="jumbotron_jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Projects!</h1>
          <p class="lead">A few of the projects I have worked on Thus far.</p>
        </div>
      </div>
      <div>

        {/* <!-- Three columns of text below the carousel --> */}
        <div class="row">
          <div class="col-lg-4">
            <a href= "https://reigningeddie.github.io/Code-Quiz/">
            <img src="Code Quiz.png" width="140" height="140" id="img" />
          </a>
            <h2>Code Quiz</h2>
            <p>For this project Tiger King was very popular at this point in time. So I decided to with creating a quiz based off this topic. Initially the application, opens up with a button you press to start the quiz. I played around with the attribute 'hidden' in order to keep everyting neat and on a single document. This project expresses my skills using the box model from CSS. and intro to javascript.</p>
          </div>
          <div class="col-lg-4">
            <a href="https://jaimepreuss.github.io/Be-Healthy/">
            <img src="Be Healthy.png" width="140" height="140" id="img" />
          </a>
            <h2>Be Healthy</h2>
            <p> This in my opinion is my favorite application I have worked on thus far in my career. It really brings everything ive learned and applies it all. Everything from bootstrap, jquery, CSS, Javascript, and api's. This app uses two api's one for the BMI index which gives you your BMI, dependent on the input you enter, and with a little logic added behind the application we can figure out how many calories you should be intaking per day and give you 3 diffrent recipes that fall under said number.</p>
          </div>
          <div class="col-lg-4">
            <a href="https://reigningeddie.github.io/Password-Generator/">
            <img src="Password Generator.png" width="140" height="140" id="img" />
          </a>
            <h2>Password Generator</h2>
            <p>This is probably not the most practical applicaton to be using, espcially since its hard enough to remember the 2 or 3 passwords that you've been using your whole life. However the logic behind this application shows my understanding with Javascript. dives into objects, for loops, functions and arrays.</p>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
}

export default Portfolio;