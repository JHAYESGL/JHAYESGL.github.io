import{d as t,o as i,L as o,a,c as n,p,b as e,e as r,_ as s}from"./index-55bc20fe.js";import"./leaflet.markercluster-src-21f89f1f.js";const d=[(t=>(p("data-v-ac5c09cd"),t=t(),e(),t))((()=>r("div",{id:"map"},null,-1)))],l=s(t({__name:"markerGroupingMarkerclusterPlugin",setup(t){let p={minZoom:5,maxZoom:18};let e=[[30.51227,117.06424,"point 1"],[30.52227,117.05424,"point 1"],[30.53227,117.04424,"point 1"],[30.54227,117.03424,"point 1"],[30.55227,117.02424,"point 1"],[30.56227,117.01424,"point 1"],[30.51227,117.06424,"point 2"],[30.52227,117.05424,"point 2"],[30.53227,117.04424,"point 2"],[30.54227,117.03424,"point 2"],[30.55227,117.02424,"point 2"],[30.56227,117.01424,"point 2"],[30.51227,117.06424,"point 3"],[30.52227,117.03424,"point 3"],[30.53227,117.06424,"point 3"],[30.54227,117.01424,"point 3"],[30.55227,117.07424,"point 3"],[30.56227,117.03424,"point 3"],[30.51227,117.07424,"point 4"],[30.52227,117.09424,"point 4"],[30.53227,117.08424,"point 4"],[30.54227,117.07424,"point 4"],[30.55227,117.00424,"point 4"],[30.56227,117.01424,"point 4"]];return i((()=>{const t=o.map("map",p).setView([30.55227,117.07424],13);o.tileLayer("http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=8c2992a8d82ecb284c857aa88102a057",{attribution:"stamen"}).addTo(t);let i=o.markerClusterGroup();for(let a=0;a<e.length;a++){const[t,n,p]=e[a];let r=o.marker(new o.LatLng(t,n)).bindPopup(p);i.addLayer(r)}t.addLayer(i)})),(t,i)=>(a(),n("div",null,d))}}),[["__scopeId","data-v-ac5c09cd"]]);export{l as default};
