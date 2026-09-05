"use client"
import { RecordCircleFill } from "react-bootstrap-icons";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { COLORS } from "/data/Theme";
const data = [
    { day: "Mon", thisWeek: 75, lastWeek: 98 },
    { day: "Tue", thisWeek: 55, lastWeek: 44 },
    { day: "Wed", thisWeek: 30, lastWeek: 37 },
    { day: "Thu", thisWeek: 40, lastWeek: 50 },
    { day: "Fri", thisWeek: 20, lastWeek: 29 },
    { day: "Sat", thisWeek: 82, lastWeek: 66 },
    { day: "Sun", thisWeek: 54, lastWeek: 74 },
];


const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="bg-primary text-light rounded-3 p-2 border-1"
    >
      <p className="mb-1 fw-bold">{label}%</p>

      {/* <p className="mb-0 text-warning">
        This Week: {payload[0]?.value}
      </p>

      <p className="mb-0 text-info">
        Last Week: {payload[1]?.value}
      </p> */}
    </div>)
}




const SchoolFinance = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2 gap-xl-3">
                <h2 className="card-title fw-bold mb-0">School Finance</h2>

                <div className="icon-link gap-3 flex-shrink-0">
                    <div className="d-flex flex-column justify-content-between align-items-center">
                        <span className="text-gray-400"><RecordCircleFill className="me-1 text-warning" />
                            This Week</span>
                        {1.245}
                    </div>

                    <div className="d-flex flex-column justify-content-between align-items-center">
                        <span className="text-gray-400">
                            <RecordCircleFill className="me-1 text-info" />

                            Last Week
                        </span>
                        {1.356}

                    </div>
                </div>
            </div>
            <div className="w-100" style={{ height: 310 }}>
                <ResponsiveContainer height="100%" width={"100%"}>
                    <BarChart
                        data={data}
                        barGap={6}
                        barCategoryGap="25%"
                        margin={{
                            top: 20,
                            right: 0,
                            left: -25,
                            bottom: 20,
                        }}
                    >
                        <CartesianGrid
                            stroke="#ECECF5"
                            vertical={true}
                        />

                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            domain={[0, 100]}
                            tickCount={6}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            cursor={{ fill: "transparent" }}
                            content={<CustomTooltip />}
                        />

                        <Bar
                            dataKey="thisWeek"
                            fill={COLORS.orange}
                            radius={[20, 20, 0, 0]}
                            barSize={12}
                        />

                        <Bar
                            dataKey="lastWeek"
                            fill={COLORS.yellow}
                            radius={[20, 20, 0, 0]}
                            barSize={12}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </>
    )
}

export default SchoolFinance
