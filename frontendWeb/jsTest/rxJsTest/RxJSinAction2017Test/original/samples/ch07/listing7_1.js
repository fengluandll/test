/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
const makeHttpCall = (url, success, error) => {
  let req = new XMLHttpRequest(); //#A
  req.responseType = 'json';
  req.open('GET', url);
  req.onload = function() {
    if(req.status == 200) {
      let data = JSON.parse(req.responseText);
      success(data); //#B
    }
    else {
      req.onerror();
    }
  }
  req.onerror = function () {
    if(error) {
      error(new Error(req.statusText)); //#C
    }
  };
  req.send();
};
