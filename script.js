// TODO: load the dataset 
let attractions = [];
fetch("attractions.json")
  .then(response => response.json())
  .then(data => {
    attractions = data; 
  })
  
// sort the dataset based on number of visitors
setTimeout(initialSort, 200);
let sortedAttractions;
function initialSort() {
  sortedAttractions = attractions.sort((a, b) => (a.Visitors < b.Visitors) ? 1 : -1);
  try {
    window.renderBarChart(sortedAttractions.slice(0,5));
  } catch (error) {
    alert("Error loading data. Refresh page.");
  }
}

// function to filter data based on user-selected category
function filterData(category) {
	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

  let categoricalAttractions; 
  if (category != "all") {
    categoricalAttractions =  attractions.filter(function(park) {
        return park.Category == category;      
    });
  } else {
    categoricalAttractions = sortedAttractions;
  }
  categoricalAttractions = categoricalAttractions.slice(0, 5);
  console.log(categoricalAttractions);
  window.renderBarChart(categoricalAttractions);
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
const select = document.querySelector("#attraction-category");
select.addEventListener("change", function() {
  filterData(event.target.value);
}); 
