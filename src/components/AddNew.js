import React, { useEffect } from "react";

function AddNew() {
  useEffect(() => {
    const mediaRun = new IntersectionObserver((views) => {
      views.forEach((view) => {
        if (view.isIntersecting) {
          view.target.classList.add("show");
        } else {
          view.target.classList.remove("show");
        }
      });
    });

    const mediaElements1 = document.querySelectorAll(".page3-box");
    mediaElements1.forEach((e) => mediaRun.observe(e));
    const mediaElements2 = document.querySelectorAll(".page3-box-1");
    mediaElements2.forEach((e) => mediaRun.observe(e));

    const form = document.getElementById("form");
    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("text");
    const emailInput = document.getElementById("email");
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (nameValue === "") {
      alert("Name is required.");
      return;
    } else if (!isValidName(nameValue)) {
      alert("Please enter full name.");
      return;
    }

    if (emailValue === "") {
      alert("Email is required.");
      return;
    } else if (!isValidEmail(emailValue)) {
      alert("Email is invalid.");
      return;
    }
  };

  return (
    <section classname="container">
      <section id="form">
        <div className="container">
          <div className="contact">
            <div className="contact-left page3-box">
              <h3>Send your request</h3>
              <form>
                <div className="input">
                  <div className="input-info">
                    <label htmlFor="name">Dish</label>
                    <input
                      type="name"
                      id="text"
                      name="name"
                      placeholder="Dish Name"
                      required
                    />
                  </div>
                  <div className="input-info">
                    <label htmlFor="dishType">Dish type</label>
                    <select id="dishType" name="dishType" required>
                      <option value="vegan">Vegan</option>
                      <option value="non-vegan">Non-Vegan</option>
                    </select>
                  </div>
                </div>

                <div className="input">
                  <div className="input-info">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      min="10"
                      max="50"
                      step="1"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div className="input-info">
                    <label htmlFor="serving">Serving Size</label>
                    <select id="serving" name="serving" required>
                      <option value="">Select serving size</option>
                      <option value="1">1 person</option>
                      <option value="2">2 persons</option>
                      <option value="3">3 or persons</option>
                    </select>
                  </div>
                </div>

                <div className="input">
                  <div className="input-info">
                    <label htmlFor="time">Max time (in minutes)</label>
                    <input
                      type="number"
                      id="time"
                      name="time"
                      min="5"
                      max="15"
                      step="1"
                      required
                    />
                  </div>
                </div>

                <div className="input">
                  <div className="input-info">
                    <label htmlFor="name">Your name</label>
                    <input
                      type="name"
                      id="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="input-info">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="abc@xyz.com"
                      required
                    />
                  </div>
                </div>
                <label>Message</label>
                <textarea
                  name="Msg"
                  id="msg"
                  placeholder="Enter Your Message"
                  rows={5}
                  defaultValue={""}
                />
                <div className="btn">
                  <button className="btn-1" type="name">
                    Submit
                  </button>
                  <button className="btn-2" type="reset">
                    Reset
                  </button>
                </div>
              </form>
            </div>
            <div className="contact-right page3-box-1"></div>
          </div>
        </div>
      </section>
    </section>
  );
}

function isValidEmail(email) {
  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailCheck.test(email);
}

function isValidName(text) {
  const nameCheck = /^[a-zA-Z ]{2,30}$/;
  return nameCheck.test(text);
}

export default AddNew;
