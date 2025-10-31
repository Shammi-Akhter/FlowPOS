import React from "react";
import Slider from "react-slick";

interface Testimonial {
  name: string;
  username: string;
  image: string;
  message: string;
  likes: number;
  comments: number;
  time: string;
}

const testimonials: Testimonial[] = [
  {
    name: "SynthGen AI",
    username: "@synthgenai",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    message: "Listing on EliteAI.tools gave us a 40% boost in signups! The quality of traffic is incredible - these are users who are actually looking for AI solutions. Worth every penny!",
    likes: 143,
    comments: 24,
    time: "3:42 PM · Feb 12, 2025",
  },
  {
    name: "NeuralScribe",
    username: "@neuralscribe",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    message: "Fast-tracking our listing was the best marketing decision we made. Went from zero to 500+ daily users in just two weeks! EliteAI.tools put us in front of the perfect audience.",
    likes: 217,
    comments: 53,
    time: "11:28 AM · Jan 29, 2025",
  },
  {
    name: "QuantumWrite",
    username: "@quantumwriteai",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    message: "As a bootstrapped startup, we needed cost-effective promotion. The Boosted plan delivered incredible ROI - our demo requests increased 3x in the first month alone. Highly recommend!",
    likes: 189,
    comments: 42,
    time: "4:15 PM · Feb 3, 2025",
  },
  {
    name: "VoiceGenius",
    username: "@voicegeniusai",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
    message: "The SEO boost from being listed on EliteAI.tools is incredible. We've climbed to the first page for several key search terms. The quality of traffic converts at nearly 2x our other channels.",
    likes: 167,
    comments: 36,
    time: "2:10 PM · Jan 18, 2025",
  },
  {
    name: "DataSage",
    username: "@datasageai",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    message: "We tried several directories but EliteAI.tools stands out. The curation process means you're alongside other quality tools, which gives users confidence. Our conversions are up 35% from this traffic!",
    likes: 201,
    comments: 47,
    time: "10:23 AM · Feb 8, 2025",
  },
  {
    name: "CopyMuse",
    username: "@copymuseai",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    message: "Investors actually mentioned seeing us on EliteAI.tools during our seed round! The directory has become a go-to resource for the industry. Still getting consistent traffic 6 months after listing.",
    likes: 175,
    comments: 31,
    time: "1:35 PM · Jan 22, 2025",
  },
];

const TestimonialsCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-black to-emerald-500">
            What Users Are Saying
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Hear from tools that have successfully listed on our platform
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-2">
              <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={t.image}
                      alt={t.name}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.username}</p>
                  </div>
                </div>
                <p className="text-gray-700">{t.message}</p>
                <div className="flex items-center mt-4 text-gray-500">
                  <span className="mr-4">❤️ {t.likes}</span>
                  <span className="mr-4">💬 {t.comments}</span>
                  <span className="text-sm">{t.time}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
