// missing throughout file; 
let v1 = 3;
let v2 = 4;
alert("3 times 4 equals" + (v1 * v2));
// cleaned up string and used additional parentheses to ensure the math, removed the // comment

 // This sets the general styling for the divs within the section tag using .style
 
 //let section = document.getElementsById("s1") - added ; and removed s in elements
            let section = document.getElementById("s1");
            section.style.width = "50%";
            section.style.textAlign = "center";
            section.style.fontFamily = "arial, serif";
 //section.stlye.fontWeight = "bold"; - style misspelled
            section.style.fontWeight = "bold";
            section.style.fontStyle = "italic";
            section.style.fontSize = "20px";

            // Sets the customization for each individual color/div tag
			//.innerHTML is used to add content within each div tag.
			//.style.backgroundColor is used to assign a different background color to each div
			
            // RED
            const red = document.getElementById("red");
            red.innerHTML = "RED";
            red.style.backgroundColor = "red";

            // ORANGE
            const orange = document.getElementById("orange");
            //orange.innerhtml = "ORANGE"; innerhtml changed to innerHTML
            orange.innerHTML = "ORANGE";
            orange.style.backgroundColor = "orange";

            // YELLOW
            const yellow = document.getElementById("yellow");
            yellow.innerHTML = "YELLOW";
            yellow.style.backgroundColor = "yellow";

            // GREEN
            // const purple = document.getElementById("green"); incorrect variable name
            const green = document.getElementById("green");
            green.innerHTML = "GREEN";
            green.style.backgroundColor = "green";

            // INDIGO
            const indigo = document.getElementById("indigo");
            indigo.innerHTML = "INDIGO";
            indigo.style.backgroundColor = "indigo";

            // PURPLE
            const violet = document.getElementById("violet");
            violet.innerHTML = "VIOLET";
            violet.style.backgroundColor = "violet";