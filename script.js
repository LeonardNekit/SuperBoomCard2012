function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
karta = ['Дикий чпок', 'Ушастый чпок', 'Делавой чпок', 'Ультра чпок', 'Пассивный чпок']
var karta1 = ['Дикий чпок', 'Ушастый чпок', 'Делавой чпок', 'Ультра чпок', 'Пассивный чпок']
alert('Из них надо выбрать: ' + karta)
let vibor = prompt('Напишите номер который вы возьмёте в бой:')
alert('Вы выбрали карту: ' + karta[vibor])
alert('ОУ чёрт, он нанёс урон: ' + getRandomNumber(12, 30))
const proc = getRandomNumber(20, 50)
const prot = getRandomNumber(20, 50)
alert('Процент чтобы ударить критическим ударом равен ' + proc + '%')
if (proc == 20) {
	let pobeda = 'НЕТ'
	alert('У вас недостаточно процент на крит. удар')
} else {
	let pobeda = 'ДА'
	alert('У вас получилось ударить крит. ударом')
}
var rand = Math.floor(Math.random() * karta1.length)
if (prot == 20) {
	alert('Противник не удалось ударить вас крит. ударом')
} else {
	alert('ВНИМАНИЕ!!!У ПРОТИВНИКА УДАЛОСЬ УДАРИТЬ ВАС КРИТ. УДАРОМ')
}
alert('Ваш раунд закончен, чтобы посмотреть его выбранную карту и статистику нажмите на ОК')