"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const ReportPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Vehicle Valuation Report</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Vehicle Details</h2>
        {/* Placeholder for vehicle details */}
        <div className="mb-6">
          <p>Make: [Vehicle Make]</p>
          <p>Model: [Vehicle Model]</p>
          <p>Year: [Vehicle Year]</p>
          <p>Mileage: [Vehicle Mileage]</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Estimated Value</h2>
        {/* Placeholder for estimated value */}
        <p className="text-3xl font-bold text-green-600 mb-6">
          $[Estimated Value]
        </p>

        <Button className="bg-primary hover:bg-primary/90">
          Download Full Report
        </Button>
      </div>
    </div>
  );
};

export default ReportPage;
