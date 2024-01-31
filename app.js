function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function reduce_button(){
  var element= document.getElementById('hiddenContent')
  element.style='display:block';

  var up_icon= document.getElementById('icon_up')
  up_icon.style='display:none';

  var Buttonexpanded= document.getElementById('expandButton')
  Buttonexpanded.style='display:block';
}

function icon_down(){
  var element= document.getElementById('hiddenContent')
  element.style='display:none';

  var up_icon= document.getElementById('icon_up')
  up_icon.style='display:block';

  var Buttonexpanded= document.getElementById('expandButton')
  Buttonexpanded.style='display:none';
}
  
document.addEventListener('DOMContentLoaded', function() {
  const listItems = document.querySelectorAll('.list-item');

  listItems.forEach(function(item) {
    item.addEventListener('click', function() {
      
      document.querySelectorAll('.accordion_item').forEach(function(accordionItem) {
        accordionItem.classList.remove('active');
      });

      document.querySelectorAll('.background-item').forEach(function(listItem) {
        listItem.classList.remove('active');
      });

      const accordionItem = this.nextElementSibling;
      if (accordionItem) {
        accordionItem.classList.add('active');
        this.parentNode.classList.add('active');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  
  const toggleImages = document.querySelectorAll('.toggle-image');

  toggleImages.forEach(item => {
    item.addEventListener('click', function() {
      
      this.classList.toggle('active');
    });
  });
});

