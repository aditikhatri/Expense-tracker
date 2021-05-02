const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case 'DELETE_TRANSACTION':
      transactions = state.filter((transaction) => transaction.id !== action.payload);
//storing locally
      localStorage.setItem('transactions', JSON.stringify(transactions));

      return transactions;
    case 'ADD_TRANSACTION':
      transactions = [action.payload, ...state];
// add data and keep rest same,...state is to spread data
      localStorage.setItem('transactions', JSON.stringify(transactions));

      return transactions;
    default:
      return state;
  }
};

export default contextReducer;

// for backend => Localstorage api :localStorage stores key-value pairs. So to store a entire javascript object we need to serialize it first
//Then to retrieve it from the store and convert to an object again

//using hooks to mainatain state with usestate ,benefits if using hooks is helps in sharing stateful logic without rendering props .
//using context api to share data among components
//consuming context data with usecontext hook.