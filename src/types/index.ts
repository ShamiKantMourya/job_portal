export interface JobCategory {
    icon: string;
    title: string;
    jobsAvailable: number;
  }
  
  export interface FeaturedJob {
    title: string;
    company: {
      name: string;
      logo: string;
    };
    description: string;
    location: string;
    salary: string;
    postedTime: string;
    tags: string[];
  }
  
  export interface Testimonial {
    rating: number;
    text: string;
    author: {
      name: string;
      position: string;
      avatar: string;
    };
  }
  
  export interface BlogPost {
    title: string;
    excerpt: string;
    image: string;
  }