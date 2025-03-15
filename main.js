const company = {
    sales: [{name: 'John', salary: 600}, {name: 'Alice', salary: 1000}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    },
    qa: {
        manual: [{name: 'Nelia', salary: 950}],
        automation: [{name: 'Ihor', salary: 900}]
    },
}

function countSalary(department) {
    let totalSalary = 0;
    if(Array.isArray(department)) {
        department.forEach(employee => {totalSalary += employee.salary;});
        return totalSalary;
    }
    return Object.values(department).reduce((sum, currentDep) => sum + countSalary(currentDep), 0);
}

console.log(countSalary(company));