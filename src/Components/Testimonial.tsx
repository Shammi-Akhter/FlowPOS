import React from "react";
import { FaHeart } from "react-icons/fa";
import { LiaComments } from "react-icons/lia";
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
    name: "Sofia Alvarez",
    username: "Boutique Shop Owner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    message: "“Their support team is outstanding. Whenever we had questions, they responded instantly. It feels like having a tech partner, not just a product.”",
    likes: 143,
    comments: 24,
    time: "3:42 PM · Feb 12, 2025",
  },
  {
    name: "Daniel Kim",
    username: "Bakery Ownere",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    message: "“The cloud backup feature saved us when our local data was lost. Knowing everything is securely stored online gives me real peace of mind.”",
    likes: 217,
    comments: 53,
    time: "11:28 AM · Jan 29, 2025",
  },
  {
    name: "Ethan Walker",
    username: "Franchise Owner",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    message: "“Accessing reports from my phone while traveling gives me total control over my business. The multi-device support is simply brilliant.”",
    likes: 189,
    comments: 42,
    time: "4:15 PM · Feb 3, 2025",
  },
  {
    name: "Emma Johansson",
    username: "Restaurant Manage",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
    message: "“I love how intuitive the dashboard is. Even new employees learn it in minutes. It keeps our restaurant operations running smoothly every day.”",
    likes: 167,
    comments: 36,
    time: "2:10 PM · Jan 18, 2025",
  },
  {
    name: "Isabella Carter",
    username: "Retail Store Manager",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    message: "“We switched from manual billing to this platform, and it’s been a game-changer. Real-time reports help us track sales and inventory effortlessly.”",
    likes: 201,
    comments: 47,
    time: "10:23 AM · Feb 8, 2025",
  },
  {
    name: "Lucas Moretti",
    username: "Café Owner",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    message: "“This POS system completely transformed how we handle orders and payments. Our service is faster, and staff productivity has gone up significantly!”",
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
                  <span className="mr-4"><FaHeart /> {t.likes}</span>
                  <span className="mr-4"><LiaComments /> {t.comments}</span>
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
