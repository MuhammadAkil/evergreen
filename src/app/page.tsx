import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the home page of our Next.js 15 app",
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello, Next.js 15!</h1>
    </div>
  );
}