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
    "название": "LG 27GN950-B 144Гц"
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
  document.querySelector('.dateEnd').setAttribute('min', formattedToday);


  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);

  const maxDd = String(maxDate.getDate()).padStart(2, '0');
  const maxMm = String(maxDate.getMonth() + 1).padStart(2, '0');
  const maxYyyy = maxDate.getFullYear();
  const formattedMaxDate = `${maxYyyy}-${maxMm}-${maxDd}`;

  document.querySelector('.dateBeg').setAttribute('max', formattedMaxDate);
  document.querySelector('.dateEnd').setAttribute('max', formattedMaxDate);

});

// Основа
// Валидация дат при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const formattedToday = `${yyyy}-${mm}-${dd}`;

  document.querySelector('.dateBeg').setAttribute('min', formattedToday); // Минимальная дата начала бронирования
  document.querySelector('.dateEnd').setAttribute('min', formattedToday); // Минимальная дата окончания бронирования

  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30); // Максимальная дата через месяц

  const maxDd = String(maxDate.getDate()).padStart(2, '0');
  const maxMm = String(maxDate.getMonth() + 1).padStart(2, '0');
  const maxYyyy = maxDate.getFullYear();
  const formattedMaxDate = `${maxYyyy}-${maxMm}-${maxDd}`;

  document.querySelector('.dateBeg').setAttribute('max', formattedMaxDate); // Максимальная дата начала бронирования
  document.querySelector('.dateEnd').setAttribute('max', formattedMaxDate); // Максимальная дата окончания бронирования

});

// Функция для заполнения селектов с почасовым временем
function populateTimeSelects() {
  const timeBegSelect = document.getElementById('timeBeg');
  const timeEndSelect = document.getElementById('timeEnd');

  for (let hour = 0; hour < 24; hour++) {
    for (let minute of [0, 30]) {
      const timeOption = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      timeBegSelect.add(new Option(timeOption, timeOption)); // Добавляем время начала в селект
      timeEndSelect.add(new Option(timeOption, timeOption)); // Добавляем время окончания в селект
    }
  }
}

// Получение текущего пользователя из sessionStorage
let userNow = sessionStorage.getItem('currentUser')

// Функция для блокировки времени при бронировании
// Валидация дат при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const formattedToday = `${yyyy}-${mm}-${dd}`;

  document.querySelector('.dateBeg').setAttribute('min', formattedToday); // Минимальная дата начала бронирования
  document.querySelector('.dateEnd').setAttribute('min', formattedToday); // Минимальная дата окончания бронирования

  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30); // Максимальная дата через месяц

  const maxDd = String(maxDate.getDate()).padStart(2, '0');
  const maxMm = String(maxDate.getMonth() + 1).padStart(2, '0');
  const maxYyyy = maxDate.getFullYear();
  const formattedMaxDate = `${maxYyyy}-${maxMm}-${maxDd}`;

  document.querySelector('.dateBeg').setAttribute('max', formattedMaxDate); // Максимальная дата начала бронирования
  document.querySelector('.dateEnd').setAttribute('max', formattedMaxDate); // Максимальная дата окончания бронирования
});

// Функция для заполнения селектов с почасовым временем
function populateTimeSelects() {
  const timeBegSelect = document.getElementById('timeBeg');
  const timeEndSelect = document.getElementById('timeEnd');

  for (let hour = 0; hour < 24; hour++) {
    for (let minute of [0, 30]) {
      const timeOption = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      timeBegSelect.add(new Option(timeOption, timeOption)); // Добавляем время начала в селект
      timeEndSelect.add(new Option(timeOption, timeOption)); // Добавляем время окончания в селект
    }
  }

  timeEndSelect.disabled = true; // Изначально блокируем селект времени окончания
}

// Получение текущего пользователя из sessionStorage

// Валидация дат при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();

  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  const formattedToday = `${yyyy}-${mm}-${dd}`;

  document.querySelector('.dateBeg').setAttribute('min', formattedToday);
  document.querySelector('.dateEnd').setAttribute('min', formattedToday);

  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);

  const maxDd = String(maxDate.getDate()).padStart(2, '0');
  const maxMm = String(maxDate.getMonth() + 1).padStart(2, '0');
  const maxYyyy = maxDate.getFullYear();

  const formattedMaxDate = `${maxYyyy}-${maxMm}-${maxDd}`;

  document.querySelector('.dateBeg').setAttribute('max', formattedMaxDate);
  document.querySelector('.dateEnd').setAttribute('max', formattedMaxDate);
});

// Заполнение селектов с почасовым временем
function populateTimeSelects() {
  const timeBegSelect = document.getElementById('timeBeg');
  const timeEndSelect = document.getElementById('timeEnd');

  for (let hour = 0; hour < 24; hour++) {
    for (let minute of [0, 30]) {
      const timeOption = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      timeBegSelect.add(new Option(timeOption, timeOption));
      timeEndSelect.add(new Option(timeOption, timeOption));
    }
  }
}


// Блокировка времени при бронировании
function blockTime(placeId, startTime, endTime) {
  bookings.push({
    id_бронирования: bookings.length + 1,
    id_пользователя: users.find(user => user.email == userNow).user_id,
    id_места: placeId,
    время_начала: startTime,
    время_окончания: endTime,
    статус: "подтверждено"
  });

  // Сохранение бронирований в localStorage
  localStorage.setItem("bookings", JSON.stringify(bookings));

  // Блокируем время в селекте
  const timeBegSelect = document.getElementById('timeBeg');
  const timeEndSelect = document.getElementById('timeEnd');

  const startHour = parseInt(startTime.split(':')[0]);
  const endHour = parseInt(endTime.split(':')[0]);

  for (let i = startHour; i <= endHour; i++) {
    for (let minute of [0, 30]) {
      const timeOption = `${String(i).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      for (let option of Array.from(timeBegSelect.options)) {
        if (option.value === timeOption) {
          option.disabled = true;
        }
      }
      for (let option of Array.from(timeEndSelect.options)) {
        if (option.value === timeOption) {
          option.disabled = true;
        }
      }
    }
  }
}

// Функция для расчета стоимости бронирования
function calculateTotalCost(placeId, startDate, endDate) {
  const place = places.find(p => p.place_id === placeId);
  if (!place) return 0;

  const durationHours = Math.abs(new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60); // Разница в часах между началом и концом
  return durationHours * place.price_per_hour; // Общая стоимость за бронирование
}

// Обработчик отправки формы бронирования
document.getElementById('bookingForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Отменяем стандартное поведение формы

  const dateBeg = document.querySelector('.dateBeg').value;
  const dateEnd = document.querySelector('.dateEnd').value;
  const timeBeg = document.querySelector('[name="timeBeg"]').value;
  const timeEnd = document.querySelector('[name="timeEnd"]').value;

  // Проверка на корректность дат
  if (new Date(dateEnd + ' ' + timeEnd) <= new Date(dateBeg + ' ' + timeBeg)) {
    alert("Дата окончания не может быть раньше даты начала.");
    return;
  }

  const placeId = places[0].place_id; // Здесь можно добавить выбор места для бронирования
  const startTime = `${dateBeg} ${timeBeg}`;
  const endTime = `${dateEnd} ${timeEnd}`;

  // Расчет стоимости
  const totalCost = calculateTotalCost(placeId, startTime, endTime);

  // Обновление итоговой стоимости в интерфейсе
  document.getElementById('totalCost').textContent = totalCost;

  // Блокировка времени и добавление бронирования в массив bookings
  blockTime(placeId, startTime, endTime);
});

// Инициализация селектов и мест при загрузке страницы
populateTimeSelects();
seatsInit();