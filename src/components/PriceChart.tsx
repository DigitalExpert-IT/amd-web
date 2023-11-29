import React from "react";
import { Box } from "@chakra-ui/react";

interface PriceChartProps {
  points: [number, number][];
}

const PriceChart: React.FC<PriceChartProps> = ({ points }) => {
  return (
    <Box overflow="hidden" width="100%" height="100%">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 287 100">
        <polygon
          points={`${points
            .map(p => `${p[0]},${p[1]}`)
            .join(" ")} 287,100 0,100`}
        />
        <polyline points={points.map(p => `${p[0]},${p[1]}`).join(" ")} />
      </svg>
    </Box>
  );
};

export default PriceChart;
