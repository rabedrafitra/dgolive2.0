'use client';

import React, { useEffect, useMemo, useState } from 'react';

import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ComposedChart,
  Cell,
  Area,
} from 'recharts';

import {
  readLives,
  getOrdersByLiveId,
} from '@/app/actions';

import EmptyState from './EmptyState';

import {
  TrendingUp,
  TrendingDown,
  Wallet,
  ShoppingCart,
  Activity,
  CalendarRange,
} from 'lucide-react';

interface ProfitChartProps {
  email: string;
}

interface ProfitData {
  date: string;
  profit: number;
  orderCount: number;
  totalPaidAndCollected: number;
  liveSessionCount: number;
}

const ProfitChart = ({
  email,
}: ProfitChartProps) => {
  const [profitData, setProfitData] = useState<
    ProfitData[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [startDate, setStartDate] =
    useState<string>(
      new Date(
        new Date().setDate(
          new Date().getDate() - 30
        )
      )
        .toISOString()
        .split('T')[0]
    );

  const [endDate, setEndDate] =
    useState<string>(
      new Date()
        .toISOString()
        .split('T')[0]
    );

  const [appliedStartDate, setAppliedStartDate] =
    useState(startDate);

  const [appliedEndDate, setAppliedEndDate] =
    useState(endDate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!email) return;

        setLoading(true);

        const livesData =
          await readLives(email);

        if (!livesData) {
          setProfitData([]);

          return;
        }

        const dataByDate: {
          [date: string]: ProfitData;
        } = {};

        for (const live of livesData) {
          const orders =
            await getOrdersByLiveId(
              live.id
            );

          const ordersArray = Object.values(
            orders || {}
          ).flat();

          const totalPaidAndCollected =
            ordersArray.reduce(
              (
                sum: number,
                item: {
                  price: number;
                  isDeliveredAndPaid: boolean;
                }
              ) =>
                sum +
                (item.isDeliveredAndPaid
                  ? item.price
                  : 0),
              0
            );

          const orderCount =
            ordersArray.filter(
              (item) =>
                item.isDeliveredAndPaid
            ).length;

          const profit =
            totalPaidAndCollected -
            (live.purchasePrice ?? 0);

          const date = new Date(
            live.date
          ).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          });

          if (!dataByDate[date]) {
            dataByDate[date] = {
              date,
              profit: 0,
              orderCount: 0,
              totalPaidAndCollected: 0,
              liveSessionCount: 0,
            };
          }

          dataByDate[date].profit +=
            profit;

          dataByDate[date].orderCount +=
            orderCount;

          dataByDate[
            date
          ].totalPaidAndCollected +=
            totalPaidAndCollected;

          dataByDate[
            date
          ].liveSessionCount += 1;
        }

        const finalData =
          Object.values(dataByDate).sort(
            (a, b) =>
              new Date(
                a.date
                  .split('/')
                  .reverse()
                  .join('-')
              ).getTime() -
              new Date(
                b.date
                  .split('/')
                  .reverse()
                  .join('-')
              ).getTime()
          );

        setProfitData(finalData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [email]);

  const handleApplyFilter = () => {
    setAppliedStartDate(startDate);

    setAppliedEndDate(endDate);
  };

  const filteredData = useMemo(() => {
    return profitData.filter((data) => {
      const dataDate = new Date(
        data.date
          .split('/')
          .reverse()
          .join('-')
      );

      return (
        dataDate >=
          new Date(appliedStartDate) &&
        dataDate <=
          new Date(appliedEndDate)
      );
    });
  }, [
    profitData,
    appliedStartDate,
    appliedEndDate,
  ]);

  const totalProfit =
    filteredData.reduce(
      (sum, data) =>
        sum + data.profit,
      0
    );

  const totalOrders =
    filteredData.reduce(
      (sum, data) =>
        sum + data.orderCount,
      0
    );

  const totalRevenue =
    filteredData.reduce(
      (sum, data) =>
        sum +
        data.totalPaidAndCollected,
      0
    );

  const totalLives =
    filteredData.reduce(
      (sum, data) =>
        sum +
        data.liveSessionCount,
      0
    );

  return (
    <div className="mt-6 rounded-3xl bg-base-100 p-6 shadow-2xl border border-base-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-primary/20">
          <Activity className="w-7 h-7 text-primary" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Analyse des performances
          </h2>

          <p className="text-sm opacity-70">
            Graphique dynamique des profits
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-base-200 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Wallet className="w-5 h-5 text-success" />

            <span className="text-sm opacity-70">
              Profit
            </span>
          </div>

          <p
            className={`text-lg md:text-xl font-bold break-words leading-tight ${
              totalProfit >= 0
                ? 'text-success'
                : 'text-error'
              }`}
            >
            {totalProfit.toLocaleString(
              'fr-FR'
            )}{' '}
            Ar
          </p>
        </div>

        <div className="bg-base-200 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <ShoppingCart className="w-5 h-5 text-info" />

            <span className="text-sm opacity-70">
              Commandes
            </span>
          </div>

          <p className="text-lg md:text-xl font-bold break-words leading-tight">
            {totalOrders}
          </p>
        </div>

        <div className="bg-base-200 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-primary" />

            <span className="text-sm opacity-70">
              Chiffre d'affaires
            </span>
          </div>

          <p className="text-lg md:text-xl font-bold break-words leading-tight">
            {totalRevenue.toLocaleString(
              'fr-FR'
            )}{' '}
            Ar
          </p>
        </div>

        <div className="bg-base-200 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <CalendarRange className="w-5 h-5 text-warning" />

            <span className="text-sm opacity-70">
              Sessions
            </span>
          </div>

          <p className="text-2xl font-bold">
            {totalLives}
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
            onClick={handleApplyFilter}
            className="btn btn-primary w-full rounded-xl"
          >
            Valider la période
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : filteredData.length === 0 ? (
        <EmptyState
          message="Aucune donnée disponible"
          IconComponent="TrendingUp"
        />
      ) : (
        <div className="h-[420px] w-full">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <ComposedChart
              data={filteredData}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                opacity={0.1}
              />

              <XAxis dataKey="date" />

              <YAxis />

              <Tooltip
                contentStyle={{
                  borderRadius: 16,
                  border: 'none',
                }}
              />

              <Area
                type="monotone"
                dataKey="totalPaidAndCollected"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.08}
              />

              <Bar
                dataKey="profit"
                radius={[8, 8, 0, 0]}
              >
                {filteredData.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        entry.profit >= 0
                          ? '#10B981'
                          : '#EF4444'
                      }
                    />
                  )
                )}
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>

          <div className="mt-4 flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <span>
                Profit positif
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>

              <span>Perte</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfitChart;