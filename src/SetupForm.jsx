import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <main>
      <section className="quiz quiz-small">
        <form onSubmit={handleSubmit} className="setup-form">
          <h2>setup your quiz</h2>

          {/* // # amount of questions */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>

          {/* // # category of questions */}
          <div className="form-control">
            <label htmlFor="category">select category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="Science_Computers">Science: Computers</option>
              <option value="sports">Sports</option>
              <option value="history">History</option>
              <option value="art">Art</option>
              <option value="vehicles">Vehicles</option>
            </select>
          </div>

          {/* // # difficulty of questions */}
          <div className="form-control">
            <label htmlFor="difficulty">select difficulty level</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* // # error */}
          {error && (
            <p className="error">
              can't generate questions, please try different options!!
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
