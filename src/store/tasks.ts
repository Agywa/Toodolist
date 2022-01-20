export const addSalary = (salary: number, bonus: number) => salary + bonus
export const fallSalary = (salary: number, minus: number) => salary - minus
export const multSalary = (salary: number, coefficient: number) => salary * coefficient
export const divSalary = (salary: number, coefficient: number) => salary * coefficient

// 1. В параметрах есть salary (state)
// 2.  Тип действия в названии (type of action/ action type )
// 3. Доп значения дял каждого типа действия

type Actiontype = {
    type: string
    payload: number
}


export const salaryReducer = (salary: number, action: Actiontype) => {

}