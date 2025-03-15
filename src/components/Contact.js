import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [currentFace, setCurrentFace] = useState(0);

  // Cube messages - customize these as needed
  const cubeMessages = [
    "Let's transform your data into insights! 📊",
    "AI enthusiast ready to collaborate 🤖",
    "Visualizing complex data is my passion 📈",
    "React + Data = Amazing Experiences ✨",
    "Turn your raw data into business value 💡",
    "Dashboards that tell stories 📚"
  ];

  // Rotate cube to show different messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prevFace) => (prevFace + 1) % cubeMessages.length);
    }, 3000);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
    
    // Include cubeMessages.length as a dependency
  }, [cubeMessages.length]);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_u86eerb", // Replace with your EmailJS Service ID
        "template_9ae35z6", // Replace with your EmailJS Template ID
        formData,
        "w6dvE4h91O6oMhl0f" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setStatus("🚀 Message sent successfully! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("⚠️ Oops! Something went wrong. Try again or reach out directly.");
        }
      );
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      
      <div className="contact-container">
        {/* Left Side: Animated 3D Cube and Text */}
        <div className="contact-left">
          <div className="cube-container">
            <div 
              className="cube" 
              style={{ transform: `rotateY(${currentFace * 60}deg)` }}
            >
              {cubeMessages.map((message, index) => (
                <div 
                  key={index} 
                  className={`cube-face cube-face-${index + 1}`}
                >
                  {message}
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Right Side: Contact Form */}
        <div className="contact-right">
        <div className="contact-info">
            <p>
              Want to discuss AI, data analytics, or just geek out about tech?
              <br />
              Let's create something awesome together!
              I'll reply faster than a well-optimized query 😉
            </p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="What's on your mind?"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">🚀 Send Message</button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}