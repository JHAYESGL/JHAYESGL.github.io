import{d as e,o as t,L as o,c as a,g as n,a as s}from"./index-85ea934c.js";const i=[n('<div id="map"></div><div class="sidebar"><button aria-label="close sidebar" type="button" class="close-button"><svg><use xlink:href="#icon-clear"></use></svg></button><article class="sidebar-content"><h1>Old Town and Royal Castle - <span>3h</span></h1><div class="marker-id">4</div><div class="info-content"><img class="img-zoom" src="http://warsawtour.pl/wp-content/uploads/2018/07/Rynek-Starego-Miasta_fot.-m.st_.-Warszawa.jpg" alt="Old Town and Royal Castle"><div class="info-description"><p>A UNESCO world heritage site, the Old Town charms with its colourful townhouses and the exceptional atmosphere of its narrow streets. When in the Old Town Market Square, you will meet a mermaid – the official symbol of the city. Don’t forget to see the Barbican, stop by the bell on Kanonia Street, and walk along the old city walls. You should also visit the Royal Castle. Apart from the royal apartments, the old seat of Polish rulers also houses an art collection with paintings by Rembrandt and Bernardo Bellotto, also known as Canaletto.</p></div></div></article></div>',2)],r=e({__name:"sidebarReplacingPopup",setup(e){let n={minZoom:5,maxZoom:18};return t((()=>{const e=o.map("map",n).setView([30.55227,117.07424],13);o.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png",{attribution:"stamen"}).addTo(e);const t=document.querySelector(".close-button");let a,s=[],i=[];function r(){document.body.classList.remove("active-sidebar"),l()}function l(t){const n=document.querySelector(".sidebar").offsetWidth,s=o.marker(t),i=o.featureGroup([s]),r=t?i.getBounds():a.getBounds();e.fitBounds(r,{paddingTopLeft:[t?n:0,10]})}(async function(e){try{const t=await fetch(e);return await t.json()}catch(t){console.error(t)}})("/places.json").then((t=>(t.map((e=>{s.push(o.marker(e.coords,{icon:o.divIcon({className:"leaflet-marker-icon",html:`${e.id}`,iconSize:o.point(30,30),popupAnchor:[3,-5]}),"marker-options-id":e.id})),i.push(e.coords)})),o.polyline(i,{color:"#ff3939",weight:2}).addTo(e),t))).then((t=>{s.map((t=>{t.addTo(e)})),a=new o.featureGroup(s),e.fitBounds(a.getBounds(),{padding:[50,50]}),a.on("click",(function(e){var a;e.layer instanceof o.Marker&&(a=e.layer.options["marker-options-id"],t.filter((e=>{e.id===a&&(document.body.classList.add("active-sidebar"),function(e){const{id:t,title:o,small:a,description:n,img:s,coords:i}=e,r=void 0!==a?`<small>${a}</small>`:"",d=`\n    <article class="sidebar-content">\n      <h1>${o}</h1>\n      <div class="marker-id">${t}</div>\n      <div class="info-content">\n        <img class="img-zoom" src="${s.src}" alt="${s.alt}">\n        ${r}\n        <div class="info-description">${n}</div>\n      </div>\n    </article>\n  `,c=document.querySelector(".sidebar"),u=document.querySelector(".sidebar-content");null==u||u.remove(),c.insertAdjacentHTML("beforeend",d),l(i)}(e))})))}))})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&r()})),t.addEventListener("click",(()=>{r()}))})),(e,t)=>(s(),a("div",null,i))}});export{r as default};
