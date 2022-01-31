/**
 * Exercice - FOU
 * 
 * Programmer une fonction qui prend en paramètres un numéro de ligne et de colonne et renvoie (return) un tableau contenant les paires lignes-colonnes accessibles par
 * un Fou. Comme il avait été fait en cours pour la Tour.
 * Un fou ne se déplace qu'en diagonale, sur toute la longueur du plateau.
 * 
 * Si vous ne connaissez pas le jeu d'échecs, allez chercher une image sur le net. Le plateau se présente comme un ensemble de cases, 8 en ligne et 8 en colonne, donc 64 cases.
 * Nous considérerons que les lignes vont de 1 à 8, et idem pour les colonnes. Donc inutile de gérer les colonnes comme des lettres.
 * 
 * Exemple : movementsFou(3, 4) correspond à un Fou placé sur la 3ème ligne et la 4ème colonne.
 * 
 * L'implémentation déjà faite est bien sûr fausse mais définit un format de réponse qui est correct. Il s'agira bien de renvoyer un tableau de tableau, c'est à
 * dire un tableau qui contiendra de petits tableaux qui sont les paires ligne-colonne.
 * 
 */
 function mouvdufou(ligne, colonne) {
    var newTable = [];
    var k = 1;
    while(ligne+k <= 8 && colonne+k <= 8) {
        newTable.push([ligne+k, colonne+k])
        k++;
    }
    k = 1;
    while(ligne+k <= 8 && colonne-k >= 1) {
        newTable.push([ligne+k, colonne+k])
        k++;
    }
    k = 1;
    while(ligne-k >= 1 && colonne-k >= 1) {
        newTable.push([ligne+k, colonne+k])
        k++;
    }

    k = 1;
    while(ligne-k >= 1 && colonne+k <= 8) {
        newTable.push([ligne+k, colonne+k])
        k++;
    }
    return newTable
}
console.log(mouvdufou(6, 6))







/**
 * Programmer une fonction qui prend en paramètre un nombre, correspondant à la hauteur d'une Pyramide et qui renvoie un tableau de caractères "*" et espace afin de construire
 * une Pyramide avec la hauteur en argument.
 * 
 * Exemple, pour une hauteur de 5 : ["    *    ", "   ***   ", "  *****  ", " ******* ", "*********"]
 * 
 * Comme pour l'exercice précédent, vous ne devriez pas toucher au log, mais il vous servira à contrôler votre résultat.
 * Pour l'exemple précédent, il vous affichera :
 * 
 *     *    
 *    ***   
 *   *****  
 *  ******* 
 * *********
 * 
 */
 function Pyramide(hauteur) {
    var newTable = [];
for (var i = 0; i < hauteur; i++) {
        var starCount = i*2+1
        var lengthBase = (hauteur-1)*2+1
        var spaces = (lengthBase - starCount)/2

        var str = ''
        str += ' '.repeat(spaces)
        str += '*'.repeat(starCount)
        str += ' '.repeat(spaces)
        newTable.push(str)}
    
        return newTable
}
Pyramide(5).forEach(e => console.log(e))
