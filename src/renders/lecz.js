import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";

export const lecz = new UniqueValueRenderer({
    field: "Value",
    uniqueValueInfos: [
        {
            value: 5,
            symbol: {
                type: "simple-fill",
                color: [0, 50, 255, 0.5], // Red with 50% opacity
                outline: { width: 0 }
            },
            label: "5m"
        },
        {
            value: 10,
            symbol: {
                type: "simple-fill",
                color: [0, 100, 240, 0.5], // Green with 50% opacity
                outline: { width: 0 }
            },
            label: "10m"
        },
        {
            value: 31,
            symbol: {
                type: "simple-fill",
                color: [0, 0, 0, 0], // Blue with 50% opacity
                outline: { width: 0 }
            },
            label: "31m"
        }
    ],
    defaultSymbol: {
        type: "simple-fill",
        color: [0, 0, 0, 1], // Transparent
        outline: { width: 0 }
    },
    defaultLabel: "No Data"
});