import { auth } from "@/server/auth";
import { ModeToggle } from "@/components/navigation/mode-toggle";
import { UserButton } from "@/components/navigation/user-button";
import Logo from "@/components/navigation/logo";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { Button } from "../ui/button";

export default async function nav() {
  const session = await auth();
  console.log(session);

  return (
    <header className='py-4'>
      <nav>
        <ul className='flex justify-between'>
          <li>
            <Link href={"/"}>
              <Logo />
            </Link>
          </li>
          <div className='flex gap-5 items-center'>
            {!session ? (
              <li>
                <Button>
                  <Link href={"/api/auth/signin"}>
                    <LogIn />
                    <span>Login</span>
                  </Link>
                </Button>
              </li>
            ) : (
              <li>
                <UserButton user={session?.user} expires={session?.expires} />
              </li>
            )}
            <ModeToggle />
          </div>
        </ul>
      </nav>
    </header>
  );
}
