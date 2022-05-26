// NOTE: The variable "shirts" is defined in the shirts.js file as the full list of shirt offerings
//       You can access this variable here, and should use this variable here to build your webpages
let initProducts = () => {
    let availableColor;
    let shirtName;
    for (let i = 0; i < shirts.length; i++) {
        availableColor = (Object.keys(shirts[i].colors).length > 1)?' colors':' color';
        shirtName = "\""+ shirts[i].name +"\"";
        document.getElementById('shirts').innerHTML+=
            "<div class=\"shirt-item\">\n" +
            "      <div class=\"shirt-img\">\n" +
            "        <img src=\"" + shirts[i].colors.white.front +"\" alt=\"\" width=\"100%\" height=\"100%\" align=\"center\">\n" +
            "      </div>\n" +
            "      <div class=\"shirt-description\">\n" +
            "        <div class=\"shirt-text\">\n" +
            "          <div class=\"shirt-name\">\n" +
                            shirts[i].name +
            "          </div>\n" +
            "          <div class=\"shirt-small\">\n" +
            "            Available " + Object.keys(shirts[i].colors).length + availableColor +
            "          </div>\n" +
            "        </div>\n" +
            "        <div class=\"button\" onclick=''>Quick View</div>\n" +
            "        <div class=\"button\" onclick='saveDetails("+ shirtName +")'>See Page</div>\n" +
            "      </div>\n" +
            "    </div>";
    }
};

let initDetails = () => {
    let shirt = getShirt(window.localStorage.getItem('shirt'));
    let img = shirt.colors.white.front;
    for (let shirtElement of Object.keys(shirt.colors)) {
        console.log(shirtElement);
    }

    document.getElementById('detail').innerHTML +=
        "<div class=\"detail-decor-text\">" + shirt.name + "</div>\n" +
        "      <div class=\"detail-x\">\n" +
        "        <div class=\"detail-img\">\n" +
        "          <img src=\""+img+"\" alt=\"\" width=\"100%\" " +
        "           id=\"detail-shirt-img\">\n" +
        "        </div>\n" +
        "        <div>\n" +
        "          <div class=\"detail-decor-text\">" + shirt.price + "</div>\n" +
        "          <div class=\"detail-text\">" + shirt.description + "</div>\n" +
        "          <div class=\"detail-side\">\n" +
        "            <div class=\"shirt-small inline\">side</div>\n" +
        "            <button class=\"button detail-button\" onclick=\"switchSide('front')\">front</button>\n" +
        "            <button class=\"button detail-button\" onclick=\"switchSide('back')\">back</button>\n" +
        "          </div>\n" +
        "          <div class=\"detail-color\" id=\"colors\">\n" +
        "            <div class=\"shirt-small inline\">color</div>\n" +
        "          </div>\n" +
        "        </div>";
    for (let color of Object.keys(shirt.colors)) {
        colorToMethod = "\""+color+"\"";
        document.getElementById('colors').innerHTML +=
            "<button class=\"button detail-button " + color + "\" onclick='switchColor("+colorToMethod+")'>" + color + "</button>"
    }
};

function getShirt(name) {
    for (const i of shirts) {
        if(i['name'] === name){
           return i;
        }
    }
}

function saveDetails(detail){
    window.localStorage.setItem('shirt',detail);
    window.location.href="details.html";
}

function switchSide(inputSide){
    let side = document.getElementById('detail-shirt-img').getAttribute('src');
    if(inputSide === 'front'){
        if(side.indexOf('front') === -1){
            side = side.replace('back','front');
            // let frontIndex = side.indexOf('back');
            document.getElementById('detail-shirt-img').src = side;
        }
    }
    else{
        if(side.indexOf('back') === -1){
            side = side.replace('front','back');
            document.getElementById('detail-shirt-img').src = side;
        }
    }
}

function switchColor(color){
    let shirt = getShirt(window.localStorage.getItem('shirt'));
    setImage(shirt.colors[color].front);
}

function setImage(path){
    document.getElementById('detail-shirt-img').src = path;
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function quickView(shirtName){

}

