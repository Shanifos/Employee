//Create functions for adding employee. deleting employee changing
const EmployeeArray = []
function getEmployee(EmployeeArray) { 
    
    EmployeeArray.forEach(item =>{
        console.log(`${item.employeeName} [${item.employeeID}] [${item.managerID}]`)
    })

}

function existEmployee(employeeID){
   return EmployeeArray.some(item=>{
    return item.employeeID === employeeID })
}

function addEmployee(employeeID, employeeName, managerID){
  
        let employee = {
         
            employeeID: employeeID,
            employeeName: employeeName,
            managerID: managerID
        }
        if(!existEmployee(employeeID)){
           managerID === undefined ? managerID = 0 : managerID = managerID   
          EmployeeArray.push({...employee, managerID})
        }
}

function updateMangers(employeeID,managerID){
    index = EmployeeArray.findIndex((obj => obj.employeeID ===employeeID))
    EmployeeArray[index].managerID = managerID
    console.log("Manager ID is updated")
    getEmployee(EmployeeArray)
   }

function deleteEmployee(employeeID){
    const result = EmployeeArray.filter(item =>{
         if(item.employeeID === employeeID){
            console.log('Deleted') 
            EmployeeArray.pop( {...item} )
        }
        else{ 
            return item

        }
    })
  
    getEmployee(EmployeeArray)
}

addEmployee(1,'HE')
addEmployee(2,'Shani',2)
addEmployee(4,'Kello',2)
addEmployee(1,'Kello',2)
getEmployee(EmployeeArray)
updateMangers(2,5)

deleteEmployee(1)
