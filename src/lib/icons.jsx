import { Scale, Heart, ShieldAlert, Key, Landmark, Briefcase, FileText } from "lucide-react";

export function getPracticeAreaIcon(title) {
  const t = (title || "").toLowerCase();
  if (t.includes("corporate") || t.includes("commercial") || t.includes("business") || t.includes("finance") || t.includes("tax")) return Briefcase;
  if (t.includes("family") || t.includes("divorce") || t.includes("matrimonial") || t.includes("probate") || t.includes("estate") || t.includes("will")) return Heart;
  if (t.includes("criminal") || t.includes("defence") || t.includes("prosecution")) return ShieldAlert;
  if (t.includes("property") || t.includes("real estate") || t.includes("land") || t.includes("tenancy") || t.includes("boundary")) return Key;
  if (t.includes("litigation") || t.includes("court") || t.includes("dispute") || t.includes("advocacy") || t.includes("arbitration")) return Scale;
  if (t.includes("advisory") || t.includes("regulatory") || t.includes("compliance") || t.includes("secretarial")) return Landmark;
  return FileText; // Fallback
}
