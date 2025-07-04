import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Simulate loading articles - in a real app, this would fetch from an API or load markdown files
    const loadArticles = async () => {
      try {
        // Mock articles data - replace with actual markdown file loading
        const mockArticles: Article[] = [
          {
            slug: 'how-to-open-a-business-in-oregon',
            title: 'How to Open a Business in Oregon: Step-by-Step Guide (2025)',
            excerpt: 'Starting a business in Oregon? This 2025 step-by-step guide walks you through everything from choosing a structure to registering and complying with local laws.',
            date: '2025-06-23',
            readTime: '7 min',
            category: 'Business Formation'
          },
          {
            slug: 'how-to-organize-your-business-finances',
            title: 'How to Organize Your Business Finances',
            excerpt: 'Discover the best practices to keep your business finances organized and optimize your results.',
            date: '2024-01-15',
            readTime: '5 min',
            category: 'Finance'
          },
          {
            slug: 'tax-planning-for-small-businesses',
            title: 'Tax Planning for Small Businesses',
            excerpt: 'Effective tax planning strategies that can save up to 30% in taxes for your business.',
            date: '2024-01-10',
            readTime: '7 min',
            category: 'Taxes'
          }
        ];
        
        setArticles(mockArticles);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();

    // Trigger animations after a short delay to ensure content is visible
    const timer = setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => {
        el.classList.add('in-view');
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleContactExpertsClick = () => {
    // Navigate to home page and scroll to contact section
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-4">
        <div className="container">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll in-view">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary-500">Articles</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
            Insights, tips, and expert advice to help you navigate the world of accounting and finance.
          </p>
        </div>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article 
                key={article.slug} 
                className="card hover:shadow-lg hover:-translate-y-1 animate-on-scroll in-view"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="inline-block bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 hover:text-primary-500 transition-colors">
                    <Link to={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-sm text-secondary-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read more link */}
                  <Link 
                    to={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors"
                  >
                    Read more
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-secondary-600 text-lg">
              No articles available at the moment. Check back soon!
            </p>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-16 text-center animate-on-scroll in-view">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Need Personalized Advice?</h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Our articles provide general guidance, but every business is unique. Get personalized accounting advice tailored to your specific needs.
            </p>
            <button 
              onClick={handleContactExpertsClick}
              className="btn btn-primary inline-flex items-center gap-2"
            >
              Contact Our Experts
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;