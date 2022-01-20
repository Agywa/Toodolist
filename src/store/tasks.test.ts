import {ActionType, addSalary, AddSalaryActionType, divSalary, fallSalary, multSalary, salaryReducer} from "./tasks";

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

test("case 'ADD_SALARY' of salaryReducer", () => {
    const salary: number = 700
    const action: AddSalaryActionType = {
        type: "ADD_SALARY",
        bonus: 300
    }
    expect(salaryReducer(salary, action)).toBe(1000)
})

test("case 'FALL_SALARY' of salaryReducer", () => {
    const salary: number = 700
    const action: ActionType = {
        type : "FALL_SALARY",
        minus: 300
    }
    expect(salaryReducer(salary,action)).toBe(400)
})
test("case 'MULT_SALARY' of salaryReducer", () => {
    const salary: number = 700
    const action: ActionType = {
        type : "MULT_SALARY",
        coefficient: 1.5
    }
    expect(salaryReducer(salary,action)).toBe(1050)
})
test("case 'DIV_SALARY' of salaryReducer", () => {
    const salary: number = 700
    const action: ActionType = {
        type : "DIV_SALARY",
        coefficient: 0.5
    }
    expect(salaryReducer(salary,action)).toBe(350)
})


