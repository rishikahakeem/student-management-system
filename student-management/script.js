function addStudent() {
  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const grade = document.getElementById('grade').value.trim();

  if (!name || !roll || !grade) {
    alert("Please fill in all fields.");
    return;
  }

  const table = document.getElementById('studentList');
  const row = table.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = roll;
  row.insertCell(2).innerText = grade;

  const deleteCell = row.insertCell(3);
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete";
  deleteButton.className = "btn-delete";
  deleteButton.onclick = () => row.remove();
  deleteCell.appendChild(deleteButton);

  document.getElementById('name').value = '';
  document.getElementById('roll').value = '';
  document.getElementById('grade').value = '';
}
