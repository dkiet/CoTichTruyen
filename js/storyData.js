async function getStory() {
  try {
    var locStory = window.location.search;
    var linkLength = locStory.length;

    var categoryStory = locStory.slice(1, -37);
    var idStory = locStory.substring((linkLength - 36));

    var link = "https://dry-savannah-56936.herokuapp.com/api/books/" + categoryStory + "/" + idStory;

    const response = await axios.get(link);
    const books = response.data.data;
    document.title = books.title;

    const storyDiv = document.createElement("div");
    storyDiv.className = "StoryDiv";
    const nameStory = document.createElement("span");
    nameStory.className = "NameStory";
    const dataStory = document.createElement("p");
    dataStory.className = "DataStory";

    nameStory.innerHTML =  books.title;
    dataStory.innerHTML = books.content;


    storyDiv.appendChild(nameStory);
    storyDiv.appendChild(dataStory);

  	document.getElementById("storiesData").appendChild(storyDiv);

	} catch (error) {
  		console.error(error);
	}
}

getStory();





