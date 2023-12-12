import { useCrypto } from "hooks/useCrypto";
import React, { useEffect, useState } from "react";

const STROKE = 2;

interface Shape {
  x?: number;
  y: number;
  value?: number;
  label?: string;
}

interface LineChartProps {
  data: number;
  height: number;
  width: number;
  horizontalGuides: number;
  verticalGuides?: number;
  precision: number;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  height,
  width,
  horizontalGuides,
  verticalGuides,
  precision,
}) => {
  const getCrypto = useCrypto();
  const [latestData, setLatestData] =  useState<Shape[]>([])
  const FONT_SIZE = width / 50;
  const maximumXFromData = Math.max(...latestData.map((e, index) => index));
  const maximumYFromData = Math.max(...latestData.map((e) => e.y));

  const manageGraphData = (gapPrice : number) => {
    const normalizeData = {y: gapPrice}
    if(latestData.length < 7){
      setLatestData(prevState => [...prevState, normalizeData])
    } else if(latestData.length == 7){
      setLatestData(prevData => {
        const newArray = prevData.slice(1)
        newArray.push(normalizeData)
        return newArray;
      })
    }
  }


  useEffect(() => {
    const interval = setInterval(() => {
      if(getCrypto[data].price !== getCrypto[data].prevPrice){
        manageGraphData(getCrypto[data].price - getCrypto[data].prevPrice)
      }
    }, 10000)
    return () => {
      clearInterval(interval);
    };
  }, [getCrypto[data].priceChangePercent])

  const highAndLow = (id: number) => {
    return getCrypto[id].prevPrice
      ? getCrypto[id].price > getCrypto[id].prevPrice
        ? "#68D391"
        : "#FC8181"
      : "gray";
  };


  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

  const padding = (FONT_SIZE + digits) * 3;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const points = latestData
    .map((element, index) => {
      const x = (index / maximumXFromData) * chartWidth + padding;
      const y =
        chartHeight - (element.y / maximumYFromData) * chartHeight + padding;
      return `${x || 0}, ${y || 0}`;
    })
    .join(" ");


  const Axis: React.FC<{ points: string }> = ({ points }) => (
    <polyline fill="none" stroke="#ccc" strokeWidth=".5" points={points} />
  );

  const XAxis: React.FC = () => (
    <Axis
      points={`${padding}, ${height - padding} ${width - padding}, ${
        height - padding
      }`}
    />
  );

  const YAxis: React.FC = () => (
    <Axis points={`${padding}, ${padding} ${padding}, ${height - padding} `} />
  );

  const VerticalGuides: React.FC = () => {
    const guideCount = verticalGuides || latestData.length - 1;

    const startY = padding;
    const endY = height - padding;

    return new Array(guideCount).fill(0).map((_, index) => {
      const ratio = (index + 1) / guideCount;
      const xCoordinate = padding + ratio * (width - padding * 2);

      return (
        <React.Fragment key={index}>
          <polyline
            fill="none"
            stroke="#ccc"
            strokeWidth={0.5}
            points={`${xCoordinate}, ${startY} ${xCoordinate}, ${endY}`}
          />
        </React.Fragment>
      );
    });
  };

  const HorizontalGuides: React.FC = () => {
    const startX = padding;
    const endX = width - padding;

    return new Array(horizontalGuides).fill(0).map((_, index) => {
      const ratio = (index + 1) / horizontalGuides;
      const yCoordinate = chartHeight - chartHeight * ratio + padding;

      return (
        <React.Fragment key={index}>
          <polyline
            fill="none"
            stroke={"#ccc"}
            strokeWidth=".5"
            points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
          />
        </React.Fragment>
      );
    });
  };

  const LabelXAxis: React.FC = () => {
    const y = height - padding + FONT_SIZE * 2;

    return latestData.map((element, index) => {
      const x =
        (index / maximumXFromData) * chartWidth + padding - FONT_SIZE / 2;
      return (
        <text
          key={index}
          x={x}
          y={y}
          style={{
            fill: "#808080",
            fontSize: FONT_SIZE,
            fontFamily: "Helvetica",
          }}
        >
          {element.label}
        </text>
      );
    });
  };

  const LabelsYAxis: React.FC = () => {
    const PARTS = horizontalGuides;
    return new Array(PARTS + 1).fill(0).map((_, index) => {
      const x = FONT_SIZE;
      const ratio = index / horizontalGuides;
      const yCoordinate =
        chartHeight - chartHeight * ratio + padding + FONT_SIZE / 2;

      return (
        <text
          key={index}
          x={x}
          y={yCoordinate}
          style={{
            fill: "#808080",
            fontSize: FONT_SIZE,
            fontFamily: "Helvetica",
          }}
        >
          {Number((maximumYFromData * index) / PARTS).toFixed(precision)}
        </text>
      );
    });
  };

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      {/* <XAxis />
      <LabelXAxis />
      <YAxis />
      <LabelsYAxis /> */}
      {verticalGuides && <VerticalGuides />}
      <HorizontalGuides />
      <polyline
        fill="none"
        stroke={highAndLow(data)}
        strokeWidth={STROKE}
        points={points}
      />
    </svg>
  );
};

export default LineChart;
