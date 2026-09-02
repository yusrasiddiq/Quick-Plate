import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, LogOut, Home, ClipboardList, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Navbar = () => {
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium transition-colors ${
      location.pathname === path
        ? "bg-primary text-primary-foreground"
        : "text-foreground hover:bg-secondary"
    }`;

  const links = (
    <>
      <Link to="/home" className={linkClass("/home")} onClick={() => setOpen(false)}>
        <Home size={18} /> Home
      </Link>
      <Link to="/menu" className={linkClass("/menu")} onClick={() => setOpen(false)}>
        <Search size={18} /> Menu
      </Link>
      <Link to="/orders" className={linkClass("/orders")} onClick={() => setOpen(false)}>
        <ClipboardList size={18} /> Orders
      </Link>
      <Link to="/cart" className={linkClass("/cart")} onClick={() => setOpen(false)}>
        <div className="relative">
          <ShoppingCart size={18} />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </div>
        Cart
      </Link>
      <button
        onClick={() => { setOpen(false); navigate("/"); }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium text-muted-foreground hover:bg-secondary transition-colors"
      >
        <LogOut size={18} /> Logout
      </button>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/home" className="flex items-center gap-2">
          <span className="text-2xl">🍽️</span>
          <span className="text-xl font-bold text-foreground">QuickBite</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">{links}</div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-2 animate-fade-in">
          {links}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
