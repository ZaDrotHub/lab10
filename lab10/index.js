const listObj = [
    {
        nameList: 'Google',
        stack: ['JavaScript', 'C++', 'Go', 'Java', 'Python']
    },
    {
        nameList: 'Facebook',
        stack: ['JavaScript', 'Hack', 'PHP', 'C++', 'Java', 'Python','Erlang', 'D']
    }
]
const div = document.getElementById('app');
const ol = document.createElement('ol');

for (let i = 0; i < listObj.length; i++) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    li.textContent = listObj[i].nameList;
    for (let j = 0; j < listObj[i].stack.length; j++) {
        const Li = document.createElement('li');
        Li.textContent = listObj[i].stack[j];
        ul.appendChild(Li);
    }
    li.appendChild(ul);
    ol.appendChild(li);
}
div.appendChild(ol);