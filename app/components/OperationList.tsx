'use client';

import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';

import { readOperations } from '@/app/actions';

import { Operation } from '@prisma/client';

import {
  ArrowDownCircle,
  ArrowUpCircle,
  CalendarRange,
  DollarSign,
  RefreshCcw,
  Wallet,
} from 'lucide-react';

interface OperationListProps {
  email: string;
}

const OperationList = ({
  email,
}: OperationListProps) => {
  const [operations, setOperations] =
    useState<Operation[]>([]);

  const [balance, setBalance] =
    useState<number>(0);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState<
    string | null
  >(null);

  const today = new Date();

  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(
    today.getDate() - 7
  );

  const [startDate, setStartDate] =
    useState<string>(
      sevenDaysAgo
        .toISOString()
        .split('T')[0]
    );

  const [endDate, setEndDate] =
    useState<string>(
      today.toISOString().split('T')[0]
    );

  const [
    appliedStartDate,
    setAppliedStartDate,
  ] = useState(startDate);

  const [
    appliedEndDate,
    setAppliedEndDate,
  ] = useState(endDate);

  const [currentPage, setCurrentPage] =
    useState<number>(1);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchOperations =
      async () => {
        try {
          setLoading(true);

          const {
            operations,
            balance,
          } = await readOperations(
            email
          );

          setOperations(operations);

          setBalance(balance);

          setError(null);
        } catch (err) {
          setError(
            err instanceof Error
              ? err.message
              : 'Une erreur est survenue'
          );
        } finally {
          setLoading(false);
        }
      };

    fetchOperations();

    const interval = setInterval(
      fetchOperations,
      10000
    );

    return () =>
      clearInterval(interval);
  }, [email]);

  const handleApplyFilter = () => {
    setAppliedStartDate(startDate);

    setAppliedEndDate(endDate);

    setCurrentPage(1);
  };

  const filteredOperations =
    useMemo(() => {
      return operations.filter((op) => {
        const created = new Date(
          op.createdAt
        ).getTime();

        const start = new Date(
          appliedStartDate
        ).getTime();

        const end = new Date(
          appliedEndDate
        ).getTime();

        return (
          created >= start &&
          created <= end + 86400000
        );
      });
    }, [
      operations,
      appliedStartDate,
      appliedEndDate,
    ]);

  const totalPages = Math.ceil(
    filteredOperations.length /
      itemsPerPage
  );

  const paginatedOperations =
    filteredOperations.slice(
      (currentPage - 1) *
        itemsPerPage,
      currentPage * itemsPerPage
    );

  const totalIncome =
    filteredOperations
      .filter(
        (op) => op.amount > 0
      )
      .reduce(
        (sum, op) =>
          sum + op.amount,
        0
      );

  const totalExpense =
    filteredOperations
      .filter(
        (op) => op.amount < 0
      )
      .reduce(
        (sum, op) =>
          sum + Math.abs(op.amount),
        0
      );

  return (
    <div className="mt-6 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-primary/20 p-4">
            <Wallet className="h-8 w-8 text-primary" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Activités financières
            </h2>

            <p className="text-sm opacity-70">
              Historique des 7 derniers
              jours
            </p>
          </div>
        </div>

        <button
          className="btn btn-outline btn-sm rounded-xl"
          onClick={() =>
            window.location.reload()
          }
        >
          <RefreshCcw className="w-4 h-4" />
          Actualiser
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="rounded-2xl bg-base-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-success" />

            <span className="text-sm opacity-70">
              Solde caisse
            </span>
          </div>

          <p className="text-lg md:text-2xl font-bold text-success break-words">
            {balance.toLocaleString(
              'fr-FR'
            )}{' '}
            Ar
          </p>
        </div>

        <div className="rounded-2xl bg-base-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <ArrowUpCircle className="w-5 h-5 text-green-500" />

            <span className="text-sm opacity-70">
              Entrées
            </span>
          </div>

          <p className="text-lg md:text-2xl font-bold text-green-500 break-words">
            {totalIncome.toLocaleString(
              'fr-FR'
            )}{' '}
            Ar
          </p>
        </div>

        <div className="rounded-2xl bg-base-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <ArrowDownCircle className="w-5 h-5 text-red-500" />

            <span className="text-sm opacity-70">
              Sorties
            </span>
          </div>

          <p className="text-lg md:text-2xl font-bold text-red-500 break-words">
            {totalExpense.toLocaleString(
              'fr-FR'
            )}{' '}
            Ar
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-sm mb-1 block">
            Date début
          </label>

          <input
            type="date"
            value={startDate}
            onChange={(e) =>
              setStartDate(
                e.target.value
              )
            }
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="text-sm mb-1 block">
            Date fin
          </label>

          <input
            type="date"
            value={endDate}
            onChange={(e) =>
              setEndDate(
                e.target.value
              )
            }
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={
              handleApplyFilter
            }
            className="btn btn-primary w-full rounded-xl"
          >
            <CalendarRange className="w-4 h-4" />
            Valider période
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : error ? (
        <div className="rounded-2xl bg-error/10 border border-error/20 p-6 text-center">
          <p className="text-error font-semibold">
            {error}
          </p>
        </div>
      ) : filteredOperations.length ===
        0 ? (
        <div className="rounded-2xl bg-base-200 p-10 text-center">
          <p className="text-lg font-medium opacity-70">
            Aucune activité trouvée
          </p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-2xl border border-base-300">
            <table className="table">
              <thead className="bg-base-200">
                <tr>
                  <th>Date</th>

                  <th>Type</th>

                  <th className="text-right">
                    Montant
                  </th>

                  <th>Motif</th>
                </tr>
              </thead>

              <tbody>
                {paginatedOperations.map(
                  (op) => (
                    <tr
                      key={op.id}
                      className="hover"
                    >
                      <td className="whitespace-nowrap">
                        {new Date(
                          op.createdAt
                        ).toLocaleDateString(
                          'fr-FR',
                          {
                            day: '2-digit',
                            month:
                              '2-digit',
                            year:
                              'numeric',
                          }
                        )}
                      </td>

                      <td>
                        <div className="badge badge-outline">
                          {
                            op.operationType
                          }
                        </div>
                      </td>

                      <td
                        className={`text-right font-bold ${
                          op.amount >= 0
                            ? 'text-success'
                            : 'text-error'
                        }`}
                      >
                        {op.amount >= 0
                          ? '+'
                          : '-'}{' '}
                        {Math.abs(
                          op.amount
                        ).toLocaleString(
                          'fr-FR'
                        )}{' '}
                        Ar
                      </td>

                      <td>
                        {op.reason ||
                          '-'}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm opacity-70">
              {filteredOperations.length}{' '}
              opération(s)
            </div>

            <div className="flex items-center gap-3">
              <button
                className="btn btn-sm rounded-xl"
                onClick={() =>
                  setCurrentPage(
                    (p) =>
                      Math.max(
                        1,
                        p - 1
                      )
                  )
                }
                disabled={
                  currentPage === 1
                }
              >
                ◀
              </button>

              <div className="rounded-xl bg-base-200 px-4 py-2 text-sm font-medium">
                Page {currentPage} /{' '}
                {totalPages || 1}
              </div>

              <button
                className="btn btn-sm rounded-xl"
                onClick={() =>
                  setCurrentPage(
                    (p) =>
                      Math.min(
                        totalPages,
                        p + 1
                      )
                  )
                }
                disabled={
                  currentPage ===
                  totalPages
                }
              >
                ▶
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OperationList;