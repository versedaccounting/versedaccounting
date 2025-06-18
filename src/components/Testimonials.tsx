import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<{ [key: number]: boolean }>({});

  const reviews = [
    {
      id: 1,
      name: "Ryan Boyd",
      initial: "R",
      timeAgo: "um ano atrás",
      rating: 5,
      text: "We started up our own excavation business in early 2023. We thought we had a pretty good handle on the accounting side of things to do it ourselves. However once we got several months into it, it was clear that we needed some guidance. We contacted Guilherme with Versed Accounting to help us out. He was able to clean up our accounts and set us up with Quickbooks, and then he showed us how to use the software to maintain our records. Everything is much easier to input and keep track of now. And every month Guilherme looks over accounts to make sure everything is as it should be. We have enjoyed working with Guilherme, he is very knowledgeable and has patiently guided us through the process. I highly recommend Versed Accounting!!!"
    },
    {
      id: 2,
      name: "Syd Leonard",
      initial: "S",
      timeAgo: "um ano atrás",
      rating: 5,
      text: "I need about 10 stars first off, I would like to highlight Guilherme's professionalism and trustworthiness. Throughout our working relationship, I have found him to be honest, ethical, and dedicated to maintaining the highest standards. Guilherme's meticulous approach to handling financial matters has instilled confidence in me, knowing that my accounts are in capable hands. I am super grateful for his outstanding service and commitment to our company's financial future. I wholeheartedly recommend you to anyone in need of top- tier accounting and consulting services. 😊"
    },
    {
      id: 3,
      name: "Brian Penley",
      initial: "B",
      timeAgo: "um ano atrás",
      rating: 5,
      text: "Guilherme was great to work with. made easy work of what ever i threw at him. I woudl highly recommend him."
    },
    {
      id: 4,
      name: "L P",
      initial: "L",
      timeAgo: "2 anos atrás",
      rating: 5,
      text: "Very helpful, patient, and knowledgeable about setting up small business accounts. Happy to work with again as needed.",
      isLocalGuide: true,
      reviewCount: "50 avaliações",
      photoCount: "121 fotos"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleExpanded = (reviewId: number) => {
    setExpandedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getInitialColor = (initial: string) => {
    const colors = {
      'R': 'bg-purple-500',
      'S': 'bg-orange-500',
      'B': 'bg-green-500',
      'L': 'bg-blue-500'
    };
    return colors[initial as keyof typeof colors] || 'bg-gray-500';
  };

  const renderReviewText = (review: { id: number; text: string }) => {
    const isExpanded = expandedReviews[review.id];
    const shouldTruncate = review.text.length > 150;
    
    if (!shouldTruncate) {
      return <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>;
    }

    return (
      <div className="text-gray-700 text-sm leading-relaxed">
        <p className={`transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
          {isExpanded ? review.text : `${review.text.substring(0, 150)}...`}
        </p>
        <button
          onClick={() => toggleExpanded(review.id)}
          className="text-blue-500 hover:text-blue-600 mt-2 text-sm font-medium transition-colors"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-8 md:py-12 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-white z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
          </div>

          {/* Google Reviews Header */}
          <div className="bg-white rounded-lg shadow-soft p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-blue-500">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="font-semibold text-gray-700">Google</span>
                  <span className="text-gray-600">Reviews</span>
                </div>
              </div>
              <a 
                href="https://maps.app.goo.gl/HjBdV7j1BWzgh3Dr8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                Review us on Google
              </a>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold">5.0</span>
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-gray-600 text-sm">(4)</span>
            </div>

            {/* Reviews Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {reviews.map((review) => (
                    <div key={review.id} className="w-full flex-shrink-0 px-2">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-full ${getInitialColor(review.initial)} flex items-center justify-center text-white font-semibold`}>
                            {review.initial}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-gray-900">{review.name}</h4>
                              {review.name !== "L P" && (
                                <svg width="16" height="16" viewBox="0 0 24 24" className="text-blue-500">
                                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                              )}
                            </div>
                            {review.isLocalGuide && (
                              <div className="text-xs text-gray-600 mb-1">
                                Local Guide • {review.reviewCount} • {review.photoCount}
                              </div>
                            )}
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex">
                                {renderStars(review.rating)}
                              </div>
                              <span className="text-xs text-gray-500">{review.timeAgo}</span>
                            </div>
                          </div>
                        </div>
                        {renderReviewText(review)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
                aria-label="Previous review"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
                aria-label="Next review"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;