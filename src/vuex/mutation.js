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
  },
  setlngActive(state,data){
     state.lng = data.lng;
     state.lat = data.lat;
  },
  setuidActive(state,uid){
     state.uid = uid;
     
  },
  setThreeActive(state,data){
     state.currentAddress = data.currentAddress;
     state.currentPoint = data.currentPoint;
     state.currentCity = data.currentCity;
     state.currentCode = data.currentCode;
  },
   setfirstTimeActive(state){
     state.firstTime = true;
  },
  setordernoActive(state,orderno){
     state.orderno = orderno;
     
  }
  
}

export default mutation
