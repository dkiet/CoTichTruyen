async function getBooks(myAge) {
  try {
  		var category = null;
  		var loc = window.location.search;
  		var searchData = loc.substring(1);
  		var pageNum = window.location.hash.substring(6);
  		category = searchData;

  		var links = "https://dry-savannah-56936.herokuapp.com/api/books/" + category + "?page=" + pageNum + "&size=10";

		const response = await axios.get(links);
		const books = response.data.data.items;
		const numberPage = response.data.data.totalPages;

		//Add dữ liệu
		for (var i = 0; i < books.length; i++) {
			const bookContainer = document.createElement("div");
			bookContainer.className = "BookContainer";
			const bookDiv = document.createElement("div"); 
			bookDiv.className = "Book";
			const bookImg = document.createElement("img");
			bookImg.className = "BookImg";
			console.log(books[i].id);
			bookImg.bookID = books[i].id;
			bookImg.bookCategory = category;

			const bookName = document.createElement("span");
			bookName.className = "BookName";
			const bookContent = document.createElement("p");
			bookContent.className = "BookContent";

			bookImg.src = books[i].firebaseThumbnail;
			bookImg.onclick = onBookClick;
			bookName.innerHTML = books[i].title.link("story.html?" + category + "/" + books[i].id);
			bookContent.innerHTML = books[i].content;

			bookDiv.appendChild(bookImg);
			bookContainer.appendChild(bookName);
			bookContainer.appendChild(bookContent);
			bookDiv.appendChild(bookContainer);

			document.getElementById("booksList").appendChild(bookDiv);
		}

		for (var i = 1; i <= numberPage; i++) {
			const pageDiv = document.createElement("div"); 
			pageDiv.className = "PageDiv";
			const pageNumber = document.createElement("span");
			pageNumber.className = "PageNumber";

			pageNumber.number = i;
			pageNumber.cate = category;

			pageNumber.innerHTML = i;

			pageNumber.onclick = onPageClick;

			pageDiv.appendChild(pageNumber);

			document.getElementById("pagesList").appendChild(pageDiv);
		}
	} catch (error) {
  		console.error(error);
	}
}

function onPageClick(e) {
	var targetEl = e.target;
	window.location.href = "index.html?" + targetEl.cate + "#page=" + targetEl.number;
	location.reload();
}

function onBookClick(e) {
	var targetEl = e.target;
	window.location.href =  "story.html?" + targetEl.bookCategory + "/" + targetEl.bookID;
}

function gotoHome() {
	window.location.href = "index.html";
}

function gotoCoTichVietNam() {
	window.location.href = "index.html?co-tich-viet-nam#page=1";
}

function gotoCoTichVeLoaiVat() {
	window.location.href = "index.html?co-tich-ve-loai-vat#page=1";
}

function gotoCoTichThanKy() {
	window.location.href = "index.html?co-tich-than-ky#page=1";
}

function gotoCoTichTheTuc() {
	window.location.href = "index.html?co-tich-the-tuc#page=1";
}

function gotoCoTichTheGioi() {
	window.location.href = "index.html?co-tich-the-gioi#page=1";
}

function gotoTruyenCuoi() {
	window.location.href = "index.html?truyen-cuoi#page=1";
}

function gotoTruyenNguNgon() {
	window.location.href = "index.html?truyen-ngu-ngon#page=1";
}

function gotoTruyenDanGian() {
	window.location.href = "index.html?truyen-dan-gian#page=1";
}

function gotoTruyenCoGrimm() {
	window.location.href = "index.html?truyen-co-grimm#page=1";
}

function gotoTruyenCoAndersen() {
	window.location.href = "index.html?truyen-co-andersen#page=1";
}

function gotoThanThoaiHyLap() {
	window.location.href = "index.html?than-thoai-hy-lap#page=1";
}

getBooks();


