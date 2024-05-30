// js DOM

var plusbutton = document.getElementById('addButton')
var minusbutton = document.getElementById('deleteButton')
var container = document.getElementById('praragraphContainer')

function addParagraph() {
    var paragraph = document.createElement('p')
    paragraph.textContent ="this is me abuSalehMdAsif & this is my story"
    praragraphContainer.appendchild(paragraph)
}

function deleteParagraph (){
   var totalParagraphs = document.querySelectorAll('p')
   var endparagraph = totalParagraphs [totalParagrapa.length - 1]
   praragraphContainer. deleteChild(endparagraph)
}


plusbutton.addEventListener('click' , addParagraph)
minusbutton.addEventListener('click', deleteParagraph)