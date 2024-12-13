import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useAppSelector } from "@/application/hooks/selector";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

/**
 * User Card
 * Display the user information like name, email, and profile picture.
 * on click of the button, it will show the user menu with options like profile, settings, and logout.
 *
 * when sidebar is not expanded, it will show the icon only. and on click of the icon, user menu will be shown.
 *
 */

export function XSUserInfoCard() {
  const [toggle, setToggle] = useState(false);
  const isExpanded = useAppSelector((state) => state.sidebar.isExpanded);

  return (
    <Card className="mx-1 p-4">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {isExpanded && (
          <>
            <div className="grow flex flex-col">
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-sm font-semibold">john.doe@example.com</p>
            </div>
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setToggle((prev) => !prev)}
                  >
                    {toggle ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="top">
                  <Card>
                    <CardContent>
                      <ul>
                        <li>Setting</li>
                        <li>Logout</li>
                      </ul>
                    </CardContent>
                  </Card>
                </PopoverContent>
              </Popover>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
