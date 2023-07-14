import React from "react"

// function App() {
//   return (
//     <>
//       <div className="card">
//         <h1>Hellow world!!!</h1>

//       </div>
//     </>
//   )
// }
class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {seconds: 0}
  }
tick() {
  this.setState(state => ({
    seconds: state.seconds + 1
  }))
}

componentDidMount() {
  this.interval = setInterval(() => this.tick(),1000)
}

componentWillUnmount() {
  clearInterval(this.interval)
}

render() {
  return(
    <div>
      Секунды: {this.state.seconds}
    </div>
  )
}
}

export default Timer


// export default App
