async function getPageData(){
	try{
		var locPage =  window.location;

		categoryPage = locPage.search.substring(1);
		page = locPage.hash.substring(6);

		var link = "https://dry-savannah-56936.herokuapp.com/api/books/" + categoryPage + "?page=" + page + "&size=10";
		document.title = "Trang " + page;

		const response = await axios.get(link);
		const story = response.data.data.items;

		for (var i = 0; i < story.length; i++) {
			const storyDiv = document.createElement("div"); 
			storyDiv.className = "Story";
			const storyImg = document.createElement("img");
			storyImg.className = "StoryImg";
			const storyName = document.createElement("span");
			storyName.className = "StoryName";
			const storyContent = document.createElement("p");
			storyContent.className = "StoryContent";

			storyImg.src = story[i].firebaseThumbnail;
			storyName.innerHTML = story[i].title.link("story.html?" + categoryPage + "/" + story[i].id);
			storyContent.innerHTML = story[i].content;

			storyDiv.appendChild(storyImg);
			storyDiv.appendChild(storyName);
			storyDiv.appendChild(storyContent);

			document.getElementById("storiesList").appendChild(storyDiv);
		}
	} catch(erorr) {
		console.log(erorr);
	}
}

getPageData();