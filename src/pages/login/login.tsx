"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Cookies from "js-cookie";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

interface LoginFormState {
  email: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(
    () => localStorage.getItem("rememberMe") === "true"
  );
  const [formState, setFormState] = useState<LoginFormState>(() => ({
    email: isRememberMe ? localStorage.getItem("email") || "" : "",
    password: isRememberMe ? localStorage.getItem("password") || "" : "",
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleRememberMe = (checked: boolean) => {
    setIsRememberMe(checked);
    localStorage.setItem("rememberMe", checked ? "true" : "false");
    if (checked) {
      localStorage.setItem("email", formState.email);
      localStorage.setItem("password", formState.password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // TODO: Implement actual login logic here
      Cookies.set("authToken", "dummy-token", {
        path: "/",
        expires: 7,
      });
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      // TODO: Add error handling UI
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="text-center">
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Enter your credentials to login</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formState.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formState.password}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
            <div className="items-top flex space-x-2 self-start">
              <Checkbox
                id="rememberMe"
                onCheckedChange={handleRememberMe}
                checked={isRememberMe}
                disabled={isLoading}
              />
              <div className="grid gap-1.5 leading-none">
                <label htmlFor="rememberMe">Remember me</label>
                <p className="text-sm text-muted-foreground">
                  Remember your email and password
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Forgot your password?{" "}
              <a
                onClick={() => navigate("/reset-password")}
                className="text-blue-600 hover:text-blue-800 cursor-pointer underline"
              >
                reset here
              </a>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
