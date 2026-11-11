import { notFound, redirect } from "next/navigation";
import { isAdmin } from "@/lib/session";
import { adminGetById } from "@/lib/db";
import { ListingForm } from "@/components/admin/ListingForm";

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const listing = await adminGetById((await params).id);
  if (!listing) notFound();
  return <ListingForm listing={listing} />;
}
