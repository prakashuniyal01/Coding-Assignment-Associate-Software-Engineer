/** 
 *   Take a sentence as an input and reverse every word in that sentence. 
 *   a. Example - This is a sunny day > shiT si a ynnus yad.  
*/

const reverseWords = (sentence) => {
    // Split the sentence into words
    const words = sentence.split(" ");
    
    // Reverse each word and store in a new array
    const reversedWords = words.map(word => {
      return word.split("").reverse().join("");
    });
    
    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(" ");
    
    return reversedSentence;
  }
  
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); // Output: "sihT si a ynnus yad"
  