import { Area, CartesianGrid, ComposedChart, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { COLORS } from "/data/Theme";

const BalanceAnalyticChart = () => {
    const monthlyBalanceData = [
        { month: "Jan", expense: 5, income: 10 },
        { month: "Feb", expense: 28, income: 45 },
        { month: "Mar", expense: 50, income: 85 },
        { month: "Apr", expense: 22, income: 40 },
        { month: "May", expense: 3, income: 8 },
        { month: "Jun", expense: 40, income: 50 },
        { month: "Jul", expense: 60, income: 52 },
        { month: "Aug", expense: 42, income: 38 },
        { month: "Sep", expense: 5, income: 30 },
        { month: "Oct", expense: 48, income: 55 },
        { month: "Nov", expense: 92, income: 78 },
        { month: "Dec", expense: 45, income: 62 },
    ];
    const BalanceAnalyticsTooltip = ({ active, payload, label }) => {
        if (!active) return null;
        return (
            <div className="bg-primary text-light rounded-3 p-2 border-1">
                <p className="mb-1 fw-bold">{label} 2026</p>

                <p className="mb-0 text-light">
                    Expense: {payload[0]?.value}
                </p>

                <p className="mb-0 text-light">
                    Income: {payload[1]?.value}
                </p>
            </div>)
    }
    return (
        <ResponsiveContainer
            className={"mw-100"}
            // width="100%"
            height={330}
        >
            <ComposedChart
                data={monthlyBalanceData}
                margin={{
                    top: 20,
                    right: 15,
                    left: -20,
                    bottom: 0,
                }}
            >

                <defs>

                    <linearGradient
                        id="expenseGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop
                            offset="0%"
                            stopColor={COLORS.yellow}
                            stopOpacity={0.35}
                        />

                        <stop
                            offset="100%"
                            stopColor={COLORS.yellow}
                            stopOpacity={0}
                        />

                    </linearGradient>

                    <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={COLORS.yellow} stopOpacity={0.35} />
                        <stop offset="100%" stopColor={COLORS.yellow} stopOpacity={0} />
                    </linearGradient>

                </defs>

                <CartesianGrid
                    vertical
                    horizontal={false}
                    stroke="#EEEEEE"
                />

                <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                        fill: "#9B9B9B",
                        fontSize: 13,
                    }}
                />

                <YAxis
                    domain={[0, 100]}
                    axisLine={false}
                    tickLine={false}
                    tick={{
                        fill: "#A3A3A3",
                        fontSize: 12,
                    }}
                />

                <Tooltip
                    cursor={false}
                    content={<BalanceAnalyticsTooltip />}
                />

                <ReferenceLine
                    x="Jul"
                    stroke="#D8D8D8"
                    strokeDasharray="4 4"
                />

                <Area
                    type="monotone"
                    dataKey="expense"
                    stroke="none"
                    fill="url(#expenseGradient)"
                />
                <Area
                    type="monotone"
                    dataKey="income"
                    stroke="none"
                    fill="url(#incomeGradient)"
                />

                <Line
                    type="monotone"
                    dataKey="expense"
                    stroke={COLORS.orange}
                    strokeWidth={3}
                    dot={false}
                    activeDot={{
                        r: 6,
                        fill: "#fff",
                        stroke: COLORS.orange,
                        strokeWidth: 3,
                    }}
                />

                <Line
                    type="monotone"
                    dataKey="income"
                    stroke={COLORS.yellow}
                    strokeWidth={3}
                    dot={false}
                    activeDot={{
                        r: 6,
                        fill: "#fff",
                        stroke: COLORS.yellow,
                        strokeWidth: 3,
                    }}
                />

            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default BalanceAnalyticChart
