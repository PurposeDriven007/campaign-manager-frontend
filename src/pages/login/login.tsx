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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { config } from "@/utils/Config";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    Cookies.set("access_token", "tsfdgdsxcvsfdtsscgg", {
      path: "/",
      expires: 7,
    });
    navigate("/");

    // Along with login we need to set the user Context
    // Super admin
    // Admin (Agency Admin, Advertiser Admin)
    // Adops (Campaign Manager)
    // Analyst (Data Analyst)
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full">
              Sign in
            </Button>
            <p>Forgot your password? reset here</p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
