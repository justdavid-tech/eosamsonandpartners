import BookingFlow from "@/components/booking/BookingFlow";
import { getPracticeAreaTitles } from "@/data/practiceAreas";

export default async function BookConsultationPage() {
  const practiceAreas = getPracticeAreaTitles();

  return <BookingFlow practiceAreas={practiceAreas} />;
}