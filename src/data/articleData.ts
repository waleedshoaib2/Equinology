import { formatDistanceToNow } from 'date-fns';
import { ARTICLE_TIMESTAMPS } from '../utils/timestampUtils';

// Define Article interface
export interface Article {
  id: number;
  title: string;
  slug: string;
  timestamp: number;
  summary: string;
  content: string;
  image: string;
  coverImage?: string;
  readTime?: string;
  author: string;
}

// Helper function to create slugs
export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

// Helper function to get formatted date strings
export const getFormattedDate = (timestamp: number): string => {
  return formatDistanceToNow(timestamp, { addSuffix: true });
};

// Helper function to find an article by ID
export const findArticleById = (id: string): Article | undefined => {
  const numericId = parseInt(id, 10);
  return articles.find(post => post.id === numericId);
};

// Helper function to find an article by slug
export const findArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(post => post.slug === slug);
};

// Article data
export const articles: Article[] = [
  {
    id: 5,
    title: "Is WordPress Suitable for Equestrian Businesses?",
    slug: slugify("Is WordPress Suitable for Equestrian Businesses?"),
    timestamp: ARTICLE_TIMESTAMPS.WORDPRESS_ARTICLE,
    summary: "A comprehensive analysis of WordPress's suitability for equestrian businesses, exploring its benefits, limitations, and key considerations for stable owners and equine professionals.",
    content: `# Is WordPress Suitable for Equestrian Businesses?

WordPress powers over 40% of all websites, but is it the right choice for your equestrian business? Let's compare WordPress with custom web design to help you make the best choice.

## WordPress vs Custom Web Design

### WordPress: Quick and Affordable
- **Cost:** Lower initial cost, many free themes and plugins
- **Setup:** Can be up and running in days
- **Updates:** Easy to update content yourself
- **Maintenance:** Regular updates needed for security
- **Customisation:** Limited by available themes and plugins

### Custom Design: Tailored to Your Needs
- **Cost:** Higher initial investment
- **Setup:** Takes longer to develop
- **Updates:** Usually requires developer help
- **Maintenance:** Less frequent, handled by professionals
- **Customisation:** Complete freedom to build exactly what you need

## When WordPress Works Well

### For Small Stables and Riding Schools
- Basic website needs
- Simple booking systems
- Photo galleries
- News updates
- Price lists

### For Quick Online Presence
- New businesses
- Seasonal promotions
- Event announcements
- Basic information sharing

## When Custom Design is Better

### For Complex Needs
- Specialised booking systems
- Horse management features
- Client portals
- Competition scheduling
- Custom reporting tools

### For Growing Businesses
- Scalable solutions
- Unique features
- Better performance
- Enhanced security
- Professional support

## Key Points to Consider

1. **Your Budget**
   - WordPress: Lower cost to start, but add-ons can add up
   - Custom: Higher initial cost, but often better long-term value

2. **Technical Skills**
   - WordPress: Easy to learn, good for DIY updates
   - Custom: Requires professional help for changes

3. **Future Growth**
   - WordPress: Can be limiting as your business grows
   - Custom: Built to scale with your business

4. **Security**
   - WordPress: Needs regular updates and security plugins
   - Custom: More secure, less maintenance

5. **Performance**
   - WordPress: Can be slow with many plugins
   - Custom: Optimised for speed and efficiency

## Making the Right Choice

For many equestrian businesses, WordPress is a good starting point. It's affordable and easy to use. But if you need special features or expect to grow quickly, custom web design might be a better investment.

Think about:
- How much you can spend
- What features you really need
- How tech-savvy you are
- Your plans for growth
- How important security is to you

The best choice depends on your specific needs and goals. Some businesses start with WordPress and move to custom design later. Others go straight to custom for a more professional solution.`,
    image: "https://i.ibb.co/rPmRbqX/3ced2984-6435-48b1-8de8-a41fad0cd221.webp",
    coverImage: "https://i.ibb.co/rPmRbqX/3ced2984-6435-48b1-8de8-a41fad0cd221.webp",
    readTime: "5",
    author: "Equinology Team"
  },
  {
    id: 4,
    title: "Equinology is Expanding to More Industries",
    slug: slugify("Equinology is Expanding to More Industries"),
    timestamp: ARTICLE_TIMESTAMPS.EXPANDING_INDUSTRIES,
    summary: "Discover how Equinology is broadening its expertise beyond equestrian businesses to help more industries with their digital transformation and branding needs.",
    content: `# Equinology is Expanding to More Industries

We're excited to announce that Equinology is expanding our services beyond the equestrian world to help more businesses achieve their digital potential. While our roots remain firmly in the equestrian industry, we're now bringing our expertise in web design, branding, and digital solutions to a wider range of sectors.

## Why We're Expanding

Our journey in the equestrian industry has taught us valuable lessons about:
- Building strong, memorable brands
- Creating user-friendly digital experiences
- Developing effective online strategies
- Crafting compelling visual identities

These principles are universal, and we're now applying them to help businesses across different industries.

## New Industries We're Serving

### Animal Care & Veterinary
- Veterinary clinics and practices
- Pet care services and grooming
- Animal shelters and rescue centers
- Pet product retailers

### Agriculture & Rural Businesses
- Farm and agricultural enterprises
- Rural tourism and accommodation
- Farm-to-table businesses
- Agricultural equipment suppliers

### Outdoor & Adventure
- Adventure tourism companies
- Outdoor equipment retailers
- Activity centers and clubs
- Nature-based tourism

### Professional Services
- Legal and financial services
- Consulting firms
- Educational institutions
- Healthcare providers

### Retail & E-commerce
- Specialty retail stores
- Online marketplaces
- Boutique businesses
- Service-based retailers

### Hospitality & Tourism
- Hotels and accommodations
- Restaurants and cafes
- Travel agencies
- Event venues

## What Stays the Same

While we're expanding our reach, our core values remain unchanged:
- Commitment to quality and excellence
- Focus on user experience
- Attention to detail
- Personalized service
- Results-driven approach

## Our Promise to New Clients

We bring the same level of dedication and expertise that has made us successful in the equestrian industry to every new sector we serve. Each industry has its unique challenges and requirements, and we're committed to understanding these nuances to deliver the best possible solutions.

---

Interested in learning more about how we can help your business? [Contact us](/contact) to discuss your digital needs.`,
    image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    coverImage: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: "4",
    author: "Equinology Team"
  },
  {
    id: 2,
    title: "Equine Website Design: Why Every Livery Yard and Riding School Needs a Professional Site",
    slug: slugify("Equine Website Design: Why Every Livery Yard and Riding School Needs a Professional Site"),
    timestamp: ARTICLE_TIMESTAMPS.EQUINE_WEBSITE_DESIGN,
    summary: "Discover why professional equine web design is essential for your horse business. Learn how a well-designed website can help livery yards, riding schools, and equine professionals grow their business.",
    content: `Professional equine website design is more than just having an online presence — it's about creating a digital experience that reflects the quality of your horse business. While social media has its place, a well-designed website is crucial for growth, credibility, and better client service.

---

## The Power of Professional Equine Web Design

Your website is your digital stable door — it's often the first impression potential clients have of your business. A professionally designed equine website should showcase your facilities, services, and expertise clearly and effectively.

## Essential Elements of Equine Website Design

### Mobile-First Approach
Most equestrian clients search on their phones while at the yard or on the go. Your equine web design must be responsive and easy to navigate on all devices.

### High-Quality Visual Content
Showcase your facilities and horses with professional photography. Even well-composed phone photos can work wonders with the right equine website design.

### Key Features for Equine Websites
- Online booking systems for lessons and clinics
- Interactive facility tours
- Photo galleries of horses and events
- Clear pricing and service information
- Contact forms with location maps
- FAQ sections addressing common queries

## Why Invest in Professional Equine Web Design?

A well-designed website:
- Builds trust and credibility
- Makes your business more discoverable
- Reduces administrative workload
- Provides 24/7 information access
- Creates a professional first impression

---

Professional equine website design isn't just about looking good — it's about creating a functional, user-friendly platform that helps your business grow and serve your clients better.`,
    image: "https://images.pexels.com/photos/15923755/pexels-photo-15923755/free-photo-of-mouth-of-a-horse-standing-in-a-paddock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    coverImage: "https://images.pexels.com/photos/15923755/pexels-photo-15923755/free-photo-of-mouth-of-a-horse-standing-in-a-paddock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: "3",
    author: "Equinology Team"
  },
  {
    id: 1,
    title: "Is WordPress Suitable for Equestrian Businesses?",
    slug: "is-wordpress-suitable-for-equestrian-businesses",
    timestamp: ARTICLE_TIMESTAMPS.WORDPRESS_ARTICLE,
    summary: "A comprehensive analysis of WordPress's suitability for equestrian businesses, examining its pros, cons, and key considerations.",
    content: `
# Is WordPress Suitable for Equestrian Businesses?

## Introduction

WordPress has become one of the most popular content management systems (CMS) worldwide, powering millions of websites. But is it the right choice for equestrian businesses? This article explores the advantages and limitations of WordPress for equestrian enterprises, helping you make an informed decision.

## The Pros of WordPress for Equestrian Businesses

### 1. User-Friendly Interface
WordPress offers an intuitive interface that allows stable owners and equestrian professionals to manage their content without technical expertise. This is particularly valuable for busy equestrian business owners who need to update their websites regularly.

### 2. Cost-Effective Solution
With many free themes and plugins available, WordPress can be a budget-friendly option for equestrian businesses. The initial setup costs are typically lower than custom development, making it accessible for smaller enterprises.

### 3. Quick Deployment
WordPress sites can be set up relatively quickly, allowing equestrian businesses to establish an online presence faster than with custom development. This rapid deployment can be crucial for seasonal businesses or time-sensitive promotions.

### 4. Extensive Plugin Ecosystem
The vast WordPress plugin ecosystem offers solutions for various equestrian business needs, from booking systems to e-commerce functionality. This flexibility allows businesses to add features as they grow.

## The Cons of WordPress for Equestrian Businesses

### 1. Performance Considerations
Plugin bloat and unoptimised themes can lead to slow loading times, which is crucial for mobile users at stables or shows. Performance optimisation requires careful management of plugins and themes.

### 2. Limited Customisation
While flexible, WordPress can be restrictive for unique equestrian business needs, especially for specialised booking systems or horse management features. Custom solutions might be necessary for specific requirements.

### 3. Security Concerns
As a popular platform, WordPress is a frequent target for hackers. Equestrian businesses handling sensitive client data need additional security measures and regular maintenance.

### 4. Mobile Responsiveness
While WordPress themes are generally mobile-friendly, ensuring optimal performance across all devices requires additional attention and potentially custom development.

## Key Considerations for Equestrian Businesses

1. **Business Size and Complexity**
   - Small to medium-sized equestrian businesses may find WordPress sufficient
   - Larger operations with complex needs might require custom solutions

2. **Technical Resources**
   - Consider your team's technical capabilities
   - Factor in ongoing maintenance requirements

3. **Growth Plans**
   - Assess your scalability needs
   - Plan for future feature requirements

4. **Security Requirements**
   - Evaluate data sensitivity
   - Consider compliance needs

## Conclusion

WordPress can be an excellent choice for equestrian businesses with straightforward needs and limited technical resources. However, businesses requiring specialised features or handling sensitive data should carefully consider their options. A hybrid approach, combining WordPress with custom features, might be the ideal solution for many equestrian enterprises.

## Recommendations

1. Start with a clear assessment of your business needs
2. Consider your technical capabilities and resources
3. Plan for future growth and scalability
4. Invest in proper security measures
5. Consider professional support for setup and maintenance
`,
    image: "https://i.ibb.co/rPmRbqX/3ced2984-6435-48b1-8de8-a41fad0cd221.webp",
    coverImage: "https://i.ibb.co/rPmRbqX/3ced2984-6435-48b1-8de8-a41fad0cd221.webp",
    readTime: "8",
    author: "Equinology Team"
  },
  {
    id: 3,
    title: "Branding for Equestrian Businesses What It Is and Why It Matters",
    slug: slugify("Branding for Equestrian Businesses What It Is and Why It Matters"),
    timestamp: ARTICLE_TIMESTAMPS.BRANDING_MATTERS,
    summary: "Understand equestrian branding for UK-based businesses. From saddle fitters to riding schools, learn how good branding builds trust and recognition.",
    content: `Branding is more than just a logo. For horse businesses, it's about building trust, consistency, and a clear identity across everything you do.

---

## Branding Helps People Understand You

Your brand should reflect your tone, values, and style — whether you're laid-back and local or sharp and professional. It communicates your unique selling points.

## Beyond the Logo

A strong equestrian brand is a complete package:

### Key Brand Elements:
- **Logo:** The visual cornerstone.
- **Colours:** Evoke specific feelings and associations.
- **Fonts:** Contribute to the overall tone (e.g., traditional serif vs. modern sans-serif).
- **Tone of Voice:** How you communicate in writing (e.g., formal, friendly, expert).
- **Imagery:** The style of photos and graphics you use.

## Consistency Builds Recognition

When your website, social media profiles, print materials, and even stable signage all align visually and tonally, you look organised, professional, and dependable. This builds trust over time.

## Keep It Authentic

Horse people can often spot when something feels inauthentic. Your branding should feel real — like it comes from someone who genuinely understands early starts, muddy boots, and quiet moments in the stable. Don't try to be something you're not.

---

Your brand doesn't need to be fancy or expensive. It just needs to be consistently and authentically yours.`,
    image: "https://images.pexels.com/photos/2928178/pexels-photo-2928178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    coverImage: "https://images.pexels.com/photos/2928178/pexels-photo-2928178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    readTime: "5",
    author: "Equinology Team"
  }
].sort((a, b) => b.timestamp - a.timestamp); 