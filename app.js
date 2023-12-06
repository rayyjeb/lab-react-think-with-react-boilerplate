//ITERATION 2:

// let container= document.getElementById("react-container");
// ReactDOM.render("Hello! Welcome to React",container)
// container.innerHTML="Hello! Welcome to JS"


//ITERATION 3:

// function Rectcontainer (){
//         return (
//             React.createElement(
//                 'div',
//                 {id:"h1-tag"},
//                 'Hey Kalvians! Welcome to React Learning',
//                 React.createElement('div',null,`Let's rock and roll`))  //(tag_name,props,children(message))
//          )
//         }
         
// ReactDOM.render(Rectcontainer() ,container)


//ITERATION 4:

class KalvianContainer extends React.Component{
  render(){
      return (
                      React.createElement(
                          'div',
                          {id:"h1-tag"},
                          'Hey Kalvians',
                          React.createElement('div',null,`Let's rock and roll with classes`))  //(tag_name,props,children(message))
                   )
  }
}

let container= document.getElementById("react-container");
ReactDOM.render(React.createElement(KalvianContainer),container) //creating object of the class