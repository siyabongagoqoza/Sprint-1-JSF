
// Read and Show data from the text file uploaded

document.getElementById('input-file')
  .addEventListener('change', getFile)

function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('content-target'),
      input.files[0])
  }
}

function placeFileContent(target, file) {
	readFileContent(file).then(content => {
  	target.value = content
  }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}

// -----------------------------------------------------------------------

// Fetching Data from the github user page and display it on textarea field
const url = 'https://github.com/siyabongagoqoza';
const req = new Request(url, {
    mode: 'no-cors'
});
fetch(req)
 .then(( response ) => {
     return response.json();
 } )
 .then( ( data ) => {
     console.log(data);
     const jsonData = JSON.stringify(data);
     console.log(data);

     let textar = document.getElementById('content-target').value;
     textar = jsonData;
 } )
 .catch( (error) => {
     console.log("ERROR: ", error.message );
  
 } )

 // ------------------------------------------------------------------------


sendFile.addEventListener('onclick', (e) => {
    e.preventDefault;
    
})
    

function phonenumber(){

  var inputtxt = document.getElementById('cellno').value;
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var textar = document.getElementById('content-target').value;
  if (textar == ''){
      alert('Please upload your letter');
  } 
  else if (inputtxt.match(phoneno)){
      alert('We will call you');
} else {
    alert('Invalid phone number');
} 


}