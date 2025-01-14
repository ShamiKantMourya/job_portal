import React from "react";

import { Clock, MapPin, DollarSign } from "lucide-react";
import { Button } from "./UI/Button";
import { featuredJobs } from "../types/data";

const FeaturedJob: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Jobs Circulars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <img
                  src={job.company.logo}
                  alt={job.company.name}
                  className="w-10 h-10 rounded"
                />
                <button className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Bookmark</span>
                  •••
                </button>
              </div>
              <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{job.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {job.postedTime}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {job.salary}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {job.location}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button className="w-full text-white bg-black">Apply for this Job</Button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="text-white bg-black">Load More Jobs</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJob;
