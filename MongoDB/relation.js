db.products.insertOne({
    _id : 3,
    name : "Rubber",
    price : 1.3,
    stock : 10,
    reviews : [
        {
            authoreName : "krishna",
            rating : 5,
            review : "great products"
        },
        {
            authoreName : "sally",
            rating : 5,
            review : "awesome products"
        }
    ]
})

db.products.insertOne({
    _id : 2,
    name : "Pencil",
    price : 0.82,
    stock : 12,
    reviews : [
        {
            authoreName : "Jhon",
            rating : 4,
            review : "good products"
        },
        {
            authoreName : "rosy",
            rating : 1,
            review : "bad pencil"
        }
    ]
})