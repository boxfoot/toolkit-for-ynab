function log(e){Services.console.logStringMessage(Array.slice(arguments).join(" "))}function loadExtensionInfo(e){var r=Cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance(Ci.nsIXMLHttpRequest);return r.open("GET",e("extension_info.json"),!1),r.overrideMimeType("text/plain"),r.send(null),JSON.parse(r.responseText)}function Module(e,r,t){if(this.XMLHttpRequest=function(){return Cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance(Ci.nsIXMLHttpRequest)},this.alert=function(e){Services.prompt.alert(null,"Kango",e)},this.log=log,this.id=e,this.exports={},this.require=r,this.module=this,this.Services=Services,this.FileUtils=FileUtils,this.Cc=Cc,this.Ci=Ci,this.Cu=Cu,this.Cm=Cm,this.Cr=Cr,t)for(var s in t)t.hasOwnProperty(s)&&(this[s]=t[s])}function Loader(e,r,t){function s(i){if(t&&t.hasOwnProperty(i))return t[i];if(!o[i]){var n=Cc["@mozilla.org/systemprincipal;1"].getService(Ci.nsIPrincipal),a=o[i]=new Cu.Sandbox(n,{sandboxName:i,sandboxPrototype:new Module(i,s,r),wantComponents:!1,wantXrays:!1}),l=e(i);if(!l)throw new Error("Unable to find module with id="+i);Services.scriptloader.loadSubScript(l,a,"UTF-8")}return o[i].exports}function i(){for(var e in o)if(o.hasOwnProperty(e)){var r=o[e];r.exports.dispose&&r.exports.dispose(),r.dispose&&r.dispose()}for(var e in o)if(o.hasOwnProperty(e)){var r=o[e];for(var t in r)r[t]=null;o[e]=null}o={}}var o={};return{require:s,dispose:i}}var Cc=Components.classes,Ci=Components.interfaces,Cu=Components.utils,Cm=Components.manager,Cr=Components.results;Cu["import"]("resource://gre/modules/Services.jsm"),Cu["import"]("resource://gre/modules/FileUtils.jsm");var EXPORTED_SYMBOLS=["Cc","Ci","Cu","Cm","Cr","log","loadExtensionInfo","Loader"];