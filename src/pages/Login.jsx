import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add validation logic here
    navigate("/chat");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <img src="/placeholder.svg" alt="Logo" className="mx-auto object-cover w-24 h-24 mb-4" />
          <h1 className="text-2xl font-bold">Welcome to Your Skincare Assistant</h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Button type="submit" className="w-full">Login</Button>
        </form>
        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        <div className="text-center mt-2">
          <a href="/sign-up" className="text-sm text-blue-500 hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;