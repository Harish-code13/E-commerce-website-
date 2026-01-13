
export const createPayment=(orderId)=>async (dispatch)=>{
    dispatch({type: CREATE_PAYMENT_REQUEST});
    try{
        const {data}=await api.post(`/api/payments/${orderId}`);

        if(data.payment_link_url){
            window.location.href=data.payment_link_url;
        }
    }catch(error){
        dispatch({type: CREATE_PAYMENT_FAILURE, payload: error.message});
    }
}

export const updatePayment=(reqData)=>async (dispatch)=>{
    dispatch({type: UPDATE_PAYMENT_REQUEST});
    try{
        const {data}=await api.patch(`/api/payments/update/${reqData.paymentId}`, reqData);

        console.log("payment update data", data);
        dispatch({type: UPDATE_PAYMENT_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: UPDATE_PAYMENT_FAILURE, payload: error.message});
    }
}