"use client";
import HeroSection from "./HeroSection/HeroSection";
import HeroTitle from "./HeroTitle/HeroTitle";
import Interactive from "./Interactive/Interactive";
import { AuroraBackground } from '@/components/ui/aurora-background';
import Card from "./card";
export default function CNGPage() {
  return <>

    <AuroraBackground children={undefined} />
    <HeroSection />
    <HeroTitle />
    <Interactive />
    <Card />
  </>
}