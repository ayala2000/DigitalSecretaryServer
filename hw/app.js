let letteersBTN=document.getElementById('btn1') ||[];
let numbersBTN=document.getElementById('btn2')||[];
let wordsBTN=document.getElementById('btn3')||[];
let showJSON=document.getElementById('show');
// ומציגה GET- פונקציה שמקבלת כתובת וטוענת משם את תוכן הקובץ
let myData=(url)=>{
    debugger
    fetch(url)
    .then(response=>response.json())
    .then(result=>{showJSON.innerHTML=result})
    .catch(()=>{alert('קרתה תקלה, נשה לרענן שוב...'); return error})
}
// using async
async function myData2(url) {
    comments.innerHTML = "-שימוש ב async";
    debugger;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const data = await response.json();
      showJSON.innerHTML = data;
      return data;
    } catch (error) {
      alert(`קרתה תקלה, נסה לרענן שוב... | ${error}`);
    }
  }


promise1= Promise(resolve => {
    letteersBTN.onclick=()=>{resolve(myData2('2.json'))};
});
// letteersBTN.onclick=()=>(resulve2);

//     async function resulve2(){
//             console.log('calling');
//             const result = await resolved();       
//             console.log(result);
//          }
    // catch(error){
    //     console.log("error"+error);
    // }

promise2=new Promise(resolve=>{
    numbersBTN.onclick=()=>numbersBTN.onclick=()=>{resolve(myData('1.json'))};
});

promise3=new Promise(function (resolve) {
    wordsBTN.onclick=()=>{resolve(myData('3.json'))};
});
// פרומיס שמסתיים אחרי שכל הכפתורים נלחצו (כל הפרומיסים הופעלו)
Promise.all([ promise2, promise3])
.then(()=>{setTimeout(()=>{
    alert('התהליך הסתיים בהצלחה')
    showJSON.innerHTML='';
},1000)});



  
