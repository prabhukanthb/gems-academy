import { redirect } from "next/navigation";

export const metadata = { title: "Our Track Record" };

/** Track record lives on About Us — keep this path as a friendly redirect. */
export default function TrackRecordPage() {
  redirect("/about");
}
