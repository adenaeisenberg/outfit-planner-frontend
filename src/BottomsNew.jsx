/* eslint-disable react/prop-types */

import "./Button_89.css";

export function BottomsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateBottom(params, () => event.target.reset());
  };

  return (
    <div className="card w-100">
      <div className="card text-center">
        <div className="card-body">
          <h3 className="card-title">Add Bottom</h3>
          <form onSubmit={handleSubmit}>
            <div>
              Name: <input name="name" type="text" />
            </div>
            <div>
              Image Url: <input name="image_url" type="text" />
            </div>
            <button className="button-89" type="submit">
              Add Bottom
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
