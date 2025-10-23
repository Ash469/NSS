import React from 'react';
const stats = [
  { number: '1000+', label: 'Volunteers' },
  { number: '50+', label: 'Projects' },
  { number: '10+', label: 'Years' },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-16">About NSS IIT Guwahati</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="w-full h-auto rounded-xl shadow-lg overflow-hidden">
            <img 
              src="assets/logo.png" 
              alt="NSS Team" 
              className="w-full h-full object-cover"
              loading="lazy" 
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h3 className="text-3xl font-semibold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                The National Service Scheme (NSS) at IIT Guwahati is dedicated to developing
                student's personality through community service. Our mission is to instill
                social welfare in students and provide service to society without bias.
              </p>
            </div>
            
            <div>
              <h3 className="text-3xl font-semibold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                We envision a society where young minds are actively engaged in nation-building
                through social service, environmental conservation, and community development.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-slate-50 p-4 rounded-lg text-center shadow-sm">
                  <span className="block text-3xl font-bold text-green-600 mb-1">
                    {stat.number}
                  </span>
                  <span className="text-gray-600 text-sm font-medium">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;