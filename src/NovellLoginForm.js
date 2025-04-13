import React from "react";

const NovellLoginForm = () => {
  return (
    <div className="w-96 mx-auto p-5 border rounded shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-center">
        Novell Services Login
      </h3>

      <form className="space-y-3">
        <div>
          <label style={{ display: "inline-block", width: "20%" }}>
            Username:
          </label>
          <input type="text" className="w-full p-1 border rounded" />
        </div>

        <div>
          <label style={{ display: "inline-block", width: "20%" }}>
            Password:
          </label>
          <input type="password" className="w-full p-1 border rounded" />
        </div>

        <div>
          <label style={{ display: "inline-block", width: "20%" }}>
            City of Employment:
          </label>
          <input type="text" className="w-full p-1 border rounded" />
        </div>

        <div>
          <label style={{ display: "inline-block", width: "20%" }}>
            Web server:
          </label>
          <select className="w-full p-1 border rounded">
            <option>-- Choose a server --</option>
          </select>
        </div>

        <div>
          <label style={{ display: "inline-block", width: "20%" }}>
            Please specify your role:
          </label>
          <div className="space-y-1">
            {["Admin", "Engineer", "Manager", "Guest"].map((role) => (
              <div key={role}>
                <input type="radio" name="role" className="mr-2" /> {role}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label style={{ display: "inline-block", width: "20%" }}>
            Single Sign-on to the following:
          </label>
          <div className="space-y-1">
            {["Mail", "Payroll", "Self-service"].map((option) => (
              <div key={option}>
                <input type="checkbox" className="mr-2" /> {option}
              </div>
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Login
          </button>
          <button
            type="reset"
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default NovellLoginForm;
