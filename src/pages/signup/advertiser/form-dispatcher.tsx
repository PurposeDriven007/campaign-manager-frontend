import React from "react";
import { useAppSelector } from "@/application/hooks/selector";
import { AdvertiserEmailVerification } from "./advertiser-email-verification";
import { AdvertiserDetails } from "./advertiser-details";

const view = new Map<number, React.ReactNode>()
  .set(1, <AdvertiserEmailVerification />)
  .set(2, <AdvertiserDetails />);

export function AdvertiserFormDispatcher() {
  const step = useAppSelector((state) => state.advertiserSignup.currentStep);
  return view.get(step);
}
