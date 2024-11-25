'use strict'

let users

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

let bookings = [
  {
    "booking_id": 1,
    "user_id": 1,
    "seat_id": 1,
    "begin_time": "24/10/2024 14:30",
    "end_time": "24/10/2024 16:30",
    "status": "подтверждено"
  },
  {
    "booking_id": 2,
    "user_id": 2,
    "seat_id": 2,
    "begin_time": "25/10/2024 10:00",
    "end_time": "<25/10/2024 20:00>",
    "status": "подтверждено"
  },
  {
    "booking_id": 3,
    "user_id": 3,
    "seat_id": 3,
    "begin_time": "26/10/2024 02:00",
    "end_time": "26/10/2024 06:30",
    "status": "отменено"
  }
]

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
  ];
}

const bg = document.querySelector('.back')

// Модальные окна
const openModal = (what) => {
  const target = document.querySelector(`.${what}`);
  target.style.display = "flex";
  bg.style.display = "flex";
  bg.addEventListener("click", (e) => {
    if (e.target == bg) {
      target.style.display = "none";
      bg.style.display = "none";
    }
  });
};

const closeModal = (what) => {
  const target = document.querySelector(`.${what}`);
  target.style.display = "none";
};

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
    console.log(Number(e.place_number));

    let num = Number(e.place_number)

    allSeats[num - 1].insertAdjacentHTML('beforeend', `
         <p>${num}</p>
      `)
    if (e.status == 'avaiable') {
      // console.log(gpus.gpu_id, e.gpu_id)

      console.log(gpus.find(gpu => gpu.gpu_id === e.gpu_id)?.name);

      allSeats[num - 1].insertAdjacentHTML('beforeend', `
        <img onclick="openModal('num${num}')" src="../icons/seat.svg" alt="место">
        <div class="seat-info num${num}">
          <div class = "entires">
            <p>${e.price_per_hour} р/час</p>
            <p>${(gpus.find(gpu => gpu.gpu_id === e.gpu_id)?.name)}</p>
            <p>${(cpus.find(cpu => cpu.cpu_id === e.cpu_id)?.name)}</p>
            <p>${(monitors.find(monitor => monitor.monitor_id === e.monitor_id)?.name)}</p>
            <img class="theSeat" src="../img/bookingBtn.svg" onclick="openModal('reserve'), closeModal('num${num}')" alt="кнопка брони">
          </div>
        </div>
        `)
    } else {
      allSeats[num - 1].insertAdjacentHTML('beforeend', `
        <img onclick="openModal('num${num}')" src="../icons/unavaiableseat.svg" alt="">
        <div class="seat-info num${num}">
          <div class = "entires">
            <p>${e.price_per_hour} р/час</p>
            <p>${(gpus.find(gpu => gpu.gpu_id === e.gpu_id)?.name)}</p>
            <p>${(cpus.find(cpu => cpu.cpu_id === e.cpu_id)?.name)}</p>
            <p>${(monitors.find(monitor => monitor.monitor_id === e.monitor_id)?.name)}</p>
            <img class="theSeat" src="../img/bookingBtn.svg" onclick="openModal('reserve'), closeModal('num${num}')" alt="кнопка брони">
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
const dateBegInput = document.querySelector('.dateBeg');
const timeBegSelect = document.getElementById('timeBeg');
const dateEndInput = document.querySelector('.dateEnd');
const timeEndSelect = document.getElementById('timeEnd');
const placeNumberSpan = document.getElementById('placeNumber');
const totalCostSpan = document.getElementById('totalCost');

// Генерация расписания
function generateSchedule() {
  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(today.getMonth() + 1);
  const allPossibleHours = Array.from({ length: 24 }, (_, i) => i + 0);

  let currentDate = new Date(today);


  while (currentDate < nextMonth) {
    const dateString = currentDate.toISOString().split("T")[0];
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

function removePastBookings() {
  const today = new Date().toISOString().split("T")[0];

  bookings = bookings.filter((booking) => {
    const bookingDate = booking.begin_time.split(" ")[0];
    return bookingDate >= today;
  });

  localStorage.setItem("bookingsData", JSON.stringify(bookings));
}

function bookTime(placeId, date, hour) {
  const place = places.find((p) => p.place_id == placeId);

  if (!place) return;

  const workDay = place.workTime.find((day) => day.date === date);

  if (workDay) {
    workDay.time = workDay.time.filter((h) => h !== hour); // Убираем занятое время
  }

  localStorage.setItem("placesData", JSON.stringify(places));
}

function updateScheduleDaily() {
  const today = new Date();
  if (today.getDate() === 1) {
    places.forEach((place) => {
      place.workTime = [];
    });
    generateSchedule();
  }
  removePastBookings();
}

updateScheduleDaily();

// Заполнение доступных мест
places.forEach((place) => {
    placeNumberSpan.textContent = place.place_number;

    // Заполняем начальное время
    timeBegSelect.innerHTML += `<option value="${place.place_id}">${place.place_number}</option>`;

    // Заполняем конечное время
    timeEndSelect.innerHTML += `<option value="${place.place_id}">${place.place_number}</option>`;
});

// Обновление доступных времен для начала
dateBegInput.addEventListener("change", () => {
  updateAvailableTimes(timeBegSelect, dateBegInput.value);
});



// Функция для обновления доступных времен
function updateAvailableTimes(selectElement, selectedDate) {
  selectElement.innerHTML = '<option value="" selected>Выберите время</option>';

  if (selectedDate) {
    places.forEach((place) => {
      const workDay = place.workTime.find(day => day.date === selectedDate);
      if (workDay && workDay.time.length > 0) {
        workDay.time.forEach(hour => {
          selectElement.insertAdjacentHTML(
            "beforeend",
            `<option value="${hour.toString().padStart(2, "0")}">${hour}:00</option>`
          );
        });
      }
    });
  }
}

// Обработка отправки формы
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedPlaceId = parseInt(placeNumberSpan.textContent); // Получаем ID выбранного места
  const beginHour = parseInt(timeBegSelect.value);

  // Проверка на наличие выбранного времени
  if (!beginHour || !dateEndInput.value || !timeEndSelect.value) return;

  const bookingBeginTime = `${dateBegInput.value} ${beginHour}:00`;

  // Получаем час окончания из выпадающего списка
  const endHour = parseInt(timeEndSelect.value);

  if (endHour <= beginHour) return; // Проверка на корректность времени

  const bookingEndTime = `${dateEndInput.value} ${endHour}:00`;

  bookTime(selectedPlaceId, dateBegInput.value, beginHour); // Бронирование места

  bookings.push({
    booking_id: bookings.length + 1,
    user_id: 1, // Замените на реальный ID пользователя
    seat_id: selectedPlaceId,
    begin_time: bookingBeginTime,
    end_time: bookingEndTime,
    status: "подтверждено"
  });

  localStorage.setItem('bookingsData', JSON.stringify(bookings));

  // Подсчет итоговой стоимости
  const totalCost = calculateTotalCost(selectedPlaceId, beginHour, endHour);

  totalCostSpan.textContent = totalCost;

  // Сброс формы
  bookingForm.reset();
});

// Функция для расчета итоговой стоимости
function calculateTotalCost(placeId, startHour, endHour) {
  const place = places.find(p => p.place_id === placeId);
  const pricePerHour = place.price_per_hour;
  return pricePerHour * (endHour - startHour); // Общая стоимость за бронирование
}

seatsInit()