
export const UPDATE = 'UPDATE';


const update = payload => {
    return{
        type: UPDATE,
        payload,
    };
    
}

export {update};