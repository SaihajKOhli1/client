import CompanyLayout from "@/components/CompanyLayout";
import Row1 from "@/scenes/dashboard/Row1";
import Row2 from "@/scenes/dashboard/Row2";
import Row3 from "@/scenes/dashboard/Row3";

const ProcterGamble = () => {
  // Fetch data specific to Procter & Gamble here if needed.
  return (
    <CompanyLayout row1={<Row1 />} row2={<Row2 />} row3={<Row3 />} />
  );
};

export default ProcterGamble;

