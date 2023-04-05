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

            divs1.classList.add('bg')
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
    users.push(tempuser);
    task.value = '';
    desc.value = ''
    date.value = ''
    render()
    console.log(users)
}