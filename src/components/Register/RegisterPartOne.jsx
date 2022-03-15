const RegisterPartOne = () => {
  return (
    <>
      <div className="formRow">
        <label>
          Email Address:
          <input type="email" placeholder="Email" name="email" />
        </label>
      </div>
      <div className="formRow">
        <label>
          Password:
          <input
            type="password"
            placeholder="Password (8 characters minimum)"
            name="password"
            minLength="8"
            required
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          First Name:
          <input type="name" placeholder="First Name" name="firstName" />
        </label>
      </div>
      <div className="formRow">
        <label>
          Last Name:
          <input type="name" placeholder="Last Name" name="lastName" />
        </label>
      </div>
    </>
  );
};

export default RegisterPartOne;
