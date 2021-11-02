import AppInfo from '../app-info/app-info';
import SearchPannel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css';


function App() {

    const data = [
        {name: "John S.", salary: 800, id: 1},
        {name: "Nicolas K.", salary: 3000, id: 2},
        {name: "Mike W.", salary: 5000, id: 3}
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPannel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm data={data}/>
        </div>
    )
};

export default App;