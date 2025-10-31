// components/ui/card.tsx
import * as React from "react";

export function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`rounded-2xl shadow-xl bg-white ${className}`}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={className}>{children}</div>;
}





export function CardHeader({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return <h3 className={`text-lg font-bold ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className }: { children: React.ReactNode, className?: string }) {
  return <p className={`text-sm text-gray-500 dark:text-gray-300 ${className}`}>{children}</p>;
}

export function CardFooter({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`mt-4 ${className}`}>{children}</div>;
}
