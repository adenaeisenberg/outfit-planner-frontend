/* eslint-disable react/prop-types */
export function OutfitsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateOutfit(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Outfit</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Day: <input name="day" type="text" />
        </div>
        <div>
          Top: <input name="top_id" type="text" />
        </div>
        <div>
          Bottom: <input name="bottom_id" type="text" />
        </div>
        {/* going to have to comment out below: */}
        {/* <div>
          User_id: <input name="user_id" type="text" />
        </div> */}
        <button type="submit">Add Outfit to Wardrobe</button>
      </form>
    </div>
  );
}
