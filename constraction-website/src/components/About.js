import aboutImg from "../assets/about.jpg"
function About(){
    return(
        <div className="about">
            <div className="about-img">
                <img src={aboutImg} alt="about"/>
            </div>
            <div className="about-content">
                <h2>About Us</h2>
                <p>
                    We are professional constraction company with years of experience in building stong and modern infrastructure.
                    Our team ensures quality, safety, and timely delivery of every project.
                </p>
                <button>Read More</button>
            </div>
        </div>
      
    );
}
export default About;