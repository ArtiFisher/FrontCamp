// print("started, muahaha");

db.blog.insert(
   {
     author: "newbie",
     title: "newTitle",
     date: new Date(),
     content: "new content",
     tags: ["newtag"],
     comments: [{
     	author: "someone",
     	content: "smth"
     },
     {
     	author: "someone2",
     	content: "smth2"
     }]
   }
);
db.blog.find({ "author": "newbie" });
db.blog.find({ "author": { $in:["Fisher3", "Fisher2"]} });
db.blog.find({
     $or: [ { "author": "Fisher3" }, { "title": "Title" } ]
 });

db.blog.update(
    { author: "newbie" },
    {
      $set: {
        title: "NewTitle"
      }
    }
);
db.blog.find({ "author": "newbie" });

db.students.aggregate(
   [
   	 { $unwind: "$scores" },
   	 { $match: { "scores.type": { "$ne": "quiz" } } },
   	 { $group: { _id: { student: "$student_id", class: "$class_id" }, averageOfStudent: { $avg: "$scores.score" } }},
   	 { $group: { _id: "$_id.class", averageOfClass: { $avg: "$averageOfStudent" } }},
   	 { $sort: { averageOfClass: -1 }},
   	 { $limit: 1 }
   ]
);