import { formatDistanceToNow } from 'date-fns';

// Define Article interface
export interface Article {
  id: number;
  title: string;
  slug: string;
  timestamp: number; // Store timestamp instead of formatted date
  summary: string;
  content: string;
  image: string;
  coverImage?: string; // Optional cover image
  readTime?: string; // Optional read time
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
    id: 4,
    title: "Equinology is Expanding to More Industries",
    slug: slugify("Equinology is Expanding to More Industries"),
    timestamp: new Date("2025-04-15T10:00:00").getTime(), // Fixed date: April 15, 2025
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
    timestamp: new Date("2025-04-13T15:30:00").getTime(), // Fixed date: April 13, 2025
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
    title: "Equestrian Logo Design Tips for Horse Businesses",
    slug: slugify("Equestrian Logo Design Tips for Horse Businesses"),
    timestamp: new Date("2025-04-11T09:15:00").getTime(), // Fixed date: April 11, 2025
    summary: "Discover how to design a strong, professional equestrian logo that reflects your horse business. Practical advice tailored for UK-based stables, yards, and equine brands.",
    content: `A well-designed logo helps your horse business stand out while staying true to who you are. Whether you run a yard, a shop, or provide equine services, your logo should feel like a natural extension of your brand.

---

## Keep it Clear and Versatile

A strong equestrian logo is simple, recognisable, and easy to use across formats.

> **Key Takeaway:** Your logo must work effectively everywhere, from a tiny website favicon to large stable signage.

### Consider These Formats:
- Stable signs & vehicle livery
- Numnahs & rugs
- Social media profiles
- Website headers

## Avoid the Canva Trap

While templates are quick, they often miss what makes your business unique. A custom design makes your brand more memorable and avoids looking generic.

## Think About Practical Use

Logos need to scale up and down without losing detail.

### Key Practicalities:
- **Embroidery:** Complex gradients or tiny details don't embroider well.
- **Print:** Ensure high-resolution versions are available.
- **Mobile Display:** Check visibility on small screens.

## Subtle Equestrian Cues Go a Long Way

You don't always need an obvious horse graphic. Use type, colour, and layout to reflect the equestrian world in a refined way. Sometimes abstract shapes or elegant typography speak volumes.

---

A smart equestrian logo doesn't just look good — it works hard behind the scenes, every day.`,
    image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    coverImage: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    readTime: "4",
    author: "Equinology Team"
  },
  {
    id: 3,
    title: "Branding for Equestrian Businesses What It Is and Why It Matters",
    slug: slugify("Branding for Equestrian Businesses What It Is and Why It Matters"),
    timestamp: new Date("2025-04-11T09:15:00").getTime(), // Fixed date: April 11, 2025
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
]; 