export default (state = [], actions) => {
    switch(actions.type) {
        case '':
            return actions.payload;
        default:
            return state;
    }
};