import { createLazyFileRoute } from '@tanstack/react-router';
import Hero from '../components/Hero/Hero';

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='bg-black h-full w-screen'>
        <Hero />
    </div>
  )
}
