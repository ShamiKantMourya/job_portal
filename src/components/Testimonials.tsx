import React from "react";
import { Star } from "lucide-react";

import { Button } from "./UI/Button";
import { testimonials } from "../types/data";

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border rounded-lg relative">
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.author.position}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 text-gray-200">"</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="text-white bg-black">Load More Reviews</Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
