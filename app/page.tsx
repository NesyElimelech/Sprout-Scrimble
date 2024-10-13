import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className='flex flex-col justify-center items-center w-full min-h-9 p-10 gap-2 bg-slate-900 text-white'>
      <h1>Hello</h1>
      <Button>Click me!</Button>
    </main>
  );
}
