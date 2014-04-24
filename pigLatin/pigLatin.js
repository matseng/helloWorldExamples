
var pigLatin = function(sentence) {  
  var pigLatinWord = function(str) {
    var arr = str.split("");
    var vowels = /[aeiou]/i;

    if(vowels.test(arr[0])){  //check for string starts with vowel
      arr.push("ay");
    } else {  //string starts with 1 or more consonants
      var consonants = arr.join("").match(/^[^aeiou]+/i)[0];
      arr.splice(0, consonants.length);
      consonants += "ay";
      arr.push(consonants);
    }

    var result = arr.join("");

    if(/[A-Z]/.test(str[0])) {  //if first letter of string was capitalized, then also capitalize output string
      result = result.toLowerCase();
      result = result[0].toUpperCase() + result.slice(1);
    }

    return result;
  };
  var arr = sentence.split(" ");
  var result = [];
  for(var i = 0; i < arr.length; i++) {  //iterate over sentence
    result.push(pigLatinWord(arr[i]));
  }
  return result.join(" ");
};



var result = pigLatin("hello");
console.log(result);
result = pigLatin("apple");
console.log(result);

console.log(pigLatin("eat world"));
console.log(pigLatin("Hello"));
console.log(pigLatin("Apple"));
console.log(pigLatin("school"));
console.log(pigLatin("School"));

