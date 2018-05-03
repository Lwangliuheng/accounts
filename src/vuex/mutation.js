const mutation = {
  setcompanyActive(state,data){
     state.companyName = data.companyName;
     state.companyCode = data.companyCode;
     state.info = data;
     state.invitationCode = data.qcode;
     state.maiden = true;
  },
  setopenidActive(state,openid){
     state.openid = openid;
  },
  setcodeActive(state,code){
     state.code = code;
  }
  
}

export default mutation
