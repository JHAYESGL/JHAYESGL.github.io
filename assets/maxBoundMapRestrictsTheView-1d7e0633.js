import{d as t,o as a,L as e,c as n,a as s,p as o,b as i,e as d,_ as m}from"./index-85ea934c.js";const u=[(t=>(o("data-v-5ec43488"),t=t(),i(),t))((()=>d("div",{id:"map"},null,-1)))],L=m(t({__name:"maxBoundMapRestrictsTheView",setup(t){let o={minZoom:5,maxZoom:18};return a((()=>{const t=e.map("map",o).setView([30.55227,117.07424],13);e.tileLayer("http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=8c2992a8d82ecb284c857aa88102a057",{attribution:"stamen"}).addTo(t),t.setMaxBounds(t.getBounds()),t.fitBounds(function(){const t=new e.LatLng(30.51227,117.124248),a=new e.LatLng(30.59227,117.02424);return new e.LatLngBounds(t,a)}(),{reset:!0})})),(t,a)=>(s(),n("div",null,u))}}),[["__scopeId","data-v-5ec43488"]]);export{L as default};
