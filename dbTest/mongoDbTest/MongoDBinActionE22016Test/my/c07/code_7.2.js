product_id = ObjectId("4c4b1476238d3b4dd5003981")
// product_id = db.products.findOne({sku: '9092'}, {'_id': 1})
count = 0
total = 0
db.reviews.find({product_id: product_id}, {rating: 1}).forEach(function (review) {
    total += review.rating
    count++
})
average = total / count
db.products.update({_id: product_id},
    {$set: {total_reviews: count, average_review: average}})

// category hierarchy
var generate_ancestors = function(_id, parent_id) {
    ancestor_list = []
    var cursor = db.categories.find({_id: parent_id})
    while(cursor.size() > 0) {
        parent = cursor.next()
        ancestor_list.push(parent)
        parent_id = parent.parent_id
        cursor = db.categories.find({_id: parent_id})
    }
    db.categories.update({_id: _id}, {$set: {ancestors: ancestor_list}})
}
