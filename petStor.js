function each(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i], i);
    }
}

function map(array, f) {
    var acc = [];
    each(array, function (element, i) {
        acc.push(f(element, i));
    });
    return acc;
}

function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
        if (predicate(element, index)) {
            acc.push(element);
        }
    });
    return acc;
}

function reduce(array, f, acc) {
    if (acc === undefined) {
        acc = array[0];
        array = array.slice(1);
    }
    each(array, function (element, i) {
        acc = f(acc, element, i);
    });
    return acc;
}

//factory function that return array to hold data of animals
function makeanimal(name, age, price, category, img) {
    var post = {};
    post.name = name;
    post.age = age;
    post.price = price;
    post.category = category;
    post.img = img;
    return post;
}
//vars off each animal

var cat1 = makeanimal('Kitti', '5 Month', '100dt', 'cat', ['./pic/blackcat.jpg', './pic/blacat.jpg', './pic/blcat.jpg']);
var cat2 = makeanimal('Playa', '10 Month', '100dt', 'cat', ['./pic/whitcat.jpg', './pic/whitecat.jpg', './pic/whicat.jpg']);
var dog1 = makeanimal('Black', '8 Month', '600dt', 'dog', ['./pic/blackdog.jpg', './pic/blacdog.jpg', './pic/bladog.jpg']);
var dog2 = makeanimal('Alex', '6 Month', '850dt', 'dog', ['./pic/whitedog.jpg', './pic/whitdog.jpg', './pic/whidog.jpg']);
var cat5 = makeanimal('Simba', '3 Month', '80dt', 'cat', ['./pic/normalcat.jpg', './pic/normacat.jpg', './pic/normacat.jpg']);
var cat6 = makeanimal('Luna', '4 Month', '95dt', 'cat', ['./pic/bicolorcat.jpg', './pic/bicolocat.jpg', './pic/bicolcat.jpg']);
var dog5 = makeanimal('Bella', '7 Month', '550dt', 'dog', ['./pic/asski.webp', './pic/asskdog.jpg', './pic/assdog.jpg']);
var dog6 = makeanimal('Rocky', '9 Month', '680dt', 'dog', ['./pic/pidog.jpg', './pic/pidog.jpg', './pic/pdog.jpg']);
var bird1 = makeanimal('Polly', '1 Year', '30dt', 'bird', ['./pic/pirushbird.jpg', './pic/pirusbird.jpg', './pic/pirubird.jpg']);
var bird2 = makeanimal('Chirpy', '2 Years', '40dt', 'bird', ['./pic/cockatialbird.jpg', './pic/cockatie2.jpg', './pic/cockatia3.jpg']);
var fish1 = makeanimal('Splash', '6 Months', '20dt', 'fish', ['./pic/cobatonfish.jpg', './pic/combato.jpg', './pic/combat.jpg']);
var fish2 = makeanimal('Bubbles', '1 Year', '20dt', 'fish', ['./pic/goldenfish.jpg', './pic/goldefish.jpg', './pic/goldfish.jpg']);
var rabbit1 = makeanimal('Cotton', '8 Months', '100dt', 'rabbit', ['./pic/white rabbit.jpg', './pic/whiterabbit.jpg', './pic/whitrabbit3.jpg']);
var rabbit2 = makeanimal('Hopper', '1 Year', '90dt', 'rabbit', ['./pic/grisrabit.jpg', './pic/grirabit.jpg', './pic/grirabbit.jpg']);

var animals = [
    cat1,
    cat2,
    dog1,
    dog2,
    cat5,
    cat6,
    dog5,
    dog6,
    bird1,
    bird2,
    fish1,
    fish2,
    rabbit1,
    rabbit2]
//this function that change image with click i use oncklick to change the image the parameter are  the element represent html element that is imge to function click event 
//and animal index  that is number to help on click event
function changeImage(element, animalIndex) {
    var counter = 1;
    element.on('click', function () {
        console.log(element);
        var images = animals[animalIndex].img;
        var imgCount = images.length;
        element.attr('src', images[counter]);
        counter++;
        if (counter > imgCount - 1) {
            counter = 0
        }
    });
}
//function buy that delet the var animal from animals array using splice and return allert that contene messege to confirm the adopshion
//and we invoce sow with nwe array
function buy(name,i) {
    animals.splice(i,1)
    console.log(name)
alert("are your sure for your adepption ")
      show(animals)
    };
//function show displa the element off the array usin appand 
//and we invoce changeImage and take element.name like an ID for imag
    function show(animals) {
        $('.section-center').empty()
       
        each(animals, function (element, i) {
            $('.section-center').append(
                `  <div class="item">
                    <div><img id="${element.name}" src="${element.img[0]}"></div>
                    <div>
                        <h2>${element.name}</h2>
                        <h2>${element.price}</h2>
                        <h2>${element.category}</h2>
                        <button class="buy-btn" onclick=buy(${element.name},${i})>buy</button>
                    </div>
                </div>`
            );
          
            changeImage($(`#${element.name}`), i);
        });
        
        

     
    }
    //function filteranimals work to filter the element by the search if search is empty it invoce show animal else it display only the element that have saerch same as the category
    // the var search withe id myInput take the input of the search bar
    function filteranimals(){
        var search=$('#myInput').val()
        console.log(search)
        if (search==='') {
            show(animals)
        } else {
            var filtred=filter(animals,function(element){ 
                return element.category===search}); 
            $('.section-center').empty()
       
            each(filtred, function (element, i) {
                $('.section-center').append(
                    `  <div class="item">
                        <div><img id="${element.name}" src="${element.img[0]}"></div>
                        <div>
                            <h2>${element.name}</h2>
                            <h2>${element.price}</h2>
                            <h2>${element.category}</h2>
                            <button class="buy-btn" onclick=buy(${element.name},${i})>buy</button>
                        </div>
                    </div>`
                );
              
                changeImage($(`#${element.name}`), i);
            });
            
        }

    }
show(animals);
