import React from "react";
import Page from "../../page";
import Toolbar from "@/components/local/toolbar/toolbar";
import { Container } from "@/components/local/container/container";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/application/hooks/selector";
import { AdvertiserFormDispatcher } from "./form-dispatcher";
import { MoveRightIcon, UserPlus2Icon } from "lucide-react";

export const SignupAdvertiserPage: React.FC = () => {
  const formTitle = useAppSelector((state) => state.advertiserSignup.formTitle);
  const formStep = useAppSelector(
    (state) => state.advertiserSignup.currentStep
  );
  const isEmailVerified = useAppSelector(
    (state) => state.advertiserSignup.isEmailVerifies
  );
  const dispatch = useAppDispatch();

  return (
    <Container maxScreenWidth="xxl">
      <Page>
        <Page.Header>
          <Toolbar className="justify-center">
            <Toolbar.List>
              <Toolbar.Item>
                <span className="text-2xl font-bold text-center">
                  Advertiser Signup: {formTitle}
                </span>
              </Toolbar.Item>
            </Toolbar.List>
          </Toolbar>
        </Page.Header>
        <Page.Main>
          <Container maxScreenWidth="lg">
            <div className="user-management my-4">
              <h1 className="font-semibold text-lg">Advertiser Signup</h1>
              <p className="text-sm text-muted-foreground">
                Minimun information required for an advertiser to signup and
                create an account on Nexverse.ai DSP platform.
              </p>
            </div>
            <AdvertiserFormDispatcher />
          </Container>
        </Page.Main>
        <Page.Footer>
          <Toolbar className="justify-between">
            <Toolbar.List>
              <Toolbar.Item>Step: {formStep} of 2</Toolbar.Item>
            </Toolbar.List>
            <Toolbar.List>
              <div className="my-4 flex justify-end space-x-2">
                {isEmailVerified && (
                  <Button>
                    Submit <UserPlus2Icon />
                  </Button>
                )}
              </div>
            </Toolbar.List>
          </Toolbar>
        </Page.Footer>
      </Page>
    </Container>
  );
};
