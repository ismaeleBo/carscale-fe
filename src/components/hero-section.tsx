"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import bg from "@/assets/images/hero.gif";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import makes from "@/_mocks/cars.json";
import { useState } from "react";
import { Header } from "./header";
import { DiscoverMoreButton } from "./discover-more-button";

export function HeroSection() {
  const [selectedMake, setSelectedMake] = useState<any>();
  console.log(selectedMake);

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={bg.src}
        alt="Modern car on road"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Header />
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Copy and Logo */}
          <div className="space-y-8">
            <Image
              src={logo.src}
              alt="CarScale Logo"
              width={200}
              height={100}
              className="mb-8"
            />
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Discover Your Car's True Value in Seconds
            </h1>
            <p className="text-xl text-gray-300">
              Get an accurate, market-driven price for your vehicle with
              CarScale's advanced valuation tool.
            </p>
          </div>

          {/* Right Column: Quick Valuation Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Quick Value Check</h2>
            <form className="space-y-4">
              <Select
                value={selectedMake?.name || ""}
                onValueChange={(value: string) => {
                  const make = makes.find((m) => m.name === value);
                  setSelectedMake(make);
                }}
              >
                <SelectTrigger className="w-full bg-white/5">
                  <SelectValue placeholder="Select make" />
                </SelectTrigger>
                <SelectContent>
                  {makes.map((make) => (
                    <SelectItem key={make.name} value={make.name}>
                      {make.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select disabled={!selectedMake}>
                <SelectTrigger className="w-full bg-white/5">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  {selectedMake &&
                    selectedMake.models.map((model: any) => (
                      <SelectItem key={model.name} value={model.name}>
                        {model.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <Input type="number" placeholder="Year" className="bg-white/5" />
              <Input
                type="number"
                placeholder="Mileage"
                className="bg-white/5"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
              >
                <Link href="/report" className="w-full">
                  Get Instant Value
                </Link>
              </Button>
            </form>
          </div>
        </div>
      </div>
      <DiscoverMoreButton />
    </section>
  );
}
