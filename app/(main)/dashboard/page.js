export const metadata = {
  title: "Dashboard",
  description:
  "Monitor student admissions, enrollment statistics, tuition payments, academic performance, events, and school operations from a centralized administration dashboard.",
  
  keywords: [
    "school performance",
    "school calendar",
    "student management",
    "fee management",
    "school finance",
  ],
}

import DashboardContent from "./component/DashboardContent";
const DashboardPage = () => {
  return (
    <DashboardContent />
  );
};

export default DashboardPage;
