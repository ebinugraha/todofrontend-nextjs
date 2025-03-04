import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/auth-context";
import { TodoProvider } from "@/context/todo-context";
import { ModalCreateTodo } from "@/components/ui/modal-create";
import { ModalUpdateProvider } from "@/provider/modal-update-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <TodoProvider>
          <Toaster position="top-right"/>
          <ModalCreateTodo/>
          <ModalUpdateProvider/>
          {children}
          </TodoProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
