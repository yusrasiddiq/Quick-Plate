import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { Trash2, CreditCard, QrCode } from "lucide-react";
import { useState } from "react";

const CartPage = () => {
  const { items, removeFromCart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "qr">("card");

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate("/order-success");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <span className="text-6xl block mb-4">🛒</span>
          <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some delicious items from the menu!</p>
          <button onClick={() => navigate("/menu")} className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Browse Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cart items */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Your Items</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 sm:gap-4 bg-card border border-border rounded-lg p-3 sm:p-4">
                  <img src={item.image} alt={item.name} className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-foreground whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-destructive hover:opacity-70 flex-shrink-0">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
              <span className="text-lg font-semibold text-foreground">Total</span>
              <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Payment</h2>
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setPaymentMethod("card")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border font-medium transition-colors ${
                  paymentMethod === "card" ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground border-border hover:bg-secondary"
                }`}
              >
                <CreditCard size={18} /> <span className="hidden sm:inline">Credit</span> Card
              </button>
              <button
                onClick={() => setPaymentMethod("qr")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border font-medium transition-colors ${
                  paymentMethod === "qr" ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground border-border hover:bg-secondary"
                }`}
              >
                <QrCode size={18} /> QR Code
              </button>
            </div>

            <form onSubmit={handleCheckout} className="bg-card border border-border rounded-xl p-5 sm:p-6 space-y-5">
              {paymentMethod === "card" ? (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Card Number</label>
                    <input defaultValue="4242 4242 4242 4242" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-base" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Expiry</label>
                      <input defaultValue="12/28" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-base" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">CVC</label>
                      <input defaultValue="123" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-base" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center py-6">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 bg-foreground rounded-xl flex items-center justify-center mb-4">
                    <div className="grid grid-cols-5 grid-rows-5 gap-1 w-28 h-28 sm:w-36 sm:h-36">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className={`rounded-sm ${Math.random() > 0.4 ? "bg-background" : "bg-foreground"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">Scan to pay with your mobile wallet</p>
                </div>
              )}
              <button type="submit" className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">
                Pay ${total.toFixed(2)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
