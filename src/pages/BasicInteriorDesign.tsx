import logoImage from "@/assets/logo.png";
import heroBackground from "@/assets/hero-background.webp";
import naturalImage from "@/assets/natural-section-image.webp";
import movementImage from "@/assets/movement-section-image.webp";
import qualityImage from "@/assets/quality-section-image.webp";
import sinayaPortrait from "@/assets/sinaya-portrait.webp";
import contactBackground from "@/assets/contact-background.webp";
import collection1 from "@/assets/collection/sinaya-1.jpg";
import collection2 from "@/assets/collection/sinaya-2.jpg";
import collection3 from "@/assets/collection/sinaya-3.jpg";
import collection4 from "@/assets/collection/sinaya-4.jpg";
import collection5 from "@/assets/collection/sinaya-5.jpg";
import collection6 from "@/assets/collection/sinaya-6.jpg";

const BasicInteriorDesign = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <img src={logoImage} alt="Maya Interiors" className="h-10" />
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a href="#about" className="hover:text-gray-600">About</a></li>
            <li><a href="#services" className="hover:text-gray-600">Services</a></li>
            <li><a href="#portfolio" className="hover:text-gray-600">Portfolio</a></li>
            <li><a href="#testimonials" className="hover:text-gray-600">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
          </ul>
          <a href="#contact" className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-700 transition">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroBackground} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transforming Spaces Into Timeless Experiences
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Maya Interiors creates sophisticated living spaces that reflect your unique vision and lifestyle
          </p>
          <a href="#portfolio" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            View Our Work
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Natural */}
            <div className="text-center">
              <img src={naturalImage} alt="Natural Design" className="w-full h-64 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Natural</h3>
              <p className="text-gray-600">
                We believe in creating spaces that feel organic and authentic. Our designs embrace natural materials, 
                textures, and light to craft environments that breathe and evolve with you.
              </p>
            </div>
            {/* Movement */}
            <div className="text-center">
              <img src={movementImage} alt="Movement Design" className="w-full h-64 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Movement</h3>
              <p className="text-gray-600">
                Every space should flow seamlessly from one area to another. We design with movement in mind, 
                creating intuitive pathways that guide you through your home with ease.
              </p>
            </div>
            {/* Quality */}
            <div className="text-center">
              <img src={qualityImage} alt="Quality Design" className="w-full h-64 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                Excellence is in every detail. From the finest materials to expert craftsmanship, 
                we ensure that every element of your space meets the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Our Portfolio</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Explore our collection of carefully curated interior design projects, 
            each reflecting our commitment to elegance and functionality.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[collection1, collection2, collection3, collection4, collection5, collection6].map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img 
                  src={img} 
                  alt={`Project ${index + 1}`} 
                  className="w-full h-80 object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={sinayaPortrait} alt="Maya" className="w-full h-[500px] object-cover rounded-lg" />
            <div>
              <h2 className="text-4xl font-bold mb-6">Meet Maya</h2>
              <p className="text-gray-600 mb-4">
                With over 15 years of experience in interior design, Maya has established herself as one of the 
                leading voices in contemporary residential design. Her work has been featured in Architectural 
                Digest, Elle Decor, and numerous international publications.
              </p>
              <p className="text-gray-600 mb-4">
                Maya's philosophy centers on creating spaces that are both beautiful and deeply functional. 
                She believes that great design should enhance the way you live, not complicate it.
              </p>
              <p className="text-gray-600 mb-6">
                Based in Tel Aviv, Maya works with clients across Israel and internationally, bringing her 
                unique vision to homes of all sizes and styles.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-500">Projects Completed</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-500">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Residential Design", desc: "Complete home interior design from concept to completion" },
              { title: "Renovation", desc: "Transform existing spaces with thoughtful redesign" },
              { title: "Consultation", desc: "Expert advice on design direction and material selection" },
              { title: "Space Planning", desc: "Optimize your layout for functionality and flow" },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="text-4xl font-bold text-gray-200 mb-4">0{index + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah L.", text: "Maya transformed our apartment into a home that truly reflects who we are. Her attention to detail is extraordinary." },
              { name: "David & Ruth K.", text: "Working with Maya was a dream. She understood our vision immediately and executed it flawlessly." },
              { name: "Michael T.", text: "The best investment we ever made. Our home is now a sanctuary that we never want to leave." },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl text-gray-200 mb-4">"</div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="font-semibold">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <div className="absolute inset-0">
          <img src={contactBackground} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Let's Create Something Beautiful</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to transform your space? Get in touch and let's discuss your vision.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a href="mailto:maya@mayainteriors.com" className="flex items-center gap-2 hover:opacity-80">
              <span>📧</span> maya@mayainteriors.com
            </a>
            <a href="tel:+972501234567" className="flex items-center gap-2 hover:opacity-80">
              <span>📞</span> +972 50 123 4567
            </a>
          </div>
          <a href="mailto:maya@mayainteriors.com" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <img src={logoImage} alt="Maya Interiors" className="h-8 mb-6 md:mb-0 invert" />
            <ul className="flex items-center gap-8 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            © 2024 Maya Interiors. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BasicInteriorDesign;
