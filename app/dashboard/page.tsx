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
  const user = await currentUser();

  if (!user) {
    return (
      <Wrapper>
        <div className="mx-auto max-w-4xl py-24 px-4">
          <div className="rounded-[2rem] bg-slate-950 text-white p-10">
            <h1 className="text-3xl font-bold">Connexion requise</h1>
          </div>
        </div>
      </Wrapper>
    );
  }

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
      <div className="space-y-8 pb-10">

       {/* HERO */}
<section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 text-white shadow-xl">

  <div className="relative px-8 py-14 sm:px-12 sm:py-20">

    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">

      {/* LEFT TEXT */}
      <div className="max-w-2xl">

        <div className="inline-flex items-center gap-2 text-xs opacity-70 tracking-widest">
          <TvMinimalPlay className="w-5 h-5" />
          DASHBOARD
        </div>

        <h1 className="text-5xl sm:text-6xl font-black mt-6 leading-tight">
          Bienvenue <span className="text-primary">{user.firstName || 'user'}</span>
        </h1>

        <p className="text-slate-300 mt-4 text-lg sm:text-xl leading-relaxed max-w-xl">
          Analyse en temps réel de tes ventes, profits et performances live.
        </p>

      </div>

      {/* STATS BIGGER CARDS */}
      <div className="grid grid-cols-2 gap-4 lg:w-[420px]">

        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition">
          <BarChart3 className="w-6 h-6 text-blue-400" />
          <p className="text-xs mt-3 opacity-60">Statistiques</p>
          <p className="font-bold text-lg mt-1">Temps réel</p>
        </div>

        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition">
          <Wallet className="w-6 h-6 text-pink-400" />
          <p className="text-xs mt-3 opacity-60">Revenus</p>
          <p className="font-bold text-lg mt-1">Suivi précis</p>
        </div>

        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition">
          <Users className="w-6 h-6 text-green-400" />
          <p className="text-xs mt-3 opacity-60">Clients</p>
          <p className="font-bold text-lg mt-1">Gestion rapide</p>
        </div>

        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition">
          <ShieldCheck className="w-6 h-6 text-emerald-400" />
          <p className="text-xs mt-3 opacity-60">Sécurité</p>
          <p className="font-bold text-lg mt-1">Clerk sécurisé</p>
        </div>

      </div>

    </div>
  </div>

</section>
        {/* MAIN GRID */}
        <section className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

          {/* LEFT */}
          <div className="xl:col-span-7 space-y-6">

            <div className="bg-base-100 rounded-3xl shadow-lg">
              <div className="border-b px-6 py-5">
                <h2 className="font-bold text-xl">Vue générale</h2>
              </div>
              <div className="p-6">
                <ProductOverview email={email} />
              </div>
            </div>

            {/* IMPORTANT FIX CHART */}
            <div className="bg-base-100 rounded-3xl shadow-lg">
              <div className="border-b px-6 py-5">
                <h2 className="font-bold text-xl">Analyse des profits</h2>
              </div>

              {/* FIX CRUCIAL: height wrapper obligatoire */}
              <div className="p-4">
                <div className="w-full h-[340px]">
                  <ProfitChart email={email} />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="xl:col-span-5">

            <div className="sticky top-6 bg-base-100 rounded-3xl shadow-lg">

              <div className="border-b px-6 py-5 flex justify-between">
                <h2 className="font-bold text-xl">Activités récentes</h2>
                <span className="text-xs opacity-50">Live</span>
              </div>

              <div className="p-4 max-h-[680px] overflow-y-auto">
                <OperationList email={email} />
              </div>

            </div>

          </div>

        </section>

      </div>
    </Wrapper>
  );
}