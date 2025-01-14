import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Building, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

type UserType = "advertiser" | "agency" | null;

const Signup: React.FC = () => {
  const [selectedType, setSelectedType] = useState<UserType>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedType) {
      console.log(`User selected to sign up as: ${selectedType}`);
      navigate(`/signup/${selectedType}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-4xl">
        <CardContent className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Join NexVerse.ai
          </h1>
          <p className="text-center text-base font-semibold">
            Choose Your Path to Programmatic Success
          </p>
          <p className="text-center text-sm mb-6 italic text-muted-foreground">
            Select the role that best suits your needs and unlock tailored tools
            to elevate your advertising journey.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {["advertiser", "agency"].map((type) => (
                <Button
                  key={type}
                  type="button"
                  variant={selectedType === type ? "default" : "outline"}
                  className="h-auto py-6 px-4 flex flex-col items-center justify-start text-left space-y-3"
                  onClick={() => setSelectedType(type as UserType)}
                >
                  <div className="flex flex-col items-center justify-center w-full space-y-2">
                    {type === "advertiser" ? (
                      <Megaphone className="h-10 w-10 mb-2 text-gray-700" />
                    ) : (
                      <Building className="h-10 w-10 mb-2 text-gray-700" />
                    )}
                    <span className=" text-base font-semibold capitalize">
                      {type}
                    </span>
                    <span className="text-center py-3 text-base font-semibold text-muted-foreground">
                      {type === "advertiser"
                        ? "Amplify Your Brand, Maximize ROI"
                        : "Empower Clients, Scale Campaigns"}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
            <Button
              type="submit"
              className="w-full py-3 text-base font-semibold"
              disabled={!selectedType}
            >
              Continue as{" "}
              {selectedType
                ? selectedType.charAt(0).toUpperCase() + selectedType.slice(1)
                : "..."}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

Signup.displayName = "Signup";

export { Signup };
