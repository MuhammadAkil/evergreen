"use client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "./hero";
import Services from '../components/Services'
import ServiceBanner from './servicebanner'
export default function UseCasesPage() {
  return (
      <>
      <Hero />
      <Services />
      <ServiceBanner />
    </>
  );
}
