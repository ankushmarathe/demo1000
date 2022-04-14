
employees = [
    emp1 = {
        'id': 1,
        'name': 'Harry',
        'city': 'London',
        'salary': 130000,
        'dept': 'IT',
        'experince': 4
    },
    emp2 = {
        'id': 2,
        'name': 'Emma',
        'city': 'London',
        'salary': 150000,
        'dept': 'ADMIN',
        'experince': 6
    },
    emp3 = {
        'id': 3,
        'name': 'Draco',
        'city': 'NYC',
        'salary': 120000,
        'dept': 'IT',
        'experince': 3
    },
    emp4 = {
        'id': 4,
        'name': 'Dustin',
        'city': 'LA',
        'salary': 125000,
        'dept': 'SALES',
        'experince': 2
    },
    emp5 = {
        'id': 5,
        'name': 'Steve',
        'city': 'NYC',
        'salary': 110000,
        'dept': 'ADMIN',
        'experince': 2
    },
    emp6 = {
        'id': 6,
        'name': 'Mike',
        'city': 'LA',
        'salary': 115000,
        'dept': 'ADMIN',
        'experince': 4
    },
    emp7 = {
        'id': 7,
        'name': 'Stefan',
        'city': 'London',
        'salary': 160000,
        'dept': 'IT',
        'experince': 8
    },
    emp8 = {
        'id': 8,
        'name': 'Jack',
        'city': 'NYC',
        'salary': 109000,
        'dept': 'SALES',
        'experince': 0
    },
    emp9 = {
        'id': 9,
        'name': 'Mark',
        'city': 'London',
        'salary': 135000,
        'dept': 'IT',
        'experince': 4
    },
    emp10 = {
        'id': 10,
        'name': 'Chris',
        'city': 'LA',
        'salary': 115000,
        'dept': 'SALES',
        'experince': 1
    }

];

secondwayEmployees = employees;

makeStr = () => {
    str = '';
    employees.forEach(e => {
        console.log(e.id + " | " + e.name + " | " + e.city + " | " + e.salary);
        //str +='<p class="result-class">'+ e.id + ' | ' + e.name + " | " + e.city + " | " + e.salary + " | " + e.dept + " | " + e.experince + '</p><br />';

        str += '<p class="card-text result-class">' + 'ID:' + e.id + '<br />NAME:' + e.name + '<br />DEPT:' + e.dept + '<br />SALARY:' + e.salary + '<br />CITY:' + e.city + '<br />EXPERIENCE:' + e.experince + '</p>';
    });

    document.getElementById('resultSpace').innerHTML = str;
}



getAllfun = () => {
    employees = [emp1, emp2, emp3, emp4, emp5, emp6, emp7, emp8, emp9, emp10];
    makeStr();
}

sortBySalaryAscfun = () => {
    employees.sort((e1, e2) => e1.salary - e2.salary);

    makeStr();
}

sortBySalaryDscfun = () => {
    employees.sort((e1, e2) => e2.salary - e1.salary);

    makeStr();
}

sortByNameAscfun = () => {
    employees.sort((e1, e2) => {
        return e1.name.localeCompare(e2.name);
    });

    makeStr();
}

sortByNameDscfun = () => {
    employees.sort((e1, e2) => {
        return e2.name.localeCompare(e1.name);
    });

    makeStr();
}

clearfun = () => {
    document.getElementById('resultSpace').innerHTML = '';
}

filterByDeptfun = () => {
    secondwayEmployees = employees;
    let filterInput = document.getElementById('filterDept').value;
    employees = employees.filter(e => e.dept.match(filterInput));
    makeStr();
    employees = secondwayEmployees;
}

filterByDeptfun2 = (input) => {
    secondwayEmployees = employees;
    employees = employees.filter(e => e.dept.startsWith(input));
    makeStr();
    employees = secondwayEmployees;
}

readNameStr = (readNameString) => {
    employees = employees.filter(e => e.name.startsWith(readNameString));
    makeStr();
    employees = secondwayEmployees;
}

filterByNamefun = () => {
    let readNameString = document.getElementById('filterName').value;
    employees = employees.filter(e => e.name.match(readNameString));
    makeStr();
    employees = secondwayEmployees;
}
