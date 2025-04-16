"use strict";(self.webpackChunkmobile=self.webpackChunkmobile||[]).push([[272],{8453:(n,e,a)=>{a.d(e,{R:()=>l,x:()=>o});var i=a(6540);const r={},t=i.createContext(r);function l(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(t.Provider,{value:e},n.children)}},9387:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>j,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Intro Kotlin/Funkcje/funkcje-strzalkowe","title":"Funkcje strza\u0142kowe","description":"Funkcje strza\u0142kowe, inaczej zwane wyra\u017ceniami lambda (lambda expressions), to:","source":"@site/docs/1. Intro Kotlin/06-Funkcje/02-funkcje-strzalkowe.mdx","sourceDirName":"1. Intro Kotlin/06-Funkcje","slug":"/Intro Kotlin/Funkcje/funkcje-strzalkowe","permalink":"/mobile/docs/Intro Kotlin/Funkcje/funkcje-strzalkowe","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1. Intro Kotlin/06-Funkcje/02-funkcje-strzalkowe.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Funkcje strza\u0142kowe"},"sidebar":"tutorialSidebar","previous":{"title":"Funkcje","permalink":"/mobile/docs/Intro Kotlin/Funkcje/funkcje"},"next":{"title":"Filtrowanie - *filter()*","permalink":"/mobile/docs/Intro Kotlin/Funkcje/filtrowanie"}}');var r=a(4848),t=a(8453);const l={title:"Funkcje strza\u0142kowe"},o="Definicja",s={},c=[{value:"Prosta funkcja strza\u0142kowa",id:"prosta-funkcja-strza\u0142kowa",level:2},{value:"Lambda bez parametr\xf3w",id:"lambda-bez-parametr\xf3w",level:2},{value:"Lambda z wyra\u017ceniem warunkowym",id:"lambda-z-wyra\u017ceniem-warunkowym",level:2},{value:"Przyk\u0142ad",id:"przyk\u0142ad",level:2}];function d(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"definicja",children:"Definicja"})}),"\n",(0,r.jsx)(e.p,{children:"Funkcje strza\u0142kowe, inaczej zwane wyra\u017ceniami lambda (lambda expressions), to:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["anonimowe funkcje, kt\xf3re mo\u017cna","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"tworzy\u0107 i"}),"\n",(0,r.jsx)(e.li,{children:"przekazywa\u0107"}),"\n",(0,r.jsx)(e.li,{children:"jako parametry w Kotlinie."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"U\u017cywa si\u0119 ich, gdy potrzebujesz kr\xf3tkich, jednorazowych funkcji, kt\xf3re nie wymagaj\u0105 pe\u0142nej definicji za pomoc\u0105 s\u0142owa kluczowego fun."}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"podstawowa-sk\u0142adnia",children:"Podstawowa sk\u0142adnia"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"{ parametry -> wyra\u017cenie }"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"parametry"}),": Lista parametr\xf3w funkcji lambda (mo\u017ce by\u0107 pusta)."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"wyra\u017cenie"}),": Kod, kt\xf3ry zostanie wykonany w ciele funkcji i zazwyczaj zwr\xf3cony jako wynik."]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"przyk\u0142ady",children:"Przyk\u0142ady"}),"\n",(0,r.jsx)(e.h2,{id:"prosta-funkcja-strza\u0142kowa",children:"Prosta funkcja strza\u0142kowa"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:"val dodaj = { a: Int, b: Int -> a + b }\n\nfun main() {\n    val wynik = dodaj(3, 4)\n    println(wynik)  // Wypisze: 7\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"lambda-bez-parametr\xf3w",children:"Lambda bez parametr\xf3w"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:'val powitaj = { println("Cze\u015b\u0107 Kotlin!") }\n\nfun main() {\n    powitaj()  // Wypisze: Cze\u015b\u0107 Kotlin!\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"lambda-z-wyra\u017ceniem-warunkowym",children:"Lambda z wyra\u017ceniem warunkowym"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:"val maks = { a: Int, b: Int -> if (a > b) a else b }\n\nfun main() {\n    println(maks(10, 20))  // Wypisze: 20\n}\n"})}),"\n",(0,r.jsx)(e.h1,{id:"skr\xf3cone-lambdy",children:"Skr\xf3cone lambdy"}),"\n",(0,r.jsx)(e.p,{children:"Automatyczne rozpoznawanie typ\xf3w"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:"val dodaj = { a: Int, b: Int -> a + b }  // Z pe\u0142nymi typami\nval dodajProsta: (Int, Int)->Int = { a, b -> a + b }  // Kotlin wywnioskuje, \u017ce to Int\n\n\nfun main() {\n    println(dodaj(11,22))  // Wypisze: 33\n}\n"})}),"\n",(0,r.jsxs)(e.h1,{id:"u\u017cycie-it",children:["U\u017cycie ",(0,r.jsx)(e.code,{children:"it"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Je\u015bli lambda przyjmuje tylko jeden argument, nie trzeba go jawnie nazywa\u0107."}),"\n",(0,r.jsx)(e.li,{children:"Kotlin automatycznie przypisuje ten argument do zmiennej it."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:"val podwojZItInput = { it: Int -> it * 5 }\nval podwojBezItInput: (Int)->Int = { it * 5 }\n\nfun main() {\n    println(podwojZItInput(5))  // Wypisze: 25\n    println(podwojBezItInput(5)) // Wypisze 25\n"})}),"\n",(0,r.jsx)(e.h1,{id:"u\u017cycie-lambd-z-funkcjami-wy\u017cszego-rz\u0119du",children:"U\u017cycie lambd z funkcjami wy\u017cszego rz\u0119du"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Funkcje wy\u017cszego rz\u0119du to takie, kt\xf3re","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"mog\u0105 przyjmowa\u0107 inne funkcje jako argumenty lub"}),"\n",(0,r.jsx)(e.li,{children:"zwraca\u0107 funkcje."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"W Kotlinie lambdy s\u0105 cz\u0119sto u\u017cywane z funkcjami wy\u017cszego rz\u0119du, aby pisa\u0107 bardziej zwi\u0119z\u0142y i elastyczny kod."}),"\n",(0,r.jsx)(e.h2,{id:"przyk\u0142ad",children:"Przyk\u0142ad"}),"\n",(0,r.jsx)(e.p,{children:"Funkcja wy\u017cszego rz\u0119du, kt\xf3ra przyjmuje dwie liczby i operacj\u0119"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:'fun operujNaLiczbach(a: Int, b: Int, operacja: (Int, Int) -> Int): Int {\n    return operacja(a, b)\n}\n\nfun main() {\n    // Przyk\u0142ad u\u017cycia lambdy do dodawania\n    val suma = operujNaLiczbach(3, 4) { x, y -> x + y } // je\u017celi lambda jest ostatnim parametrem,\n                                                        // mo\u017cna j\u0105 napisa\u0107 poza nawiasem\n                                                        // a je\u017celi jest jedynym parametrem, mo\u017cna pomin\u0105\u0107 nawiasy zwyk\u0142e ()\n    println("Suma: $suma")  // Wypisze: Suma: 7\n\n    // Przyk\u0142ad u\u017cycia lambdy do mno\u017cenia\n    val iloczyn = operujNaLiczbach(3, 4) { x, y -> x * y }\n    println("Iloczyn: $iloczyn")  // Wypisze: Iloczyn: 12\n'})})]})}function j(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}}}]);