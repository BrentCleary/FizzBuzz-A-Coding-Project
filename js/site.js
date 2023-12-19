
// get values from user. We need to get the fizz and buzz value.
function getValues()
{

  // get the user values from the page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  // parse for numbers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  // check that the numbers are integers
  if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue))
  {
    // call fizzBuzz
    let fbArray = fizzBuzzC(fizzValue, buzzValue);

    // call displayData and write the values to the screen
    displayData(fbArray);
  }
  else
  {
    alert("You must enter an integer.")
  }
}

function fizzBuzz(fizzValue, buzzValue)
{
  let returnArray = [];

  for (let i = 1; i <= 100; i++) {
    
    if(i % fizzValue == 0 && i % buzzValue == 0 )
    {
      returnArray.push("FizzBuzz");
    }
    else if(i % fizzValue === 0)
    {
      returnArray.push("Fizz");
    }
    else if(i % buzzValue === 0)
    {
      returnArray.push("Buzz");
    }
    else
    {
      returnArray.push(i);
    }

  }

  return returnArray;
}

function fizzBuzzB(fizzValue, buzzValue)
{
  let returnArray = [];

  let Fizz = false;
  let Buzz = false;

  for (let i = 1; i <= 100; i++) {
    
    Fizz = i % fizzValue == 0;
    Buzz = i % buzzValue == 0;

    switch(true)
    {
      case Fizz && Buzz:{
        returnArray.push("FizzBuzz")
        break;
      }
      case Fizz:{
        returnArray.push("Fizz")
        break;
      }
      case Buzz: {
        returnArray.push("Buzz")
        break;
      }
      default: {
        returnArray.push(i)
        break;
      } 
    }

  }

  return returnArray;
}

function fizzBuzzC(fizzValue, buzzValue)
{
  let returnArray = [];

  for (let i = 1; i <= 100; i++) {

    let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i );
    
    returnArray.push(value);

  }

  return returnArray;
}

// loop over the array and create a table row for each item
function displayData(fbArray)
{
  // get the table body element from the page
  let tableBody = document.getElementById("results");

  // get the template cell
  let templateRow = document.getElementById("fbTemplate");

  // clear table first
  tableBody.innerHTML = "";

  for (let i = 0; i < fbArray.length; i += 5)
  {
    let tableRow = document.importNode(templateRow.content, true);
    
    // grab just the <td> to put into an array
    let rowCols = tableRow.querySelectorAll("td");
    rowCols[0].classList.add(fbArray[i]);
    rowCols[0].textContent = fbArray[i];

    rowCols[1].classList.add(fbArray[i+1]);
    rowCols[1].textContent = fbArray[i+1];
    
    rowCols[2].classList.add(fbArray[i+2]);
    rowCols[2].textContent = fbArray[i+2];
    
    rowCols[3].classList.add(fbArray[i+3]);
    rowCols[3].textContent = fbArray[i+3];
    
    rowCols[4].classList.add(fbArray[i+4]);
    rowCols[4].textContent = fbArray[i+4];

    tableBody.appendChild(tableRow);
  }

}



// // First Code Block

// // Get User Values from Document

// function getValues()
// {
//   let fizzValue = document.getElementById("fizzValue").value;
//   let buzzValue = document.getElementById("buzzValue").value;

//   let fbArray = [];

//   fbArray = createFBArray(fizzValue, buzzValue)

//   displayFBvals(fbArray);

// }

// // Generate FizzBuzz Array with styling
// function createFBArray(fizzValue, buzzValue)
// {

//   let fizzbuzzArray = []

//   for (let i = 1; i <= 100; i++)
//   {
//     if((i % fizzValue == 0) && (i % buzzValue == 0 ))
//     {
//       fizzbuzzArray.push("FizzBuzz");
//     }
//     else if(i % buzzValue === 0)
//     {
//       fizzbuzzArray.push("Buzz");
//     }
//     else if(i % fizzValue === 0)
//     {
//       fizzbuzzArray.push("Fizz");
//     }
//     else
//     {
//       fizzbuzzArray.push(i);
//     }
    
//   }

//   return fizzbuzzArray;

// }


// // Display Array into Results
// function displayFBvals(displayArray)
// {

//   let templateRows = "";
//   let className;

//   for (let i = 0; i < displayArray.length; i++)
//   {  
//     let element = displayArray[i];

//     if(element == "Fizz")
//     {
//       className = "text-capitalize font-weight-bold text-success";
//     }
//     else if(element == "Buzz")
//     {
//       className = "text-capitalize font-weight-bold text-primary";
//     }
//     else if(element = "FizzBuzz")
//     {
//       className = "text-capitalize font-weight-bold text-danger";
//     }
//     else
//     {
//       className = "";
//     }

//     templateRows += `<tr><td class="${className}">${displayArray[i]}</td></tr>`
//     // templateRows += `<tr><td>${element}</td></tr>`
  
//   }

//   document.getElementById("results").innerHTML = templateRows;

// }