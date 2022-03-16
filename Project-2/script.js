
const cont=document.querySelector(".container");
const seats=document.querySelectorAll(".row .seat:not(occupied)");
const count=document.getElementById("count");
const total=document.getElementById("total");
const movieoption=document.getElementById("movienames");
let ticketprice=+movieoption.value;
populateUI();

function setinstorage(movieindex,movievalue)
{
   
    localStorage.setItem('selectedMovieIndex',movieindex);
    localStorage.setItem('selectedMovieValue',movievalue);


}
function populateUI() {
 
    const selectedSeats = JSON.parse(localStorage.getItem('selectedseat'));
    if(selectedSeats !== null && selectedSeats.length > 0)
    {

        seats.forEach((seat,index) =>
        {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })

    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null) {
        movieoption.selectedIndex = selectedMovieIndex;
    }
}

function updateCount()
{

const selectedse=document.querySelectorAll('.row .seat.selected');
const index=[...selectedse].map(seat => [...seats].indexOf(seat));

const totalselectseat=selectedse.length;
count.innerText=totalselectseat;
total.innerText=totalselectseat*ticketprice;
localStorage.setItem('selectedseat',JSON.stringify(index));

}
cont.addEventListener('click',f =>
{
    if(f.target.classList.contains('seat')&&!f.target.classList.contains('occupied'))
    {
        
        f.target.classList.toggle('selected');
        updateCount();
    }
    
})
movieoption.addEventListener('change',u =>
{
    ticketprice=+u.target.value;
    setinstorage(u.target.selectedIndex,u.target.value);
    updateCount();

}
)
updateCount();