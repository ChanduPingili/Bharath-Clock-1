function Clock(){
  let date = new Date();
  let day = date.toLocaleDateString();
  let time = date.toLocaleTimeString();
  return <p>This is the current time :{day +" - " +time} </p>
}

export default Clock;