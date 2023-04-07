let users = []
render = () => {
    let right = document.getElementById('rightcontent')
    right.innerHTML = ""
    users.map((user) => {
        let divs = document.createElement('div')
        let divs1 = document.createElement('div')
        let p1 = document.createElement('p1')
        let p2 = document.createElement('p2')
        let p3 = document.createElement('p3')
        let checl = document.createElement('input')
        divs.classList.add('students');
        p1.classList.add('block')
        p2.classList.add('block');
        p1.classList.add('p1')
        p3.classList.add('d')
       
        divs1.id = 'bg'
        p1.innerText = user.task
        p2.innerText = user.desc;
        p3.innerText = user.date;
        checl.type = 'checkbox'
        checl.id='checks'
        //     checl.addEventListener('click',(e)=>{
        //         let bg=document.getElementById('bg')
        // bg.classList.add('bg')
        //     })
        // checl.onclick(fail())
        
        divs.appendChild(checl)
        right.appendChild(divs);
        divs.append(divs1)

        divs1.appendChild(p1);
        divs1.appendChild(p2);
        divs1.appendChild(p3)
        
        checl.onclick = function () {
            if(checl.checked ==true){
               
                divs1.classList.add('bg')
                // checl.checked =true;
            }
            else{
                
                // divs1.classList.remove('bg')
                checl.checked =true;
            }
           
        }

    })

}

submit = () => {
    let task = document.getElementById('task');
    let desc = document.getElementById('desc');
    let date = document.getElementById('date');
    let tempuser = {
        task: task.value,
        desc: desc.value,
        date: date.value
    }
   
    if(task.value==''){
       task.placeholder="task name"
       task.classList.add('placeholderscolor')
       setTimeout(() => {
        task.placeholder="Task name here"
        task.classList.remove('placeholderscolor')
       }, 2000);
    }
     if(desc.value==''){
        desc.placeholder="Add Description"
        desc.classList.add('placeholderscolor')
        setTimeout(() => {
            desc.placeholder="Description"
            desc.classList.remove('placeholderscolor')
        }, 2000);
     }
     if(date.value==''){
        date.placeholder="Add Date!!"
        date.classList.add('placeholderscolor')
        setTimeout(() => {
            date.placeholder="Due Date"
            date.classList.remove('placeholderscolor')
        }, 2000);
     }
     else{
        users.push(tempuser);
        task.value = '';
            desc.value = ''
            date.value = '';
        render()
     }
    //   let tasks=users.filter((user)=>{
    //     return user.task==task.value
    // })
    //  if(tasks.length ==0 ){
    //     users.push(tempuser);
    //     task.value = '';
    //     desc.value = ''
    //     date.value = '';
    //     render()
    // }
   
    // else{
    //     alert('same task exists')
    // }
    
   
    console.log(users)
}