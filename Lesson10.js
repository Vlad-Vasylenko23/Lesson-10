console.log('Початок приготування кави');

function boilWater() {
    console.log('Кип\'ятимо воду...');
    setTimeout(() => {
        console.log('Вода закипіла!');
        grindCoffeeBeans();
    }, 3000);
}

function grindCoffeeBeans() {
    console.log('Мелемо кавові зерна...');
    setTimeout(() => {
        console.log('Кавові зерна помелено!');
        brewCoffee();
    }, 2000);
}

function brewCoffee() {
    console.log('Заварюємо каву...');
    setTimeout(() => {
        console.log('Кава готова!');
        console.log('Смачного!');
    }, 4000);
}

boilWater();