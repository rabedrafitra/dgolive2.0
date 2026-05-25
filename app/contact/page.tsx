'use client';

import Wrapper from '../components/Wrapper';
import { Phone, Mail, MapPin, Facebook, Linkedin, Github, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <Wrapper>
      <div className="space-y-16 pb-16">
        <section className="overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),transparent_30%)] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.15)] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-pink-700">
                CONTACT & STUDIO
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                Parlons de votre prochain live shopping mode.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-700">
                Contactez notre équipe pour faire briller votre marque. Studio ring light, diffusion en direct et conseils collection mode sont au cœur de notre accompagnement.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/90 p-6 shadow-lg ring-1 ring-slate-200 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                    <Phone className="w-5 h-5" />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-slate-900">Téléphone</p>
                  <p className="mt-2 text-sm text-slate-600">+261 34 76 020 77</p>
                </div>
                <div className="rounded-3xl bg-white/90 p-6 shadow-lg ring-1 ring-slate-200 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                    <Mail className="w-5 h-5" />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-slate-900">Email</p>
                  <p className="mt-2 text-sm text-slate-600">lordjacyn@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
              <img
                src="https://esther-edu.mg/img/sdfsdfsdfsdfsfd.jpg"
                alt="Personne en studio ring light"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute left-6 bottom-6 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Studio live</span>
                <h2 className="mt-3 text-xl font-semibold text-slate-950">Ring light & présentation mode</h2>
                <p className="mt-2 text-sm text-slate-600">Un visuel haut de gamme pour valoriser vos looks et votre présence lors de chaque live.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-700">
                Votre studio
              </span>
              <h2 className="text-3xl font-bold text-slate-950">Un studio pensé pour le e-commerce et le live shopping</h2>
              <p className="text-base leading-7 text-slate-600">
                Nous proposons une expérience contact premium où l’image de votre marque est affinée avec des visuels pro, un studio ring light performant et un accompagnement complet pour vos sessions en direct.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-slate-900">Conseil stylisme</p>
                  <p className="mt-3 text-sm text-slate-600">Scénarios de présentation sur-mesure pour votre audience.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-slate-900">Diffusion pro</p>
                  <p className="mt-3 text-sm text-slate-600">Streaming fluide et interaction client optimisée pour la conversion.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden bg-slate-950">
              <img
                src="https://i.pinimg.com/1200x/9f/f3/67/9ff36790c7910ecd6e9345411f09258f.jpg"
                alt="Personne sous ring light en studio"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.15)] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl bg-slate-900 p-8">
              <div className="inline-flex rounded-full bg-pink-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-pink-300">Contact immédiat</div>
              <h3 className="mt-6 text-2xl font-semibold">Téléphone</h3>
              <p className="mt-3 text-sm text-slate-400">+261 34 76 020 77</p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-8">
              <div className="inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Email</div>
              <h3 className="mt-6 text-2xl font-semibold">Email</h3>
              <p className="mt-3 text-sm text-slate-400">lordjacyn@gmail.com</p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-8">
              <div className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Adresse</div>
              <h3 className="mt-6 text-2xl font-semibold">Studio</h3>
              <p className="mt-3 text-sm text-slate-400">Villa Amparihy Bevalala</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-slate-300 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3 text-sm">
              <MessageCircle className="h-5 w-5 text-pink-300" />
              Suivez-nous sur nos réseaux pour des idées live shopping quotidiennes.
            </div>
            <div className="flex gap-4 text-slate-300">
              <a href="https://www.facebook.com/profile.php?id=100077210915343" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/rabedrafitra/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/rabedrafitra" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}
