import reqwest from 'reqwest';


module.exports={
  baseRequire:function (url,data,callback) {
    reqwest({
      url: url,
      method: 'POST',
      headers:{
        token:localStorage.getItem("token")
      },
      contentType:"application/json; charset=UTF-8",
      data: JSON.stringify(data),
      type: 'json',
      success:function (data) {
        if(data){
          if(data.code==="0"){
            callback(data.datum,data.message);
          }
          else{
            alert(data.message);
          }
        }
      },
      error:function (data) {
        alert(data.message);
      }
    });
  }
}

