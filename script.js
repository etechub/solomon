const insertProducts = (products) => {
    // console.log(products[0]);
    var result = ``
    products.forEach((product) => {
        result += `<div key=${product?.id} class=" w-[320px] xl:w-[400px] mx-auto">
        <div class=" rounded-[9px]">
            <img src="${product?.imageUrl}" alt="" class="h-[350px] w-full rounded-[9px] hover:cursor-pointer">
        </div>
        <p class="text-[22px] font-medium hover:cursor-pointer">${product?.title}</p>
        <p class="text-[19px] text-slate-500"> ${product?.desc}</p>
        <p class="text-[19px] text-slate-500">${product?.date}</p>
        <span class="text-[19px] font-semibold">${product?.price} </span><span>${product?.category}</span>
    </div>`
    });
    var show = document.getElementById('result')
    show.innerHTML = result
}

var persons = []
window.addEventListener('DOMContentLoaded', async () => {
    persons = await fetch('./products.json')
        .then(response => response.json())
        .then(persons => persons)
    // console.log(persons);
    insertProducts(persons)
})


