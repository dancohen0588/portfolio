'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, useReducedMotion } from 'framer-motion';

type FormData = {
  prenom: string;
  societe: string;
  email: string;
  message: string;
};

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        reset();
      }
    } finally {
      setSubmitting(false);
    }
  };

  const sectionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

  const inputBase =
    'w-full rounded-[12px] border border-[var(--border)] bg-[var(--bg)] px-[18px] py-[14px] font-bricolage text-[14px] text-[var(--dark-text)] outline-none placeholder:text-[#A1A1AA] transition-[border-color,box-shadow] duration-200 focus:border-[var(--violet)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.10)]';

  return (
    <section
      id="contact"
      className="bg-[var(--white)] px-5 py-20 md:px-14 md:py-[120px]"
    >
      <motion.div
        className="mx-auto max-w-[1100px]"
        variants={containerVariants}
        {...sectionProps}
      >
        <div className="mx-auto max-w-[640px] text-center">
          <motion.div
            className="mb-2 font-mono-custom text-[11px] uppercase tracking-[0.14em] text-[var(--violet)]"
            {...itemProps}
          >
            // contact
          </motion.div>

          <motion.h2
            className="font-cabinet text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--dark-text)] md:text-[40px] lg:text-[52px]"
            {...itemProps}
          >
            Parlons de votre
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              prochain outil ✦
            </span>
          </motion.h2>

          <motion.p
            className="mb-12 mt-4 font-bricolage text-[17px] text-[var(--muted)]"
            {...itemProps}
          >
            Premier appel de 30 min gratuit — je vous dis si et comment je peux vous aider.
          </motion.p>

          {success ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[20px] border border-[rgba(124,58,237,0.2)] bg-[var(--violet-l)] px-8 py-10 font-bricolage text-[17px] font-semibold text-[var(--violet)]"
            >
              ✦ Message envoyé ! Je reviens vers vous sous 24h.
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3.5 text-left"
              {...itemProps}
            >
              <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
                <div>
                  <input
                    {...register('prenom', { required: true })}
                    type="text"
                    placeholder="Votre prénom"
                    className={inputBase}
                    style={errors.prenom ? { borderColor: '#EF4444' } : {}}
                  />
                </div>
                <div>
                  <input
                    {...register('societe')}
                    type="text"
                    placeholder="Votre société"
                    className={inputBase}
                  />
                </div>
              </div>

              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="Votre email"
                className={inputBase}
                style={errors.email ? { borderColor: '#EF4444' } : {}}
              />

              <textarea
                {...register('message', { required: true })}
                placeholder="Décrivez votre projet en quelques lignes..."
                rows={5}
                className={`${inputBase} resize-y`}
                style={errors.message ? { borderColor: '#EF4444' } : {}}
              />

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-[100px] px-9 py-[15px] font-bricolage text-[15px] font-bold text-white transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(124,58,237,0.30)] disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777)' }}
                >
                  {submitting ? 'Envoi en cours…' : 'Envoyer le message ✦'}
                </button>
              </div>
            </motion.form>
          )}

          <p className="mt-4 font-bricolage text-[13px] text-[var(--muted)]">
            ⚡ Réponse sous 24h · Suresnes, Île-de-France
          </p>
        </div>
      </motion.div>
    </section>
  );
}
