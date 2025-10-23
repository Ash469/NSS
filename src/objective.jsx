import React from "react";


const objectives = [
  {
    img: "assets/objective1.jpg",
    alt: "Promote Volunteerism",
    title: "Promote Volunteerism",
    desc: "Encourage students to engage in selfless community service."
  },
  {
    img: "assets/objective2.jpg",
    alt: "Develop Leadership Skills",
    title: "Develop Leadership Skills",
    desc: "Foster leadership, teamwork, and organizational abilities through social projects."
  },
  {
    img: "assets/objective3.jpg",
    alt: "Social Awareness",
    title: "Social Awareness",
    desc: "Enhance awareness about societal challenges and empower students to address them."
  },
  {
    img: "assets/objective4.jpg",
    alt: "National Integration",
    title: "National Integration",
    desc: "Promote unity and understanding among diverse groups."
  }
];

const ObjectiveCard = ({ img, alt, title, desc }) => (
  <div className="group bg-white rounded-xl shadow-lg overflow-hidden flex flex-col text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
    <div className="h-52 w-full overflow-hidden">
      <img 
        src={img} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3> 
      <p className="text-gray-600 text-sm sm:text-base flex-grow">{desc}</p>
    </div>
  </div>
);


const Objectives = () => {
  return (
    <section id="objectives" className="bg-slate-50 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-16">Objectives</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((obj) => (
            <ObjectiveCard 
              key={obj.title} 
              img={obj.img} 
              alt={obj.alt} 
              title={obj.title} 
              desc={obj.desc} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;