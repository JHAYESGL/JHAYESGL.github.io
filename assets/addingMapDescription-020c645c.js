import{d as t,o as e,L as a,a as i,c as o,e as n}from"./index-55bc20fe.js";const d=[n("div",{id:"map"},null,-1)],s=t({__name:"addingMapDescription",setup(t){let n={minZoom:5,maxZoom:18};return e((()=>{const t=a.map("map",n).setView([30.55227,117.07424],13);a.tileLayer("http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=8c2992a8d82ecb284c857aa88102a057",{attribution:"stamen"}).addTo(t);const e=a.control({position:"bottomleft"});e.onAdd=function(){let t=a.DomUtil.create("div","description");a.DomEvent.disableClickPropagation(t);return t.insertAdjacentHTML("beforeend","<b>安庆市，</b>简称宜，别称宜城，安徽省辖地级市，位于安徽省西南部，长江下游北岸，西接湖北省黄冈市，南邻江西省九江市，北接合肥市和六安市，东邻铜陵市，南与池州市隔江相望，总面积13589.99平方千米。截至2022年10月，安庆市辖3个区、5个县，代管2个县级市 。截至2022年末，安庆市常住人口415.6万人。 \n南宋绍兴十七年（1147年），改舒州德庆军为舒州安庆军，“安庆”自此得名。安庆城始建于南宋嘉定十年（1217年），已有800余年的历史 。安庆市是国家级历史文化名城 ，素有“文化之邦”、“戏剧之乡”、“禅宗圣地”的美誉，是皖江文化的发源地和中心区，“桐城派”的故里，黄梅戏发展成熟的地方 ，京剧鼻祖徽班成长的摇篮，也是陈独秀、邓稼先、张恨水等名人的故乡。安庆是中国较早接受近代文明的城市，清咸丰十一年（1861）曾国藩创办的安庆内军械所，制造了中国第一台蒸汽机和第一艘机动船 。安庆市是长江三角洲中心区城市  、国家园林城市、国家森林城市、国家生态文明建设示范区 、中国优秀旅游城市、十大秀美之城  、全国绿化模范城市、全国文明城市 ，是长三角区域重点城市 、联动长三角与中部地区的区域重点城市 、皖江城市带承接产业转移示范区节点城市  。\n2022年，安庆市实现地区生产总值（GDP）2767.46亿元，其中，第一产业增加值262.73亿元，第二产业增加值1215.23亿元，第三产业增加值1289.5亿元。三次产业结构为9.5：43.9：46.6。按常住人口计算，人均地区生产总值66470元。"),t},e.addTo(t)})),(t,e)=>(i(),o("div",null,d))}});export{s as default};
