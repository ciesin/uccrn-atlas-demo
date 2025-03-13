import ClassBreaksRenderer from "@arcgis/core/renderers/ClassBreaksRenderer";

export const uhi = new ClassBreaksRenderer({
  defaultLabel: "No Data",
  field: "Pixel Value",
  defaultSymbol: {
    type: "simple-fill",
    color: [0, 0, 0, 0],
    outline: { width: 0 }
  },
  classBreakInfos: [
    {
      minValue: -7.216,
      maxValue: 0,
      symbol: {
        type: "simple-fill",
        color: [100, 149, 237],
        outline: { width: 0 }
      },
      label: "< 0°C"
    },
    {
      minValue: 0,
      maxValue: 1,
      symbol: {
        type: "simple-fill",
        color: [173, 216, 230], // Darker blue color
        outline: { width: 0 }
      },
      label: "0 - 1°C"
    },
    {
      minValue: 1,
      maxValue: 2,
      symbol: {
        type: "simple-fill",
        color: [254, 204, 92],
        outline: { width: 0 }
      },
      label: "1 - 2°C"
    },
    {
      minValue: 2,
      maxValue: 3,
      symbol: {
        type: "simple-fill",
        color: [253, 141, 60],
        outline: { width: 0 }
      },
      label: "2 - 3°C"
    },
    {
      minValue: 3,
      maxValue: 4,
      symbol: {
        type: "simple-fill",
        color: [240, 59, 32],
        outline: { width: 0 }
      },
      label: "3 - 4°C"
    },
    {
      minValue: 4,
      maxValue: 5,
      symbol: {
        type: "simple-fill",
        color: [189, 0, 38],
        outline: { width: 0 }
      },
      label: "4 - 5°C"
    },
    {
      minValue: 5,
      maxValue: 16,
      symbol: {
        type: "simple-fill",
        color: [167, 0, 38],
        outline: { width: 0 }
      },
      label: "> 5°C"
    }
  ]
});