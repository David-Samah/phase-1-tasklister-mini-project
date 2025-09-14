document.addEventListener("DOMContentLoaded", () =>{

  const form=document.getElementById("create-task-form");
  const tasklist=document.getElementById("tasks")

  form.addEventListener("submit", function(e){
    e.preventDefault();

    const taskInput=document.getElementById("new-task-description");
    const taskDescription=taskInput.value.trim();

  if(taskDescription===""){
    alert("Please enter a value");

    return;
  }

  const taskItem=document.createElement("li");
  taskItem.textContent= taskDescription;


  }
const priority= document.getElementById("submit");
priority.DropDown.value

  if(priority==="high"){
    taskItem.style.color="red";}
    else if(priority==="medium"){
      taskItem.style.color="orange";
    }
      else if(priority==="low"){
        taskItem.style.color="green"
      
      }
      const deleteBtn=document.createElement("button")   
      deleteBtn.textContent="X";
      deleteBtn.style.marginLeft="10px";
      deleteBtn.addEventListener("click", () =>{
        taskItem.remove();
      });

       taskItem.appendChild(deleteBtn);
      tasklist.appendChild(taskItem);

      taskInput.value="";
      priorityDropDown.value="low";
      }) ;
     
    

      
  )};


