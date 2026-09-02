import Navbar from "@/components/Navbar";
import { orderHistory } from "@/data/mock-data";
import { Printer } from "lucide-react";

const OrderHistory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Order History</h1>

        {/* Desktop table */}
        <div className="hidden md:block bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-6 py-4 text-sm font-semibold text-foreground">Order #</th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground">Items</th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground">Date</th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground">Total</th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order) => (
                <tr key={order.id} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">#{order.id}</td>
                  <td className="px-6 py-4 text-foreground">{order.items.join(", ")}</td>
                  <td className="px-6 py-4 text-muted-foreground">{order.date}</td>
                  <td className="px-6 py-4 font-semibold text-foreground">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-success/10 text-success">{order.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => window.print()} className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors">
                      <Printer size={16} /> Print
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {orderHistory.map((order) => (
            <div key={order.id} className="bg-card border border-border rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground text-lg">#{order.id}</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-success/10 text-success">{order.status}</span>
              </div>
              <p className="text-sm text-foreground">{order.items.join(", ")}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{order.date}</span>
                <span className="font-bold text-foreground">${order.total.toFixed(2)}</span>
              </div>
              <button onClick={() => window.print()} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:bg-secondary px-3 py-2 rounded-lg transition-colors">
                <Printer size={16} /> Print
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
