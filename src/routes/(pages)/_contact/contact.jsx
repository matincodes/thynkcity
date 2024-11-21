import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(pages)/_contact/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /(pages)/_contact/contact!'
}
