import HeroImg from "../assets/Hero.jpg"

function Hero() {
    return ( 
        <div className = "Hero">
            <img src = {HeroImg} alt = "Hero" height="auto" width="100%" />
       <div className="Hero-content">
 <h1> Welcome to Constraction Company </h1>
         <p> We build strong and modern buildings </p> 
        
       </div>
            
       
         </div>
    );
}

export default Hero;