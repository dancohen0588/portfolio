import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { prenom, societe, email, message } = await req.json();

    if (!prenom || !email || !message) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL ?? 'dan.cohen0588@gmail.com',
      replyTo: email,
      subject: `[Portfolio] Nouveau message de ${prenom}${societe ? ` — ${societe}` : ''}`,
      text: `Prénom : ${prenom}\nSociété : ${societe || '—'}\nEmail : ${email}\n\n${message}`,
    });

    if (error) {
      console.error('[Resend error]', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('[Resend ok] id:', data?.id);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Erreur lors de l\'envoi.' }, { status: 500 });
  }
}
