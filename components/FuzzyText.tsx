"use client";
import React from "react";
import "./fuzzytext.css";

interface FuzzyTextProps {
  children: React.ReactNode;
  className?: string;
}

const FuzzyText: React.FC<FuzzyTextProps> = ({ children, className = "" }) => {
  return (
    <span className={`fuzzy-hover ${className}`}>
      {children}
      <span aria-hidden="true">{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
};

export default FuzzyText;
