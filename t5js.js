var obj = new Vue({
  el: '#class1',
  data: {
    name: 'Vue.js'
  },
 
  methods: {
    greet: function (event) {
     
      alert('Welcome to our website')
      
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})
var app4 = new Vue({
  el: '#class2',
  data: {
    todos: [
      { text: 'Mix Cake Flour' },
      { text: 'Add Sugar.' },
      { text: 'Put in Tube Cake Pan'},
{ text: 'Turn Cooked Cake Up-side Down.'},
{ text: 'Sift Over Cake.'}
    ]
  }
})

          
function myFunction() {
  alert("Your data is submitted");
}