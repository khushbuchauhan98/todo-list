let users = []
render = () => {
    let right = document.getElementById('rightcontent')
    right.innerHTML = ""
    users.map((user) => {
        let divs = document.createElement('div')
        divs.classList.add('students');
        let checl = document.createElement('input')
        checl.type = 'checkbox'
        // checl.classList.add('checks')
        checl.id = 'checks'
        let divs1 = document.createElement('div')
        divs1.id = 'bg'
        // divs1.classList.add('bg')
        let p1 = document.createElement('p1')
        let p2 = document.createElement('p2')
        let p3 = document.createElement('p3')
       
       
        p1.classList.add('block')
        p2.classList.add('block');
        p1.classList.add('p1')
        p3.classList.add('d')
        p1.id='p1'
        p2.id='p2'
        p3.id='p3'
       
        p1.innerText = user.task
        p2.innerText = user.desc;
        p3.innerText = user.date;
        
        //     checl.addEventListener('click',(e)=>{
        //         let bg=document.getElementById('bg')
        // bg.classList.add('bg')
        //     })
        // checl.onclick(fail())
        right.appendChild(divs);
        divs.appendChild(checl)
       
        divs.append(divs1)

        divs1.appendChild(p1);
        divs1.appendChild(p2);
        divs1.appendChild(p3)

        checl.onclick = function () {
            
            if (checl.checked == true) {
                checl.checked = true;
                divs1.classList.add('bg')
                p1.classList.add('line')
                p2.classList.add('line')
                p3.classList.add('line')
                // checl.checked =true;
            }
            else {
                divs1.classList.remove('bg')
                p1.classList.remove('line')
                p2.classList.remove('line')
                p3.classList.remove('line')
                // checl.checked = true;
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
        date: date.value,
        
    }
    if (task.value == '') {
        task.placeholder = "task name"
        task.classList.add('placeholderscolor')
        setTimeout(() => {
            task.placeholder = "Task name here"
            task.classList.remove('placeholderscolor')
        }, 2000);

    }
    if (desc.value == '') {
        desc.placeholder = "Add Description"
        desc.classList.add('placeholderscolor')
        setTimeout(() => {
            desc.placeholder = "Description"
            desc.classList.remove('placeholderscolor')
        }, 2000);
    }

    if (date.value == '') {
        date.placeholder = "Add Date!!"
        date.classList.add('placeholderscolor')
        setTimeout(() => {
            date.placeholder = "Due Date"
            date.classList.remove('placeholderscolor')
        }, 2000);
    }
    if (task.value != '' && desc.value != '' && date.value != '' ) {
        users.push(tempuser);
        task.value = '';
        desc.value = ''
        date.value = '';
       
        render();
    }
   
    // else {
        // users.push(tempuser);
        // task.value = '';
        //     desc.value = ''
        //     date.value = '';
        // render()
    // }
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