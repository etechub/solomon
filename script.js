const insertProducts = (products) => {
    var bestdevices = ``
    products.forEach((product) => {
        bestdevices += `<div class="flex flex-col px-[10px] items-center justify-between py-[20px] w-[300px] border">
        <a href="/product.html?id=${product?.id}" target="_blank"><img src="${product?.imageUrl}" alt="${product?.imageUrl}"></a>
        <div>
            <h2 class="flex justify-center px-[15px]">${product?.title}</h2>
            <h2 class="font-bold flex justify-center py-[20px]">${product?.price}</h2>
        </div>
       <div>  
       <a href="/product.html?id=${product.id}"><button class=" flex items-center justify-center text-white bg-[#634141] px-[20px] py-[10px]">Add to
       Cart</button>
       </a>
       </div>
    </div>`
    });
    var show = document.getElementById('bestdevices')
    show.innerHTML = bestdevices
}

const insertPhones = (products) => {
    var phones = ``
    products.forEach((product) => {
        phones += `<div class="item w-[400px] flex flex-col justify-between items-center border py-5 mx-5">
       <div> <a href="/product.html?id=${product.id}"> <img src="${product?.imageUrl}" alt=""></a></div>
        <div>
            <h1 class="px-[25px] ">${product?.title}</h1>
            <h2 class="font-bold flex justify-center py-[20px]">${product?.price}</h2>
        </div>
        <div>
        <a href="/product.html?id=${product.id}"> <button
            class="flex items-center justify-center text-white bg-[#634141] px-[20px] py-[10px]">Add
            to
            Cart</button></a>
            </div>
    </div>`
    });
    var show = document.getElementById('phones')
    show.innerHTML = phones
}

const insertLaptop = (products) => {
    var laptop = ``
    products.forEach((product) => {
        laptop += `<div class="w-[400px] flex flex-col justify-between items-center border  my-5 mx-5 py-5 px-[15px]">
       <div> 
       <a href="/product.html?id=${product.id}"> <img src="${product?.imageUrl}" alt=""></a>
       </div>
      
        <div>
            <h1>${product?.title}</h1>
            <h2 class="font-bold flex justify-center py-[20px]">${product?.price}</h2>
        </div>

        <div>
        <a href="/product.html?id=${product.id}">
         <button
            class=" flex items-center justify-center text-white bg-[#634141] px-[20px] py-[10px]">Add
            to
            Cart
            </button>
            <a/>
            </div>

    </div>`
    });
    var show = document.getElementById('laptop')
    show.innerHTML = laptop
}

const insertTv = (products) => {
    var tv = ``
    products.forEach((product) => {
        tv += ` <div class="border gap-[15px] flex flex-col items-center justify-between mx-3 my-3 px-4 py-5">
        <a href="/product.html?id=${product.id}"> <img src="${product?.imageUrl}" alt="" height="300px" width="300px"></a>  
        <div>
       <h1>${product?.title}</h1>
       <h1  class="font-bold flex justify-center py-[20px]">${product?.price}</h1>
       </div>
       <div> 
       <a href="/product.html?id=${product.id}">
       <button
       class=" flex items-center justify-center text-white bg-[#634141] px-[20px] py-[10px]">Add
       to
       Cart</button>
       <a/>
       </div>
    </div>`
    });
    var show = document.getElementById('tv')
    show.innerHTML = tv
}

const insertpowerbank = (products) => {
    var powerbank = ``
    products.forEach((product) => {
        powerbank += `<div class="border flex flex-col items-center justify-between mx-3 my-3 px-4 py-5 gap-[30px]">
        <a href="/product.html?id=${product.id}"> <img src="${product?.imageUrl}" alt=""></a>
       <div>
       <h1>${product?.title}</h1>
       <h1  class="font-bold flex justify-center py-[20px]">${product?.price}</h1>
       </div
       <div>
        <a href="/product.html?id=${product.id}"> <button
                class=" flex items-center justify-center text-white bg-[#634141] px-[20px] py-[10px]">Add
                to
                Cart</button></a>
                </div>
    </div>`
    });
    var show = document.getElementById('powerbank')
    show.innerHTML = powerbank
}

const insertTablet = (products) => {
    var Tablet = ``
    products.forEach((product) => {
        Tablet += `<div class="border flex flex-col items-center justify-between mx-3 my-3 px-4 py-5">
        <a href="/product.html?id=${product.id}">  <img src="${product?.imageUrl}" alt="" height="300px" width="300px"></a>
        <h1>${product?.title}</h1>
        <h1  class="font-bold flex justify-center py-[20px]">${product?.price}</h1>
        <div>
        <a href="/product.html?id=${product.id}"> <button
            class=" flex items-center justify-center text-white bg-[#634141] px-[20px] py-[10px]">Add
            to
            Cart</button></a>
        </div>
    </div>`
    });
    var show = document.getElementById('Tablet')
    show.innerHTML = Tablet
}

async function selectChangeHandler(params) {
    const products = await fetch('./products.json')
        .then((res) => res.json())
        .then((data) => data)
    const e = document.getElementById('select')
    var filter = e.options[e.selectedIndex].text;
    if (filter !== "All") {
        console.log(filter);
        const filtered = products.filter(product => (product.category).toLowerCase() === filter.toLowerCase()
        )
        insertProducts(filtered)
    } else {
        insertProducts(products)
    }
    console.log(products);
}

var persons = []
window.addEventListener('DOMContentLoaded', async () => {
    allProducts = await fetch('./products.json')
        .then(response => response.json())
        .then(allProducts => allProducts)

    var shuffledProducts = shuffled(allProducts)
    insertProducts(shuffledProducts.slice(0, 10))

    const phones = allProducts.filter(item => item.category === 'phones')
    var shuffledPhones = shuffled(phones)
    insertPhones(shuffledPhones.slice(0, 20))

    const laptop = allProducts.filter(item => item.category === 'laptop')
    var shuffledLaptop = shuffled(laptop)
    insertLaptop(shuffledLaptop.slice(0, 20))

    const powerBank = allProducts.filter(item => item.category === 'power_bank')
    var shuffledPowerbank = shuffled(powerBank)
    insertpowerbank(shuffledPowerbank.slice(0, 20))

    const tv = allProducts.filter(item => item.category === 'TV')
    var shuffledTv = shuffled(tv)
    insertTv(shuffledTv.slice(0, 20))

    const Tablet = allProducts.filter(item => item.category === 'Tablet')
    var shuffledTablet = shuffled(Tablet)
    insertTablet(shuffledTablet.slice(0, 20))
})

function shuffled(array) {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}



