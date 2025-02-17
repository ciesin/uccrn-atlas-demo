import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";

export const leczRenderer = new UniqueValueRenderer({
    field: "Value",
    uniqueValueInfos: [
        {
            value: 5,
            symbol: {
                type: "simple-fill",
                color: [0, 50, 255, 0.5], // Red with 50% opacity
                outline: { width: 0 }
            },
            label: "Value 1"
        },
        {
            value: 10,
            symbol: {
                type: "simple-fill",
                color: [0, 100, 240, 0.5], // Green with 50% opacity
                outline: { width: 0 }
            },
            label: "Value 2"
        },
        {
            value: 31,
            symbol: {
                type: "simple-fill",
                color: [0, 0, 0, 0], // Blue with 50% opacity
                outline: { width: 0 }
            },
            label: "Value 3"
        }
    ],
    defaultSymbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0], // Transparent
        outline: { width: 0 }
    },
    defaultLabel: "No Data"
});