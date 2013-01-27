/****************************
 * project2app/js/methods.js
 * 
 * Synesthesizer: Layer Cake Music Demo
 * 2012 - Govinda Ram Pingali
 * LCC 6313 - Project 2
 * Georgia Institute of Technology
 ****************************/


//*** Play Song Function ***//
function playSong (drumPattern, bassPattern, keyPattern, guitarPattern, vocalPattern)
{
    drumPattern.play();
    bassPattern.play();
    keyPattern.play();
    guitarPattern.play();
    vocalPattern.play();
}



//*** Show Arrow Function ***//
function showArrow(id)
{
    if(id === 0)
    {
        arrow_vocals.style.visibility = "hidden";
        arrow_guitars.style.visibility = "hidden";
        arrow_keys.style.visibility = "hidden";
        arrow_bass.style.visibility = "hidden";
        arrow_drums.style.visibility = "hidden";
    }
    
    else if(id === 1)
    {
        arrow_vocals.style.visibility = "hidden";
        arrow_guitars.style.visibility = "hidden";
        arrow_keys.style.visibility = "hidden";
        arrow_bass.style.visibility = "hidden";
        arrow_drums.style.visibility = "visible";
    }
    
    else if(id === 2)
    {
        arrow_vocals.style.visibility = "hidden";
        arrow_guitars.style.visibility = "hidden";
        arrow_keys.style.visibility = "hidden";
        arrow_bass.style.visibility = "visible";
        arrow_drums.style.visibility = "hidden";
    }
    
    else if(id === 3)
    {
        arrow_vocals.style.visibility = "hidden";
        arrow_guitars.style.visibility = "hidden";
        arrow_keys.style.visibility = "visible";
        arrow_bass.style.visibility = "hidden";
        arrow_drums.style.visibility = "hidden";
    }
    
    else if(id === 4)
    {
        arrow_vocals.style.visibility = "hidden";
        arrow_guitars.style.visibility = "visible";
        arrow_keys.style.visibility = "hidden";
        arrow_bass.style.visibility = "hidden";
        arrow_drums.style.visibility = "hidden";
    }
    
    else if(id === 5)
    {
        arrow_vocals.style.visibility = "visible";
        arrow_guitars.style.visibility = "hidden";
        arrow_keys.style.visibility = "hidden";
        arrow_bass.style.visibility = "hidden";
        arrow_drums.style.visibility = "hidden";
    }
}



//*** Update Result Variables ***//
function updateVariables()
{
    valence_span.innerHTML = "Valence: " + valence;
    arousal_span.innerHTML = "Arousal: " + arousal;
    red_span.innerHTML = "Red: " + red;
    green_span.innerHTML = "Green: " + green;
    blue_span.innerHTML = "Blue: " + blue;
}





//*** Compute Color ***//
function computeColor(red1, green1, blue1)
{
    var _red;
    var _green;
    var _blue;
    
    if(red1===0) {
       _red = '0';
    } else if(red1===1) {
        _red = '3';
    } else if(red1===2) {
        _red = '6';
    } else if(red1===2) {
        _red = '6';
    } else if(red1===3) {
        _red = '9';
    } else if(red1===4) {
        _red = 'C';
    } else if(red1===5) {
        _red = 'F';
    }
    
    if(green1===0) {
       _green = '0';
    } else if(green1===1) {
        _green = '3';
    } else if(green1===2) {
        _green = '6';
    } else if(green1===2) {
        _green = '6';
    } else if(green1===3) {
        _green = '9';
    } else if(green1===4) {
        _green = 'C';
    } else if(green1===5) {
        _green = 'F';
    }
    
    if(blue1===0) {
       _blue = '0';
    } else if(blue1===1) {
        _blue = '3';
    } else if(blue1===2) {
        _blue = '6';
    } else if(blue1===2) {
        _blue = '6';
    } else if(blue1===3) {
        _blue = '9';
    } else if(blue1===4) {
        _blue = 'C';
    } else if(blue1===5) {
        _blue = 'F';
    }
    
    var color_return = _red + _green + _blue;
    return color_return;
}






//*** Plot Result Method ***//

function plot(xValence, yArousal)
{
    //Width and height
    var w = 200;
    var h = 140;
    var padding = 10;
    
    
    //Creating Dataset
    var dataset = [ [xValence, yArousal] ];
    
    
    //Create scale functions
    var xScale = d3.scale.linear()
                    .domain([-5.5, 5.5])
		    .range([0, w]);

    var yScale = d3.scale.linear()
		    .domain([-5.5, 5.5])
		    .range([h, 0]);

    var rScale = d3.scale.linear()
                    .domain([0, d3.max(dataset, function(d) { return d[1]; })])
		    .range([2, 5]);

    //Define X axis
    var xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom")
		.ticks(5);

    //Define Y axis
    var yAxis = d3.svg.axis()
                    .scale(yScale)
		    .orient("left")
		    .ticks(5);

    //Create SVG element
    var svg = d3.select("#chart")
                    .append("svg")
		    .attr("width", w)
		    .attr("height", h);

    //Create circles
    svg.selectAll("circle")
            .data(dataset)
	    .enter()
	    .append("circle")
	    .attr("cx", function(d) {
		return xScale(d[0]);
	    })
            .attr("cy", function(d) {
		return yScale(d[1]);
	    })
	    .attr("r", 4);

			
	    //Create labels
	    svg.selectAll("text")
		.data(dataset)
		.enter()
		.append("text")
		.text(function(d) {
		    return d[0] + "," + d[1];
		})
		.attr("x", function(d) {
		    return xScale(d[0]);
		})
                .attr("y", function(d) {
		    return yScale(d[1]);
		})
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.attr("fill", "black");
                        
			
    //Create X axis
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + 70 + ")")
        .call(xAxis);
			
    //Create Y axis
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + 100 + ",0)")
	.call(yAxis);

}
