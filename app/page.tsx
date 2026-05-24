'use client';

import { useUser } from '@clerk/nextjs';
import Wrapper from './components/Wrapper';
import ProductOverview from './components/ProductOverview';
import ProfitChart from './components/ProfitChart';
import OperationModal from './components/OperationModal';
import OperationList from './components/OperationList';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Home() {
  const { user, isLoaded } = useUser();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // ⛔ attendre Clerk
  if (!isLoaded) {
    return (
      <Wrapper>
        <div className="flex justify-center items-center h-[300px]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </Wrapper>
    );
  }

  const email = user?.primaryEmailAddress?.emailAddress;

  // ⛔ sécurité supplémentaire
  if (!email) {
    return (
      <Wrapper>
        <div className="alert alert-error">
          Aucun email utilisateur trouvé.
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="flex flex-col space-y-6 p-4">

        <div className="w-full flex justify-between items-center">
          <div className="flex-1">
            <ProductOverview email={email} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="w-full bg-base-100 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <ProfitChart email={email} />
          </div>

          <div className="w-full bg-base-100 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">

            <button
              className="btn btn-primary flex items-center gap-2 mb-4"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus className="w-5 h-5" />
              Opération
            </button>

            <OperationList email={email} />
          </div>
        </div>

        <OperationModal
          email={email}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </Wrapper>
  );
}