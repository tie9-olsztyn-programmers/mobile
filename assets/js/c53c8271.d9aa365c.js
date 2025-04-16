"use strict";(self.webpackChunkmobile=self.webpackChunkmobile||[]).push([[355],{513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Intro Kotlin/tablitc-i-listy","title":"Tablice i listy","description":"- podstawowe struktury danych","source":"@site/docs/1. Intro Kotlin/05-tablitc-i-listy.mdx","sourceDirName":"1. Intro Kotlin","slug":"/Intro Kotlin/tablitc-i-listy","permalink":"/mobile/docs/Intro Kotlin/tablitc-i-listy","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1. Intro Kotlin/05-tablitc-i-listy.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Tablice i listy"},"sidebar":"tutorialSidebar","previous":{"title":"P\u0119tle","permalink":"/mobile/docs/Intro Kotlin/p\u0119tle"},"next":{"title":"Funkcje","permalink":"/mobile/docs/Intro Kotlin/Funkcje/funkcje"}}');var a=t(4848),l=t(8453);const r={title:"Tablice i listy"},s="Tablice i listy",o={},c=[{value:"Tworzenie tablicy, dost\u0119p, modyfikacja",id:"tworzenie-tablicy-dost\u0119p-modyfikacja",level:2},{value:"Lista niemutowalna - dane tylko do odczytu",id:"lista-niemutowalna---dane-tylko-do-odczytu",level:2},{value:"Lista mutowalna - Create Read Update Delete",id:"lista-mutowalna---create-read-update-delete",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"tablice-i-listy",children:"Tablice i listy"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"podstawowe struktury danych"}),"\n",(0,a.jsx)(n.li,{children:"s\u0142u\u017c\u0105 do przechowywania kolekcji element\xf3w"}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"tablica",children:"Tablica"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"struktura danych o sta\u0142ym rozmiarze,"}),"\n",(0,a.jsx)(n.li,{children:"przechowuje elementy tego samego typu."}),"\n",(0,a.jsx)(n.li,{children:"ma sta\u0142\u0105 d\u0142ugo\u015b\u0107"}),"\n",(0,a.jsx)(n.li,{children:"raz utworzona nie mo\u017ce zmieni\u0107 swojego rozmiaru, ale elementy mog\u0105 by\u0107 modyfikowane."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"tworzenie-tablicy-dost\u0119p-modyfikacja",children:"Tworzenie tablicy, dost\u0119p, modyfikacja"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"val numbers = arrayOf(1, 2, 3, 4, 5)"}),"\n",(0,a.jsx)(n.code,{children:"println(numbers[0])  // Wypisuje: 1"}),"\n",(0,a.jsx)(n.code,{children:"println(numbers[2])  // Wypisuje: 3"}),"\n",(0,a.jsx)(n.code,{children:"numbers[1] = 10  // Zmienia warto\u015b\u0107 na indeksie 1"}),"\n",(0,a.jsx)(n.code,{children:"println(numbers[1])  // Wypisuje: 10"})]}),"\n",(0,a.jsx)(n.h1,{id:"lista",children:"Lista"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"uporz\u0105dkowana kolekcja element\xf3w,"}),"\n",(0,a.jsx)(n.li,{children:"elementy mog\u0105 wyst\u0119powa\u0107 wielokrotnie."}),"\n",(0,a.jsxs)(n.li,{children:["Kotlin oferuje kilka rodzaj\xf3w list:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"lista niemutowalna (niezmienialna) ,"}),"\n",(0,a.jsx)(n.li,{children:"lista mutowalna (zmienialna)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"lista-niemutowalna---dane-tylko-do-odczytu",children:"Lista niemutowalna - dane tylko do odczytu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'fun main() {\n\n    val fruits = listOf("Apple", "Banana", "Orange")\n    println(fruits[0])  // Wypisuje: Apple\n    println(fruits[1])  // Wypisuje: Banana\n\n    for (fruit in fruits) {\n\n        println(fruit)\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"lista-mutowalna---create-read-update-delete",children:"Lista mutowalna - Create Read Update Delete"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'fun main() {\n\n    val mutableFruits = mutableListOf("Apple", "Banana", "Orange")\n    mutableFruits.add("Grapes")  // Dodanie nowego elementu\n    println(mutableFruits)       // Wypisuje: [Apple, Banana, Orange, Grapes]\n\n    mutableFruits[1] = "Strawberry"  // Zamiana "Banana" na "Strawberry"\n    println(mutableFruits)           // Wypisuje: [Apple, Strawberry, Orange, Grapes]\n\n    val fruits = mutableListOf("Apple", "Banana", "Orange")\n    fruits.remove("Banana")\n    println(fruits)  // Wypisuje: [Apple, Orange]\n\n    val fruits = mutableListOf("Apple", "Banana", "Orange")\n    fruits.removeAt(1)\n    println(fruits)  // Wypisuje: [Apple, Orange]\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(6540);const a={},l=i.createContext(a);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);