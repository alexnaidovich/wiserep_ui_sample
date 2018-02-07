var oosList = [];

var skuList = document.querySelectorAll('.sku');
var skuName = "";
var skuOOS = false;
var skuNotEnough = false;
var skuQuantity = "";
var skuComment = "";

var sku = function(name, oos, notEnough, q, comment) {
    this.name = name;
    this.oos = oos;
    this.notEnough = notEnough;
    this.quantity = +q;
    this.comment = comment;
    
};

quant();

for (var i = 0; i < skuList.length; i++) {
        skuList[i].querySelector('button[class="add"]').addEventListener('click', function(){
            console.log(this.getAttribute("name"))
            if (this.getAttribute("name") === "remove") {
                console.log(this.getAttribute("name"));
                skuName = this.previousElementSibling.innerText;
                for (var key in oosList) {
                    console.log(key);
                    console.log(oosList[key].name);
                    if (oosList[key].name === skuName) {
                        oosList.splice(key, 1);
                    }
                    
                }
                console.log(oosList);
                this.innerText = "+++";
                
                if (this.parentNode.classList.contains("sku-second") === true) {
                    this.parentNode.style.backgroundColor = "#ccc";
                } else {
                    this.parentNode.style.backgroundColor = "unset";
                }
                
                for (var k = 0; k < this.parentNode.querySelectorAll('input[type="radio"]').length; k++) {
                   console.log(this);
                    console.log(this.parentNode.querySelectorAll('input[type="radio"]')[k] + " " + this.parentNode.querySelectorAll('input[type="radio"]')[k].value); 
                    this.parentNode.querySelectorAll('input[type="radio"]')[k].checked = false;
                }
                
                this.setAttribute("name", "add");
            } else {
                console.log(this.getAttribute("name"));
                console.log(this.previousElementSibling);
                skuName = this.previousElementSibling.innerText;
                console.log(this.parentNode.querySelectorAll('input[type="radio"]')[0]);
                console.log(this.parentNode.querySelectorAll('input[type="radio"]')[1]);
                
                if (this.parentNode.querySelectorAll('input[type="radio"]')[0].checked === true) {
                    skuOOS = true;
                    if (this.parentNode.querySelector('input[type="number"]') !== null) {
                         this.parentNode.querySelector('input[type="number"]').remove();
                         }
                } else {
                    skuOOS = false;
                }
                console.log(skuOOS);
                
                if (this.parentNode.querySelectorAll('input[type="radio"]')[1].checked === true) {
                    skuNotEnough = true;
                    console.log(this.parentNode.querySelector('input[type="number"]').value);
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
                
                console.log(skuNotEnough);
                
                console.log(skuName);
                
                console.log(skuQuantity);
                
                console.log(skuComment);
                
                addSku();
                this.innerText = "---"; 
                this.parentNode.style.backgroundColor = "#87ab89"
                this.setAttribute("name", "remove");
                }

            });
    }

function addSku() {
   // event.preventDefault;
    console.log(skuName + " " + skuOOS + " " + skuNotEnough + " " + skuQuantity);
    
    oosList.push(new sku(skuName, skuOOS, skuNotEnough, skuQuantity, skuComment)); 
    console.log(oosList);
    console.log(oosList.length);
}

function quant() {
    for (var i = 0; i < skuList.length; i++) {
        skuList[i].querySelectorAll('input[type="radio"]')[1].addEventListener('click', function() {
            console.log(this);
            console.log(this.parentNode.parentNode);
            if (this.parentNode.parentNode.querySelector('input[type="number"]') !== null) {
                this.parentNode.parentNode.querySelector('input[type="number"]').remove();
            }
            var q = document.createElement('input');
            q.setAttribute("type", "number");
            this.parentNode.parentNode.appendChild(q);
            //skuQuantity = q.value.toString();
        });
        
        skuList[i].querySelector('button[name="add-comment"]').addEventListener('click', function() {
            console.log(this);
            if (this.parentNode.querySelector('input[type="text"]') !== null) {
                this.parentNode.querySelector('input[type="text"]').remove();
            }
            var c = document.createElement('input');
            c.setAttribute("type", "text");
            this.parentNode.appendChild(c);
            
        })
    }
}

var arrStr = "";

var submit = document.querySelector('#submit');

submit.addEventListener('click', function(e) {
    e.preventDefault(); 
    for (var j = 0; j < oosList.length; j++) {        
        arrStr += JSON.stringify(oosList[j]);
        console.log(arrStr);        
    }
    
    alert("JSON saved like this:\n" + arrStr);  
    return arrStr;
});

//function save(e) {
//    e.prevent
//    JSON.stringify(oosList);
//    alert("JSON saved like this:\n" + oosList);
//}