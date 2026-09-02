import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Clock, ClipboardList } from "lucide-react";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 mb-6">
          <CheckCircle className="text-success" size={48} />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Order Confirmed!</h1>
        <p className="text-lg text-muted-foreground mb-2">Your order has been placed successfully.</p>

        <div className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-6 py-4 mt-4 mb-8">
          <Clock size={22} className="text-primary" />
          <span className="text-lg font-semibold text-foreground">Estimated delivery: 45–60 minutes</span>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button onClick={() => navigate("/orders")} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            <ClipboardList size={18} /> View Orders
          </button>
          <button onClick={() => navigate("/home")} className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-border transition-colors">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
