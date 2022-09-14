import "./Projects.css";

export default function Projects() {
  return (
    <>
      <h1 className="silkscreen banner">My Projects</h1>
      <div className="project-cont">
      <div className="row d-flex">
        <div className="col-4 d-flex">
          <div className="d-flex flex-column project-card jetbrainsmono">
            <h2 className="silkscreen">"Solitaire"</h2>
            <div>My first true web application</div>
            <br />
            <img
              src="./img/solitaire.png"
              className="project-img"
            />
            <br />
            <br />
            <div>
              This simplified version of solitaire is the first web application
              I created from scratch. It is a simple single page application
              using vanilla HTML, CSS and JavaScript.
            </div>
            <div className="mt-auto mx-auto">
            <a
              className="btn-project-link silkscreen"
              target="_blank"
              href="https://weareryan.github.io/SEI-Project-1-Solitare/"
            >
              CheckItOut!
            </a>
            <a
              className="btn-project-link silkscreen"
              target="_blank"
              href="https://github.com/WeAreRyan/SEI-Project-1-Solitare"
            >
              Github-Repo
            </a>
            </div>
          </div>
        </div>

        <div className="col-4 d-flex">
          <div className="d-flex flex-column project-card jetbrainsmono">
            <h2 className="silkscreen">Stardew Valley Completion Tracker</h2>
            <div>First time with a framework</div>
            <br />
            <img
              src="./img/stardewvalley.png"
              className="project-img"
            />
            <br />
            <br />
            <div>
              This is a webapp with the intended purpose of allowing users to
              track their progress in the farming game Stardew Valley. The
              making of this application represents my first incursion into
              development using a framework, in this case the Express framework,
              and CRUD.{" "}
            </div>
            <div className="mt-auto mx-auto">
            <a
              className="btn-project-link silkscreen"
              target="_blank"
              href="https://stardew-valley-tracker.herokuapp.com/"
            >
              CheckItOut!
            </a>
            <a
              className="btn-project-link silkscreen"
              target="_blank"
              href="https://github.com/WeAreRyan/stardew-valley-completion-tracker"
            >
              Github-Repo
            </a>
            </div>
          </div>
        </div>

        <div className="col-4 d-flex">
          <div className="d-flex flex-column project-card jetbrainsmono">
            <h2 className="silkscreen">Macro Manager</h2>
            <div>Python, Django and Team Programming</div>
            <br />
            <img src="./img/macromanager.png" className="project-img" />
            <br />
            <br />
            <div>
              Macro Manager is the result of my first collaborative work as a
              developer and my first time programing in Python. Built using the
              Django framework this app is a tool designed to be used by small
              to medium size companies in order to track their workflow and
              employees. Credit to Eric Tau and James Devine as my partners in
              crime on this one... also Sean.{" "}
            </div>
            <div className="mt-auto mx-auto">
            <a
              className="btn-project-link silkscreen"
              target="_blank"
              href="https://macromanagerp3.herokuapp.com/"
            >
              CheckItOut!
            </a>
            <a
              className="btn-project-link silkscreen"
              target="_blank"
              href="https://github.com/WeAreRyan/macromanager"
            >
              Github-Repo
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">

        <div className="col-4 d-flex">
          <div className="d-flex flex-column project-card jetbrainsmono">
            <h2 className="silkscreen">Rocks-R-Us</h2>
            <div>The capstone project</div>
            <br />
            <img
              src="./img/rocksrus.png"
              className="project-img"
            />
            <br />
            <br />
            <div>
              This mock store is the final application I created while still
              enrolled in my curriculum. Created using the React
              library/framework, while not completely function(when selecting
              checkout it just clears you cart) it is an exhibit of executing
              CRUD.
            </div>
            <div className="mt-auto mx-auto">
            <a
              className="btn-project-link silkscreen"
              target="_blank"
              href="https://rocks-r-us.herokuapp.com/"
            >
              CheckItOut!
            </a>
            <a
              className="btn-project-link silkscreen"
              target="_blank"
              href="https://github.com/WeAreRyan/rocks-r-us"
            >
              Github-Repo
            </a>
            </div>
          </div>
        </div>
        </div>

      </div>
    </>
  );
}
