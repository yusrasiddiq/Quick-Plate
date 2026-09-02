export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface OrderItem {
  id: number;
  items: string[];
  total: number;
  date: string;
  status: string;
}

export const categories = [
  { id: 1, name: "🍔 Burgers", slug: "burgers" },
  { id: 2, name: "🍕 Pizza", slug: "pizza" },
  { id: 3, name: "🥗 Salads", slug: "salads" },
  { id: 4, name: "🍜 Noodles", slug: "noodles" },
  { id: 5, name: "☕ Beverages", slug: "beverages" },
  { id: 6, name: "🍰 Desserts", slug: "desserts" },
];

export const foodItems: FoodItem[] = [
  { id: 1, name: "Classic Cheeseburger", description: "Juicy beef patty with melted cheddar", price: 8.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", category: "burgers" },
  { id: 2, name: "Margherita Pizza", description: "Fresh basil, mozzarella, tomato sauce", price: 12.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop", category: "pizza" },
  { id: 3, name: "Caesar Salad", description: "Crisp romaine, parmesan, croutons", price: 7.49, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop", category: "salads" },
  { id: 4, name: "Pad Thai", description: "Rice noodles with shrimp and peanuts", price: 10.99, image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop", category: "noodles" },
  { id: 5, name: "Iced Latte", description: "Espresso with cold milk over ice", price: 4.99, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop", category: "beverages" },
  { id: 6, name: "Chocolate Cake", description: "Rich double chocolate layer cake", price: 6.49, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop", category: "desserts" },
  { id: 7, name: "BBQ Bacon Burger", description: "Smoky BBQ sauce with crispy bacon", price: 10.49, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop", category: "burgers" },
  { id: 8, name: "Pepperoni Pizza", description: "Classic pepperoni with extra cheese", price: 13.99, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop", category: "pizza" },
  { id: 9, name: "Green Smoothie", description: "Spinach, banana, and mango blend", price: 5.99, image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=300&fit=crop", category: "beverages" },
  { id: 10, name: "Tiramisu", description: "Coffee-flavored Italian dessert", price: 7.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop", category: "desserts" },
  { id: 11, name: "Ramen Bowl", description: "Rich tonkotsu broth with pork belly", price: 11.99, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop", category: "noodles" },
  { id: 12, name: "Greek Salad", description: "Feta, olives, tomato, cucumber", price: 8.49, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop", category: "salads" },
];

export const orderHistory: OrderItem[] = [
  { id: 1001, items: ["Classic Cheeseburger", "Iced Latte"], total: 13.98, date: "2025-04-10", status: "Delivered" },
  { id: 1002, items: ["Margherita Pizza", "Green Smoothie"], total: 18.98, date: "2025-04-08", status: "Delivered" },
  { id: 1003, items: ["Pad Thai", "Chocolate Cake"], total: 17.48, date: "2025-04-05", status: "Delivered" },
  { id: 1004, items: ["Caesar Salad", "Tiramisu", "Iced Latte"], total: 20.47, date: "2025-04-01", status: "Delivered" },
];
