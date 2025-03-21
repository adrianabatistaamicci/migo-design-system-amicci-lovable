
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  name: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: "underline" | "pills" | "pillsGray" | "pillsBrand" | "fullWidth" | "bar" | "underlineBadges";
}

const TailwindTabs = ({ 
  tabs, 
  defaultValue, 
  onChange,
  variant = "underline"
}: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue || tabs[0]?.value);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div>
      {variant === "underline" && (
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  selectedTab === tab.value
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                )}
                aria-current={selectedTab === tab.value ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      )}

      {variant === "pills" && (
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabChange(tab.value)}
              className={cn(
                selectedTab === tab.value
                  ? "bg-gray-100 text-gray-700"
                  : "text-gray-500 hover:text-gray-700",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={selectedTab === tab.value ? "page" : undefined}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      )}

      {variant === "pillsGray" && (
        <div className="bg-gray-100 p-1 rounded-lg">
          <nav className="flex space-x-1" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  selectedTab === tab.value
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-500 hover:text-gray-700",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={selectedTab === tab.value ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      )}

      {variant === "pillsBrand" && (
        <div className="bg-indigo-50 p-1 rounded-lg">
          <nav className="flex space-x-1" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  selectedTab === tab.value
                    ? "bg-indigo-500 text-white"
                    : "text-gray-500 hover:text-gray-700",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={selectedTab === tab.value ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      )}

      {variant === "fullWidth" && (
        <nav className="border-b border-gray-200">
          <div className="-mb-px flex divide-x divide-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  selectedTab === tab.value
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700",
                  "w-full py-4 px-1 text-center text-sm font-medium border-b-2"
                )}
                aria-current={selectedTab === tab.value ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </nav>
      )}

      {variant === "bar" && (
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  selectedTab === tab.value
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700",
                  "whitespace-nowrap py-4 px-1 text-sm font-medium border-b-2"
                )}
                aria-current={selectedTab === tab.value ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      )}

      {variant === "underlineBadges" && (
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  selectedTab === tab.value
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700",
                  "group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium"
                )}
                aria-current={selectedTab === tab.value ? "page" : undefined}
              >
                {tab.name}
                {/* This would normally come from tab data */}
                <span
                  className={cn(
                    selectedTab === tab.value
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-gray-100 text-gray-900",
                    "ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"
                  )}
                >
                  {/* Example badge count */}
                  {Math.floor(Math.random() * 10)}
                </span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export { TailwindTabs };
