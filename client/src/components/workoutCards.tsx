import { Link } from "react-router-dom";

type workoutCards = {
  name: string;
  length?: number;
  intensity?: string;
  type: string;
  sets?: number;
  reps?: number;
};

const workoutCards = ({
  name,
  length,
  intensity,
  type,
  sets,
  reps,
}: workoutCards) => {
  const time = length ? length / 60 : 0;

  console.log(time, length);

  return (
    <Link
      to="/"
      className="transform transition-transform hover:translate-y-[-15px] hover:duration-500 hover:ease-in-out"
    >
      <div className="card w-80 bg-base-100 shadow-xl hover:shadow-2xl transform transition-shadow mb-2">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{type}</div>
          </h2>
          <div className="card-actions flex flex-row items-center">
            {length && (
              <div>
                <p>Time: </p>
                <div className="badge badge-accent">{time}mins</div>
              </div>
            )}
            {!length && (
              <>
                <div>
                  <p>Sets: </p>
                  <div className="badge badge-accent">{sets}</div>
                </div>
                <div>
                  <p>Reps: </p>
                  <div className="badge badge-accent">{reps}</div>
                </div>
              </>
            )}
            {intensity && (
              <div>
                <p>Intensity: </p>
                <div className="badge badge-accent">{intensity}</div>
              </div>
            )}
          </div>
        </div>
        <div className="join flex ">
          <button className="btn btn-success w-36 ml-2 mr-4">
            <Link to="/start-workout" className="btn btn-ghost mx-1">
              Start this exercise
            </Link>
          </button>
          <button className="btn btn-info w-36 ">Add to today's workout</button>
        </div>
      </div>
    </Link>
  );
};

export default workoutCards;
