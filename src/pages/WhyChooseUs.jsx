import React from 'react'

const WhyChooseUs = () => {
  return (
    <section
      className="mt-[96px] relative h-[25vh] bg-center bg-cover flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('/question.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-20 px-6">
        <h2 className="head text-4xl md:text-6xl font-extrabold text-white my-12">
          Why Choose Us?
        </h2>
      </div>
    </section>
  )
}

export default WhyChooseUs