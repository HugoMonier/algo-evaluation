/**
 * Programmer une fonction prenant en argument 2 tableaux et qui renvoie un tableau contenant leurs valeurs alternées.
 * 
 * Exemple : [1, 2, 3] et ["apple", "orange", "banana"] renverra : [1, "apple", 2, "orange", 3, "banana"]
 */
 function combine(tableau1, tableau2) {
    let tableCombine = [];
    let i = 0;
    if (table1.length !== table2.length)
      return
    while (i < table1.length) {
      tableCombine[i * 2] = table1[i];
      tableCombine[i * 2 + 1] = table2[i];
      i++;
    }
    return tableCombine;
  }
  let table1 = [1, 2, 3];
  let table2 = ["apple", "orange", "banana"];
  console.log(combine(table1, table2));

/**
 * Programmer une fonction prenant en argument un tableau d'éléments et une valeur offset, et qui renvoie un tableau avec les valeurs du tableau en argument décalées de la valeur
 * de offset.
 * 
 * Par exemple : rotate([1, 2, 3, 4, 5], 2) renverra [4, 5, 1, 2, 3] 
 */
 function rotate(tableau, offset) {
    while (offset !== 0){
        tableau.unshift(tableau[tableau.length-1])
        tableau.pop()
        offset=offset-1
    }
    return tableau
}

console.log(rotate([0,1,2,3,4,5,6],4))

/**
 * Suite de Syracuse
 * 
 * La suite de Syracuse est une suite de nombre (nous avions vu la suite de Fibonacci en cours), calculée en prenant pour chaque élément la moitié de sa valeur s'il est pair
 * et le triple plus 1 s'il est impair. Cette suite est infinie, et nous ne prendrons que les 10 premiers éléments.
 * 
 * Programmer une fonction prenant en argument le nombre pour lequel la suite est calculée et qui renvoie un tableau contenant les 10 premiers éléments de la suite de Syracuse.
 * 
 * Par exemple, pour 14, la suite sera : [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]
 * Pour 1, la suite sera : [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]
 */

function syracuse(nombre) {
    var currentNombre = nombre;
    var newTable = [];
    newTable[0] = currentNombre;
    for (var i = 1; i < 10; i++) {
        if (currentNombre % 2 === 0) {
            currentNombre /= 2;
        }else {
            currentNombre = currentNombre * 3 + 1;
        }
        newTable[i] = currentNombre;
    }
    return newTable;
}
var syracuseNbre = 14;
console.log(syracuse(syracuseNbre));