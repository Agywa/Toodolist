import {addSalary, divSalary, fallSalary, multSalary} from "./tasks";

test("addSalary", () => {
    //1.тестовые данные
    const salary: number = 700
    const bonus: number = 250
    //2. выполнение тестируемого кода
    const result = addSalary(salary, bonus)
    //3. проверка ожидаемого результата
    expect(result).toBe(950)
})

test("fallSalary", () => {
    const salary: number = 700
    const minus: number = 200
    const result = fallSalary(salary, minus)
    expect(result).toBe(500)
})

test("multSalary", () => {
    const salary: number = 700
    const coefficient: number = 1.5
    const result = multSalary(salary, coefficient)
    expect(result).toBe(1050)
})

test("divSalary", () => {
    // const salary: number = 700
    // const coefficient: number = 0.5
    // const result = divSalary(salary, coefficient)
    expect(divSalary(700, 0.5)).toBe(350)
})