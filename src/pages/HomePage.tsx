import { categories, foodItems } from "@/data/mock-data";
import FoodCard from "@/components/FoodCard";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const featured = foodItems.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-10 md:py-12 px-4" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-3">
            Delicious Food, Delivered Fast
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Browse our menu and order your favorite meals in just a few taps.
          </p>
          <button
            onClick={() => navigate("/menu")}
            className="px-8 py-3 rounded-lg bg-card text-foreground font-semibold text-lg hover:bg-secondary transition-colors"
          >
            Browse Menu →
          </button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-10">
        <h2 className="text-2xl font-bold text-foreground mb-5">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-10 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/menu?category=${cat.slug}`)}
              className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-2xl block mb-1">{cat.name.split(" ")[0]}</span>
              <span className="text-sm font-medium text-foreground">{cat.name.split(" ").slice(1).join(" ")}</span>
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-5">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
