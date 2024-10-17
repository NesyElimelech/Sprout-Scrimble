import { auth } from "@/server/auth";
import { ModeToggle } from "@/components/navigation/mode-toggle";
import { UserButton } from "@/components/navigation/user-button";
import Logo from "@/components/navigation/logo";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function nav() {
  const session = await auth();
  console.log(session);

  return (
    <header className='p-4'>
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
                <Button asChild>
                  <Link className='flex gap-2' href={"/auth/login"}>
                    <LogIn size={16} />
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
