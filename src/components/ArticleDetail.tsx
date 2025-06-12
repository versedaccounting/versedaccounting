import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleData {
  slug: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author?: string;
}

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const loadArticle = async () => {
      if (!slug) {
        setError('Article not found');
        setLoading(false);
        return;
      }

      try {
        // Mock article data - in a real app, this would load the actual markdown file
        const mockArticles: { [key: string]: ArticleData } = {
          'how-to-organize-your-business-finances': {
            slug: 'how-to-organize-your-business-finances',
            title: 'How to Organize Your Business Finances',
            content: `# How to Organize Your Business Finances

Keeping business finances organized is essential for the success of any company. In this article, we will explore best practices to ensure your business has full control over its finances.

## Why Is Financial Organization Important?

Efficient financial management allows for:

- **Informed decision-making**: With accurate data, you can make strategic, fact-based choices
- **Cash flow control**: Avoid unpleasant surprises and maintain the company's liquidity
- **Tax planning**: Stay organized to meet tax obligations and optimize taxation
- **Sustainable growth**: Build a solid foundation for expansion and investments

## Essential Steps to Organize Your Finances

### 1. Separate Personal and Business Accounts

This is the first and most important step. Mixing personal and business finances can lead to:
- Difficulties in accounting
- Issues with tax authorities
- Loss of control over the company's actual expenses

### 2. Implement a Control System

Use appropriate tools to:
- Record all income and expenses
- Categorize expenses and revenues
- Generate periodic reports
- Monitor financial indicators

### 3. Establish Financial Routines

Develop habits such as:
- Weekly bank reconciliation
- Monthly performance analysis
- Quarterly planning
- Annual strategy review

## Recommended Tools

For small and medium-sized businesses, we recommend:

1. **Financial management software**: QuickBooks, Xero, or similar
2. **Structured spreadsheets**: For specific controls
3. **Management apps**: For mobile tracking
4. **Accounting advisory services**: For expert guidance

## Key Indicators to Monitor

### Cash Flow
Monitor daily inflows and outflows to avoid liquidity problems.

### Profit Margin
Calculate regularly to understand the business's profitability.

### Break-even Point
Know exactly how much you need to bill to cover all costs.

### Average Collection Period
Track the time between sales and receipt of payment.

## Common Mistakes to Avoid

- **Not recording small expenses**: Every expense must be documented
- **Delaying bank reconciliation**: Do it weekly
- **Ignoring tax planning**: Stay organized in advance
- **Not having an emergency reserve**: Keep at least 3 months of expenses set aside

## Conclusion

Financial organization is not a luxury, but a necessity for any company that wants to grow sustainably. Start by implementing the basic steps and gradually improve over time.

Remember: investing time in financial organization today means saving time, money, and headaches in the future.

---

*Need help organizing your company's finances? Contact us and find out how we can help you gain full control over your business finances.*`,
            date: '2024-01-15',
            readTime: '5 min',
            category: 'Finance',
            author: 'Versed Accounting Team'
          },
          'tax-planning-for-small-businesses': {
            slug: 'tax-planning-for-small-businesses',
            title: 'Tax Planning for Small Businesses',
            content: `# Tax Planning for Small Businesses

Tax planning is one of the most effective strategies to legally and safely reduce your company's tax burden. In this comprehensive guide, you will learn how to implement efficient tax planning.

## What Is Tax Planning?

Tax planning is a set of legal actions aimed at reducing or postponing tax payments by taking advantage of opportunities provided by tax legislation.

### Benefits of Tax Planning

- **Tax burden reduction**: Save up to 30% in taxes
- **Improved cash flow**: More resources to invest in the business
- **Tax compliance**: Proper fulfillment of obligations
- **Competitive advantage**: More competitive pricing in the market

## Tax Planning Strategies

### 1. Choosing the Right Business Structure

The correct choice can represent significant savings. Factors to consider:
- Annual revenue
- Profit margin
- Type of activity
- Cost structure

### 2. Taking Advantage of Tax Deductions

Maximize deductions such as:
- Business expenses
- Equipment depreciation
- Professional development costs
- Home office expenses (for applicable businesses)

### 3. Investment Planning

Organize investments to:
- Take advantage of accelerated depreciation
- Use Section 179 deductions
- Optimize expense timing
- Plan major purchases strategically

### 4. Retirement Planning

Business owners can benefit from:
- SEP-IRA contributions
- Solo 401(k) plans
- Defined benefit plans
- Tax-deferred growth

## Quarterly Tax Planning

### First Quarter (January-March)
- Review previous year's results
- Plan estimated tax payments
- Organize documentation
- Set up accounting systems

### Second Quarter (April-June)
- File annual tax returns
- Make first quarter estimated payments
- Review business structure
- Plan mid-year strategies

### Third Quarter (July-September)
- Mid-year financial review
- Adjust estimated payments
- Plan equipment purchases
- Review retirement contributions

### Fourth Quarter (October-December)
- Implement year-end strategies
- Maximize deductions
- Plan for next year
- Document all tax-related activities

## Record Keeping Best Practices

### Essential Documents to Maintain
- All business receipts and invoices
- Bank statements and canceled checks
- Payroll records
- Asset purchase documentation
- Mileage logs for business travel

### Digital Organization
- Use cloud-based storage
- Implement consistent naming conventions
- Regular backup procedures
- Secure access controls

## Common Tax Planning Mistakes

### Inadequate Record Keeping
- Missing receipts and documentation
- Poor organization systems
- Failure to track business expenses

### Timing Issues
- Missing estimated payment deadlines
- Poor timing of income and expenses
- Inadequate year-end planning

### Lack of Professional Guidance
- Attempting complex planning alone
- Not staying current with tax law changes
- Failing to seek specialized advice

## When to Seek Professional Help

Consider professional tax planning services when:
- Your business is growing rapidly
- You have complex income sources
- Tax laws change significantly
- You want to optimize your tax strategy

## Technology Tools for Tax Planning

### Accounting Software
- QuickBooks Online
- Xero
- FreshBooks
- Wave Accounting

### Expense Tracking Apps
- Receipt scanning capabilities
- Mileage tracking
- Integration with accounting software
- Real-time expense categorization

### Tax Preparation Software
- Professional-grade tax software
- Multi-state filing capabilities
- Audit support features
- Integration with bookkeeping systems

## Year-End Tax Strategies

### Income Timing
- Defer income to next year when beneficial
- Accelerate income when in lower tax brackets
- Consider installment sales
- Plan bonus and commission timing

### Expense Acceleration
- Purchase necessary equipment before year-end
- Pay outstanding business expenses
- Prepay certain deductible expenses
- Consider equipment leasing vs. purchasing

### Retirement Contributions
- Maximize SEP-IRA contributions
- Consider Solo 401(k) contributions
- Plan for defined benefit plans
- Evaluate Roth conversion opportunities

## Conclusion

Effective tax planning is essential for your business's financial health. When properly executed, it can lead to significant savings and competitive advantage.

Remember: tax planning must be done responsibly and always within the law. The guidance of specialized professionals is crucial for success.

---

*Want to implement efficient tax planning for your business? Our team of experts can help you legally and safely reduce your tax burden. Contact us today!*`,
            date: '2024-01-10',
            readTime: '7 min',
            category: 'Taxes',
            author: 'Versed Accounting Team'
          }
        };

        const articleData = mockArticles[slug];
        if (articleData) {
          setArticle(articleData);
        } else {
          setError('Article not found');
        }
      } catch (error) {
        console.error('Error loading article:', error);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();

    // Trigger animations after a short delay
    const timer = setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => {
        el.classList.add('in-view');
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-4">
        <div className="container max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-4">
        <div className="container max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-secondary-600 mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/articles" className="btn btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="container max-w-4xl">
        {/* Back to articles */}
        <div className="mb-8">
          <Link 
            to="/articles" 
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Articles
          </Link>
        </div>

        {/* Article header */}
        <header className="mb-8 animate-on-scroll in-view">
          <div className="mb-4">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-6 text-secondary-500">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{article.readTime}</span>
            </div>
            {article.author && (
              <div>
                <span>By {article.author}</span>
              </div>
            )}
          </div>
        </header>

        {/* Article content */}
        <article className="prose prose-lg max-w-none animate-on-scroll in-view">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            className="markdown-content"
          >
            {article.content}
          </ReactMarkdown>
        </article>

        {/* Call to action */}
        <div className="mt-12 p-8 bg-gray-50 rounded-lg animate-on-scroll in-view">
          <h3 className="text-2xl font-bold mb-4">Need Professional Help?</h3>
          <p className="text-secondary-600 mb-6">
            Our team of accounting experts is ready to help you implement these strategies in your business.
          </p>
          <Link to="/#contact" className="btn btn-primary inline-flex items-center gap-2">
            Get Expert Advice
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;