import React from "react"; 
function About() {
    return (
       <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl w-full">
    
         <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
    
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      
            {/* Image */}
            <img 
             src="/imageee2.jpg" 
             alt="Image" 
             className="w-full md:w-1/3 h-64 md:h-96 object-cover rounded-md"
            />
      
            {/* Paragraph */}
              <div className="text-justify">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  At Your Company, we are driven by the belief that great ideas deserve to become reality. Founded with the vision of empowering businesses and individuals, we focus on creating innovative solutions that simplify your journey towards success. Our team is made up of passionate professionals who value quality, integrity, and excellence in every project we undertake. We continuously evolve with technology and market trends to ensure that our clients always stay ahead. From the very beginning, we have prioritised understanding your unique needs and delivering personalised support that builds trust and long-term relationships.
                  <br /><br />
                  We believe that success is not just about achieving goals but also about building a strong foundation that sustains growth for years to come. This is why we pay attention to every detail, from the initial concept to final implementation, ensuring that each step aligns with your vision and objectives. Our commitment to excellence drives us to continuously improve and refine our services to provide you with the best possible experience.
                </p>
              </div>
          </div>
          </div>
        </div>





    );
  }
  
  export default About;