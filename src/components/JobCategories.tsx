import React from "react";

import { categories, iconComponents } from "../types/data";

const JobCategories: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Job Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent =
              iconComponents[category.icon as keyof typeof iconComponents];
            return (
              <div
                key={category.title}
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">
                      {category.jobsAvailable} Jobs Available
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
