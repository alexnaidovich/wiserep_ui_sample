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
           for (var key = 0; key <= oosList.length; key++) {
               if (oosList[0] === undefined || oosList[key].name !== skuName) {
                   if (this.parentNode.parentNode.querySelectorAll('input[type="radio"]')[0].checked === true) {
                       skuOOS = true;
                       /*if (this.parentNode.parentNode.querySelector('input[type="number"]') !== null) {
                            this.parentNode.parentNode.querySelector('input[type="number"]').remove();
                            }*/  //remove on change event 
                   } else {
                       skuOOS = false;
                   }
                   if (this.parentNode.parentNode.querySelectorAll('input[type="radio"]')[1].checked === true) {
                       skuNotEnough = true;                    
                       //skuQuantity = this.parentNode.querySelector('input[type="number"]').value.toString();
                   } else {
                       skuNotEnough = false;
                       //skuQuantity = "";
                   }
                   
                   addSku();
               } //else if (key !== 0 || oosList[key].name !== skuName) {
                  // break;                   
               //}
           } 
        });
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