describe("bind: привязывает контекст context к заданной функции func и произвольному набору параметров bindArgs; возвращает новую функцию", function() {
    //  тестовые функции    
    const getMyInfo = (age) => `${this.name}: ${this.age}`;
    const getMyAgeSinceYears = (years) => this.age + years;

    function makeTestGetMyInfo(person) {
        let expected = `${person.name}: ${person.age}`;
        it(`Имя: возраст сейчас`, function() {
            assert.equal(bind(getMyInfo, person)(), expected);
        });
    }

    function makeTestGetMyAgeSinceYears(person, x) {
        let expected = person.age + x;
        it(`Возраст через ${x} лет будет ${expected}`, function() {
            assert.equal(bind(getMyAgeSinceYears, person)(x), expected);
        });
    }

    describe("Контекст = { name: Alex, age: 18 }", function () {
        const alex = {
            name: 'Alex',
            age: 18
        }

        makeTestGetMyInfo(alex);
    
        for (let x = 1; x < 5; x++) {
            makeTestGetMyAgeSinceYears(alex, x);
        }
    })

    describe("Контекст = { name: Piter, age: 25 }", function () {        
        const piter = {
            name: 'Piter',
            age: 25
        }

        makeTestGetMyInfo(piter);
    
        for (let x = 1; x < 5; x++) {
            makeTestGetMyAgeSinceYears(piter, x);
        }
    })  
  });