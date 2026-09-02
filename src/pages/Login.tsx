import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <span className="text-5xl">🍽️</span>
          <h1 className="text-3xl font-bold text-foreground mt-4">QuickBite</h1>
          <p className="text-muted-foreground mt-2 text-lg">Sign in to order your favorite food</p>
        </div>

        <form onSubmit={handleLogin} className="bg-card rounded-xl border border-border p-8 shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
