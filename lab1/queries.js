Query om aantal artikelen per categorie te tellen en te sorteren op categorie:

db.item.aggregate( [ {$group : { _id : "$category", num: { $sum:1 } } }, { $sort: { _id: 1 } } ] )

Query voor de paginatie per categorie:
db.item.find({category: "Apparel"}).limit(2).skip(3)
