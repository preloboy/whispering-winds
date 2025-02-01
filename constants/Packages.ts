
interface Package {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  inclusions: string[];
  maxPeople: number;
}

export const Packages: Package[] = [
  {
    id: "holiday-01",
    name: "Holiday Special",
    description: "Perfect getaway for your holidays with amazing destinations",
    duration: "5 days / 4 nights",
    price: 999,
    inclusions: ["Hotel", "Meals", "Sightseeing", "Transport", "Guide"],
    maxPeople: 10
  },
  {
    id: "family-01", 
    name: "Family Package",
    description: "Create memories with your family with our specially curated package",
    duration: "7 days / 6 nights",
    price: 1499,
    inclusions: ["Hotel", "Meals", "Theme Parks", "Transport", "Family Activities"],
    maxPeople: 6
  },
  {
    id: "business-01",
    name: "Business Tour",
    description: "Professional travel arrangements for business travelers",
    duration: "3 days / 2 nights",
    price: 799,
    inclusions: ["Business Hotel", "Airport Transfer", "Meeting Room Access", "WiFi"],
    maxPeople: 4
  },
  {
    id: "couple-01",
    name: "Romantic Couple",
    description: "Romantic getaway for couples with special arrangements",
    duration: "4 days / 3 nights",
    price: 1299,
    inclusions: ["Luxury Hotel", "Candlelight Dinner", "Spa", "Romantic Activities"],
    maxPeople: 2
  },
  {
    id: "friends-01",
    name: "Friends Group",
    description: "Adventure and fun package perfect for friend groups",
    duration: "6 days / 5 nights",
    price: 899,
    inclusions: ["Hotel", "Adventure Activities", "Party Arrangements", "Transport"],
    maxPeople: 8
  },
  {
    id: "school-01",
    name: "Educational Tour",
    description: "Educational and fun tour package for school groups",
    duration: "5 days / 4 nights",
    price: 599,
    inclusions: ["Accommodation", "Meals", "Educational Visits", "Transport", "Guide"],
    maxPeople: 40
  }
];