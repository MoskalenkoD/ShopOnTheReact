const deviceReducer = (state = { listDevices: []}, action) => {
    switch (action.type) {
        case 'FIND_DEVICE': {
            return {listDevices: [action.result], status: false};
        }
        case 'ALL_DEVICES': {
            return {listDevices: action.result, status: true};
        }
        default: {
            return state;
        }
    }
};

export default deviceReducer;
