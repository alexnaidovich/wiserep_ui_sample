var oosList = [];

var skuList = document.querySelectorAll('.sku');
var skuName = "";
var skuOOS = false;
var skuNotEnough = false;
var skuQuantity = "";
var skuComment = "";

var sku = function(name, oos, notEnough) {
    this.name = name;
    this.oos = oos;
    this.notEnough = notEnough;
    this.quantity = "";
    this.comment = "";
    
};

quant();



for (var i = 0; i < skuList.length; i++) {
    for (var radio = 0; radio < skuList[i].querySelectorAll('input[type="radio"]').length; radio++) {
        skuList[i].querySelectorAll('input[type="radio"]')[radio].addEventListener('change', function() {
            skuName = this.parentNode.parentNode.querySelector('p').innerText;
            var trig = this,
                par = this.parentNode.parentNode,
                trigs = par.querySelectorAll('input[type="radio"]');
        
           for (var key = 0; key <= oosList.length; key++) {
               if (oosList[0] === undefined) {
                   if (trigs[0].checked === true) {
                       skuOOS = true;
                       /*if (this.parentNode.parentNode.querySelector('input[type="number"]') !== null) {
                            this.parentNode.parentNode.querySelector('input[type="number"]').remove();
                            }*/  //remove on change event 
                   } else {
                       skuOOS = false;
                   }
                   if (trigs[1].checked === true) {
                       skuNotEnough = true;                    
                       //skuQuantity = this.parentNode.querySelector('input[type="number"]').value.toString();
                   } else {
                       skuNotEnough = false;
                       //skuQuantity = "";
                   }
        
                   par.style.backgroundColor = "#87ab89"
        
                   addSku();
                   console.log(par.getElementsByTagName('button'));
                   par.getElementsByTagName('button')[0].style.display = "block"
                   par.getElementsByTagName('button')[1].style.display = "block"
                   return;
               } else if (oosList[0] !== undefined) {
                   for (var k in oosList) {
                       if (oosList[k].name === skuName) {
                           if (trigs[0].checked === true) {
                           oosList[key].oos = true;
                           oosList[key].notEnough = false;
                           oosList[key].quantity = "oos";
                           return;
                       } else if (trigs[1].checked === true) {
                          oosList[key].notEnough = true;
                          oosList[key].oos = false;                          
                          return;
                      }
        
                       } else {
                           if (trigs[0].checked === true) {
                               skuOOS = true;
                               /*if (this.parentNode.parentNode.querySelector('input[type="number"]') !== null) {
                                    this.parentNode.parentNode.querySelector('input[type="number"]').remove();
                                    }*/  //remove on change event 
                           } else {
                               skuOOS = false;
                           }
                           if (trigs[1].checked === true) {
                               skuNotEnough = true;                    
                               //skuQuantity = this.parentNode.querySelector('input[type="number"]').value.toString();
                           } else {
                               skuNotEnough = false;
                               //skuQuantity = "";
                           }
        
                           par.style.backgroundColor = "#87ab89"
        
                           for (var ky in oosList) {
                               if (oosList[ky].name === skuName) {
                                   console.log(skuList)
                                   return;
                               } 
                           }
                           addSku();
                           par.getElementsByTagName('button')[0].style.display = "block";
                           par.getElementsByTagName('button')[1].style.display = "block";
                           return;
                       }
                   }
        
               } 
           }
        });
//        if (this.parentNode.parentNode.querySelector(input[type="number"]) !== null) {
//            this.parentNode.parentNode.querySelector(input[type="number"]).addEventListener('change', function () {
//                var self = this,
//                    par = this.parentNode,
//                    name = par.querySelector('p').innerText;
//                for (var key in skuList) {
//                    if (skuList[key].name === name) {
//                        skuList[key].quantity = self.innerText;
//                    }
//                }
//                console.log(skuList);
//            });
//        }
    }
}


/*for (var i = 0; i < skuList.length; i++) {
        skuList[i].querySelector('button[class="add"]').addEventListener('click', function(){            
            if (this.getAttribute("name") === "remove") {
                skuName = this.previousElementSibling.innerText;
                for (var key in oosList) {
                    if (oosList[key].name === skuName) {
                        oosList.splice(key, 1);
                    }
                }
                
                this.innerText = "+++";
                
                if (this.parentNode.classList.contains("sku-second") === true) {
                    this.parentNode.style.backgroundColor = "#ccc";
                } else {
                    this.parentNode.style.backgroundColor = "unset";
                }
                
                for (var k = 0; k < this.parentNode.querySelectorAll('input[type="radio"]').length; k++) {
                    this.parentNode.querySelectorAll('input[type="radio"]')[k].checked = false;
                }
                
                if (this.parentNode.querySelector('input[type="number"]') !== null) {
                    this.parentNode.querySelector('input[type="number"]').remove();
                }
                
                if (this.parentNode.querySelector('input[type="text"]') !== null) {
                    this.parentNode.querySelector('input[type="text"]').remove();
                }
                
                this.setAttribute("name", "add");
            } else {
                skuName = this.previousElementSibling.innerText;
                
                if (this.parentNode.querySelectorAll('input[type="radio"]')[0].checked === true) {
                    skuOOS = true;
                    if (this.parentNode.querySelector('input[type="number"]') !== null) {
                         this.parentNode.querySelector('input[type="number"]').remove();
                         }
                } else {
                    skuOOS = false;
                }
                
                if (this.parentNode.querySelectorAll('input[type="radio"]')[1].checked === true) {
                    skuNotEnough = true;                    
                    skuQuantity = this.parentNode.querySelector('input[type="number"]').value.toString();
                } else {
                    skuNotEnough = false;
                    skuQuantity = "";
                }
                
                if (this.parentNode.querySelector('input[type="text"]') !== null) {
                    skuComment = this.parentNode.querySelector('input[type="text"]').value;
                    } else {
                        skuComment = "";
                    }
                
                addSku();
                this.innerText = "---"; 
                this.parentNode.style.backgroundColor = "#87ab89"
                this.setAttribute("name", "remove");
                }

            });
    }
*/

function addSku() {
    console.log(skuName + " " + skuOOS + " " + skuNotEnough + " " + skuQuantity + " " + skuComment);
    
    oosList.push(new sku(skuName, skuOOS, skuNotEnough)); 
    console.log(oosList);
}

function quant() {
    for (var i = 0; i < skuList.length; i++) {
        skuList[i].querySelectorAll('input[type="radio"]')[1].addEventListener('click', function() {
            if (this.parentNode.parentNode.querySelector('input[type="number"]') !== null) {
                this.parentNode.parentNode.querySelector('input[type="number"]').remove();
            }
            var q = document.createElement('input');
            q.setAttribute("type", "number");
            this.parentNode.parentNode.appendChild(q);
            q.focus();
        });
        
        skuList[i].querySelector('button[name="add-comment"]').addEventListener('click', function() {            
            if (this.parentNode.querySelector('input[type="text"]') !== null) {
                this.parentNode.querySelector('input[type="text"]').remove();
            }
            var c = document.createElement('input');
            c.setAttribute("type", "text");            
            this.parentNode.appendChild(c);
            c.focus();
            
        })
    }
}

var arrStr = "";

var submit = document.querySelector('#submit');

submit.addEventListener('click', function(e) {
    e.preventDefault(); 
    for (var j = 0; j < oosList.length; j++) {        
        arrStr += JSON.stringify(oosList[j]);
    }
    
    console.log(arrStr);        
    alert("JSON saved like this:\n" + arrStr);  
    return arrStr;
});