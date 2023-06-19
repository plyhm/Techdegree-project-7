// BELL DROPDOWN WITH NOTIFICATIONS  //

/***** added funtionality to display the activities from activities section dynamically ****/

const bell = document.querySelector(".bell-icon");
const notificationBlock = document.querySelector(".notification-block");
const activity = document.getElementsByClassName('user-activity');
const greenDot = document.querySelector(".notification");

bell.addEventListener('click', () => {
    
    if (notificationBlock.style.display != 'none') {
        notificationBlock.style.display = 'none';
    } else {
        let activityMsg = '';
        
        for ( let i = 0; i < activity.length; ++i ) {
            let msg = activity[i].innerHTML;
            activityMsg += `<li class="dd-post"><div class="dd-text">` + msg + `</div><span class="clear-msg" onclick="this.parentElement.style.display='none';">x</span></li>`;
        }
        notificationBlock.style.display = 'block';
        notificationBlock.innerHTML = `<ul class="message-list">` + activityMsg + `</ul>`;
        greenDot.style.display = 'none';
    }
});

// ALERT FUNCTION //

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
    `<div class="alert-banner"><p><strong>Alert:</strong> You have unread messages</p><p class="alert-banner-close">x</p></div>`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
    }
});

// TRAFFIC CHART //

const trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let hourlyTrafficData = {
    labels: ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"],
    datasets: [{
        data: [100, 73, 30, 11, 14, 15, 20, 45, 80, 100, 190, 174, 249, 300, 400, 358, 200, 284, 475, 583, 424, 502, 499, 234],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let dailyTrafficData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
        data: [5360, 4933, 5193, 3894, 6844, 7999, 8473],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let weeklyTrafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let monthlyTrafficData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        data: [170784, 130493, 159322, 160432, 173111, 180333, 192774, 130342, 140242, 174388, 180382, 190728],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    maintainAspectRatio: false,
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Create event listener for all buttons

const trafficBtns = document.querySelector('.traffic-nav');
const btn = document.querySelectorAll('.traffic-buttons');
let loadChart;

trafficBtns.addEventListener('click', e => {
    
    btn.forEach((btn) => {
        btn.classList.remove("selected");
    });

    if (e.target.matches(".hourly")) {
        loadChart = hourlyTrafficData;
        e.target.classList.add("selected");
      } else if (e.target.matches(".daily")) {
        loadChart = dailyTrafficData;
        e.target.classList.add("selected");
      } else if (e.target.matches(".weekly")) {
        loadChart = weeklyTrafficData;
        e.target.classList.add("selected");
      } else if (e.target.matches(".monthly")) {
        loadChart = monthlyTrafficData;
        e.target.classList.add("selected");
      };
      trafficChart.data.labels = loadChart.labels;
      trafficChart.data.datasets[0].data = loadChart.datasets[0].data;
      trafficChart.update();
});

// BAR CHART //

const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
    const dailyOptions = {
        maintainAspectRatio: false,
    scales: {
        y: {
        beginAtZero: true
        }
    },
    plugins: {
        legend: {
        display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// DOUGHNUT CHART //

const mobileCanvas = document.getElementById("pie-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    maintainAspectRatio: false,
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


// AUTOCOMPLETE SEARCH FIELD //

const suggestionsBox = document.querySelector('.suggestions-box');
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const contact = [
    'Victoria Chambers',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver'
];

user.onkeyup = function () {
    let result = [];
    let input = user.value;
    if (input.length) {
        result = contact.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length) {
        suggestionsBox.innerHTML = '';
    }
};

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    suggestionsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
};

function selectInput(list) {
    user.value = list.innerHTML;
    suggestionsBox.innerHTML = '';
};

// MESSAGING SECTION //

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out the user and message fields before sending your message");
    } else if (user.value === "") {
        alert("Please fill out the user field before sending your messsage");
    } else if (message.value === "") {
        alert("The message field is blank, please fill out before sending");
    } else {
        alert(`Your message was sent to: ${user.value}`);
    }
});

// LOCAL STORAGE //

const random = [...document.querySelectorAll('.boxes')].map(div => div.id);
const selected = JSON.parse(localStorage.getItem("profile_data"));
const clearBtn = document.getElementById('cancel');
const timezoneInput = document.getElementById('timezone');

// Save to Local Storage

function saveSettings() {
    let checkboxes = [];
    let timezone = document.getElementById('timezone').value;
    let profile = {
        checkboxes:checkboxes,
        timezone:timezone
        };
    
    for (let i = 0; i < random.length; i++) {
        let checkbox = document.getElementById(random[i]);
        checkboxes.push(checkbox.checked);	 
    };
    localStorage.setItem('profile_data', JSON.stringify(profile));
    alert("Settings saved");
};

// Load Lacal Storage

if(selected) {
    for (let i = 0; i < random.length; i++) {
        document.getElementById(random[i]).checked = selected.checkboxes[i];
    }
    timezoneInput.value = selected.timezone;
};

// Clear Local Storage

clearBtn.addEventListener('click', () => { 
    if (confirm('Press ok if you want to reset settings') == true) {
        if(clearBtn){
            for (let i = 0; i < random.length; i++) {
                document.getElementById(random[i]).checked = false;	 
            };
            let defaultSelect = document.getElementById('default-select');
            timezoneInput.value = defaultSelect.value;

            //Clear local storage
            localStorage.clear();
        }
    }
});




