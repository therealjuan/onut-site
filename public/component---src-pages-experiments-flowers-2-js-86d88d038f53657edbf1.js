(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"96pP":function(A,N,e){"use strict";var U=e("q1tI"),a=e.n(U);N.a=function(A){var N=A.children;A.location;return a.a.createElement("section",{id:"main-content"},N)}},bOTu:function(A,N,e){A.exports=e.p+"static/fl1-6550a1daf9f1a5f429badc024aa2401c.png"},cPed:function(A,N,e){"use strict";e.r(N),e.d(N,"default",(function(){return R}));var U=e("q1tI"),a=e.n(U),E=e("96pP"),S=e("TJpk"),t=e.n(S),J=(e("af0Q"),e("bOTu")),P=e.n(J),M=e("rd6F");var R=function(A){var N,e;function U(N){var e;return(e=A.call(this,N)||this).state={data:[],city:"London",count:0},e}e=A,(N=U).prototype=Object.create(e.prototype),N.prototype.constructor=N,N.__proto__=e;var S=U.prototype;return S.getTemperature=function(A){},S.updateCount=function(){this.state.count<M.length-1?this.setState({count:this.state.count+1}):this.setState({count:0})},S.componentDidMount=function(){var A=this;this.intervalId=setInterval((function(){return A.updateCount()}),2e3)},S.componentWillUnmount=function(){clearInterval(this.intervalId)},S.getStyleForImage=function(A){return{filter:"saturate("+M[this.state.count][A]+")",backgroundImage:"url("+P.a+")"}},S.render=function(){return a.a.createElement(E.a,null,a.a.createElement(t.a,{bodyAttributes:{class:"no-overflow"}}),a.a.createElement("div",{className:"flowers-year"},M[this.state.count].Year),a.a.createElement("div",{className:"flowers-experiment-2"},a.a.createElement("div",{className:"grid-experiment-image",style:{backgroundImage:"url("+P.a+")"}},a.a.createElement("div",{style:this.getStyleForImage("JAN")}),a.a.createElement("div",{className:"flowers-temperature"},M[this.state.count].JAN," °C")),a.a.createElement("div",{className:"grid-experiment-image",style:{backgroundImage:"url("+P.a+")"}},a.a.createElement("div",{style:this.getStyleForImage("FEB")}),a.a.createElement("div",{className:"flowers-temperature"},M[this.state.count].FEB," °C")),a.a.createElement("div",{className:"grid-experiment-image",style:{backgroundImage:"url("+P.a+")"}},a.a.createElement("div",{style:this.getStyleForImage("MAR")}),a.a.createElement("div",{className:"flowers-temperature"},M[this.state.count].MAR," °C")),a.a.createElement("div",{className:"grid-experiment-image",style:{backgroundImage:"url("+P.a+")"}},a.a.createElement("div",{style:this.getStyleForImage("APR")}),a.a.createElement("div",{className:"flowers-temperature"},M[this.state.count].APR," °C")),a.a.createElement("div",{className:"grid-experiment-image",style:{backgroundImage:"url("+P.a+")"}},a.a.createElement("div",{style:this.getStyleForImage("MAY")}),a.a.createElement("div",{className:"flowers-temperature"},M[this.state.count].MAY," °C")),a.a.createElement("div",{className:"grid-experiment-image",style:{backgroundImage:"url("+P.a+")"}},a.a.createElement("div",{style:this.getStyleForImage("JUN")}),a.a.createElement("div",{className:"flowers-temperature"},M[this.state.count].JUN," °C")),a.a.createElement("div",{className:"grid-experiment-image",style:{backgroundImage:"url("+P.a+")"}},a.a.createElement("div",{style:this.getStyleForImage("JUL")}),a.a.createElement("div",{className:"flowers-temperature"},M[this.state.count].JUL," °C")),a.a.createElement("div",{className:"grid-experiment-image",style:{backgroundImage:"url("+P.a+")"}},a.a.createElement("div",{style:this.getStyleForImage("AUG")}),a.a.createElement("div",{className:"flowers-temperature"},M[this.state.count].AUG," °C")),a.a.createElement("div",{className:"grid-experiment-image",style:{backgroundImage:"url("+P.a+")"}},a.a.createElement("div",{style:this.getStyleForImage("SEP")}),a.a.createElement("div",{className:"flowers-temperature"},M[this.state.count].SEP," °C")),a.a.createElement("div",{className:"grid-experiment-image",style:{backgroundImage:"url("+P.a+")"}},a.a.createElement("div",{style:this.getStyleForImage("OCT")}),a.a.createElement("div",{className:"flowers-temperature"},M[this.state.count].OCT," °C")),a.a.createElement("div",{className:"grid-experiment-image",style:{backgroundImage:"url("+P.a+")"}},a.a.createElement("div",{style:this.getStyleForImage("NOV")}),a.a.createElement("div",{className:"flowers-temperature"},M[this.state.count].NOV," °C")),a.a.createElement("div",{className:"grid-experiment-image",style:{backgroundImage:"url("+P.a+")"}},a.a.createElement("div",{style:this.getStyleForImage("DEC")}),a.a.createElement("div",{className:"flowers-temperature"},M[this.state.count].DEC," °C"))))},U}(a.a.Component)},rd6F:function(A){A.exports=JSON.parse('[{"Year":1910,"JAN":2.6,"FEB":3.9,"MAR":5.4,"APR":6,"MAY":10.1,"JUN":13.3,"JUL":13.2,"AUG":14.1,"SEP":11.8,"OCT":9.9,"NOV":2.8,"DEC":5.5,"WIN":"---","SPR":7.17,"SUM":13.51,"AUT":8.18,"ANN":8.24},{"Year":1911,"JAN":3.5,"FEB":4,"MAR":4.3,"APR":6.6,"MAY":11.7,"JUN":13.2,"JUL":16.2,"AUG":16.5,"SEP":12.7,"OCT":8.4,"NOV":5,"DEC":5.3,"WIN":4.32,"SPR":7.55,"SUM":15.32,"AUT":8.7,"ANN":8.98},{"Year":1912,"JAN":3,"FEB":4.2,"MAR":6.1,"APR":7.9,"MAY":10.5,"JUN":12.5,"JUL":14.5,"AUG":11.7,"SEP":10.3,"OCT":7.7,"NOV":5.4,"DEC":5.5,"WIN":4.15,"SPR":8.18,"SUM":12.9,"AUT":7.8,"ANN":8.29},{"Year":1913,"JAN":3.5,"FEB":4.2,"MAR":4.9,"APR":6.8,"MAY":10.1,"JUN":12.8,"JUL":13.6,"AUG":14.2,"SEP":12.7,"OCT":10.1,"NOV":7.3,"DEC":4.2,"WIN":4.37,"SPR":7.28,"SUM":13.53,"AUT":10.01,"ANN":8.71},{"Year":1914,"JAN":2.8,"FEB":5.5,"MAR":4.8,"APR":8.6,"MAY":9.4,"JUN":13.1,"JUL":14.6,"AUG":14.8,"SEP":12.2,"OCT":9.4,"NOV":5.8,"DEC":3.4,"WIN":4.13,"SPR":7.6,"SUM":14.16,"AUT":9.13,"ANN":8.71},{"Year":1915,"JAN":3,"FEB":3.1,"MAR":4.2,"APR":6.8,"MAY":9.3,"JUN":12.8,"JUL":13.4,"AUG":14.1,"SEP":12.2,"OCT":8.3,"NOV":2.6,"DEC":3.9,"WIN":3.17,"SPR":6.77,"SUM":13.43,"AUT":7.7,"ANN":7.83},{"Year":1916,"JAN":6.3,"FEB":2.8,"MAR":2.5,"APR":7,"MAY":9.9,"JUN":10.6,"JUL":14,"AUG":14.9,"SEP":12,"OCT":9.4,"NOV":6.1,"DEC":2,"WIN":4.34,"SPR":6.47,"SUM":13.19,"AUT":9.13,"ANN":8.13},{"Year":1917,"JAN":1.1,"FEB":1,"MAR":2.5,"APR":4.3,"MAY":10.8,"JUN":13.2,"JUL":14.7,"AUG":14.4,"SEP":12.7,"OCT":6.6,"NOV":7,"DEC":2,"WIN":1.37,"SPR":5.88,"SUM":14.13,"AUT":8.72,"ANN":7.56},{"Year":1918,"JAN":2.6,"FEB":5.5,"MAR":4.9,"APR":5.9,"MAY":11.4,"JUN":11.9,"JUL":14.1,"AUG":14.7,"SEP":10.4,"OCT":8.3,"NOV":4.9,"DEC":5.6,"WIN":3.29,"SPR":7.4,"SUM":13.57,"AUT":7.86,"ANN":8.36},{"Year":1919,"JAN":2.4,"FEB":1.2,"MAR":2.5,"APR":6.2,"MAY":11.7,"JUN":12.5,"JUL":12.9,"AUG":14.3,"SEP":11.6,"OCT":7.2,"NOV":2.3,"DEC":4.2,"WIN":3.09,"SPR":6.81,"SUM":13.24,"AUT":7.04,"ANN":7.45},{"Year":1920,"JAN":3.9,"FEB":5,"MAR":5.8,"APR":6.8,"MAY":10.3,"JUN":12.9,"JUL":12.9,"AUG":12.5,"SEP":11.8,"OCT":9.7,"NOV":6.5,"DEC":3.5,"WIN":4.34,"SPR":7.67,"SUM":12.78,"AUT":9.33,"ANN":8.48},{"Year":1921,"JAN":5.8,"FEB":4.2,"MAR":5.9,"APR":7.3,"MAY":10,"JUN":13,"JUL":16.2,"AUG":13.8,"SEP":12.8,"OCT":11.6,"NOV":4.4,"DEC":5.7,"WIN":4.51,"SPR":7.72,"SUM":14.35,"AUT":9.64,"ANN":9.27},{"Year":1922,"JAN":2.9,"FEB":3.7,"MAR":4,"APR":4.6,"MAY":10.9,"JUN":12.2,"JUL":12.3,"AUG":12.3,"SEP":11,"OCT":7.6,"NOV":5.3,"DEC":4.8,"WIN":4.12,"SPR":6.53,"SUM":12.25,"AUT":7.98,"ANN":7.66},{"Year":1923,"JAN":4.9,"FEB":4.5,"MAR":5.7,"APR":6.3,"MAY":8,"JUN":11.2,"JUL":15.7,"AUG":13.6,"SEP":11.1,"OCT":8.6,"NOV":2.8,"DEC":3.1,"WIN":4.77,"SPR":6.67,"SUM":13.54,"AUT":7.53,"ANN":7.99},{"Year":1924,"JAN":3.8,"FEB":2.9,"MAR":3.2,"APR":6,"MAY":9.7,"JUN":12.4,"JUL":13.9,"AUG":13,"SEP":11.9,"OCT":9.1,"NOV":6.4,"DEC":6.1,"WIN":3.27,"SPR":6.31,"SUM":13.1,"AUT":9.14,"ANN":8.22},{"Year":1925,"JAN":4.6,"FEB":3.9,"MAR":4.2,"APR":6.3,"MAY":10.1,"JUN":13.4,"JUL":15.4,"AUG":14.3,"SEP":10.4,"OCT":9.5,"NOV":3.4,"DEC":2.1,"WIN":4.88,"SPR":6.86,"SUM":14.36,"AUT":7.77,"ANN":8.15},{"Year":1926,"JAN":3.9,"FEB":5.5,"MAR":5.5,"APR":8.1,"MAY":8.9,"JUN":12.3,"JUL":15.4,"AUG":14.9,"SEP":13,"OCT":7,"NOV":5.1,"DEC":3.8,"WIN":3.76,"SPR":7.49,"SUM":14.2,"AUT":8.32,"ANN":8.62},{"Year":1927,"JAN":3.8,"FEB":3.7,"MAR":6.1,"APR":6.7,"MAY":9.4,"JUN":10.8,"JUL":14.5,"AUG":14.4,"SEP":11.2,"OCT":9.3,"NOV":5.3,"DEC":1.5,"WIN":3.76,"SPR":7.42,"SUM":13.27,"AUT":8.62,"ANN":8.1},{"Year":1928,"JAN":4.2,"FEB":4.8,"MAR":4.9,"APR":7.1,"MAY":9.6,"JUN":11.2,"JUL":14.4,"AUG":13.9,"SEP":11.5,"OCT":9.1,"NOV":6.7,"DEC":3.1,"WIN":3.47,"SPR":7.18,"SUM":13.2,"AUT":9.08,"ANN":8.38},{"Year":1929,"JAN":1.1,"FEB":0.3,"MAR":5.7,"APR":5.6,"MAY":10,"JUN":11.8,"JUL":14.4,"AUG":13.8,"SEP":13.9,"OCT":8.4,"NOV":5.8,"DEC":4.7,"WIN":1.53,"SPR":7.11,"SUM":13.37,"AUT":9.36,"ANN":8.01},{"Year":1930,"JAN":4.3,"FEB":1.8,"MAR":4,"APR":7.2,"MAY":9.5,"JUN":13.7,"JUL":14,"AUG":14.4,"SEP":12.4,"OCT":9.3,"NOV":5.1,"DEC":3.8,"WIN":3.65,"SPR":6.89,"SUM":14.01,"AUT":8.95,"ANN":8.32},{"Year":1931,"JAN":2.6,"FEB":3,"MAR":3.1,"APR":6.6,"MAY":10,"JUN":12.5,"JUL":14,"AUG":13.1,"SEP":10.8,"OCT":8.2,"NOV":6.9,"DEC":5,"WIN":3.15,"SPR":6.55,"SUM":13.24,"AUT":8.61,"ANN":8.01},{"Year":1932,"JAN":5.5,"FEB":3.2,"MAR":4.1,"APR":5.6,"MAY":9.1,"JUN":12.8,"JUL":14.6,"AUG":15.4,"SEP":11.8,"OCT":7.7,"NOV":5.7,"DEC":4.9,"WIN":4.59,"SPR":6.29,"SUM":14.27,"AUT":8.4,"ANN":8.39},{"Year":1933,"JAN":1.9,"FEB":3.3,"MAR":6.3,"APR":7.9,"MAY":10.5,"JUN":14,"JUL":16.3,"AUG":15.9,"SEP":13.7,"OCT":9.2,"NOV":5.1,"DEC":1.9,"WIN":3.35,"SPR":8.25,"SUM":15.4,"AUT":9.31,"ANN":8.86},{"Year":1934,"JAN":4,"FEB":3.9,"MAR":4,"APR":6.5,"MAY":9.9,"JUN":13.4,"JUL":16.4,"AUG":13.9,"SEP":13,"OCT":9.2,"NOV":5.3,"DEC":6.9,"WIN":3.22,"SPR":6.79,"SUM":14.58,"AUT":9.17,"ANN":8.89},{"Year":1935,"JAN":4,"FEB":4.6,"MAR":5.7,"APR":6.8,"MAY":9,"JUN":13.3,"JUL":15.4,"AUG":15.2,"SEP":12.1,"OCT":8.4,"NOV":5.7,"DEC":2.1,"WIN":5.18,"SPR":7.17,"SUM":14.63,"AUT":8.72,"ANN":8.55},{"Year":1936,"JAN":2.6,"FEB":1.9,"MAR":5.8,"APR":5.4,"MAY":10.1,"JUN":13.2,"JUL":14.1,"AUG":14.8,"SEP":13.1,"OCT":8.6,"NOV":5,"DEC":4.5,"WIN":2.24,"SPR":7.15,"SUM":14.04,"AUT":8.88,"ANN":8.29},{"Year":1937,"JAN":4.3,"FEB":4.1,"MAR":2.4,"APR":7.9,"MAY":10.8,"JUN":12.7,"JUL":14.5,"AUG":15.2,"SEP":12.1,"OCT":9.2,"NOV":4.9,"DEC":2.2,"WIN":4.29,"SPR":7.02,"SUM":14.13,"AUT":8.74,"ANN":8.37},{"Year":1938,"JAN":4.7,"FEB":4.2,"MAR":8,"APR":6.9,"MAY":9.3,"JUN":12.7,"JUL":13.6,"AUG":14.5,"SEP":12.5,"OCT":9.3,"NOV":7.8,"DEC":3.5,"WIN":3.68,"SPR":8.08,"SUM":13.62,"AUT":9.9,"ANN":8.96},{"Year":1939,"JAN":3,"FEB":4.9,"MAR":5.1,"APR":7.3,"MAY":10.2,"JUN":12.9,"JUL":13.9,"AUG":15.1,"SEP":13,"OCT":7.5,"NOV":7.3,"DEC":2.9,"WIN":3.76,"SPR":7.53,"SUM":13.97,"AUT":9.25,"ANN":8.6},{"Year":1940,"JAN":-1.1,"FEB":2,"MAR":4.9,"APR":7.2,"MAY":11.3,"JUN":14.9,"JUL":13.6,"AUG":14.1,"SEP":11.4,"OCT":8.7,"NOV":5.9,"DEC":3.3,"WIN":1.25,"SPR":7.81,"SUM":14.2,"AUT":8.67,"ANN":8.04},{"Year":1941,"JAN":-0.1,"FEB":2.3,"MAR":3.9,"APR":5.5,"MAY":8.2,"JUN":13.4,"JUL":15.5,"AUG":13.4,"SEP":13.6,"OCT":9.4,"NOV":5.7,"DEC":4.9,"WIN":1.82,"SPR":5.88,"SUM":14.1,"AUT":9.55,"ANN":8},{"Year":1942,"JAN":1,"FEB":0.2,"MAR":4.1,"APR":7.9,"MAY":9.7,"JUN":12.6,"JUL":14,"AUG":14.8,"SEP":12.3,"OCT":9.3,"NOV":4.7,"DEC":5.8,"WIN":2.08,"SPR":7.19,"SUM":13.83,"AUT":8.76,"ANN":8.07},{"Year":1943,"JAN":3.9,"FEB":5.2,"MAR":5.9,"APR":9.2,"MAY":10.4,"JUN":12.9,"JUL":14.6,"AUG":14.1,"SEP":11.8,"OCT":9.8,"NOV":5.6,"DEC":3.4,"WIN":4.97,"SPR":8.48,"SUM":13.88,"AUT":9.08,"ANN":8.93},{"Year":1944,"JAN":5.1,"FEB":3,"MAR":4.5,"APR":8.8,"MAY":9.9,"JUN":12.2,"JUL":14.9,"AUG":15.5,"SEP":11.2,"OCT":8.3,"NOV":5.1,"DEC":3.3,"WIN":3.87,"SPR":7.69,"SUM":14.2,"AUT":8.19,"ANN":8.49},{"Year":1945,"JAN":-0.2,"FEB":5.9,"MAR":7.2,"APR":8.6,"MAY":10.5,"JUN":13,"JUL":15.2,"AUG":14.6,"SEP":13.2,"OCT":10.7,"NOV":6.7,"DEC":4.6,"WIN":2.91,"SPR":8.8,"SUM":14.26,"AUT":10.18,"ANN":9.18},{"Year":1946,"JAN":2.6,"FEB":4.9,"MAR":4.5,"APR":8.5,"MAY":9.5,"JUN":11.8,"JUL":14.6,"AUG":13.2,"SEP":12.7,"OCT":8.8,"NOV":6.9,"DEC":2.6,"WIN":3.97,"SPR":7.51,"SUM":13.19,"AUT":9.46,"ANN":8.39},{"Year":1947,"JAN":1.8,"FEB":-2,"MAR":2.2,"APR":7.2,"MAY":11.5,"JUN":13.7,"JUL":15.2,"AUG":17,"SEP":13.3,"OCT":9.9,"NOV":6.1,"DEC":4.4,"WIN":0.87,"SPR":6.94,"SUM":15.34,"AUT":9.77,"ANN":8.42},{"Year":1948,"JAN":3.8,"FEB":3.9,"MAR":7.3,"APR":7.8,"MAY":9.9,"JUN":12.3,"JUL":14.2,"AUG":13.6,"SEP":12.5,"OCT":9,"NOV":6.7,"DEC":4.9,"WIN":4.01,"SPR":8.36,"SUM":13.37,"AUT":9.39,"ANN":8.84},{"Year":1949,"JAN":4.6,"FEB":4.8,"MAR":4.4,"APR":8.7,"MAY":9.7,"JUN":13.4,"JUL":15.6,"AUG":15.2,"SEP":14.6,"OCT":10.7,"NOV":5.9,"DEC":4.7,"WIN":4.78,"SPR":7.58,"SUM":14.74,"AUT":10.41,"ANN":9.38},{"Year":1950,"JAN":3.9,"FEB":4,"MAR":6.5,"APR":6.3,"MAY":10,"JUN":14.4,"JUL":14.6,"AUG":14.3,"SEP":11.6,"OCT":8.8,"NOV":4.7,"DEC":0.7,"WIN":4.2,"SPR":7.62,"SUM":14.4,"AUT":8.36,"ANN":8.33},{"Year":1951,"JAN":2.9,"FEB":2.6,"MAR":3.2,"APR":5.5,"MAY":8.7,"JUN":12.3,"JUL":14.7,"AUG":13.5,"SEP":12.8,"OCT":9.2,"NOV":7.3,"DEC":4.7,"WIN":2.03,"SPR":5.81,"SUM":13.51,"AUT":9.76,"ANN":8.15},{"Year":1952,"JAN":1.7,"FEB":2.8,"MAR":5.6,"APR":8.3,"MAY":11.6,"JUN":12.5,"JUL":15,"AUG":14.5,"SEP":9.9,"OCT":8.1,"NOV":3.5,"DEC":2.6,"WIN":3.04,"SPR":8.52,"SUM":14.02,"AUT":7.16,"ANN":8.03},{"Year":1953,"JAN":3.2,"FEB":3.8,"MAR":5.2,"APR":6.1,"MAY":11.3,"JUN":13,"JUL":14.1,"AUG":14.6,"SEP":12.9,"OCT":9.2,"NOV":7.5,"DEC":6.1,"WIN":3.22,"SPR":7.52,"SUM":13.91,"AUT":9.86,"ANN":8.95},{"Year":1954,"JAN":2.6,"FEB":1.8,"MAR":4.7,"APR":6.7,"MAY":10.1,"JUN":12.1,"JUL":12.9,"AUG":13.2,"SEP":11.3,"OCT":10.4,"NOV":5.9,"DEC":5.6,"WIN":3.55,"SPR":7.19,"SUM":12.75,"AUT":9.21,"ANN":8.16},{"Year":1955,"JAN":1.8,"FEB":0.3,"MAR":2.6,"APR":8.3,"MAY":8.5,"JUN":12.4,"JUL":16,"AUG":16.4,"SEP":13.1,"OCT":8.2,"NOV":6.6,"DEC":4.5,"WIN":2.65,"SPR":6.42,"SUM":14.94,"AUT":9.3,"ANN":8.27},{"Year":1956,"JAN":2.7,"FEB":-0.2,"MAR":5.3,"APR":5.8,"MAY":10.6,"JUN":11.8,"JUL":14.3,"AUG":12.2,"SEP":13,"OCT":8.7,"NOV":5.7,"DEC":5.2,"WIN":2.4,"SPR":7.22,"SUM":12.73,"AUT":9.11,"ANN":7.94},{"Year":1957,"JAN":4.5,"FEB":3.9,"MAR":7.9,"APR":7.7,"MAY":9.3,"JUN":13.4,"JUL":14.8,"AUG":14.1,"SEP":11.2,"OCT":9.7,"NOV":5.8,"DEC":3.9,"WIN":4.57,"SPR":8.29,"SUM":14.1,"AUT":8.91,"ANN":8.87},{"Year":1958,"JAN":2.6,"FEB":3.5,"MAR":2.6,"APR":6.4,"MAY":9.5,"JUN":12.3,"JUL":14.5,"AUG":14.4,"SEP":13.9,"OCT":9.9,"NOV":5.9,"DEC":3.8,"WIN":3.3,"SPR":6.18,"SUM":13.75,"AUT":9.89,"ANN":8.29},{"Year":1959,"JAN":0.9,"FEB":3.8,"MAR":6.2,"APR":8.1,"MAY":11.2,"JUN":13.5,"JUL":15.4,"AUG":15.7,"SEP":13.5,"OCT":11.4,"NOV":6.2,"DEC":4.8,"WIN":2.79,"SPR":8.52,"SUM":14.91,"AUT":10.4,"ANN":9.27},{"Year":1960,"JAN":3.1,"FEB":2.7,"MAR":5.3,"APR":8,"MAY":11.5,"JUN":14.4,"JUL":13.8,"AUG":13.7,"SEP":11.9,"OCT":9.3,"NOV":6,"DEC":3,"WIN":3.54,"SPR":8.26,"SUM":13.96,"AUT":9.08,"ANN":8.57},{"Year":1961,"JAN":2.7,"FEB":5.8,"MAR":7.4,"APR":8.5,"MAY":9.7,"JUN":12.9,"JUL":13.6,"AUG":13.9,"SEP":13.6,"OCT":9.7,"NOV":5.3,"DEC":1.8,"WIN":3.77,"SPR":8.53,"SUM":13.47,"AUT":9.49,"ANN":8.74},{"Year":1962,"JAN":3.6,"FEB":3.7,"MAR":1.9,"APR":6.5,"MAY":9,"JUN":12.3,"JUL":13.2,"AUG":13,"SEP":11.4,"OCT":9.7,"NOV":4.7,"DEC":2.2,"WIN":2.98,"SPR":5.8,"SUM":12.84,"AUT":8.61,"ANN":7.62},{"Year":1963,"JAN":-1.8,"FEB":-1.1,"MAR":5,"APR":7.2,"MAY":9.1,"JUN":13.3,"JUL":13.6,"AUG":12.9,"SEP":11.8,"OCT":9.7,"NOV":6.6,"DEC":2.4,"WIN":-0.18,"SPR":7.11,"SUM":13.29,"AUT":9.36,"ANN":7.45},{"Year":1964,"JAN":3.3,"FEB":3.7,"MAR":3.6,"APR":7.6,"MAY":11.5,"JUN":12.3,"JUL":14.3,"AUG":13.9,"SEP":12.7,"OCT":8.1,"NOV":6.5,"DEC":2.7,"WIN":3.13,"SPR":7.57,"SUM":13.53,"AUT":9.07,"ANN":8.37},{"Year":1965,"JAN":2.4,"FEB":2.7,"MAR":4.1,"APR":7,"MAY":10.1,"JUN":12.9,"JUL":12.4,"AUG":13.4,"SEP":11.2,"OCT":9.9,"NOV":3.5,"DEC":3.3,"WIN":2.62,"SPR":7.06,"SUM":12.93,"AUT":8.25,"ANN":7.79},{"Year":1966,"JAN":2.2,"FEB":4,"MAR":5.6,"APR":5.7,"MAY":9.8,"JUN":13.8,"JUL":13.6,"AUG":13.3,"SEP":12.8,"OCT":8.9,"NOV":4.5,"DEC":4.1,"WIN":3.15,"SPR":7.06,"SUM":13.54,"AUT":8.73,"ANN":8.21},{"Year":1967,"JAN":3.7,"FEB":4.5,"MAR":5.7,"APR":6.8,"MAY":8.8,"JUN":12.9,"JUL":14.8,"AUG":14.2,"SEP":12.4,"OCT":9.2,"NOV":4.9,"DEC":3.7,"WIN":4.09,"SPR":7.13,"SUM":13.96,"AUT":8.86,"ANN":8.49},{"Year":1968,"JAN":3.5,"FEB":1.1,"MAR":5.2,"APR":6.9,"MAY":8.4,"JUN":13.3,"JUL":13.5,"AUG":14.1,"SEP":12.5,"OCT":11.1,"NOV":5.5,"DEC":2.6,"WIN":2.79,"SPR":6.83,"SUM":13.65,"AUT":9.74,"ANN":8.18},{"Year":1969,"JAN":4.4,"FEB":0.1,"MAR":2.6,"APR":6.3,"MAY":9.7,"JUN":12.7,"JUL":15.1,"AUG":15,"SEP":12.6,"OCT":11.8,"NOV":4,"DEC":2.8,"WIN":2.44,"SPR":6.19,"SUM":14.29,"AUT":9.46,"ANN":8.14},{"Year":1970,"JAN":3,"FEB":1.8,"MAR":2.9,"APR":5.5,"MAY":11.3,"JUN":14.7,"JUL":13.4,"AUG":14.7,"SEP":12.9,"OCT":9.5,"NOV":6.3,"DEC":3.7,"WIN":2.55,"SPR":6.57,"SUM":14.25,"AUT":9.57,"ANN":8.34},{"Year":1971,"JAN":3.9,"FEB":4.1,"MAR":4.4,"APR":6.8,"MAY":10.3,"JUN":11.1,"JUL":15.2,"AUG":14.2,"SEP":13.2,"OCT":10.4,"NOV":5.3,"DEC":6,"WIN":3.9,"SPR":7.17,"SUM":13.54,"AUT":9.64,"ANN":8.78},{"Year":1972,"JAN":3.1,"FEB":3.5,"MAR":5.5,"APR":7.3,"MAY":9.4,"JUN":10.5,"JUL":14.2,"AUG":13.6,"SEP":10.7,"OCT":9.7,"NOV":5.2,"DEC":4.9,"WIN":4.2,"SPR":7.39,"SUM":12.77,"AUT":8.55,"ANN":8.15},{"Year":1973,"JAN":3.9,"FEB":3.4,"MAR":5.5,"APR":5.9,"MAY":9.9,"JUN":13.4,"JUL":14.3,"AUG":14.9,"SEP":12.8,"OCT":8.3,"NOV":5.1,"DEC":4,"WIN":4.11,"SPR":7.12,"SUM":14.25,"AUT":8.73,"ANN":8.5},{"Year":1974,"JAN":5,"FEB":4.6,"MAR":4.7,"APR":7.2,"MAY":9.8,"JUN":12.3,"JUL":13.5,"AUG":13.8,"SEP":10.7,"OCT":6.9,"NOV":5.6,"DEC":6.5,"WIN":4.54,"SPR":7.22,"SUM":13.19,"AUT":7.71,"ANN":8.39},{"Year":1975,"JAN":5.3,"FEB":4,"MAR":3.9,"APR":7.1,"MAY":8.6,"JUN":13.1,"JUL":15.5,"AUG":16.8,"SEP":11.8,"OCT":9.3,"NOV":5.4,"DEC":4.7,"WIN":5.29,"SPR":6.51,"SUM":15.16,"AUT":8.83,"ANN":8.82},{"Year":1976,"JAN":4.5,"FEB":3.8,"MAR":4,"APR":7.1,"MAY":10.4,"JUN":15,"JUL":16.5,"AUG":15.8,"SEP":12,"OCT":9.4,"NOV":5.3,"DEC":1.4,"WIN":4.35,"SPR":7.13,"SUM":15.77,"AUT":8.9,"ANN":8.77},{"Year":1977,"JAN":1.9,"FEB":3.6,"MAR":5.8,"APR":6,"MAY":9.2,"JUN":11.2,"JUL":14.6,"AUG":13.9,"SEP":11.7,"OCT":10.7,"NOV":5.1,"DEC":5.2,"WIN":2.27,"SPR":7.02,"SUM":13.26,"AUT":9.16,"ANN":8.28},{"Year":1978,"JAN":2.3,"FEB":1.4,"MAR":5.5,"APR":5.4,"MAY":10.5,"JUN":12.3,"JUL":13.3,"AUG":13.7,"SEP":12.6,"OCT":10.8,"NOV":7.3,"DEC":3.3,"WIN":3.02,"SPR":7.16,"SUM":13.11,"AUT":10.22,"ANN":8.25},{"Year":1979,"JAN":-0.5,"FEB":0.6,"MAR":3.3,"APR":6.4,"MAY":8.4,"JUN":12.7,"JUL":14.4,"AUG":13.4,"SEP":11.9,"OCT":10.2,"NOV":5.6,"DEC":4.5,"WIN":1.17,"SPR":6.03,"SUM":13.49,"AUT":9.27,"ANN":7.62},{"Year":1980,"JAN":1.8,"FEB":4.6,"MAR":3.7,"APR":7.7,"MAY":10,"JUN":12.6,"JUL":13.3,"AUG":14.4,"SEP":13.3,"OCT":7.8,"NOV":5.5,"DEC":4.7,"WIN":3.61,"SPR":7.14,"SUM":13.44,"AUT":8.86,"ANN":8.29},{"Year":1981,"JAN":3.8,"FEB":2.6,"MAR":6.3,"APR":6.8,"MAY":10.3,"JUN":12,"JUL":14.1,"AUG":14.9,"SEP":13.2,"OCT":6.9,"NOV":6.5,"DEC":0.1,"WIN":3.75,"SPR":7.82,"SUM":13.69,"AUT":8.82,"ANN":8.15},{"Year":1982,"JAN":2.3,"FEB":4.3,"MAR":5.1,"APR":7.7,"MAY":10.2,"JUN":13.7,"JUL":15.1,"AUG":14.4,"SEP":12.7,"OCT":9.2,"NOV":6.5,"DEC":3.5,"WIN":2.12,"SPR":7.64,"SUM":14.41,"AUT":9.47,"ANN":8.73},{"Year":1983,"JAN":5.4,"FEB":1.4,"MAR":5.6,"APR":5.6,"MAY":8.9,"JUN":12.8,"JUL":17.3,"AUG":16,"SEP":12.2,"OCT":9.2,"NOV":6.7,"DEC":5.1,"WIN":3.48,"SPR":6.7,"SUM":15.38,"AUT":9.35,"ANN":8.9},{"Year":1984,"JAN":2.3,"FEB":3.2,"MAR":3.9,"APR":7.3,"MAY":9,"JUN":13.1,"JUL":15.3,"AUG":15.9,"SEP":12.1,"OCT":9.7,"NOV":6.8,"DEC":4.7,"WIN":3.55,"SPR":6.75,"SUM":14.78,"AUT":9.55,"ANN":8.63},{"Year":1985,"JAN":0.4,"FEB":2.2,"MAR":3.8,"APR":7.2,"MAY":9.6,"JUN":11.4,"JUL":14.5,"AUG":13.2,"SEP":12.9,"OCT":10,"NOV":3.1,"DEC":5.2,"WIN":2.44,"SPR":6.87,"SUM":13.06,"AUT":8.69,"ANN":7.83},{"Year":1986,"JAN":2.5,"FEB":-1.2,"MAR":4.3,"APR":4.8,"MAY":9.8,"JUN":13.3,"JUL":14.2,"AUG":12.2,"SEP":10.4,"OCT":9.7,"NOV":6.7,"DEC":4.8,"WIN":2.29,"SPR":6.3,"SUM":13.25,"AUT":8.95,"ANN":7.69},{"Year":1987,"JAN":0.7,"FEB":3,"MAR":3.3,"APR":8.8,"MAY":9,"JUN":11.3,"JUL":14.6,"AUG":14.2,"SEP":12.2,"OCT":8.4,"NOV":5.8,"DEC":4.9,"WIN":2.83,"SPR":7.03,"SUM":13.38,"AUT":8.81,"ANN":8.05},{"Year":1988,"JAN":4.1,"FEB":3.9,"MAR":5.1,"APR":7.1,"MAY":10.5,"JUN":13.4,"JUL":13.5,"AUG":13.9,"SEP":12.1,"OCT":9.4,"NOV":5.1,"DEC":6.6,"WIN":4.34,"SPR":7.6,"SUM":13.61,"AUT":8.89,"ANN":8.76},{"Year":1989,"JAN":5.8,"FEB":4.9,"MAR":6,"APR":5.5,"MAY":11.5,"JUN":13,"JUL":16.5,"AUG":14.8,"SEP":12.9,"OCT":10.5,"NOV":5.8,"DEC":3.8,"WIN":5.81,"SPR":7.69,"SUM":14.79,"AUT":9.73,"ANN":9.28},{"Year":1990,"JAN":5.5,"FEB":5.9,"MAR":7.2,"APR":7.1,"MAY":11.4,"JUN":12.4,"JUL":15.2,"AUG":16.1,"SEP":11.7,"OCT":10.5,"NOV":5.8,"DEC":3.8,"WIN":5.04,"SPR":8.56,"SUM":14.59,"AUT":9.35,"ANN":9.41},{"Year":1991,"JAN":2.6,"FEB":1.4,"MAR":6.7,"APR":6.9,"MAY":10,"JUN":10.9,"JUL":15.9,"AUG":15.7,"SEP":13.1,"OCT":9,"NOV":5.7,"DEC":4.4,"WIN":2.61,"SPR":7.88,"SUM":14.21,"AUT":9.27,"ANN":8.58},{"Year":1992,"JAN":3.6,"FEB":4.8,"MAR":6.1,"APR":7.4,"MAY":12,"JUN":14.4,"JUL":14.6,"AUG":13.8,"SEP":11.9,"OCT":6.7,"NOV":6.1,"DEC":3.2,"WIN":4.25,"SPR":8.54,"SUM":14.27,"AUT":8.21,"ANN":8.73},{"Year":1993,"JAN":4.7,"FEB":4.7,"MAR":5.6,"APR":8.2,"MAY":10,"JUN":13.4,"JUL":13.7,"AUG":13.1,"SEP":11.2,"OCT":7.3,"NOV":4.1,"DEC":3.9,"WIN":4.19,"SPR":7.94,"SUM":13.39,"AUT":7.55,"ANN":8.35},{"Year":1994,"JAN":4,"FEB":2.4,"MAR":5.9,"APR":6.8,"MAY":9.3,"JUN":12.7,"JUL":16,"AUG":14.3,"SEP":11.4,"OCT":9,"NOV":8.8,"DEC":5.4,"WIN":3.43,"SPR":7.37,"SUM":14.35,"AUT":9.77,"ANN":8.88},{"Year":1995,"JAN":3.5,"FEB":4.9,"MAR":4.2,"APR":7.6,"MAY":10.2,"JUN":12.9,"JUL":16.6,"AUG":17.3,"SEP":12.4,"OCT":11.6,"NOV":6.9,"DEC":1.7,"WIN":4.59,"SPR":7.32,"SUM":15.65,"AUT":10.29,"ANN":9.17},{"Year":1996,"JAN":3.9,"FEB":2,"MAR":3.7,"APR":7.4,"MAY":8,"JUN":12.9,"JUL":14.7,"AUG":15.1,"SEP":12.6,"OCT":10.3,"NOV":4.7,"DEC":2.5,"WIN":2.53,"SPR":6.35,"SUM":14.24,"AUT":9.19,"ANN":8.16},{"Year":1997,"JAN":2.2,"FEB":5.2,"MAR":7.1,"APR":7.9,"MAY":10.2,"JUN":12.6,"JUL":15.3,"AUG":17.1,"SEP":12.7,"OCT":9.2,"NOV":7.7,"DEC":5.2,"WIN":3.23,"SPR":8.42,"SUM":15.05,"AUT":9.86,"ANN":9.4},{"Year":1998,"JAN":4.3,"FEB":6.8,"MAR":6.7,"APR":6.6,"MAY":11.5,"JUN":12.6,"JUL":14,"AUG":14.4,"SEP":13.4,"OCT":9,"NOV":5.2,"DEC":4.9,"WIN":5.36,"SPR":8.27,"SUM":13.7,"AUT":9.23,"ANN":9.14},{"Year":1999,"JAN":4.5,"FEB":4.2,"MAR":6.2,"APR":8.3,"MAY":11.4,"JUN":12.4,"JUL":15.9,"AUG":14.8,"SEP":14.2,"OCT":9.8,"NOV":6.8,"DEC":3.6,"WIN":4.52,"SPR":8.64,"SUM":14.38,"AUT":10.25,"ANN":9.36},{"Year":2000,"JAN":4.3,"FEB":5,"MAR":6.5,"APR":6.7,"MAY":10.8,"JUN":13.1,"JUL":14.1,"AUG":15.2,"SEP":13.4,"OCT":9.2,"NOV":5.8,"DEC":4.6,"WIN":4.29,"SPR":8.05,"SUM":14.14,"AUT":9.47,"ANN":9.09},{"Year":2001,"JAN":2.6,"FEB":3.4,"MAR":4.1,"APR":6.7,"MAY":11.4,"JUN":12.6,"JUL":15.3,"AUG":15.2,"SEP":12.3,"OCT":12.2,"NOV":6.8,"DEC":3.1,"WIN":3.54,"SPR":7.38,"SUM":14.38,"AUT":10.44,"ANN":8.84},{"Year":2002,"JAN":5,"FEB":5.5,"MAR":6.5,"APR":8.2,"MAY":10.8,"JUN":13.2,"JUL":14.4,"AUG":15.6,"SEP":13.2,"OCT":8.7,"NOV":7.5,"DEC":4.8,"WIN":4.53,"SPR":8.48,"SUM":14.42,"AUT":9.8,"ANN":9.47},{"Year":2003,"JAN":3.7,"FEB":3.4,"MAR":6.7,"APR":8.9,"MAY":10.7,"JUN":14.6,"JUL":16.2,"AUG":16.5,"SEP":13.1,"OCT":8.2,"NOV":7.4,"DEC":4.3,"WIN":3.99,"SPR":8.76,"SUM":15.77,"AUT":9.54,"ANN":9.5},{"Year":2004,"JAN":4.4,"FEB":4.4,"MAR":5.7,"APR":8.5,"MAY":11.1,"JUN":14,"JUL":14.4,"AUG":16.1,"SEP":13.4,"OCT":9.4,"NOV":7.1,"DEC":5,"WIN":4.35,"SPR":8.42,"SUM":14.86,"AUT":9.95,"ANN":9.47},{"Year":2005,"JAN":5.3,"FEB":3.7,"MAR":6.4,"APR":7.9,"MAY":10,"JUN":14.1,"JUL":15.3,"AUG":14.9,"SEP":13.8,"OCT":11.7,"NOV":5.6,"DEC":4.2,"WIN":4.71,"SPR":8.12,"SUM":14.77,"AUT":10.38,"ANN":9.45},{"Year":2006,"JAN":3.9,"FEB":3.5,"MAR":3.9,"APR":7.4,"MAY":10.7,"JUN":14.5,"JUL":17.8,"AUG":15,"SEP":15.2,"OCT":11.7,"NOV":7.2,"DEC":5.5,"WIN":3.85,"SPR":7.35,"SUM":15.78,"AUT":11.39,"ANN":9.73},{"Year":2007,"JAN":5.9,"FEB":5.2,"MAR":6.3,"APR":10.2,"MAY":10.7,"JUN":13.7,"JUL":14.3,"AUG":14.4,"SEP":12.6,"OCT":10.3,"NOV":6.9,"DEC":4.4,"WIN":5.56,"SPR":9.05,"SUM":14.12,"AUT":9.94,"ANN":9.59},{"Year":2008,"JAN":5.3,"FEB":4.9,"MAR":5.1,"APR":7.1,"MAY":12.2,"JUN":12.9,"JUL":15.3,"AUG":15.1,"SEP":12.5,"OCT":8.7,"NOV":6.2,"DEC":3.1,"WIN":4.86,"SPR":8.13,"SUM":14.48,"AUT":9.12,"ANN":9.05},{"Year":2009,"JAN":2.8,"FEB":3.7,"MAR":6.1,"APR":8.9,"MAY":10.9,"JUN":13.7,"JUL":15.2,"AUG":15.4,"SEP":13.2,"OCT":10.4,"NOV":7.3,"DEC":2.1,"WIN":3.21,"SPR":8.62,"SUM":14.75,"AUT":10.32,"ANN":9.17},{"Year":2010,"JAN":0.9,"FEB":1.9,"MAR":5.1,"APR":8,"MAY":9.8,"JUN":14.2,"JUL":15.6,"AUG":14.2,"SEP":12.8,"OCT":9.4,"NOV":4.3,"DEC":-0.9,"WIN":1.64,"SPR":7.6,"SUM":14.65,"AUT":8.86,"ANN":7.97},{"Year":2011,"JAN":3.1,"FEB":5.3,"MAR":5.8,"APR":10.7,"MAY":11,"JUN":12.7,"JUL":14.2,"AUG":14.1,"SEP":13.8,"OCT":11.3,"NOV":8.7,"DEC":4.8,"WIN":2.43,"SPR":9.15,"SUM":13.66,"AUT":11.26,"ANN":9.64},{"Year":2012,"JAN":4.7,"FEB":4.2,"MAR":7.7,"APR":6.3,"MAY":10.5,"JUN":12.3,"JUL":14.1,"AUG":15.3,"SEP":12,"OCT":8.2,"NOV":5.8,"DEC":3.9,"WIN":4.58,"SPR":8.21,"SUM":13.93,"AUT":8.63,"ANN":8.77},{"Year":2013,"JAN":3.3,"FEB":2.8,"MAR":2.2,"APR":6.3,"MAY":9.5,"JUN":12.8,"JUL":17,"AUG":15.6,"SEP":12.8,"OCT":11.2,"NOV":5.5,"DEC":5.7,"WIN":3.34,"SPR":6,"SUM":15.17,"AUT":9.84,"ANN":8.77},{"Year":2014,"JAN":4.8,"FEB":5.2,"MAR":6.7,"APR":9.2,"MAY":11.2,"JUN":14.2,"JUL":16.3,"AUG":13.9,"SEP":13.9,"OCT":11.1,"NOV":7.6,"DEC":4.4,"WIN":5.22,"SPR":9.05,"SUM":14.83,"AUT":10.87,"ANN":9.91},{"Year":2015,"JAN":3.7,"FEB":3.5,"MAR":5.5,"APR":7.9,"MAY":9.6,"JUN":12.7,"JUL":14.4,"AUG":14.7,"SEP":11.9,"OCT":10,"NOV":8.2,"DEC":7.9,"WIN":3.91,"SPR":7.68,"SUM":13.93,"AUT":10.02,"ANN":9.21},{"Year":2016,"JAN":4.6,"FEB":3.9,"MAR":5.3,"APR":6.5,"MAY":11.3,"JUN":13.9,"JUL":15.3,"AUG":15.5,"SEP":14.6,"OCT":9.8,"NOV":4.9,"DEC":5.9,"WIN":5.49,"SPR":7.71,"SUM":14.91,"AUT":9.78,"ANN":9.31},{"Year":2017,"JAN":3.9,"FEB":5.3,"MAR":7.3,"APR":8,"MAY":12.1,"JUN":14.5,"JUL":15.1,"AUG":14.5,"SEP":12.6,"OCT":11.2,"NOV":5.8,"DEC":4.1,"WIN":5,"SPR":9.15,"SUM":14.72,"AUT":9.88,"ANN":9.56}]')}}]);
//# sourceMappingURL=component---src-pages-experiments-flowers-2-js-86d88d038f53657edbf1.js.map