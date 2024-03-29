import React, { useState } from 'react';


const ContactUs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic for form submission, such as sending the data to a server
    console.log("Form submitted with data: ", { name, email, message });
    // Clear form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <div className="c-hero">
        <div className="c-herowidth">
          <div className="c-heroright">
            <div className="c-imagecontainer">
               <img src="./c1.png" alt="" />
            </div>
            </div>

            <div className="c-heroleft">
                <div className="c-herotitle">
                   <h1>Our Contact Us</h1>
                   <h2>Easy to Contact us</h2>
                

           <div className="c-content">
              <p>We always ready to help by providing the best services for you.<br/>We believe a good place to live can make your life better.<br/> </p>
           </div>

           <div className="c-contactus">
           <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Submit</button>
              </form>
              </div>
              
               </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default ContactUs;
