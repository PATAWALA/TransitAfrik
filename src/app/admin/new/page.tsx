import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/session";
import { ListingForm } from "@/components/admin/ListingForm";

export default async function NewPage() {
  if (!(await isAdmin())) redirect("/admin/login");
  return <ListingForm />;
}
