import { Zap, Globe2, Code } from "lucide-react";
import React from "react";

const performanceMetrics = [
  { label: "Page Load", value: "0.8s", icon: Zap },
  { label: "Core Web Vitals", value: "100%", icon: Globe2 },
  { label: "Code Quality", value: "A+", icon: Code },
];

const TechnicalMetrics = () => {
  return (
    <section className="py-16 bg-gray-800/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {performanceMetrics.map((metric, index) => (
          <div key={index} className="flex items-center space-x-4 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
            <metric.icon className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-sm text-gray-400">{metric.label}</div>
              <div className="text-2xl font-light">{metric.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalMetrics;
