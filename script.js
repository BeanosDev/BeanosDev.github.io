document.addEventListener('DOMContentLoaded', () => {
	const links = document.querySelectorAll('#links a');
	links.forEach(link => {
		link.addEventListener('mouseenter', () => {
			link.style.transform = 'scale(1.1)';
		});
		link.addEventListener('mouseleave', () => {
			link.style.transform = 'scale(1)';
		});
	});

	let fadeInDelay = -500;
	const cards = document.getElementsByClassName('card-default-style');
	for (let i = 0; i < cards.length; i++) {
		console.log(cards[i]);
		fadeInDelay += 500;
		cards[i].style.animationDelay = fadeInDelay + 'ms';
		cards[i].addEventListener('animationend', () => {
			// alert('BALLS');
			cards[i].style.opacity = 1;
			setTimeout(() => {
				cards[i].classList.add('card-hover');
			}, 10);
		});
	};
});

function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
	xmlHttp.send( null );
	return xmlHttp.responseText;
}

var ifloaded = 0
setTimeout(function(){
	ifloaded += 1
},1500);

function calculateAge(dateOfBirth) {
	const today = new Date();
	const birthDate = new Date(dateOfBirth);
	let age = today.getFullYear() - birthDate.getFullYear();
	const monthDifference = today.getMonth() - birthDate.getMonth();

	if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}

	return age;
}

// Example usage:
const dateOfBirth = '2006-02-18';
console.log(`I am a ${calculateAge(dateOfBirth)}-year-old developer from Norway.`);
document.getElementById("desc").innerHTML = `I am a ${calculateAge(dateOfBirth)}-year-old developer from Norway.`;

const repoList = JSON.parse(httpGet('https://api.github.com/users/BeanosDev/repos'));

for (var i = 0; i < 6; i++){
	var obj = repoList[i];
	try {
		console.log(obj['name'] + obj['html_url']);
		document.getElementById('repo-list').innerHTML += `<li><a href="${obj['html_url']}" target="_blank">${obj['name']}</a></li>`;
	}
	catch(err) {
		console.log('[beanos.dev] Error caught!\n' + err.message);
	}
}