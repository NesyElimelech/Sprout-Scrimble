"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const BackButton = ({ href, label }: { href: string; label: string }) => {
  return (
    <Button variant={"link"} className='font-medium w-full'>
      <Link href={href} aria-label={label}>
        {label}
      </Link>
    </Button>
  );
};
