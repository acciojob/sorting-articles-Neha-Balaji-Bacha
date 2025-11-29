//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function strip(article){
	let words = article.split(" ");
	let first = words[0].toLowerCase();

	if(first === "a" || first === "an" || first === "the"){
		words.shift();
	}
	return words.join(" ");
}
const sorted = bands.sort((a,b)=> strip(a).localeCompare(strip(b)));
const ul = document.getElementById("band");
sorted.forEach(item => {
	let li = document.createElement("li");
	li.textContent = item;
	ul.appendChild(li);
});