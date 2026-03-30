import p1 from "../assets/Project1.jpg";
import p2 from "../assets/Project2.jpg";
import p3 from "../assets/Project3.jpg";
import p4 from "../assets/Project4.jpg"


function Projects(){
    return(
        <div className="projects">
            <h2>Our Projects</h2>

            <div className="project-container">

                <div className="project-card">
                <img src={p1} alt="project"></img>
                <div className="overlay">
                    <h3>Modern House</h3>
                </div>
                </div>


                <div className="project-card">
                <img src={p2} alt="project"></img>
                <div className="overlay">
                    <h3>City Mall</h3>
                </div>
                </div>


                <div className="project-card">
                <img src={p3} alt="project"></img>
                <div className="overlay">
                    <h3>Highway Bridge</h3>
                </div>
                </div>


                <div className="project-card">
                <img src={p4} alt="project"></img>
                <div className="overlay">
                    <h3>Office Buildings</h3>
                </div>
            </div>
            
       </div>
       </div>
      
    );
}
export default Projects;