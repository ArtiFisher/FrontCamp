conn = new Mongo();
db = conn.getDB("test");

db.blog.insert(
   {
        "author" : "Fisher",
 		"title" : "Title",
    	"date" : ISODate("2015-10-01T00:00:00Z"),
    	"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae.",
        "comments" : [
			{
				"author" : "Vader",
				"date" : ISODate("2016-10-01T00:00:00Z"),
				"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae."
			},
			{
				"author" : "Anonymous",
				"date" : ISODate("2013-10-01T00:00:00Z"),
				"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae."
			}
        ],
		"tags" : ["lorem", "ipsum"]
   }
)

db.blog.insert(
	{
        "author" : "Fisher2",
 		"title" : "Title2",
    	"date" : ISODate("2014-10-01T00:00:00Z"),
    	"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae.",
        "comments" : [
			{
				"author" : "Stranger",
				"date" : ISODate("2012-10-01T00:00:00Z"),
				"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae."
			},
			{
				"author" : "ToughGuy",
				"date" : ISODate("2011-10-01T00:00:00Z"),
				"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae."
			}
        ],
		"tags" : ["lorem", "tag"]
   })

db.blog.insert(
{
        "author" : "Fisher",
 		"title" : "Title3",
    	"date" : ISODate("2013-10-01T00:00:00Z"),
    	"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae.",
        "comments" : [
			{
				"author" : "Silvestr",
				"date" : ISODate("2014-10-01T00:00:00Z"),
				"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae."
			},
			{
				"author" : "Arnold",
				"date" : ISODate("2012-10-01T00:00:00Z"),
				"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae."
			}
        ],
		"tags" : ["lorem2", "ipsum2"]
   })

db.blog.insert(
   {
        "author" : "Fisher3",
 		"title" : "Title4",
    	"date" : ISODate("2015-10-01T00:00:00Z"),
    	"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae.",
        "comments" : [
			{
				"author" : "Yoda",
				"date" : ISODate("2017-10-01T00:00:00Z"),
				"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae."
			},
			{
				"author" : "Anonymous",
				"date" : ISODate("2014-10-01T00:00:00Z"),
				"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae."
			}
        ],
		"tags" : []
   })

db.blog.insert(
   {
        "author" : "Fisher2",
 		"title" : "Title",
    	"date" : ISODate("2016-10-01T00:00:00Z"),
    	"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae.",
        "comments" : [
			{
				"author" : "Stranger",
				"date" : ISODate("2013-10-01T00:00:00Z"),
				"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae."
			},
			{
				"author" : "Obi-Van",
				"date" : ISODate("2014-10-01T00:00:00Z"),
				"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quo aspernatur quaerat maiores quos ut at, reiciendis, adipisci architecto repudiandae quod quidem eius soluta ratione. Perferendis possimus ipsa eos beatae."
			}
        ],
		"tags" : ["lorem"]
   }
)