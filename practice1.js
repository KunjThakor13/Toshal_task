// // function fnprint(){

// //     const name = document.getElementById("name").value;    
// //     const number = document.getElementById("number").value;
// //     const email = document.getElementById("email").value;
// //     const startdate = document.getElementById("sdate").value;
// //     const enddate = document.getElementById("edate").value;

// //     if (name === "" || number === "" || email === "" || startdate === "" || enddate === "" || isNaN(number)) {
// //         document.getElementById("print_data").textContent = "Please enter values properly";
// //     }else{
// //         document.getElementById("print_data").innerHTML = "Name :" + name +" </br>" + "number :" + number +" </br>" + "email :" + email +" </br>" + "start_date :" + startdate +" </br>" + "end_date :" + enddate;

// //     }


// //    // document.getElementById("print_data").textContent = "Name :" + name + "number :" + number+ "email :" + email + "start_date :" + startdate  + "end_date :" + enddate;

// // }




// function fnprint(){

// const name = document.getElementById("name").value;    
// const number = document.getElementById("number").value;
// const email = document.getElementById("email").value;
// const startdate = document.getElementById("sdate").value;
// const enddate = document.getElementById("edate").value;

// if(name && number && email && startdate && enddate){

// const tbl=document.getElementById("Tbl_user").getElementsByTagName("tbody")[0];
// const newrow = tbl.insertRow();

//  newrow.insertCell(0).innerText=name;       
//  newrow.insertCell(1).innerText=number;
//  newrow.insertCell(2).innerText=email;
//  newrow.insertCell(3).innerText=startdate;
//  newrow.insertCell(4).innerText=enddate;

//  const actions = newrow.insertCell(5);
//  actions.innerHTML =  `<button onclick="useredit()">edit</button> <button onclick="userdelete()">delete</button>`;



// }

// function userdelete(rrow){

// document.getElementById('Tbl_user').deleteRow(rrow.rowIndex);

// }
// function useredit(row){
// document.getElementById("name").value=row.cell[0].innerText;
// document.getElementById("number").value=row.cell[1].innerText;
// document.getElementById("email").value=row.cell[2].innerText;
// document.getElementById("sdate").value=row.cell[3].innerText;
// document.getElementById("edate").value=row.cell[4].innerText;



// }

// function fnreset(){
//     document.getElementById("name").value='';
//     document.getElementById("number").value='';
//     document.getElementById("email").value='';
//     document.getElementById("sdate").value='';
//     document.getElementById("edate").value='';

//  }


// // if (name === "" || number === "" || email === "" || startdate === "" || enddate === "" || isNaN(number)) {
// //     document.getElementById("print_data").textContent = "Please enter values properly";
// // }else{
// //      document.getElementById("print_data").innerHTML = "Name :" + name +" </br>" + "number :" + number +" </br>" + "email :" + email +
// //      " </br>" + "start_date :" + startdate +" </br>" + "end_date :" + enddate;

// //     }
// }

