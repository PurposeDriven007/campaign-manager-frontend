import { Button } from "@/components/ui/button";
import { ArrowRightFromLine, ArrowLeftFromLine } from "lucide-react";
import { useAppSelector } from "@/application/hooks/selector";
import { setExpanded } from "@/application/feature/sidebar";
import { useAppDispatch } from "@/application/hooks/selector";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarHeading(props: SidebarProps) {
  const isExpanded = useAppSelector((state) => state.sidebar.isExpanded);
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-between py-4 h-16 border-b gap-x-2 px-4">
      <h2 className="text-lg font-semibold">NexVerse</h2>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => dispatch(setExpanded(!isExpanded))}
      >
        {isExpanded ? <ArrowLeftFromLine /> : <ArrowRightFromLine />}
      </Button>
    </div>
  );
}
