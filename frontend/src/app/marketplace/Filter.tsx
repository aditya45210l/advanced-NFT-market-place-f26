'use client';

import { useState } from "react";
import { Funnel, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const FilterSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to trigger sidebar */}
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <Funnel className="w-4 h-4" />
        Filters
      </Button>

      {/* Sidebar overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar content */}
          <aside className="relative z-50 w-72 bg-white h-full shadow-lg p-6 overflow-y-auto animate-slide-in-left">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Filters */}
            <div className="space-y-6">
              {/* Price Range */}
              <div>
                <Label htmlFor="minPrice">Min Price</Label>
                <Input id="minPrice" type="number" placeholder="10" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="maxPrice">Max Price</Label>
                <Input id="maxPrice" type="number" placeholder="1000" className="mt-1" />
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-semibold mb-2">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="art" />
                    <Label htmlFor="art">Art</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="music" />
                    <Label htmlFor="music">Music</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="domain" />
                    <Label htmlFor="domain">Domains</Label>
                  </div>
                </div>
              </div>

              {/* Apply/Reset */}
              <div className="flex gap-4 pt-4">
                <Button className="flex-1">Apply</Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    // Reset logic here if needed
                    setIsOpen(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
