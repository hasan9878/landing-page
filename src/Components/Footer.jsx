import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
    </footer>
  );
}
