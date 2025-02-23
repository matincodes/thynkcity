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
    <div className='bg-black h-full w-full lg:pl-40 lg:pr-60'
    >
        <Hero />
        <Services />
        <Approach />
        <div className="relative lg:-mr-60">
            <FeaturedWorks />
        </div>
        <Programs />
    </div>
  )
}
