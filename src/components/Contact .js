function Contact() {
    return ( 
        <div className = "contact">
        <h2> Contact Us </h2>

        <div className = "contact-container" >

        { /* left side text */ }
         <div className = "contact-info" >
        <h3> Get in Touch </h3>
         <p> 🏢Construction Company Pvt.Ltd. </p>
          <p> Main Road, Sagar, Madhya Pradesh </p>
           <p> 📞 +91 XXXXX XXXXX </p> 
           <p> ✉ info @constructions.com </p> 
           <p> 🕒Mon– Sat: 9: 00 AM– 7: 00 PM </p>

        </div>

        { /* Right side Text */ }
         <form className = "contact-form" onSubmit={(e)=>{
            e.preventDefault();
            alert(" Your Message was send!")
         }} >

        <input type = "text" placeholder = "Your Name" required />
        <input type = "email" placeholder = "Your Email" required />
        <textarea placeholder = "Your Message"
        rows = "5" > </textarea> 
        <button type = "Submit" > Send Message </button> 
        </form >
         </div>

        </div>
    );
}
export default Contact;