import{d as t,o as e,L as o,c as n,e as a,a as i}from"./index-85ea934c.js";const d=[a("div",{id:"map",class:"center-of-map"},null,-1)],c=t({__name:"centerOfTheVisibleMap",setup(t){let a={minZoom:5,maxZoom:18};return e((()=>{const t=o.map("map",a).setView([30.55227,117.07424],13);o.tileLayer("http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=8c2992a8d82ecb284c857aa88102a057",{attribution:"stamen"}).addTo(t),t.on("dragend",i),t.on("zoomend",i);const e=o.control({position:"bottomleft"});e.onAdd=function(){const t=o.DomUtil.create("div","center-of-map-description");return o.DomEvent.disableClickPropagation(t),t},e.addTo(t),document.addEventListener("DOMContentLoaded",(function(){i()}));const n=document.querySelector(".center-of-map-description");function i(){const{lat:e,lng:o}=t.getCenter(),a=t.getZoom();n.innerHTML=`center: ${e.toFixed(5)}, ${o.toFixed(5)} | zoom: ${a}`}})),(t,e)=>(i(),n("div",null,d))}});export{c as default};
