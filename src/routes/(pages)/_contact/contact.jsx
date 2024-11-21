import { createFileRoute } from "@tanstack/react-router";
import ContactInfo from "../../../components/ContactInfo/ContactInfo";
import Form from "../../../components/Form/Form";

export const Route = createFileRoute("/(pages)/_contact/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full flex-col flex items-center bg-dark">
      <ContactInfo />
      <Form/>
    </div>
  );
}
