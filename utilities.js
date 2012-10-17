var utilities = {
	eliminateDuplicates : function(arr){
		//takes an array as a parameter and eliminates the duplicates of their contents and returns the cleaned-up array
		  var i, len=arr.length, out=[], obj={};
		  for (i=0;i<len;i++) 
		  {
			  obj[arr[i]]=0;
		  }
		  for (i in obj) 
		  {
			  out.push(i);
		  }
		  return out;
	},
	
	getKeywordMatchedChunkText : function(someText, startIndex, limits)
	{
		//returns a string which has 50 characters (if limits=50) to left and 50 chars to the right of a given index
		return someText.substring(startIndex-limits , startIndex+limits); 
	},
	
	findKeywordPositionsFromText: function(myText, keyword)
	{
		//takes a text and a keyword as parameters and finds indices of all the strings that match the keyword
		keyword = keyword.trim();
		var regex = new RegExp(keyword,"gi"), result, indices = [];
		while ( (result = regex.exec(myText)) ) 
		{
			indices.push(result.index);
		}
		return indices; //returns an array of matched positions
	},
	
	wordsToNumbers: function(words){

		var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
	    tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ],
	    scales = ["thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion" ],
	    max = scales.length * 3;

		
		var units_number = 0;
		for(var i=0; i<units.length; i++)
		{
			var regex = new RegExp((' ' + units[i]).toString(),'gi');
			if(words.match(regex)!==null)
			{
				units_number = i;
				break;
			}
		}
		
		var tens_number = 0;
		for(var j=0; j<tens.length; j++)
		{
			var regex1 = new RegExp(tens[j],'gi');
			if(words.match(regex1)!==null)
			{
				tens_number = j*10;
				break;
			}
		}
		
		var number = parseInt(tens_number + units_number);
		console.log(number.toString());
		if(number>0)
			return " " + number.toString();
	}
};

module.exports = utilities;