const Reducer = (state, action) => {
    switch (action.type) {
        case "ANALYTICS":
            return {
                ui: action.payload,
            };
        case "PRODUCTS":
            return {
                ui: action.payload
            };
        case "VIEW":
            return {
                ui: action.payload
            };
            case "ORDERS":
                return {
                    ui: action.payload
                };
        default:
            return state;
        
    }
};

export default Reducer;