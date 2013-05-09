// Project 2
// Visual Frameworks 1305
// Peter Hitchcock

// Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function() {

    // getElementsById Function
    function $(x) {
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    // Create Select Field Element and Populate with Options
    function makeBedrooms() {
        var formTag = document.getElementsByTagName("form"),
            selectLi = $("bedrooms"),
            makeSelect = document.createElement("select");
            makeSelect.setAttribute("id", "groups");
        for(var i=0, j=numberOfBedrooms.length; i<j; i++){
            var makeOption = document.createElement("option");
            var optText = numberOfBedrooms[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
     }

     
     // Find value of selected checkbox
     /*
     function getCheckbox() {
         var checks = document.forms[0].sfr;
         for (var i = 0; i < checks.length; i++) {
             if(checks[i].checked {
             sfrValue = checks[i].value;
             
              }   
         }
     }
    
     function toggleControls(n) {
         switch(n) {
             case "on":
                 $("contactForm").style.display = "none";
                 $("clear").style.display = "inline";
                 $("displayLink").style.display = "none";
                 $("addNew").style.display = "inline";
                 break;
             case "off":
                 $("contactForm").style.display = "none";
                 $("clear").style.display = "inline";
                 $("displayLink").style.display = "inline";
                 $("addNew").style.display = "none";
                 $("items").style.display = "none";
                 break;
             default:
                 return false;
         }
     }
      */
     function storeData() {
         var id             = Math.floor(Math.random()*10000001);
         // Get all form field values and store in object
         // Object properties contain array form label and input value
         //getCheckbox()
         var lead           = {};
             lead.name      = ["Name:", $("name").value];
             lead.phone     = ["Phone:", $("phone").value];
             lead.email     = ["Email:", $("email").value];
             lead.date      = ["Date:", $("date").value];
             lead.check     = ["Checked:", checks];
             lead.price     = ["Price:", $("price").value];
             lead.bedrooms  = ["Bedrooms:", $("bedrooms").value];
             lead.info      = ["Info:", $("additional").value];
             lead.hidden    = ["Hidden:", $("hideme").value];
             
             
         // Save data to local storage Use stringify to convert object to a string
         localStorage.setItem(id, JSON.stringify(lead));
         alert("Lead Has Been Saved!");
                      
     }
     
     function getData() {
         //toggleControls("on");
         //Write local data from local storage to browser
         var makeDiv = document.createElement("div");
         makeDiv.setAttribute("id", "leads");
         var makeList = document.createElement("ul");
         makeDiv.appendChild(makeList);
         document.body.appendChild(makeDiv);
         //$("items").style.display = "block";
         for (var i = 0, len=localStorage.length; i<len; i++) {
             var makeLi = document.createElement("li");
             makeList.appendChild(makeLi);
             var key = localStorage.key(i);
             var value = localStorage.getItem(key);
             // Convert sting from local storage back to an object by using JSON.parse()
             var obj = JSON.parse(value);
             var makeSublist = document.createElement("ul");
             makeLi.appendChild(makeSublist);
             for (var n in obj) {
                 var makeSubli =document.createElement("li");
                 makeSublist.appendChild(makeSubli);
                 var optSubText = obj[n][0]+" "+obj[n][1];
                 makeSubli.innerHTML = optSubText;
                 
             }
         }
     
     }
     
     function clearLocal() {
         if (localStorage.length === 0) {
             alert("There Are No Leads to Delete")
         } else {
             localStorage.clear();
             alert("All Leads Have Been Deleted!");
             window.location.reload();
             return false;
         }
     
     }
    
    
    // Var Defaults
    var numberOfBedrooms = ["1+", "2+", "3+"],
        checks
        ;
    makeBedrooms();
    

    // Set Link and Submit Click Events
    var displayData = $("displayLink");
    displayData.addEventListener("click", getData);
    var clearData = $("clear");
    clearData.addEventListener("click", clearLocal);
    var save = $("submit");
    save.addEventListener("click", storeData);

});