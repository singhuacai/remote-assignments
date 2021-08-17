function ajax(src, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var products = JSON.parse(xhr.responseText);
            callback(products);
        }
    }
    xhr.open('GET', src);
    xhr.send();
};

function render(data) {
    var ul = document.getElementById("productList"); // 取得外層容器 productList
    for (let i = 0; i < data.length; i++) {
        var li = document.createElement("LI");
        li.innerHTML = `${data[i].name}, ${data[i].price}, ${data[i].description}`;
        ul.appendChild(li);
    }
}

ajax("http://13.230.176.178:4000/api/1.0/remote-w4-data", function (response) {
    render(response);
});
