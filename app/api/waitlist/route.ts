import { NextResponse } from 'next/server';

type Payload = { email?: string };

export async function POST(request: Request) {
  const data = (await request.json().catch(() => ({}))) as Payload;
  const email = (data.email ?? '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ error: 'Email inválido.' }, { status: 400 });
  }

  // Placeholder: aquí se integrará con Supabase/Backend FastAPI.
  // Por ahora, solo retornamos éxito para habilitar el flujo de UI.
  return NextResponse.json({ ok: true });
}