import './idCard.css'

 function IdCard (props)  {
    
        return (
          
            <div className="id-card box">
      <img src={props.picture} alt="" />

      <div className="right">
        <strong>First Name: </strong> {props.firstName}
        <br />
        <strong>Last Name: </strong> {props.lastName}
        <br />
        <strong>Gender: </strong> {props.gender}
        <br />
        <strong>Height: </strong> {props.height}
        <br />
        <strong>Birth: </strong> {props.birth}
      </div>
    </div>
        )
    
}

export default IdCard
