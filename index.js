const inputEl=document.getElementById('input');
const convertEl=document.getElementById("convert-btn");
const resetEl=document.getElementById("reset-btn");
const conversion=Array.from(document.getElementsByClassName('display-values'));
const errorEl=Array.from(document.getElementsByClassName("error"))[0]
function getlength(val){
    let foot=(val*(1/3.281)).toFixed(3);
    let metre=(val*3.281).toFixed(3);
    conversion[0].textContent=`${val} meters = ${metre} feet | ${val} feet = ${foot} meters`;
}
function getvolume(val){
    let gallon=(val*(1/0.264)).toFixed(3);
    let liter=(val*0.264).toFixed(3);
    conversion[1].textContent=`${val} liters = ${liter} gallons | ${val} gallons = ${gallon} liters`;
}
function getmass(val){
    let pound=(val*(1/2.204)).toFixed(3);
    let kilogram=(val*2.204).toFixed(3);
    conversion[2].textContent=`${val} kilos = ${kilogram} pounds | ${val} pounds = ${pound} kilos`;
}

async function main(){
    inputEl.addEventListener("keypress",(e)=>{
            if(e.key=="Enter"){
                getlength(Number(inputEl.value));
                getvolume(Number(inputEl.value));
                getmass(Number(inputEl.value));
            }
            if (e.key=="Enter" && inputEl.value<0){
                errorEl.textContent="Please Enter a valid value";
                errorEl.style.translate="0px";
                errorEl.style.opacity="100%";
                setTimeout(()=>{
                    errorEl.style.translate="-250px";
                errorEl.style.opacity="0%";
                },3000);
                
                conversion.forEach((e)=>{
                    e.textContent='';
                })
            }
        })
    convertEl.addEventListener("click",()=>{
            if (inputEl.value<0){
                errorEl.textContent="Please Enter a valid value";
                errorEl.style.translate="0px";
                errorEl.style.opacity="100%";
                setTimeout(()=>{
                    errorEl.style.translate="-250px";
                errorEl.style.opacity="0%";
                },3000);
                
                conversion.forEach((e)=>{
                    e.textContent='';
                })
            }
            else{

                getlength(Number(inputEl.value));
                getvolume(Number(inputEl.value));
                getmass(Number(inputEl.value));
            }
        })
        resetEl.addEventListener("click",()=>{
            inputEl.value='';
            conversion.forEach((e)=>{
                e.textContent='';
            }
            )
        })
}
main();