"use client";

import { RecordCircleFill } from "react-bootstrap-icons";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { COLORS } from "/data/Theme";

const data = [
  { month: "Jan", thisWeek: 0, lastWeek: 20 },
  { month: "Feb", thisWeek: 45, lastWeek: 35 },
  { month: "Mar", thisWeek: 85, lastWeek: 50 },
  { month: "Apr", thisWeek: 40, lastWeek: 25 },
  { month: "May", thisWeek: 0, lastWeek: 5 },
  { month: "Jun", thisWeek: 20, lastWeek: 35 },
  { month: "Jul", thisWeek: 50, lastWeek: 62 },
  { month: "Aug", thisWeek: 38, lastWeek: 30 },
  { month: "Sep", thisWeek: 25, lastWeek: 5 },
  { month: "Oct", thisWeek: 45, lastWeek: 40 },
  { month: "Nov", thisWeek: 75, lastWeek: 92 },
  { month: "Dec", thisWeek: 60, lastWeek: 42 },
];

export default function SchoolPerformance() {
  return (
    <section>
      <div className="rounded-4 mb-lg-4 mb-2 p-4 bg-light">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="card-title fw-bold mb-0">School Performance</h2>

          <div className="icon-link gap-3">
            <div className="d-flex flex-column justify-content-between align-items-center">
              <span className="text-gray-400"><RecordCircleFill className="me-1 text-warning"/>
              This Week</span>
             {1.245}
            </div>

            <div className="d-flex flex-column justify-content-between align-items-center">
              <span className="text-gray-400">
                  <RecordCircleFill className="me-1 text-info"/>
              
              Last Week
              </span>
              {1.356}
           
            </div>
          </div>
        </div>

        <div className="w-100" style={{height: 300 }}>
          <ResponsiveContainer height="100%" width="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="yellowFill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={COLORS.yellow}
                    stopOpacity={0.35}
                  />
                  <stop
                    offset="95%"
                    stopColor={COLORS.yellow}
                    stopOpacity={0}
                  />
                </linearGradient>

                <linearGradient id="orangeFill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={COLORS.orange}
                    stopOpacity={0.35}
                  />
                  <stop
                    offset="95%"
                    stopColor={COLORS.orange}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                stroke="#e5e7eb"
                horizontal={false}
                vertical={true}
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="thisWeek"
                stroke={COLORS.yellow}
                strokeWidth={6}
                fill="url(#yellowFill)"
              />

              <Area
                type="monotone"
                dataKey="lastWeek"
                stroke={COLORS.orange}
                strokeWidth={6}
                fill="url(#orangeFill)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}