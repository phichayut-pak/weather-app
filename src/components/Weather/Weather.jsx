import Card from "../UI/Card"

function Weather(props) {

  return (
    <Card>
      {props.data === '' && <div className="font-['Poppins']">Enter something!</div>}
      {props.data === 'error' && <div className="font-['Poppins']">An error occurred!</div>}
      {(props.data !== 'error' && props.data) && <div>
        <div className="font-['Poppins'] font-semibold text-rose-500">
          <span className="font-normal text-black">Name: </span>{props.data.data.name}
        </div>
        <div className="font-['Poppins'] font-semibold text-fuchsia-700">
          <span className="font-normal text-black">Temperature: </span>{props.data.data.main.temp}
        </div>
      
      </div>}

    </Card>
  );
}

export default Weather;