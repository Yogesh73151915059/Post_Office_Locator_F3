const startBtn = document.getElementById('startBtn');
const ipAddressVal = document.getElementById('IpAddressValue');
const token = 'b077d39e5618dd';
startBtn.addEventListener('click',(event)=>{
       window.location.href="./postOffices.html";
})
window.onload =fetchIpAddress;
async function fetchIpAddress(){
    try{
        const url =  `https://ipinfo.io?token=${token}`;
        const response = await fetch(url);
        const ipDetails = await response.json();
        ipAddressVal.innerText=ipDetails.ip;
    }
    catch(error){
        console.log(error, "Error in getting ip address")
    }
   
}