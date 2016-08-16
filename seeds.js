var Star = require("./models/star");
var Event = require("./models/event");

var data = {
    name: "14th Star Brewing Company",
    motto: "A New Craft Brew for the 802",
    about: ["14th Star Brewing started as a daydream in the mountains of Eastern Afghanistan. Seriously, we couldn’t make that up.", "While deployed overseas, soldiers have plenty of time to contemplate two things: Beer and getting out of the Army. Steve and his buddies were doing just that in 2010 when the idea came to the long-time homebrewers: Why not open a brewery, preparing for the day we can retire from the Army?", "Thus started the journey from a handwritten business plan in the back of a notebook to fully-licensed craft brewery.", "While new to the brewing industry, 14th Star understands that it is a small part of a proud craft brewing community in Vermont and of the Vermont artisan community as a whole. We strive to uphold the craftsmanship, attention to detail, balanced flavor, and hometown responsibility that are the hallmarks of the Vermont craft scene.", "Currently located on Lower Newton St in St Albans with a capacity of 850 barrels a year, 14th Star is undergoing some pretty massive expansion plans; in 2014, the brewery will move to the old St Albans Bowling Alley – 16,000 sqft in which to increase production by roughly 10x!", "The majority of this expanded capacity will be to craft our flagship beer: Valor Ale – a hoppy amber ale with a portion of the proceeds benefitting the Purple Hearts Reunited Foundation, returning lost or stolen medals of valor to the servicemen and women who earned them. The rest will go to seasonal offerings like our Maple City Breakfast Stout and to original recipe beers that will be offered by the pint in the taproom.", "Whether you’re having a pint of Valor Ale at a local restaurant or pub or stopping by the brewery for a growler fill, you will be able to taste the pride and effort that goes into making 14th Star beers. We know what hard work, attention to detail, and creativity can produce on the field of battle – we want to bring that to your glass.", "Thank you for supporting 14th Star Brewing. Cheers!"],
    street: "133 North Main Street",
    apartment: "#7",
    city: "St Albans City",
    state: "VT",
    postal: "05478",
    phone: "(802)528-5988",
    email: "INFO@14THSTARBREWING.COM",
    openTime: "4PM",
    closeTime: "10PM",
    openDays: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    logo: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/13528787_1094733577267824_7154551466262561225_n.png?oh=0a9a9a5864e0474b8d5aeab7a4f15c14&oe=58255E1C",
    thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p160x160/13528787_1094733577267824_7154551466262561225_n.png?oh=e702373e05e608f8c1c1c1924dfdf04c&oe=582B1827",
    twitterUrl: "https://twitter.com/14thstarbrewing",
    facebookUrl: "https://www.facebook.com/14thstarbrewing/",
    instaUrl: "https://www.instagram.com/explore/locations/33283739/?hl=en"
};

var eventData = [
    {
        name: "Brewer's Festival",
    	image: "https://www.vtbeer.org/wp-content/uploads/2015/05/Vermont-Beer-Week-2015-300x300.jpg",
    	location: "Burlington, VT",
    	date: "2016-10-01",
    	beginTm: "7PM",
    	endTm: "10PM",
    	description: "Bacon ipsum dolor amet biltong ground round ham, shankle turducken meatloaf pork chop jerky leberkas. Ribeye sausage pork chop pastrami, pig pork belly short ribs chicken tongue fatback beef ribs chuck. Filet mignon chicken turducken pork drumstick brisket. Boudin biltong filet mignon chuck venison. Prosciutto kielbasa picanha flank pancetta meatloaf tri-tip cupim cow swine corned beef. Picanha corned beef chicken cow landjaeger prosciutto filet mignon rump. Jowl spare ribs pork, kielbasa pig bacon andouille shoulder ground round ham hock tri-tip."
    },
    {
        name: "Burlington Brewer's Festival",
        image: "http://i1289.photobucket.com/albums/b502/HearthAndHomeRealty/burlington-beer-festival_zps5cf0ae2b.jpg~original",
        location: "Burlington, VT",
        date: "2016-07-15",
        beginTm: "11AM",
        endTm: "5PM",
        description: "Bacon ipsum dolor amet biltong ground round ham, shankle turducken meatloaf pork chop jerky leberkas. Ribeye sausage pork chop pastrami, pig pork belly short ribs chicken tongue fatback beef ribs chuck. Filet mignon chicken turducken pork drumstick brisket. Boudin biltong filet mignon chuck venison. Prosciutto kielbasa picanha flank pancetta meatloaf tri-tip cupim cow swine corned beef. Picanha corned beef chicken cow landjaeger prosciutto filet mignon rump. Jowl spare ribs pork, kielbasa pig bacon andouille shoulder ground round ham hock tri-tip."
    }
];

function seedDB(){
    Star.remove({},function(err){
        if(err){
          console.log(err);  
        } else {
            console.log("Removed Main Brewery Data");
        }
    });
    
    Star.create(data,function(err,star){
        if(err){
            console.log(err);
        } else {
            console.log("Brewery Data Initialized");
        }
    });
    
    Event.remove({},function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Removed Brewery Event Data");
        }
    });
    
    eventData.forEach(function(event){
       Event.create(event,function(err, createdEvent){
          if(err){
              console.log(err);
          } else {
              console.log("Event " + createdEvent.name + " Created");
          }
       });
    });
}

module.exports = seedDB;