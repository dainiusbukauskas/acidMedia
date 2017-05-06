function loadStructure(structure) {

  history.pushState(structure,structure.name,structure.url_key)
  
  console.log("Loading structure:");
  console.log(structure);

  var singleStructure = [];
  singleStructure.push(structure);

  console.log("Here is what singleStructure looks like:");
  console.log(singleStructure);
  
  addElement(singleStructure,"single");
  return;
}


function loadVideo(videoLink) {
	
	
	 var player = document.createElement("div"); 
    player.className = "playerClass";
	
	
	
	document.getElementById("playerSpot").appendChild(player);
}


function loadStructures(jsonData,sortBy) {
  
  history.pushState("","Whole-timber structures main page","")
  addElement(jsonData,sortBy);    //2nd parameter is sortBy;
  return;
}



function addElement (jsonDataToBeDisplayed, sortBy) { 

  $("article").empty(); // make sure that the article is empty before we repopulate it.

  var entries = document.createElement("div"); 


  jsonDataToBeDisplayed.forEach(function (structure) { //Now we iterate through the list of structures inside jsonDataToBeDisplayed!

    var entry = document.createElement("div"); 
    entry.className = "entry";


    var name = document.createElement("div"); 
    entry.appendChild(name); 
    name.innerHTML = icon.embedLink;
    name.className = "name";
  
   
  });

  document.getElementById("article").appendChild(name); //Add the list of entries that we have generated.

}



