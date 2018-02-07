var oosList = [];

var skuList = document.querySelectorAll('.sku');
var skuName = "";
var skuOOS = false;
var skuNotEnough = false;
var skuQuantity = "";

var sku = function(name, oos, notEnough, q) {
    this.name = name;
    this.oos = oos;
    this.notEnough = notEnough;
    this.quantity = +q;
    this.comment = "";
    
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
                         this.parentNode.querySelector('input[type="number"]').value = "";
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
                console.log(skuNotEnough);
                
                console.log(skuName);
                
                console.log(skuQuantity);
                addSku();
                this.innerText = "---";           
                this.setAttribute("name", "remove");
                }

            });
    }

function addSku() {
   // event.preventDefault;
    console.log(skuName + " " + skuOOS + " " + skuNotEnough + " " + skuQuantity);
    
    oosList.push(new sku(skuName, skuOOS, skuNotEnough, skuQuantity)); 
    console.log(oosList);
    console.log(oosList.length);
}

function quant() {
    for (var i = 0; i < skuList.length; i++) {
        skuList[i].querySelectorAll('input[type="radio"]')[1].addEventListener('click', function() {
            console.log(this);
            console.log(this.parentNode.parentNode);
            var q = document.createElement('input');
            q.setAttribute("type", "number");
            this.parentNode.parentNode.appendChild(q);
            //skuQuantity = q.value.toString();
        });
    }
}


function save(e) {
//    e.preventDefault;
}