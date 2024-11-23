import { createFileRoute } from "@tanstack/react-router";
import ContactInfo from "../../../components/ContactInfo/ContactInfo";
import Form from "../../../components/Form/Form";

export const Route = createFileRoute("/(pages)/_contact/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full flex-col flex items-center h-auto bg-dark md:flex-row xl:items-start">
      <ContactInfo />
      <Form/>
    </div>
  );
}
