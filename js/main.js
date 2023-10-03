
function adjustIframe(){
        var ifm= document.getElementById("1");
        ifm.height=document.documentElement.clientHeight;
        ifm.width=document.documentElement.clientWidth;
}


// document.domain = "caibaojian.com";
function setIframeHeight() {
  if (view) {
    var viewWin = view.contentWindow || view.contentDocument.parentWindow;
    if (viewWin.document.body) {
      view.height = viewWin.document.documentElement.scrollHeight || viewWin.document.body.scrollHeight
    }
  }
}
window.onload = function () {
  setIframeHeight(document.getElementById('external-frame'))
}