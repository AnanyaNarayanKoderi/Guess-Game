//array holding the required objects
let cards=[
    {
        image:"https://th.bing.com/th/id/OIP.Pd5xaseazVby_1kFIgk1SAHaHm?w=189&h=194&c=7&o=5&dpr=1.25&pid=1.7",
        value:1,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.Pd5xaseazVby_1kFIgk1SAHaHm?w=189&h=194&c=7&o=5&dpr=1.25&pid=1.7",
        value:1,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.WU7NsTMuXMi1eDSkQobwkgHaN5?w=116&h=194&c=7&o=5&dpr=1.25&pid=1.7",
        value:2,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.WU7NsTMuXMi1eDSkQobwkgHaN5?w=116&h=194&c=7&o=5&dpr=1.25&pid=1.7",
        value:2,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.1UKVX2meEWvehgScNakJ4QHaKl?w=115&h=180&c=7&o=5&dpr=1.25&pid=1.7",
        value:3,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.1UKVX2meEWvehgScNakJ4QHaKl?w=115&h=180&c=7&o=5&dpr=1.25&pid=1.7",
        value:3,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/R.f28b6d2989b5458654a6cee1d3135873?rik=AXFgmRo6yE3IBA&riu=http%3a%2f%2fclipartmag.com%2fimages%2frainforest-animals-clipart-44.png&ehk=dlxraR94%2fTFhXok%2behghwgtTW8q9NOHMwJIEiwEUIKk%3d&risl=&pid=ImgRaw",
        value:4,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/R.f28b6d2989b5458654a6cee1d3135873?rik=AXFgmRo6yE3IBA&riu=http%3a%2f%2fclipartmag.com%2fimages%2frainforest-animals-clipart-44.png&ehk=dlxraR94%2fTFhXok%2behghwgtTW8q9NOHMwJIEiwEUIKk%3d&risl=&pid=ImgRaw",
        value:4,
        status:"closed"
    },
    {
        image:"https://cuethat.com/wp-content/uploads/2017/12/cute-animal-cartoon-pictures.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://cuethat.com/wp-content/uploads/2017/12/cute-animal-cartoon-pictures.jpg",
        value:5,
        status:"closed"
    }
]

let temp;
//to shuffle the array elements
for(let i=cards.length-1;i>=0;i--)
{
    let j=Math.floor(Math.random()*(i+1)); //i+1 is done to avoid selecting itself while shuffling 

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}


console.log(cards);

//to display all the card elements ,before click the cards are hidden and after click they are opened
function displayCards(data){
    let cardsString="";
    data.forEach(function(card,index){
        cardsString+=`
        <div class="card " style="background-image:url('${card.image}')">
        <div class="overlay ${card.status}" onClick="openCard(${index})">
        </div>
        </div>
        `;
    });

//card elements are added as contents of div tag having "cards as an id"
document.getElementById("cards").innerHTML=cardsString;
}

displayCards(cards);


let score=0;
let val1,val2;
let cardClick=0;


function openCard(index){
    cards[index].status="opened"; 
   // console.log(index)  //to display the image by seting its status to open
    if(cardClick%2===0)
    {
        val1=cards[index].value;
        cardClick++;
    }
    else if(cardClick%2===1)
    {
       
        val2=cards[index].value;
        cardClick++;
        console.log(val1,val2);
       
        if(val1===val2)
        {
           // console.log(val1,val2);
            score++;
            document.getElementById("score").innerHTML=score;
           
        }
        if(cardClick===10)
        {
            cardClick=0;
            setInterval('refreshPage()', 5000);
           
        }
        

    }
    displayCards(cards);

}

function refreshPage() { 
    location.reload(); 
}