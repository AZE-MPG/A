

function  calculate() {


    let amt=document.querySelector(".sip");
    let roi=document.querySelector(".rate");
    let dur=document.querySelector(".duration");

  
  
    let p=amt.value;
    let r=roi.value/100;
    let t=dur.value;
    let finalamt=0;
    let amttotalinvested=p*t;
    
    
    
    finalamt=p*((1+r)**t-1)*(1+r)/r;
   let netprofit=finalamt-amttotalinvested;
   let profitpercent =(netprofit/amttotalinvested)*100
    
    document.getElementById("totalinvestment").innerHTML=
    "Total Investment : " +amttotalinvested;
    document.getElementById("finalamount").innerHTML="Final Amount :" + Math.round(finalamt>0? finalamt:0);
    document.getElementById("netprofit").innerHTML=
    "Net Profit :"+  Math.round(netprofit)
    document.getElementById("profitpercent").innerHTML=
    "Profit Percentage :" + Math.round(profitpercent) +"%"
   
}
