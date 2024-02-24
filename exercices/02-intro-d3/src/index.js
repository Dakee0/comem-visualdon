import { select } from "d3-selection";

// Append svg
select("body").append("div").attr("class", "monSVG");

// Set width and height
const width = 500;
const height = 500;

// Création SVG
const monSVG = select(".monSVG")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

//Pour le cercle 1
const group1 = monSVG.append("g")

group1.append("circle")
    .attr("r", 40)
    .attr("cx", 100)
    .attr("cy", 50)
    .attr("fill", "purple")
    .attr("id", "firstCircle");

// Ajout du texte au-dessous du premier cercle
group1.append("text")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("x", 100)
    .attr("y", 110)
    .text("blah blah");

//Pour le cercle 2
const group2 = monSVG.append("g")

group2.append("circle")
    .attr("r", 40)
    .attr("cx", 200)
    .attr("cy", 150)
    .attr("fill", "pink")
    .attr("id", "secondCircle");

// Ajout du texte au-dessous du deuxième cercle
group2.append("text")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("x", 200)
    .attr("y", 210)
    .text("blah blah");

//Pour le cercle 3
const group3 = monSVG.append("g")

group3.append("circle")
    .attr("r", 40)
    .attr("cx", 250)
    .attr("cy", 250)
    .attr("fill", "purple")
    .attr("id", "thirdCircle");

// Ajout du texte au-dessous du troisième cercle
group3.append("text")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("y", 310)
    .attr("x", 250)
    .text("blah blah");

// Déplacer les cercles on click
const circle1 = select("#firstCircle");
const circle2 = select("#secondCircle");
const circle3 = select("#thirdCircle");
console.log(circle3);

circle3.on("click", () => {
    console.log("click détecté");
    circle1.attr("cx", "450");
    circle2.attr("cx", "450");
    circle3.attr("cx", "450");
});

// Barchart
const data = [200, 50, 250, 80, 150];

const containerBarchart = select("body").append("div").attr("id", "barChart");

const barchart = containerBarchart
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  //.attr("transform", "translate(100, -100)");

barchart
    .selectAll("rect")
    .data(data)
    .join( (enter) => 
        enter
        .append("rect")
        .attr("x", (d, i) => i*30)
        .attr("y", (d) => 500-d)
        .attr("width", 20)
        .attr("height", (d) => d)
        .attr("stroke", "purple")
        .attr("fill", "purple")
    );

document.body.appendChild(svg.node());
