import { client } from "@/lib/sanity/client";
import BookingFlow from "@/components/booking/BookingFlow";

const practiceAreaTitlesQuery = `*[_type == "practiceArea"] | order(title asc) { title }`;

export default async function BookConsultationPage() {
  const practiceAreas = await client.fetch(practiceAreaTitlesQuery);

  return <BookingFlow practiceAreas={practiceAreas} />;
}