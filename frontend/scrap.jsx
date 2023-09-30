// ALLOW USERS TO ENTER COLOR OF PET, REQUIRES PROPER HEX CODE INPUT

{/* <label className="formLabel" htmlFor="color">
  <div className="labeltext">What color is your pet?</div>
  <input
    type="text"
    name="color"
    id="color"
    className="forminput"
    placeholder="enter a hex code!"
    pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
    title="Hex codes start with '#' and are followed by six letters (A-F, upper or lower case) and/or numbers (1-9). Make sure your code is a valid hex code! ;)"
    value={newForm.color}
    onChange={handleChange}
    required
  />
</label>; */}


//ALLOW USERS TO ENTER THEIR OWN FOOD

        {/* <label htmlFor="name">
          <div className="labeltext">What are you eating?</div>
          <input
            type="text"
            name="name"
            id="name"
            key={foodForm.name}
            placeholder="yummy!"
            value={foodForm.name}
            onChange={handleChange}
            required
          />
        </label> */}


// UNNECESSARY
         {/* <div className="foodbackground">
            <div className="foodgrid">
              {animal?.foods.map((food) => (
                <div key={food._id}>
                  {food.name}
                  <div>
                    {(() => {
                    // MAKE THIS OWN COMPONENT
                    // BIG FOOD IMAGES, ARROWS TO GO BETWEEN
                      if (food?.meal === "Lunch") {
                        return (
                          <img
                            onClick={decrementItem}
                            className="food-img"
                            id={food._id}
                            src={sandwich}
                          />
                        );
                      } else if (food?.meal === "Breakfast") {
                        return (
                          <img
                            id={food._id}
                            onClick={decrementItem}
                            className="food-img"
                            src={pancakes}
                          />
                        );
                      } else if (food?.meal === "Dinner") {
                        return (
                          <img
                            id={food._id}
                            onClick={decrementItem}
                            className="food-img"
                            src={pasta}
                          />
                        );
                      } 
                    })()}
                  </div>
                </div>
              ))}
            </div>
          </div> */}