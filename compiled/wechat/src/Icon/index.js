Component({
    properties: {
        type: {
            value: '',
            type: String,
        },
        color: {
            type: String,
        },
        style: {
            type: String,
        },
        className: {
            type: String,
        },
    },
    options: {
        //@ts-ignore
        styleIsolation: 'shared',
    },
});
export {};
