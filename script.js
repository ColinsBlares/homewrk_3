const student = "Жуков Кирилл Николаевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
let users =[
    {name: 'Пономарев Андрей Алексеевич', gender: 'm', birth: '11.12.1980'},
    {name: 'Рыбакова Алина Семёновна', gender: 'f', birth: '16.04.1974'},
    {name: 'Молчанов Даниил Ильич', gender: 'm', birth: '21.03.1984'},
    {name: 'Смирнова София Львовна', gender: 'f', birth: '02.01.1987'},
    {name: 'Владимиров Артём Григорьевич', gender: 'm', birth: '07.12.1990'},
    {name: 'Маслова Елизавета Егоровна', gender: 'f', birth: '10.10.1997'},
    {name: 'Назарова Вера Романовна', gender: 'f', birth: '01.05.1983'},
    {name: 'Иванов Иван Фёдорович', gender: 'm', birth: '05.05.1999'},
    {name: 'Дмитриев Алексей Григорьевич', gender: 'm', birth: '12.11.1998'},
    {name: 'Овчинников Платон Александрович', gender: 'm', birth: '26.05.1999'},
    {name: 'Мартынова Софья Тимуровна', gender: 'f', birth: '07.06.1995'},
    {name: 'Соколов Михаил Адамович', gender: 'm', birth: '11.03.1979'}
]

const guests = users.length;
const male = users.filter(user => user.gender == 'm').length
const female = users.filter(user => user.gender == 'f').length

document.getElementById('allGuest').innerHTML = `${guests}`
document.getElementById('allMale').innerHTML = `${male}`
document.getElementById('allFemale').innerHTML = `${female}`

function calcAge(birthday) {
    now = new Date();

    birthday = new Date(birthday);
    birthday.setMonth(birthday.getMonth()-1);

    birthday_this_year = new Date(birthday);
    birthday_this_year.setFullYear(now.getFullYear());

    age_diff = new Date(now - birthday);
    age = Math.abs(age_diff.getFullYear() - 1970);

    if ((now - birthday_this_year) < 0) {
        age = age - 1;
    } 
    return age
  }

for (let users_index in users) {
    user = users[users_index]

    gender = (user.gender == 'm' && 'М') || 'Ж'

    nameUser = user.name.split(' ')
    nameUser = `${nameUser[0]} ${nameUser[1].substr(0,1)}. ${nameUser[2].substr(0,1)}.`

    birth = user.birth.split('.')
    age = calcAge(new Date(birth[2], birth[1], birth[0]))

    let visitor = (`${nameUser}  пол: ${gender} возраст: ${age}`);
    console.log(visitor);
}
