import{d as e,o as a,L as t,c as o,a as n,p as i,b as s,e as d,_ as m}from"./index-85ea934c.js";const c=[(e=>(i("data-v-4ce70e1b"),e=e(),s(),e))((()=>d("div",{id:"map"},null,-1)))],u=m(e({__name:"geoJsonSimple",setup(e){let i={minZoom:5,maxZoom:18};return a((()=>{const e=t.map("map",i).setView([51.918904,19.1343786],6);function a(e,a){a.bindPopup(e.properties.nazwa)}t.tileLayer("http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=8c2992a8d82ecb284c857aa88102a057",{attribution:"stamen"}).addTo(e),fetch("/wojewodztwa-medium.geojson").then((function(e){return e.json()})).then((function(o){t.geoJSON(o,{onEachFeature:a}).addTo(e)}))})),(e,a)=>(n(),o("div",null,c))}}),[["__scopeId","data-v-4ce70e1b"]]);export{u as default};
