import React from "react";
import { Upload } from "lucide-react";

import { Button } from "./UI/Button";

const ResumeBox: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-indigo-600">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-8 lg:mb-0 lg:mr-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get The Most Valuable Jobs, Just Drop Your CV at Jobly
          </h2>
          <p className="text-indigo-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            nunc ac a magna at elementum.
          </p>
        </div>
        <Button size="lg" variant="secondary" className="flex items-center bg-white">
          <Upload className="w-5 h-5 mr-2" />
          Upload Your Resume
        </Button>
      </div>
    </section>
  );
};

export default ResumeBox;
