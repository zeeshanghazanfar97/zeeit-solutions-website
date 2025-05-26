import React from "react";
import Header from "@/components/Header";

const Index = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
          Welcome to ZeeIT Solutions
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
          Empowering businesses with scalable software solutions, custom software
          development, IT consulting, and cloud services tailored to your needs.
        </p>
        {/* Additional homepage content can go here */}
      </main>
    </>
  );
};

export default Index;
