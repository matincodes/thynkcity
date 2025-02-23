import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Approach from "../components/Approach/Approach";
import FeaturedWorks from "../components/FeaturedWorks/FeaturedWorks";
import Programs from "../components/Programs/Programs";
import Testimonials from "../components/Testimonials/Testimonials";
import Lead from "../components/Lead/Lead";
import Blogs from "../components/Blogs/Blogs";
import OurService from "../components/OurServices/OurService";
import Community from "../components/Community/Community";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-black h-full  w-full lg:pb-44 pb-14">
      <Hero />
      <Services />
      <Approach />
      <FeaturedWorks />
      <Programs />
      <Testimonials />
      <Lead />
      <Blogs />
      <OurService />
      <Community />
    </div>
  );
}
