/*
document egy objektum, ami rendelkezik különböző metódusokkal 
*/ 

function add(a,b) {
    return a+b;
}

const add1 = add(1,2);
console.log(add1); // 3

/*
Az objektumok kulcs-értékpárok (vesszővel elválasztva)
*/

const Car = {
    brand: "Volvo",
    type: "S60",
    color: "piros",
    goForward: function(speed) {
        console.log(`A(z) ${this.color} szinű, ${this.brand} márkájú és ${this.type} típusú jármű ${speed} km/h-val megy előre.`);
    },

    goBackward: function(speed) {
        console.log(`A(z) ${this.color} színű, ${this.brand} márkájú és ${this.type} típusú jármű ${speed} km/h-val megy hátra.`);
    },

    break: ()=> {
        console.log(`A(z) ${Car.color} színű, ${Car.brand} márkájú és ${Car.type} típusú jármű fékez`);
    }


}

console.log(Car);
/*
{
  brand: 'Volvo',
  type: 'S60',
  color: 'piros',
  goForward: [Function: goForward],
  goBackward: [Function: goBackward],
  break: [Function: break]
}
*/ 
console.log(Car.goForward(60)); //A(z) piros szinű, Volvo márkájú és S60 típusú jármű 60 km/h-val megy előre.
console.log(Car.goBackward(60)); //A(z) piros színű, Volvo márkájú és S60 típusú jármű 60 km/h-val megy hátra.
console.log(Car.break);


/*const array2D = [["", "", ""], ["", "", ""], ["", "", ""]];

for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        /Access each element using array2D[i][j]
        console.log(`Element at (${i}, ${j}): ${array2D[i][j]}`);
    }
}
*/

/*
fontos dolgok a Car függvénynél megadhatunk kulcs-értékpárokat neki, mint pl. 
brand: "Volvo"
ezeket úgy tudjuk elérni, hogy console.log(Car.brand);
megadhatunk neki függvényeket is mint pl. goBackward: function(speed) {}
ezt majd úgy tudjuk meghívni, hogy console.log(Car.goBackward(60));
itt meghívásnál megadunk neki egy paramétert, amit vár itt a speed az 60 lesz 
a többi dologra meg úgy tudunk hívatkozni, hogy this. az értékpárokra, amik benne vannak ebben a Car objektumba 
de viszont nagyon fontos, hogyha arrow function van, annak más a scope-ja, szóval itt nem tudunk a this.vel az értékpárokra hívatkozni 
hanem csak úgy, hogy Car.brand, Car.type 
break: ()=> {} !!!!!

Nagyon, fontos, hogyha készítünk egy változót a függvényen belül, ami benne van ebbe a objektum-ba,
akkor azt nem tudjuk elérni, csak a függvény belsejében
goForward: function(speed) {
            // const color: "sárga"
        // console.log(color); ezt nem lehet elérni kivülről
}

***************************************************************************************************
*/

/*
Hogy tudunk lementeni a DOM segítségével egy elemet itt JavaScriptben 
DOM az a HTML dokumentumunk reprezentációja 

van egy <div id="div-1"></div>
Kétféle módja van ennek a lementésére 
1. document.getElementById
2. document.querySelector("#")
itt fontos, hogy kell a #, mert azzal tudunk id alapján lementeni dolgokat 
*/

// const div1 = document.getElementById("div1");
// console.log(div1);
//visszakapjuk ezt az elemet, div-et -> <div id="div-1"></div>
// const div2 = document.querySelector("#div1");
// console.log(div2);
//ezzel is ugyanúgy visszakaptuk ezt a id="div1"-es div-et 

/*
Hozzáférés class alapján 
    <div class="div">1</div>
    <div class="div">2</div>
    <div class="div">3</div>
*/

// const divs = document.getElementsByClassName("div");
// console.log(divs);
/*
Visszakaptunk egy HTML Collection-t 
HTML Collection(3) [div.div, div.div, div.div]
0: div.div
1: div.div
2: div.div 
length: 3
[[Prototype]]: HTMLCollection
    item: f item()
    length: 3
    namedItem: f namedItem()
    constructor: f HTMLColelction()
    [[Prototype]]: Object 

De majd ha querySelector-vel mentjük az jobb
*/

// const div3 = document.querySelector(".div");
// console.log(div3);
/*
A querySelector-val így csak az első elemet kapjuk vissza 
-> 
<div class="div"></div>

Ha az összeset vissza akarjuk kapni, aminek div-class-ja van akkor a querySelectorAll kell nekünk 
*/
const divs2 = document.querySelectorAll(".div");
console.log(divs2);
/*
Így már lementi az összeset és visszakaptunk egy nodeList-et 
NodeList(3) [div.div, div.div, div.div]
0: div.div
1: div.div
2: div.div
length: 3 
[[Prototype]]: NodeList
    entries: f entries()
    forEach: f forEach()
    item: f item()
    keys: f keys()
    values: f values()
    constructor: f NodeList
    [[Prototype]]: Object

és ez sokkal jobb, mint a getElementsByClassName, mert itt van pl. entries, keys, values és ezeken végig lehet menünk  
*/ 

// for(const entry of Object.entries(divs2)) {
//     console.log(entry);
// }
/*
És akkor így végig tudunk menni az entries-eken, ami egy tömbben lévő tömbők és azokban értékpárok
[['0', div.div], ['1', div.div], ['2', div.div]]
nagyon fontos, hogy a kulcs az a index és az érték meg a div.div maga az elem!!!!!!!!!!!!!!!!!!!!!!!!!!!
és akkor ezeken végigmentünk egy for-val 
-> 
['0', div.div]
    0: 0
    1: div.div
    length: 2 
['1', div.div]
['2', div.div]
*/

// for(const key of Object.keys(divs2)) {
//     console.log(key);//0,1,2 
// }
/*
Így meg végig tudunk menni a kulcsain, amik ugye az index-ek lesznek 
0, 1, 2 
*/
// for(const value of Object.values(divs2)) {
//     console.log(value);
// }
/*
Value-k meg maga az elemek lesznek 
<div class="div">1</div>
<div class="div">2</div>
<div class="div">3</div>
*/

// divs2.forEach((value, index, array)=> {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// });

/*
nagyon fontos, hogy a forEach-nek a színtaktikája 
.forEach((...)=> {

})
1. elöször egy () 
2. és abban kell egy arrow function

mit adott vissza a divs.forEach((value, index, array)=> {
    console.log(value);
    console.log(index);
    console.log(array);
});


<div class="div">1</div>
0
NodeList(3) [div.div, div.div, div.div]

<div class="div">2</div>
1
NodeList(3) [div.div, div.div, div.div]

<div class="div">3</div>
2
NodeList(3) [div.div, div.div, div.div]
*/

//vagy így is lehet az entries-t megkapni 
const entries = divs2.entries();
//azért kell (), mert ez egy function!!!!, ahogy van a nodeList-ben is entries: f entries()
for(const entry of entries) {
    console.log(entry);
}
/*
['0', div.div]
    0: 0
    1: div.div
    length: 2 
['1', div.div]
['2', div.div]
*/
for(const d of divs2) {
    console.log(d);
}
/*
Az értékeken egy sima for-val is végig tudunk menni nem kell így, hogy for(const d of Object.value(divs2))
*/
console.log(Object.entries(Car));
/*
ugye az entries tömbök a tömbben és akkor abban vannak értékpárok 
ha van kulcs, akkor a kulcs, mint pl. itt, hogy brand, type, stb. ha nincsen akkor meg az index 
mert a tömb-nek is van entries-je, csak ott ugye mindig a kulcs az az index lesz!!!!!!!!!!!!!!!!!! 
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
0: ['brand','Volvo']
1: ['type','S60']
2: ['color','piros']
3: ['goForward', f]
4: ['goBackward' f]
5: ['break', f]
*/
console.log(Object.keys(Car)); // ['brand','type', 'color', 'goForward', 'goBackward', 'break']
//ugyanígy végig tudunk menni egy objektum kulcsain és értékein ezek egy tömbben lesznek ezek az értékek meg a kulcsok
console.log(Object.values(Car)); // ['Volvo', 'S60', 'piros', f, f, f]

//ezeken meg végig lehet menni egy for-val 
for(const key of Object.keys(Car)) {
    console.log(key); //brand, type, color, goForward, goBackward, break
}

for(const value of Object.values(Car)) {
    console.log(value); //Volvo, S60, piros itt meg az egész függvények, f(speed) {console.log(A(z) ${this.color}......megy előre)}
}

//entries a Car-nál
for(const prop of Object.entries(Car)) {
    console.log(`${prop[0]}-${prop[1]}`);
}
/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
végigmentünk a Car-nak az entries-ein és akkor visszakaptunk kételemű tömböket, mert a prop itt egy kételemű tömb kulcs-érték tömbönként 
prop[0] - prop[1]-vel meg az összesnek kiírtuk az nulladik (kulcs) és első (érték) elemét 
brand-Volvo 
type-S60
color-piros 
goForward-function(speed) {console.log{console.log(A(z) ${this.color}......megy előre)}
... és a többi function ugyanígy
*/
const tomb = ["a", "b", "c", "d","e"];
console.log(tomb);

for(const entry of tomb.entries()) {
    console.log(entry);
}
/*
itt jön, majd az be, hogy az értékek azok a a,b,c,d,e, amin ugye végi tudunk menni egy for-val is 
de tomb-nek is van entries-je, itt jönnek az index-ek, mint kulcsok 
->
[0, 'a']
[1, 'b']
[2, 'c']
[3, 'd']
[4, 'e'] 
*/

divs2.forEach((d)=> {
    console.log(d);
});
/*
Visszaadja a value-t tehát a div-eket 
<div class="div">1</div>
<div class="div">2</div>
<div class="div">3</div>
******************************************************************************************************************************
*/

/*
Hozzáférés tagnév alapján 
    <span>1</span>
    <span>2</span>
    <span>3</span>
*/

const spans = document.getElementsByTagName("span");
console.log(spans);
/*
Ugye getElememts az mindig HTMLCollection-t add vissza, minthogy a className-nél volt 
HTMLCollection(3) [span,span,span]
0: span
1: span
2: span
length: 3
[[Prototype]]: HTMLCollection
*/ 

const spans2 = document.querySelectorAll("span");
console.log(spans2);
/*
querySelector meg mindig egy NodeList-et fog visszaadni 
NodeList(3) [span,span, span]
0: span
1: span
2: span 
length: 3
    entries: f entries() 
    forEach: f forEach()
    keys: f keys() 
    values: f values()
    stb.
************************************************
*/

/*
Hozzá tudunk férni attributumok alapján, itt pl. a name attributum alapján 
    <label>
        Igen
        <input type="radio" name="smoking" value="1">
    </label>
    <label>
        Nem
        <input type="radio" name="smoking" value="0" >
    </label>

Nagyon fontos, hogy itt azért tettük mindegyiket egy label-be, hogy tudjunk bele írni 
mert ha simán csak két input mezőnk lenne, aminek a type-ja a radio, akkor nem tudnánk, hogy mit fogunk kipipálni!!!! 
*/

// const smoking = document.getElementsByName("smoking");
// console.log(smoking);
/*
Itt viszont érdekes, hogy a getElements-vel egy NodeList-et kaptunk vissza ha name alapján mentünk le valamit
NodeList(2) [input, input] 
0: input 
1: input
*/

// const smoking2 = document.querySelectorAll("[name:'smoking']");
// console.log(smoking2);

/*
a querySelectorAll-val meg kell adni, hogy milyen attributumról van szó, itt ugye name és, hogy mi az értéke -> smoking 
fontos, hogy a smoking az ''-be legyen 
*********************************************************************************************************
*/
/*
HTML elemek manipulációja 
*/

const squareDiv = document.querySelector("#square");

/*
    .blue-square {
        width: 300px;
        height: 300px;
        background-color: blue;
        transition: all 3s ease;
    }

Csináltunk HTML-ben egy ilyen blue-square osztályt 

squareDiv.classList.add("blue-square");

setTimeout(()=> {
    squareDiv.classList.remove("blue-square");
}, 3000)

itt amit lementettünk id-alapján és itt adtunk neki egy border-t squareDiv.style.border = "3px solid brown";

és megadtuk neki ezt a blue-square osztályt, amit csináltunk a html-ben style-ban 
annak van egy transition: all 3s ease;
szóval 3 másodperc alatt kapja meg ezeket a dolgokat, átmenetesen 

és a setTimeOut-val meg leszedjük ezt az osztályt 3s (3000) után, pont, amikor átválotozott a remove-val 
*/ 

let counter = 0;
squareDiv.style.border = "3px solid brown"; //fontos a szintaktika!!

const intervalID = setInterval(()=> {
    squareDiv.classList.toggle("blue-square");
    console.log(intervalID);
    counter++;

    if(counter === 10) {
        clearInterval(intervalID);
    }
}, 1000)

/*
itt meg a setInterval-val 1s-ként toggle-jük ezt az osztályt
fontos, hogy legyen egy counter - amivel megtudjuk akadályozni, hogy végtelen ciklus legyen 
ehhez, kell, hogy egy változóban legyen!!!! 
mert majd ezt a változónak a nevét kell megadni a clearInterval-nak, amikor azt szeretnénk, hogy vége legyen 
ezt meg a counter-val határozzuk meg!!! 
*/


