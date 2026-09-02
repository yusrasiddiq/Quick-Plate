import { FoodItem } from "@/data/mock-data";
import { useCart } from "@/context/CartContext";
import { Plus, Check } from "lucide-react";
import { useState } from "react";

const FoodCard = ({ item }: { item: FoodItem }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-primary">${item.price.toFixed(2)}</span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              added
                ? "bg-success text-success-foreground"
                : "bg-primary text-primary-foreground hover:opacity-90"
            }`}
          >
            {added ? <><Check size={16} /> Added</> : <><Plus size={16} /> Add to Cart</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
