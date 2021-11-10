const initCount = {
    count: 100
}

const reducer = (state = initCount, action) => {
    switch (action.type) {
        case 'Increment': {
            return {
                count: state.count + 1
            }
        }
        case 'Decrement': {
            return {
                count: state.count - 1
            }
        }
        default: {
            return initCount
        }
    }
}
export default reducer