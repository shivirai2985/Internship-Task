import s1 from "../assets/Services.jpg";
import s2 from "../assets/services2.jpg"
import s3 from "../assets/services3.jpg"
import s4 from "../assets/service4.jpg"

function Services() {
    return ( 
    <div className = "Services" >
        <h2> Our Services </h2> 


        <div className = "Service-container" >


        <div className = "card" >
            <img src={s1} alt=""></img>
        <h3 > House Constraction </h3>
         <p> We build strong and durable houses with modern design. </p> 
         </div >

        <div className = "card" >
            <img src={s2} alt=""></img>
        <h3> Building Design </h3>
         <p> Creative and smart architectural designs for your projects. </p>
         </div>

        <div className = "card" >
            <img src={s3} alt=""></img>
        <h3> Renovation </h3> 
        <p> Upgrade your old buildings with our renovation Services. </p> 
        </div>

        <div className = "card">
            <img src={s4} alt=""></img>
        <h3> Interior Design </h3>
         <p> Modern and stylish interior solutions for your space. </p>
         </div> 
         </div>
          </div >
    );
}
export default Services