import { createLazyFileRoute } from '@tanstack/react-router';
import Hero from '../components/Hero/Hero';
import Services from "../components/Services/Services"
import Approach from '../components/Approach/Approach';
import FeaturedWorks from '../components/FeaturedWorks/FeaturedWorks';

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='bg-black h-full w-screen'>
        <Hero />
        <Services />
        <Approach />
        <FeaturedWorks />
    </div>
  )
}
