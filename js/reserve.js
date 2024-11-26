'use strict'

let users
let bookings
let userNow


let places = [
  {
    "place_id": 1,
    "place_number": "1",
    "status": "avaiable",
    "gpu_id": 1,
    "cpu_id": 1,
    "monitor_id": 1,
    "price_per_hour": 150,
    "weekTime": 72.5
  },
  {
    "place_id": 2,
    "place_number": "2",
    "status": "unavaiable",
    "gpu_id": 2,
    "cpu_id": 2,
    "monitor_id": 2,
    "price_per_hour": 200,
    "weekTime": 50
  },
  {
    "place_id": 3,
    "place_number": "3",
    "status": "avaiable",
    "gpu_id": 3,
    "cpu_id": 3,
    "monitor_id": 3,
    "price_per_hour": 120,
    "weekTime": 92.5
  },
  {
    "place_id": 4,
    "place_number": "4",
    "status": "avaiable",
    "gpu_id": 1,
    "cpu_id": 1,
    "monitor_id": 1,
    "price_per_hour": 150,
    "weekTime": 72.5
  },
  {
    "place_id": 5,
    "place_number": "5",
    "status": "unavaiable",
    "gpu_id": 2,
    "cpu_id": 2,
    "monitor_id": 2,
    "price_per_hour": 200,
    "weekTime": 50
  },
  {
    "place_id": 6,
    "place_number": "6",
    "status": "avaiable",
    "gpu_id": 3,
    "cpu_id": 3,
    "monitor_id": 3,
    "price_per_hour": 120,
    "weekTime": 92.5
  },
  {
    "place_id": 7,
    "place_number": "7",
    "status": "avaiable",
    "gpu_id": 1,
    "cpu_id": 1,
    "monitor_id": 1,
    "price_per_hour": 150,
    "weekTime": 72.5
  },
  {
    "place_id": 12,
    "place_number": "12",
    "status": "avaiable",
    "gpu_id": 3,
    "cpu_id": 3,
    "monitor_id": 3,
    "price_per_hour": 120,
    "weekTime": 92.5
  },
  {
    "place_id": 13,
    "place_number": "13",
    "status": "avaiable",
    "gpu_id": 1,
    "cpu_id": 1,
    "monitor_id": 1,
    "price_per_hour": 150,
    "weekTime": 72.5
  },
  {
    "place_id": 14,
    "place_number": "14",
    "status": "unavaiable",
    "gpu_id": 2,
    "cpu_id": 2,
    "monitor_id": 2,
    "price_per_hour": 200,
    "weekTime": 50
  },
  {
    "place_id": 15,
    "place_number": "15",
    "status": "avaiable",
    "gpu_id": 3,
    "cpu_id": 3,
    "monitor_id": 3,
    "price_per_hour": 120,
    "weekTime": 92.5
  },
  {
    "place_id": 16,
    "place_number": "16",
    "status": "avaiable",
    "gpu_id": 1,
    "cpu_id": 1,
    "monitor_id": 1,
    "price_per_hour": 150,
    "weekTime": 72.5
  },
  {
    "place_id": 17,
    "place_number": "17",
    "status": "unavaiable",
    "gpu_id": 2,
    "cpu_id": 2,
    "monitor_id": 2,
    "price_per_hour": 200,
    "weekTime": 50
  },
  {
    "place_id": 18,
    "place_number": "18",
    "status": "avaiable",
    "gpu_id": 3,
    "cpu_id": 3,
    "monitor_id": 3,
    "price_per_hour": 120,
    "weekTime": 92.5
  },
];


if (localStorage.getItem("bookings")) {
  bookings = JSON.parse(localStorage.getItem("bookings"));
} else {
  bookings = [
    {
      "begin_date": "2024-11-14",
      "begin_time": "1",
      "booking_id": 256,
      'end_time': "4",
      "seat_id": 4,
      "status": "подтверждено",
      "user_id": 7928,
    },
    {
      "begin_date": "2024-11-14",
      "begin_time": "7",
      "booking_id": 257,
      'end_time': "11",
      "seat_id": 4,
      "status": "подтверждено",
      "user_id": 7928,
    },
    {
      "begin_date": "2024-11-14",
      "begin_time": "15",
      "booking_id": 258,
      'end_time': "21",
      "seat_id": 4,
      "status": "подтверждено",
      "user_id": 7928,
    }
  ]
}



if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
} else {
  users = [
    {
      user_id: 1,
      email: "shmidt@gmail.com",
      phone: "+7 (999) 222-34-35",
      password: "asdD1234",
      role: "superadmin",
    },
    {
      user_id: 2,
      email: "shmidt@gmail.com",
      phone: "+7 (999) 999-99-99",
      password: "Admin1234",
      role: "admin",
    },
  ];
}


let gpus = [
  {
    "gpu_id": 1,
    "name": "RTX 3060"
  },
  {
    "gpu_id": 2,
    "name": "RX 6700 XT"
  },
  {
    "gpu_id": 3,
    "name": "GTX 1660 Ti"
  }
]

let cpus = [
  {
    "cpu_id": 1,
    "name": "Intel i5-10400"
  },
  {
    "cpu_id": 2,
    "name": "Ryzen 5 5600X"
  },
  {
    "cpu_id": 3,
    "name": "Intel i7-10700K"
  }
]

let monitors = [
  {
    "monitor_id": 1,
    "name": "Dell U2415 144Гц"
  },
  {
    "monitor_id": 2,
    "name": "ASUS PG259QN 144Гц"
  },
  {
    "monitor_id": 3,
    "name": "LG 27GN950-B 144Гц"
  }
]

const bg = document.querySelector('.back')
let pricePerHour
let currentNum

// Функция для обновления статуса мест
function updatePlaceStatuses() {
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0];
  const currentHour = currentDate.getHours();

  places.forEach(place => {
    const hasActiveBooking = bookings.some(booking =>
      booking.seat_id === place.place_id &&
      booking.begin_date === currentDateString &&
      currentHour >= parseInt(booking.begin_time) &&
      currentHour < parseInt(booking.end_time)
    );

    place.status = hasActiveBooking ? 'unavailable' : 'avaiable';
  });
}

updatePlaceStatuses();

// Модальные окна
const openModal = (what, num = 0, cost = 0) => {
  const target = document.querySelector(`.${what}`);
  target.style.display = "flex";
  bg.style.display = "flex";
  bg.addEventListener("click", (e) => {
    if (e.target == bg) {
      target.style.display = "none";
      bg.style.display = "none";
    }
  });
  placeNumberSpan.textContent = num;
  currentNum = num
  pricePerHour = cost
};

const closeModal = (what) => {
  const target = document.querySelector(`.${what}`);
  target.style.display = "none";
  dateBegInput.value = '';
  timeBegSelect.value = '';
  timeEndSelect.value = '';

  timeBegSelect.disabled = true;
  timeEndSelect.disabled = true;
  totalCostSpan.textContent = '0'
};

const clearModal = (what) => {
  const target = document.querySelector(`.${what}`);
  target.style.display = "none";
  dateBegInput.value = '';
  timeBegSelect.value = '';
  timeEndSelect.value = '';

  timeBegSelect.disabled = true;
  timeEndSelect.disabled = true;
  bg.style.display = 'none'
  totalCostSpan.textContent = '0'

}

// Заполнение мест

const space = document.querySelector('.places-map')

const seatsInit = () => {
  // Создаём пространства для каждого из мест
  for (let i = 0; i < 30; i++) {
    space.insertAdjacentHTML('beforeend', `
      <div class="seat">

          </div>
      `)
  }

  // Заполняем
  const allSeats = document.querySelectorAll('.seat')


  places.forEach((e) => {
    // console.log(Number(e.place_number));

    let num = Number(e.place_number)

    allSeats[num - 1].insertAdjacentHTML('beforeend', `
      `)
    if (e.status == 'avaiable') {
      // console.log(gpus.gpu_id, e.gpu_id)

      // console.log(gpus.find(gpu => gpu.gpu_id === e.gpu_id)?.name);

      allSeats[num - 1].insertAdjacentHTML('beforeend', `
        <p>${num}</p>
        <img onclick="openModal('num${num}')" src="../icons/seat.svg" alt="место">
        <div class="seat-info num${num}">
          <div class = "entires" value='${num}'>
            <p>${e.price_per_hour} р/час</p>
            <p>${(gpus.find(gpu => gpu.gpu_id === e.gpu_id)?.name)}</p>
            <p>${(cpus.find(cpu => cpu.cpu_id === e.cpu_id)?.name)}</p>
            <p>${(monitors.find(monitor => monitor.monitor_id === e.monitor_id)?.name)}</p>
            <button class="theSeat" onclick="openModal('reserve', ${num}, ${e.price_per_hour}), closeModal('num${num}')"></button>
          </div>
        </div>
        `)
    } else {
      allSeats[num - 1].insertAdjacentHTML('beforeend', `
        <p>${num}</p>
        <img onclick="openModal('num${num}')" src="../icons/unavaiableseat.svg" alt="">
        <div class="seat-info num${num}">
          <div class = "entires">
            <p>${e.price_per_hour} р/час</p>
            <p>${(gpus.find(gpu => gpu.gpu_id === e.gpu_id)?.name)}</p>
            <p>${(cpus.find(cpu => cpu.cpu_id === e.cpu_id)?.name)}</p>
            <p>${(monitors.find(monitor => monitor.monitor_id === e.monitor_id)?.name)}</p>
            <button class="theSeat" onclick="openModal('reserve', ${num}, ${e.price_per_hour}), closeModal('num${num}')"></button>
          </div>
        </div>
        `)
    }

    // Модальное окно

    allSeats[num - 1]

  })
}

// Бронь

// Валидация дат

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();

  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const formattedToday = `${yyyy}-${mm}-${dd}`;

  document.querySelector('.dateBeg').setAttribute('min', formattedToday);


  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);

  const maxDd = String(maxDate.getDate()).padStart(2, '0');
  const maxMm = String(maxDate.getMonth() + 1).padStart(2, '0');
  const maxYyyy = maxDate.getFullYear();
  const formattedMaxDate = `${maxYyyy}-${maxMm}-${maxDd}`;

  document.querySelector('.dateBeg').setAttribute('max', formattedMaxDate);
});

// Основа
const bookingForm = document.getElementById('bookingForm');
const dateBegInput = bookingForm.querySelector('.dateBeg');
const timeBegSelect = bookingForm.querySelector('#timeBeg');
const timeEndSelect = bookingForm.querySelector('#timeEnd');
const placeNumberSpan = bookingForm.querySelector('#placeNumber');
const totalCostSpan = bookingForm.querySelector('#totalCost');
const resBtn = bookingForm.querySelector('.resBtn')
const erWindow = bookingForm.querySelector('.error')



dateBegInput.addEventListener('change', (e) => {
  timeBegSelect.disabled = false;
  timeEndSelect.disabled = true;
  resBtn.disabled = true;

  timeEndSelect.innerHTML = '';
  timeBegSelect.innerHTML = '';
  timeBegSelect.insertAdjacentHTML('beforeend',
    `<option>Выберите время начала</option>`
  );

  const bookedTimes = bookings
    .filter(booking => booking.seat_id === currentNum && booking.begin_date === dateBegInput.value)
    .flatMap(booking => {
      const startHour = parseInt(booking.begin_time);
      const endHour = parseInt(booking.end_time);

      return Array.from({ length: endHour - startHour }, (_, i) => startHour + i);
    });

  for (let i = 0; i <= 25; i++) {
    if (!bookedTimes.includes(i)) {
      timeBegSelect.insertAdjacentHTML('beforeend',
        `<option value="${i}">${i}:00</option>`
      );
    }
  }
});

timeBegSelect.addEventListener('change', (e) => {
  timeEndSelect.disabled = false;
  resBtn.disabled = true;
  timeEndSelect.innerHTML = '';
  timeEndSelect.insertAdjacentHTML('beforeend',
    `<option value="stub">Выберите время окончания</option>`
  );

  const bookingsForDate = bookings.filter(booking =>
    booking.seat_id === currentNum && booking.begin_date === dateBegInput.value
  );

  const nearestBooking = bookingsForDate
    .filter(booking => parseInt(booking.begin_time) > Number(timeBegSelect.value))
    .sort((a, b) => parseInt(a.begin_time) - parseInt(b.begin_time))[0];

  let maxEndTime = 24;

  if (nearestBooking) {
    maxEndTime = parseInt(nearestBooking.begin_time);
  }
  for (let i = Number(timeBegSelect.value) + 1; i < maxEndTime; i++) {
    timeEndSelect.insertAdjacentHTML('beforeend',
      `<option value="${i}">${i}:00</option>`
    );
  }

  if (!nearestBooking) {
    for (let i = Number(timeBegSelect.value) + 1; i < 24; i++) {
      timeEndSelect.insertAdjacentHTML('beforeend',
        `<option value="${i}">${i}:00</option>`
      );
    }
  }
});

timeEndSelect.addEventListener('change', (e) => {
  if (timeEndSelect !== 'stub') {
    resBtn.disabled = false;
    // получить данные о выбранном месте
    let currentSeat = places.find(place => place.place_number === e.gpu_id)?.name
    totalCostSpan.textContent = pricePerHour * (timeEndSelect.value - timeBegSelect.value);
  }
})


// Изменение брони

const changeBookingForm = document.getElementById('changeBookingForm');
const changeBookingNum = changeBookingForm.querySelector('#changebookingNum')
const changeTimeBegSelect = changeBookingForm.querySelector('#changetimeBeg');
const changeTimeEndSelect = changeBookingForm.querySelector('#changetimeEnd');
const changeDate = changeBookingForm.querySelector('#currentDate')
const changePlaceNumberSpan = changeBookingForm.querySelector('#changeplaceNumber');
const changeTotalCostSpan = changeBookingForm.querySelector('#changetotalCost');
const changeResBtn = changeBookingForm.querySelector('.resBtn')
const changeErWindow = changeBookingForm.querySelector('.error')

function loadUserBookings() {
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  const userBookings = bookings.filter(booking => booking.user_id === currentUser.id);
  console.log(userBookings);

  userBookings.forEach(booking => {
    const option = document.createElement('option');
    option.value = booking.booking_id;
    option.textContent = `Бронь №${booking.booking_id}`;
    changeBookingNum.appendChild(option);

  });
}

changeBookingNum.addEventListener('change', (e) => {
  changeTimeBegSelect.disabled = false;

  const selectedBookingId = Number(e.target.value);
  const selectedBooking = bookings.find(booking => booking.booking_id === selectedBookingId);

  if (selectedBooking) {
    document.getElementById('currentBeginDate').textContent = `${selectedBooking.begin_time}:00`;
    document.getElementById('currentEndDate').textContent = `${selectedBooking.end_time}:00`;
    document.getElementById('currentDate').textContent = `${selectedBooking.begin_date}`;
    changePlaceNumberSpan.textContent = selectedBooking.seat_id;

    loadAvailableTimes(selectedBooking);
  }
});


function loadAvailableTimes(booking) {
  changeTimeBegSelect.innerHTML = '';

  const bookedTimes = bookings
    .filter(b => b.seat_id === booking.seat_id && b.begin_date === booking.begin_date)
    .flatMap(b => {
      const startHour = parseInt(b.begin_time);
      const endHour = parseInt(b.end_time);
      return Array.from({ length: endHour - startHour }, (_, i) => startHour + i);
    });

  const lastBooking = bookings
    .filter(b => b.seat_id === booking.seat_id && b.begin_date === booking.begin_date && parseInt(b.end_time) <= booking.begin_time)
    .sort((a, b) => parseInt(b.end_time) - parseInt(a.end_time))[0];

  const startTime = lastBooking ? parseInt(lastBooking.end_time) : 0;

  for (let i = startTime; i < booking.end_time; i++) {
    console.log(i);

    const option = document.createElement('option');
    option.value = i;
    option.textContent = `${i}:00`;
    changeTimeBegSelect.appendChild(option);
  }
}


changeTimeBegSelect.addEventListener('change', ()=> {
  const selectedBookingId = Number(changebookingNum.value);

  const selectedBooking = bookings.find(booking => booking.booking_id === selectedBookingId);

  changeTimeEndSelect.disabled = false;
  changeTimeEndSelect.innerHTML = '';

  const nearestBooking = bookings.find(b =>
    b.seat_id === selectedBooking.seat_id &&
    b.begin_date === selectedBooking.begin_date &&
    parseInt(b.begin_time) > selectedBooking.begin_time
  );
  let maxEndTime = 24;
  console.log(nearestBooking);

  if (nearestBooking) {
    maxEndTime = parseInt(nearestBooking.begin_time);
  }
  console.log(changeTimeBegSelect.value);

  for (let i = Number(changeTimeBegSelect.value) + 1; i <= maxEndTime; i++) {

    const option = document.createElement('option');
    option.value = i;
    option.textContent = `${i}:00`;
    changeTimeEndSelect.appendChild(option);
  }
})


changeTimeBegSelect.addEventListener('change', () => {
  if (changeTimeBegSelect.value && changeTimeEndSelect.value) {
    updateTotalCost();
  }
});

changeTimeEndSelect.addEventListener('change', () => {
  if (changeTimeBegSelect.value && changeTimeEndSelect.value) {
    updateTotalCost();
  }
});

function updateTotalCost() {
  const beginTime = Number(changeTimeBegSelect.value);
  const endTime = Number(changeTimeEndSelect.value);

  if (beginTime && endTime) {
    const totalCost = pricePerHour * (endTime - beginTime);
    changeTotalCostSpan.textContent = totalCost;
  }
}

changeBookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!changeTimeBegSelect.value || !changeTimeEndSelect.value) {
    changeErWindow.style.display = 'flex';
  } else {
    const selectedBookingId = Number(changeBookingNum.value);

    const updatedBookingIndex = bookings.findIndex(booking => booking.booking_id === selectedBookingId);

    if (updatedBookingIndex !== -1) {
      bookings[updatedBookingIndex].begin_time = changeTimeBegSelect.value;
      bookings[updatedBookingIndex].end_time = changeTimeEndSelect.value;

      localStorage.setItem('bookings', JSON.stringify(bookings));

      console.log("Бронь успешно изменена!");
      clearModal('changeReserve');
      loadUserBookings();
    }
  }
});




// Создание id
function getRandomInt(max) {
  let num = Math.floor(Math.random() * max)
  while (bookings.find(booking => booking.booking_id === num)) {
    getRandomInt(max)
  }

  return num;
}

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!dateBegInput.value || !timeBegSelect.value || !timeEndSelect.value) {
    error.style.display = 'flex'
  } else {
    let id = getRandomInt(1000)

    bookings.push(
      {
        booking_id: id,
        user_id: JSON.parse(sessionStorage.getItem('currentUser')).id,
        seat_id: currentNum,
        begin_date: dateBegInput.value,
        begin_time: timeBegSelect.value,
        end_time: timeEndSelect.value,
        status: "подтверждено"
      },
    )
    localStorage.setItem('bookings', JSON.stringify(bookings))

    clearModal('reserve')
  }
})

const reg = document.querySelector(".reg");
const login = document.querySelector(".log-in");
const acc = document.querySelector('.acc')



const error = reg.querySelector(".error");
const errorEmail = reg.querySelector(".error-email");
const errorlog = login.querySelector(".error");



const form = reg.querySelector(".form");
const formLog = login.querySelector(".form");

const log = document.querySelector(".login");
// console.log(log);

const passwordInput = reg.querySelector(".password");
const usernameInput = reg.querySelector(".username");
const phoneInput = document.querySelectorAll(".phone");

const passwordInputLog = login.querySelector(".password");
const usernameInputLog = login.querySelector(".username");
const phoneInputLog = login.querySelector(".phone");

const logBtn = document.querySelector(".logBtn");

// logBtn.addEventListener("mouseenter", () => {
//     logBtn.firstElementChild.src = "img/logBtnHower.svg";
// });
// logBtn.addEventListener("mouseout", () => {
//     logBtn.firstElementChild.src = "img/logBtnActive.svg";
// });

phoneInput.forEach(element => {
  element.addEventListener("input", function (e) {
    let value = this.value.replace(/\D/g, "");
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    let formattedValue = "+7 (";

    if (value.length > 1) {
      formattedValue += value.substring(1, 4);
    }

    if (value.length >= 4) {
      formattedValue += ") " + value.substring(4, 7);
    }

    if (value.length >= 7) {
      formattedValue += "-" + value.substring(7, 9);
    }

    if (value.length >= 9) {
      formattedValue += "-" + value.substring(9, 11);
    }

    this.value = formattedValue;
  });
});

// Регистрация

function generateUniqueId(users) {
  let id;
  do {
    id = Math.floor(Math.random() * 10000);
  } while (users.find(user => user.id === id));
  return id;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const password = passwordInput.value;
  const userName = usernameInput.value;
  const phone = phoneInput.value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(usernameInput.value)) {
    errorEmail.style.display = "flex";
    errorEmail.firstElementChild.textContent = "Пожалуйста, введите корректный email.";
    e.preventDefault();
    return;
  }

  const passwordRequirementsMet =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    (password.match(/\d/g) || []).length >= 4;

  if (!passwordRequirementsMet) {
    error.style.display = "flex";
    error.firstElementChild.textContent =
      "Пароль должен содержать минимум 8 символов, одну заглавную букву и минимум 4 цифры.";
    e.preventDefault();
    return;
  }

  if (users.find(user => user.phone == phone)) {
    errorlog.style.display = "flex";
    errorlog.firstElementChild.textContent =
      "Неправильный номер или пароль";
  } else {

    users.push({
      id: generateUniqueId(users),
      email: userName,
      password: password,
      phone: phone,
      role: "user",
    });

    localStorage.setItem("users", JSON.stringify(users));

    passwordInput.value = '';
    usernameInput.value = '';
    phoneInput.value = '';

    errorEmail.style.display = "none";
    error.style.display = "none";

    closeModal("reg");
    openModal('log-in');
  }
});

// Вход


formLog.addEventListener('submit', (e) => {
  e.preventDefault();
  const password = passwordInputLog.value;
  const phone = phoneInputLog.value;

  const user = users.find(user => user.phone == phone && user.password == password);

  if (user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    console.log(user);


    let userNow = JSON.parse(sessionStorage.getItem('currentUser'));
    loadUserBookings()

    acc.innerHTML = `<p>${userNow.email}</p>
            <p onclick="logOut()">ВЫХОД</p>`;

    phoneInputLog.value = '';
    passwordInputLog.value = '';
    errorlog.style.display = "none";
    closeModal("log-in");
    bg.style.display = "none";
    if (user.role == 'admin') {
      window.location.assign("../adminPage/index.html");
    } else if (user.role == 'superadmin') {
      window.location.assign("../superadminPage/index.html");
    }
  } else {
    errorlog.style.display = "flex";
    errorlog.firstElementChild.textContent =
      "Неправильный логин или пароль.";
    return
  }
})

// Выход

const logOut = () => {
  sessionStorage.removeItem('currentUser')
  acc.innerHTML =
    `
    <p onclick="openModal('log-in'), closeModal('acc')">ВХОД</p>
    <p onclick="openModal('reg'), closeModal('acc')">РЕГИСТРАЦИЯ</p>
    `
}

seatsInit()


if (sessionStorage.getItem('currentUser')) {
  userNow = (JSON.parse(sessionStorage.getItem('currentUser')));
  loadUserBookings()

  console.log('успех');


  acc.innerHTML = `<p>${JSON.parse(sessionStorage.getItem('currentUser')).email}</p>
    <p onclick="logOut()">ВЫХОД</p>`
}


