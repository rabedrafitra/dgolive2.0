import Wrapper from '../components/Wrapper';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, Users } from 'lucide-react';

export default function Home() {
  return (
    <Wrapper>
      <div className="rounded-[2rem] overflow-hidden bg-slate-950 text-white shadow-[0_40px_120px_rgba(15,23,42,0.35)]">
        <div className="relative overflow-hidden px-6 py-16 sm:px-12 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.16),transparent_30%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-slate-300">
              <Sparkles className="w-4 h-4 text-pink-400" />
              Produit de INNOVAS MODE
            </p>
            <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Boostez vos ventes en direct avec un tableau de bord optimisé
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              DGoLive réunit gestion des clients, commandes et sessions live dans une interface claire, responsive et pensée pour la conversion.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/sign-in" className="btn btn-primary btn-lg rounded-full px-10 py-4 font-semibold shadow-xl shadow-primary/30 transition-transform duration-300 hover:-translate-y-0.5">
                Se connecter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/sign-up" className="btn btn-outline btn-lg rounded-full px-10 py-4 text-white border-white/30 hover:border-primary hover:text-primary">
                Créer un compte
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Inscription et connexion gérées par Clerk — Google Mail disponible comme méthode d’accès.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-primary/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Sécurité renforcée</h3>
              <p className="mt-3 text-sm text-slate-300">Vos données clients et transactions restent protégées avec Clerk.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-primary/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Gestion client fluide</h3>
              <p className="mt-3 text-sm text-slate-300">Ajoutez et suivez vos clients en direct pendant les sessions live.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-primary/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Résultats rapides</h3>
              <p className="mt-3 text-sm text-slate-300">Consultez vos performances et adaptez vos sessions sans perdre de temps.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-base-100 p-8 shadow-lg">
          <h2 className="text-xl font-semibold">Pourquoi DGoLive ?</h2>
          <p className="mt-4 text-sm text-slate-600">Une solution tout-en-un pour piloter vos sessions live, vos commandes et vos clients.</p>
          <ul className="mt-6 space-y-4 text-sm text-slate-600">
            <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />Live shopping optimisé</li>
            <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />Tableau de bord en temps réel</li>
            <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />Commandes et clients gérés ensemble</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-base-100 p-8 shadow-lg">
          <h2 className="text-xl font-semibold">Commencez rapidement</h2>
          <p className="mt-4 text-sm text-slate-600">Créez un compte et lancez votre première session live en quelques clics.</p>
          <div className="mt-6 space-y-4">
            <Link href="/sign-up" className="btn btn-primary w-full">Créer un compte</Link>
            <Link href="/sign-in" className="btn btn-outline w-full">Se connecter</Link>
          </div>
        </div>
        <div className="rounded-3xl bg-base-100 p-8 shadow-lg">
          <h2 className="text-xl font-semibold">Assistance dédiée</h2>
          <p className="mt-4 text-sm text-slate-600">Une équipe prête à vous accompagner pour configurer vos sessions et votre catalogue.</p>
          <p className="mt-6 text-sm font-semibold text-slate-700">Utilisez la page Contact pour obtenir plus d’infos.</p>
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-white shadow-xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <span className="inline-flex rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-700">Live shopping & mode</span>
            <h2 className="mt-6 text-3xl font-bold text-slate-900">Transformez votre marque de mode en expérience live immersive</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Mettez en valeur vos vêtements dans un cadre professionnel : ring light, défilés en direct, conseils stylisme et ventes instantanées. DGoLive permet de créer des présentations élégantes et dynamiques pour votre clientèle.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Live shopping en direct</h3>
                <p className="mt-3 text-sm text-slate-600">Diffusez vos collections et échangez en temps réel avec vos acheteurs.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Photographie professionnelle</h3>
                <p className="mt-3 text-sm text-slate-600">Appuyez-vous sur des visuels élégants pour renforcer l’image de marque de votre collection.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-transparent to-indigo-500/10" />
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80"
              alt="Business live shopping ring light"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl overflow-hidden bg-slate-950 text-white shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1000&q=80"
            alt="Vêtements de mode"
            className="h-64 w-full object-cover"
          />
          <div className="p-8">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Mode & style</span>
            <h3 className="mt-6 text-2xl font-bold">Collections de mode prêtes à vendre</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">Présentez vos pièces les plus élégantes avec une mise en page moderne qui attire instantanément l’attention.</p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden bg-white shadow-xl">
          <div className="relative h-64 overflow-hidden">
            <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Ring light studio
            </span>
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80"
              alt="Live shopping studio ring light"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.16),transparent_25%)]" />
          </div>
          <div className="p-8">
            <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Studio live</span>
            <h3 className="mt-6 text-2xl font-bold">Studio ring light renforcé</h3>
            <p className="mt-4 text-sm leading-6 text-slate-600">Donnez une allure ultra-pro à vos sessions mode grâce à un studio ring light, des visuels lumineux et un cadrage qui met en valeur chaque tenue.</p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden bg-white shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80"
            alt="Business fashion e-commerce"
            className="h-64 w-full object-cover"
          />
          <div className="p-8">
            <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Business / e-commerce</span>
            <h3 className="mt-6 text-2xl font-bold">Vendre plus sans effort</h3>
            <p className="mt-4 text-sm leading-6 text-slate-600">Pilotez la vente de vos collections mode avec des outils qui simplifient la prise de commande et le suivi client.</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
