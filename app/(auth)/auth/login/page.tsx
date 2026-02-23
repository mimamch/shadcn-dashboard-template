import { type Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { FieldDescription } from "@/components/ui/field";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "./user-auth-form";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="relative container hidden flex-1 shrink-0 items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute top-4 right-4 md:top-8 md:right-8",
          )}
        >
          Login
        </Link>
        <div className="text-primary relative hidden h-full flex-col p-10 lg:flex dark:border-r">
          <div className="bg-primary/5 absolute inset-0">
            <Image
              alt="Authentication"
              src="/login/login-image.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              width={1200}
              height={1200}
              loading="eager"
            />
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium text-primary-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto text-primary-foreground flex leading-normal text-balance items-center">
            <ImageIcon className="size-12" />
            <div className="text-sm leading-6">
              <p className="font-bold">Oahu, Hawaii, USA.</p>
              <p className="text-xs">by Slava Jamm</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:h-dvh lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-87.5">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-muted-foreground text-sm">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <FieldDescription className="px-6 text-center">
              By clicking continue, you agree to our{" "}
              <Link href="/terms">Terms of Service</Link> and{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </FieldDescription>
          </div>
        </div>
      </div>
    </>
  );
}
