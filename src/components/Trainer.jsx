import Card from "../ui/Card";

const Trainer = ({image, name, job, socials}) => {
  return (
    <Card className={"trainer"}>
        <div className="trainers__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer__socials">
            {
                socials.map(({icon, link}, index) => (
                    <a href={link} key={index} target="_blank" rel="noreferrer" >{icon}</a>
                ))
            }
        </div>
    </Card>
  )
}

export default Trainer