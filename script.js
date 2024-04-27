fetchData();

async function fetchData(){
    let options={
        method:"GET"
    }
    try{
        const response= await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448",options)

        if(!response.ok){
            throw new Error("could not fetch");
        }

        const data=await response.json();
        console.log(data);
        
        const vendor=document.getElementById('vendor');
        vendor.textContent=data.product.vendor;
        const title=document.getElementById('title');
        title.textContent=data.product.title;
        const price=document.getElementById('price');
        price.textContent=data.product.price;
        const compare=document.getElementById('compare');
        compare.textContent=data.product.compare_at_price;
        const col=document.getElementById('col');
        const colorsData=data.product.options[0]
        colorsData.values.map(each=>{
            const box=document.createElement('div');
            const colorName = Object.keys(each)[0]; 
            console.log(colorName)
            const hexCode = each[colorName]; 
            box.style.backgroundColor=hexCode;
            box.classList.add("smallConta");
            const colDiv = document.getElementById("col");
            colDiv.appendChild(box);
            console.log(box);
        })
        const sele=document.getElementById("sele")
        const selcectedData=data.product.options[1]
        selcectedData.values.map(each=>{
            
            const input=document.createElement("input")
            input.setAttribute("type","radio");
            input.setAttribute("id",each)
            input.setAttribute("value",each)
            input.classList.add("inp");
            const label=document.createElement("label")
            label.setAttribute("for",each)
            label.textContent=each;
            sele.appendChild(input);
            sele.appendChild(label);
        })

        const description=document.getElementById("description")
        const desc=data.product.description
        description.innerHTML=desc;

        const message=document.getElementById("cartMessage")

        addtoCart = () => {
            let p = document.createElement("p");
            p.textContent = "Embrace Sideboard with Color Yellow and Size Small added to cart";
            message.appendChild(p);
        
            setTimeout(() => {
                message.removeChild(p);
            }, 3000); // 3000 milliseconds (3 seconds) delay before removing the message
        };

        minus=()=>{
            const num=parseInt(document.getElementById("num").value)

            num.textContent=num-1
        }

        add=()=>{
            const num=parseInt(document.getElementById("num").value)

            num.textContent=num+1
        }

    }

    catch(error){
        console.log(error);
    }
}