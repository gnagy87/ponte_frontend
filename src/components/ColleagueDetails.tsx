import { Colleague } from "../interfaces/Colleague";

interface Props {
  colleague: Colleague;
}

const ColleagueDetails = ({ colleague }: Props) => {
  return(
    <div>
      <p>Név: {colleague.name}</p>
      <p>Pozíció: {colleague.position}</p>
    </div>
  );
}

export default ColleagueDetails;
