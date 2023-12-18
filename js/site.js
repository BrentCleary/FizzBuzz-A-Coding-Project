
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
    let fbArray = fizzBuzz(fizzValue, buzzValue);

    // call displayData and write the values to the screen

  }
  else
  {
    alert("You must enter an integer.")
  }
}

function fizzBuzz(fizzValue, buzzValue)
{
  let returnArray = [];

  for (let i = 0; i <= 100; i++) {
    
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
}

// loop over the array and create a table row for each item
function displayData(fbArray)
{
  
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