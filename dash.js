
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

const demoData = [
    { date: "2024-07-22" },
    {  date: "2024-07-23" },
    {  date: "2024-07-24" },

    {  date: "2024-07-25" },
    {  date: "2024-07-26" },
    {  date: "2024-07-27" },
    {  date: "2024-07-28" },
  ];
  
  let currentDate = new Date();
  
  function renderCalendar() {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = "";
    
    const startOfWeek = getStartOfWeek(currentDate);
    const weekDates = getWeekDates(startOfWeek);
  
    weekDates.forEach(date => {
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("day");
      dayDiv.innerHTML = `<strong>${date.toDateString()}</strong>`;
  
      /*const pmItems = demoData.filter(pm => pm.date === date.toISOString().split("T")[0]);
      pmItems.forEach(pm => {
        const pmDiv = document.createElement("div");
        pmDiv.classList.add("pm-item");
        pmDiv.innerText = `${pm.name} - ${pm.time}`;
        dayDiv.appendChild(pmDiv);
      });*/
  
      calendar.appendChild(dayDiv);
    });
  }
  
  function getStartOfWeek(date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(date.setDate(diff));
  }
  
  function getWeekDates(startDate) {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  }
  
  function prevWeek() {
    currentDate.setDate(currentDate.getDate() - 7);
    renderCalendar();
  }
  
  function nextWeek() {
    currentDate.setDate(currentDate.getDate() + 7);
    renderCalendar();
  }
  
  window.onload = () => {
    renderCalendar();
  };
  