import { currentUser } from '@clerk/nextjs/server';
import Wrapper from '../components/Wrapper';
import ProductOverview from '../components/ProductOverview';
import ProfitChart from '../components/ProfitChart';
import OperationList from '../components/OperationList';
import Link from 'next/link';

import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Sparkles,
  TvMinimalPlay,
  Wallet,
  Users,
} from 'lucide-react';

export default async function DashboardPage() {
  // ✅ utilisateur côté serveur
  const user = await currentUser();

  // ❌ utilisateur non connecté
  if (!user) {
    return (
      <Wrapper>
        <div className="mx-auto max-w-4xl py-24 px-4">
          <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-[0_40px_120px_rgba(15,23,42,0.35)]">
            <div className="relative overflow-hidden px-8 py-20 sm:px-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.16),transparent_30%)]" />

              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  Dashboard DGoLive
                </div>

                <h1 className="mt-8 text-5xl font-black tracking-tight">
                  Accédez à votre tableau de bord intelligent
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Consultez vos statistiques, revenus, opérations et performances live.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link href="/sign-in" className="btn btn-primary btn-lg rounded-full px-10">
                    Se connecter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>

                  <Link
                    href="/"
                    className="btn btn-outline btn-lg rounded-full border-white/20 px-10 text-white hover:border-primary hover:text-primary"
                  >
                    Retour à l'accueil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }

  // ✅ email sécurisé
  const email =
    user.primaryEmailAddress?.emailAddress ||
    user.emailAddresses?.[0]?.emailAddress;

  if (!email) {
    return (
      <Wrapper>
        <div className="alert alert-error mt-6">
          Aucun email utilisateur trouvé.
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="space-y-10 pb-10">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-[0_40px_120px_rgba(15,23,42,0.25)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.20),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.16),transparent_30%)]" />

          <div className="relative px-6 py-12 sm:px-10 sm:py-16">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                  <TvMinimalPlay className="w-4 h-4 text-primary" />
                  Tableau de bord DGoLive
                </div>

                <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                  Bienvenue {user.firstName || 'sur DGoLive'}
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Analysez vos performances et gérez vos ventes live.
                </p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 lg:w-[420px]">

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <p className="mt-4 text-sm text-slate-400">Statistiques</p>
                  <h3 className="mt-2 text-2xl font-black">Temps réel</h3>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <Wallet className="w-6 h-6 text-pink-400" />
                  <p className="mt-4 text-sm text-slate-400">Revenus</p>
                  <h3 className="mt-2 text-2xl font-black">Suivi précis</h3>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <Users className="w-6 h-6 text-secondary" />
                  <p className="mt-4 text-sm text-slate-400">Clients</p>
                  <h3 className="mt-2 text-2xl font-black">Gestion rapide</h3>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  <p className="mt-4 text-sm text-slate-400">Sécurité</p>
                  <h3 className="mt-2 text-2xl font-black">Clerk sécurisé</h3>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="grid grid-cols-1 gap-8 xl:grid-cols-12">

          <div className="xl:col-span-7 space-y-8">
            <div className="rounded-[2rem] bg-base-100 shadow-xl">
              <div className="border-b px-8 py-6">
                <h2 className="text-2xl font-black">Vue générale</h2>
              </div>
              <div className="p-8">
                <ProductOverview email={email} />
              </div>
            </div>

            <div className="rounded-[2rem] bg-base-100 shadow-xl">
              <div className="border-b px-8 py-6">
                <h2 className="text-2xl font-black">Analyse des profits</h2>
              </div>
              <div className="p-8">
                <ProfitChart email={email} />
              </div>
            </div>
          </div>

          <div className="xl:col-span-5">
            <div className="sticky top-6 rounded-[2rem] bg-base-100 shadow-xl">
              <div className="border-b px-8 py-6">
                <h2 className="text-2xl font-black">Activités récentes</h2>
              </div>
              <div className="max-h-[850px] overflow-y-auto p-8">
                <OperationList email={email} />
              </div>
            </div>
          </div>

        </section>
      </div>
    </Wrapper>
  );
}