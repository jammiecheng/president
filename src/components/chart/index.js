import { Bar, BarChart, ResponsiveContainer } from "recharts";

export function CustomBarChart({ type }) {
  return (
    <ResponsiveContainer>
      <BarChart>
        <Bar />
      </BarChart>
    </ResponsiveContainer>
  );
}
