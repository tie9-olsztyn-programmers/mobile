"use strict";(self.webpackChunkmobile=self.webpackChunkmobile||[]).push([[327],{6006:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"Intro Kotlin/Funkcje/podsumowanie","title":"Podsumowanie funkcji strza\u0142kowych wbudowanych","description":"","source":"@site/docs/1. Intro Kotlin/06-Funkcje/07-podsumowanie.mdx","sourceDirName":"1. Intro Kotlin/06-Funkcje","slug":"/Intro Kotlin/Funkcje/podsumowanie","permalink":"/mobile/docs/Intro Kotlin/Funkcje/podsumowanie","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1. Intro Kotlin/06-Funkcje/07-podsumowanie.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Podsumowanie funkcji strza\u0142kowych wbudowanych"},"sidebar":"tutorialSidebar","previous":{"title":"Funkcja fold()","permalink":"/mobile/docs/Intro Kotlin/Funkcje/redukcja-fold"},"next":{"title":"Podstwowe views","permalink":"/mobile/docs/Podstawowe View/intro"}}');var o=i(4848),a=i(8453);const r={title:"Podsumowanie funkcji strza\u0142kowych wbudowanych"},c=void 0,l={},s=[];function u(n){const e={code:"code",pre:"pre",...(0,a.R)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'fun main() {\n// Przywitanie\nprintln("Witaj w aplikacji demonstracyjnej lambd w Kotlinie!")\n\n    // Lista liczb\n    val liczby = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n    println("Oto lista liczb: $liczby")\n\n    // 1. Filtrowanie parzystych liczb z listy\n    println("\\n1. Filtrowanie parzystych liczb z listy:")\n    val parzyste = liczby.filter { it % 2 == 0 }\n    println("Parzyste liczby: $parzyste")\n\n    // 2. Mno\u017cenie ka\u017cdej liczby z listy przez 2 za pomoc\u0105 mapowania\n    println("\\n2. Mno\u017cenie ka\u017cdej liczby przez 2 (operacja mapowania):")\n    val podwojone = liczby.map { it * 2 }\n    println("Podwojone liczby: $podwojone")\n\n    // 3. Zsumowanie wszystkich liczb z listy\n    println("\\n3. Sumowanie wszystkich liczb:")\n    val suma = liczby.reduce { acc, number -> acc + number }\n    println("Suma liczb: $suma")\n\n    // 4. U\u017cycie lambdy jako argumentu do funkcji wy\u017cszego rz\u0119du\n    println("\\n4. U\u017cycie lambdy jako argumentu do funkcji wy\u017cszego rz\u0119du:")\n    val wynikDodawania = operujNaLiczbach(3, 5) { a, b -> a + b }\n    println("Wynik dodawania 3 + 5: $wynikDodawania")\n\n    val wynikMnozenia = operujNaLiczbach(4, 6) { a, b -> a * b }\n    println("Wynik mno\u017cenia 4 * 6: $wynikMnozenia")\n\n    // 5. U\u017cycie lambdy do sortowania listy\n    println("\\n5. Sortowanie listy w odwrotnej kolejno\u015bci:")\n    val odwrotnaLista = liczby.sortedByDescending { it }\n    println("Odwrotnie posortowana lista: $odwrotnaLista")\n\n    // 6. Lambdy z nazwanym parametrem \'it\'\n    println("\\n6. Lambdy z parametrem \'it\':")\n    val wiekszeOdPiec = liczby.filter { it > 5 }\n    println("Liczby wi\u0119ksze od 5: $wiekszeOdPiec")\n}\n\n// Funkcja wy\u017cszego rz\u0119du, przyjmuj\u0105ca lambd\u0119\nfun operujNaLiczbach(a: Int, b: Int, operacja: (Int, Int) -> Int): Int {\n    return operacja(a, b)\n}\n\n'})})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var t=i(6540);const o={},a=t.createContext(o);function r(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);