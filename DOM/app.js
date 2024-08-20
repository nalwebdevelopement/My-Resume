// let skills = ["HTML", "JAVA SCRIPT", "JAVA","PYTHON"]

// let addSkills = document.getElementById("skills").addEventListener('click',() =>
// {

//     // document.getElementById("skills").parentElement.style.visibility="inline"
//     // document.getElementById("skills-list").parentElement.style.display="list-item"
//     // document.getElementById("skills-list").parentElement.style.visibility = "visbile"
//  //  console.log( document.getElementById("skills-list").checkVisibility);
//  const menuElement = document.getElementById('skills-list');
//    skills.forEach(sk => {
//         const menuItem = document.createElement('li');
//         menuItem.textContent = `${sk}`;
//         menuElement.appendChild(menuItem);


// })
// }
// );
document.getElementById('linkedin').addEventListener('click', () => {
    window.open("https://www.linkedin.com/in/nalini-udhayakumar");
  });
  
  
  
  const skills = ["HTML", "JAVASCRIPT", "JAVA", "PYTHON"];
  
  document.getElementById('skills').addEventListener('click', function() {
      const skillsList = document.getElementById("skills-list");
      console.log("fsdfsdfsdf")
      console.log(skillsList.style.display);
      // Check if the list is already displayed
      if (skillsList.style.display === '') {
          // Display the list
          console.log("fsdfsdfsdf")
          skillsList.style.display = 'block';
  
          // Populate the list with skills
          skills.forEach(skill => {
              const li = document.createElement('li');
              li.textContent = skill;
              li.style.color="beige";
              skillsList.appendChild(li);
              console.log(li);
              document.getElementById('skills').append(skillsList)
  
          });
  
          // Disable further clicks by removing the event listener
          this.removeEventListener('click', arguments.callee);
          this.style.cursor = 'not-allowed'; // Change cursor to indicate disabled state
      }
  });