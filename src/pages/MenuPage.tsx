import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { foodItems, categories } from "@/data/mock-data";
import FoodCard from "@/components/FoodCard";
import Navbar from "@/components/Navbar";
import { Search } from "lucide-react";

const MenuPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const activeCategory = searchParams.get("category") || "all";

  const filtered = useMemo(() => {
    return foodItems.filter((item) => {
      const matchCategory = activeCategory === "all" || item.category === activeCategory;
      const matchQuery = item.name.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-6">Menu</h1>

        {/* Search */}
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search for food..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-card text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSearchParams({})}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-border"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSearchParams({ category: cat.slug })}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.slug
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-border"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground text-lg py-16">No items found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
