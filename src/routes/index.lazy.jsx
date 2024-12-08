import { createLazyFileRoute } from '@tanstack/react-router';
import Hero from '../components/Hero/Hero';
import Services from "../components/Services/Services"
import Approach from '../components/Approach/Approach';
import FeaturedWorks from '../components/FeaturedWorks/FeaturedWorks';
import Programs from '../components/Programs/Programs';

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='bg-black h-full w-full'>
        <Hero />
        <Services />
        <Approach />
        <FeaturedWorks />
        <Programs />
    </div>
  )
}
