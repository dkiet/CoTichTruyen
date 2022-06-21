async function getBooks(myAge) {
  try {
  		//Truyen co tich Viet Nam
  		var link = "https://dry-savannah-56936.herokuapp.com/api/books/truyen-ngu-ngon?page=1&size=5";

  		const response = await axios.get(link);
  		var book = response.data.data.items;

		for (var i = 0; i <= book.length; i++) {
		const bookDiv = document.createElement("div"); 
		bookDiv.className = "Book";
		const bookImg = document.createElement("img");
		bookImg.className = "BookImg";
		const bookName = document.createElement("span");
		bookName.className = "BookName";

		bookImg.bookID = book[i].id;
		
		bookImg.src = book[i].firebaseThumbnail;
		bookImg.onclick = onBookClickBook4;
		bookName.innerHTML = book[i].title.link("story.html?truyen-ngu-ngon/" + book[i].id);

		bookDiv.appendChild(bookImg);
		bookDiv.appendChild(bookName);

		document.getElementById("bookIntro4").appendChild(bookDiv);
		}
	} catch (error) {
  		console.error(error);
	}
}

function onBookClickBook4(e) {
	var targetEl = e.target;
	window.location.href =  "story.html?truyen-ngu-ngon/" + targetEl.bookID;
}


getBooks();