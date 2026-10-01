import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// When no database is reachable (for example on hosts without a persistent
// filesystem) the request is still accepted, but the caller is told the
// booking was not stored so the salon can be reached directly instead.
const FALLBACK_MESSAGE =
  "Thank you for choosing Amara. Our booking desk could not take this request online right now, so please call or message us and we will confirm your slot straight away.";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const service = String(body.service ?? "").trim();
  const preferredDate = String(body.preferredDate ?? "").trim();
  const preferredTime = String(body.preferredTime ?? "").trim();
  const notes = String(body.notes ?? "").trim();

  if (!name || !phone || !service || !preferredDate || !preferredTime) {
    return NextResponse.json(
      { error: "Please fill in every required field." },
      { status: 400 }
    );
  }

  if (!db) {
    console.warn("Booking received without a configured database:", {
      name,
      service,
      preferredDate,
      preferredTime,
    });
    return NextResponse.json({
      ok: true,
      stored: false,
      message: FALLBACK_MESSAGE,
    });
  }

  try {
    const booking = await db.booking.create({
      data: {
        name,
        phone,
        email: email || null,
        service,
        preferredDate,
        preferredTime,
        notes: notes || null,
      },
    });

    return NextResponse.json(
      { ok: true, stored: true, id: booking.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking storage error:", error);
    return NextResponse.json({
      ok: true,
      stored: false,
      message: FALLBACK_MESSAGE,
    });
  }
}
