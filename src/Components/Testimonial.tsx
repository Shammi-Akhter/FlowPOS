import React, { useState, useEffect } from "react";
import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LiaComments } from "react-icons/lia";

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
    name: "Sofia Alvarez",
    username: "Boutique Shop Owner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    message: "Their support team is outstanding. Whenever we had questions, they responded instantly. It feels like having a tech partner, not just a product.",
    likes: 143,
    comments: 24,
    time: "3:42 PM · Feb 12, 2025",
  },
  {
    name: "Daniel Kim",
    username: "Bakery Ownere",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    message: "The cloud backup feature saved us when our local data was lost. Knowing everything is securely stored online gives me real peace of mind.",
    likes: 217,
    comments: 53,
    time: "11:28 AM · Jan 29, 2025",
  },
  {
    name: "Ethan Walker",
    username: "Franchise Owner",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    message: "Accessing reports from my phone while traveling gives me total control over my business. The multi-device support is simply brilliant.",
    likes: 189,
    comments: 42,
    time: "4:15 PM · Feb 3, 2025",
  },
  {
    name: "Emma Johansson",
    username: "Restaurant Manage",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
    message: "I love how intuitive the dashboard is. Even new employees learn it in minutes. It keeps our restaurant operations running smoothly every day.",
    likes: 167,
    comments: 36,
    time: "2:10 PM · Jan 18, 2025",
  },
  {
    name: "Isabella Carter",
    username: "Retail Store Manager",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    message: "We switched from manual billing to this platform, and it's been a game-changer. Real-time reports help us track sales and inventory effortlessly.",
    likes: 201,
    comments: 47,
    time: "10:23 AM · Feb 8, 2025",
  },
  {
    name: "Lucas Moretti",
    username: "Café Owner",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    message: "This POS system completely transformed how we handle orders and payments. Our service is faster, and staff productivity has gone up significantly!",
    likes: 175,
    comments: 31,
    time: "1:35 PM · Jan 22, 2025",
  },
];

const TestimonialsCarousel: React.FC = () => {
  // State to track current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track how many slides to show based on screen size
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Detect screen size and update slidesToShow
  // Mobile: 1 slide, Tablet: 2 slides, Desktop: 3 slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet
      } else {
        setSlidesToShow(3); // Desktop/Laptop
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play: move to next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, slidesToShow]);

  // Navigate to previous slide
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? testimonials.length - slidesToShow : newIndex;
    });
  };

  // Navigate to next slide
  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex > testimonials.length - slidesToShow ? 0 : newIndex;
    });
  };

  // Calculate total number of dots
  const totalDots = testimonials.length - slidesToShow + 1;

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

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Slides Wrapper with overflow hidden */}
          <div className="overflow-hidden">
            {/* Slides Container - translates based on currentIndex */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {/* Map through testimonials */}
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                >
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
                      <span className="mr-4">
                        <FaHeart /> {t.likes}
                      </span>
                      <span className="mr-4">
                        <LiaComments /> {t.comments}
                      </span>
                      <span className="text-sm">{t.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            <FaChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-emerald-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;