import Image from "next/image";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Project from "./components/Project";
import About from "./components/About";

export default function Home() {
  return (
<div> 
  <Hero/>
<Contact/>
<Project/>
<About/>
 </div>
  );
}
