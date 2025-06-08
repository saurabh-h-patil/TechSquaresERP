import React from "react";

const Services = () => {
  return (
    <section
      className="mt-[96px] relative h-[25vh] bg-center bg-cover flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('/services.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-20 px-6">
        <h2 className="head text-4xl md:text-6xl font-extrabold text-white my-12">
          Our Services
        </h2>
      </div>
    </section>
  );
};

export default Services;
