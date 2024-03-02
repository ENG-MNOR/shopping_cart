import Product from "./Product";
let products=[

    {
        id:1,
        name:"cool drink",
        urlImage:"https://images.unsplash.com/photo-1546333760-38dc4026bc38?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:0.01
    },
    {
        id:2,
        name:"pizza",
        urlImage:"https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:0.01
    },
    {
        id:3,
        name:"pesto pasta",
        urlImage:"https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:0.01
    }, 
     {
        id:4,
        name:"udon salad",
        urlImage:"https://images.unsplash.com/photo-1558985212-324add95595a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:0.01

    },  {
        id:5,
        name:"premium food",
        urlImage:"https://images.unsplash.com/photo-1677758779350-44adc2118bc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:0.01
    },  {
        id:6,
        name:"vegan salad bowl",
        urlImage:"https://images.unsplash.com/photo-1519996409144-56c88c9aa612?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:0.01
    }
]

const Products=()=>{
    return(
        products.map(product=>(
            <div className="grid">
            <Product product={product}/>
            </div>
        ))
    )
}

export default Products;