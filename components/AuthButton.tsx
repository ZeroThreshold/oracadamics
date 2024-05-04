"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function AuthButton() {
  const [userX, setUserX] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUserX(user);
    };
    getData();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.reload();
    return;
  };

  return userX ? (
    <>
      <div className="lg:block hidden">
        <DropdownMenu>
          <Button>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
          </Button>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{userX.email}!</DropdownMenuItem>
            <DropdownMenuItem>
              <div
                className="text-red-500 cursor-pointer w-full"
                onClick={signOut}
              >
                Logout
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="lg:hidden flex flex-col gap-4">
        <div>
          Hey <span className="font-semibold">{userX.email}</span>!
        </div>
        <div
          className="text-red-500 font-semibold cursor-pointer"
          onClick={signOut}
        >
          Logout
        </div>
      </div>
    </>
  ) : (
    <Button>
      <Link
        href="/login"
        className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        Sign In
      </Link>
    </Button>
  );
}
