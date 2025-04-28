import { Step, Product, CalculatorTier } from './types';
import { Coffee, ShoppingBag, Users, Share2, BookOpen } from 'lucide-react';

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Register on the Official Website",
    description: "Start your journey by creating your DXN account. Registration is simple and gives you immediate access to member benefits and your personal referral link.",
    icon: "UserPlus",
    imageUrl: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Try the Products Yourself",
    description: "Experience the quality of DXN products firsthand. Build genuine confidence in what you'll be sharing with others by making them part of your daily routine.",
    icon: "ShoppingBag",
    imageUrl: "https://images.pexels.com/photos/2067628/pexels-photo-2067628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Share Your Experience with Others",
    description: "Share your authentic experience with friends, family, and social networks. Honest testimonials are the most powerful form of promotion.",
    icon: "Share2",
    imageUrl: "https://images.pexels.com/photos/7841788/pexels-photo-7841788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Build Your Own Team",
    description: "Invite others to join DXN using your referral link. As your team grows, so does your earning potential through the multi-level rewards system.",
    icon: "Users",
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "Follow Up and Personal Development",
    description: "Support your team members and continue growing your own knowledge. Regular training and consistent follow-up are key to sustainable success.",
    icon: "BookOpen",
    imageUrl: "https://www.aljazeera.net/wp-content/uploads/2017/12/abdef0ab-5200-4e23-b08c-95596e18b39a.jpeg?resize=686%2C513&quality=80"
  }
];

export const POPULAR_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "DXN Lingzhi Coffee 3-in-1",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61AHjlhj7NL._AC_UL210_SR210,210_.jpg",
    description: "Our signature coffee blend with Ganoderma extract for daily wellness support."
  },
  {
    id: 2,
    name: "DXN Spirulina Tablets",
    imageUrl: "https://cdn.salla.sa/dmPXe/3dcffc05-d860-41fe-ac80-de303bf8b1f9-1000x1000-Ibm9z4e3VK0FeGrxeBvZKY3fPmsJcy330sJoJyKu.png",
    description: "Nutrient-rich supplement to enhance your daily health regimen."
  },
  {
    id: 3,
    name: "DXN Ganoderma Soap",
    imageUrl: "https://www.dxnguide.com/wp-content/uploads/2024/08/%D8%B5%D8%A7%D8%A8%D9%88%D9%86-%D8%AC%D8%A7%D9%86%D9%88%D8%B2%D9%8A-dxn-min.jpg",
    description: "Natural skincare with the beneficial properties of Ganoderma."
  }
];

export const EARNINGS_TIERS: CalculatorTier[] = [
  { members: 5, potentialEarnings: 200, label: 'Starter Network' },
  { members: 15, potentialEarnings: 600, label: 'Growing Network' },
  { members: 30, potentialEarnings: 1200, label: 'Established Network' },
  { members: 50, potentialEarnings: 2000, label: 'Advanced Network' },
  { members: 100, potentialEarnings: 4000, label: 'Leadership Network' }
];

export const DXN_REGISTRATION_URL = "https://eworld.dxn2u.com/s/accreg/ar/149025889";