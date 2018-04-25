const mutation = {
  setcompanyActive(state,data){
     state.companyName = data.companyName;
     state.companyCode = data.companyCode;
     state.info = data;
     state.maiden = true;
  }
  
}

export default mutation
