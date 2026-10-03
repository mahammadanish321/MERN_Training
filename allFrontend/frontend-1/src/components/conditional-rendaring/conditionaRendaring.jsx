import '/home/mahammadanish/Coding/MERN/myMERN/allFrontend/frontend-1/src/components/conditional-rendaring/conditionaRendaring.css';

function ConditionalRendering() {
  const isLoggedIn = true;
  const role = "admin";
  const notifications = 5;
  const errorMessage = "";

  return (
    <div className="conditional">
      <h2>Conditional Rendering</h2>

      {/* Method 1: Ternary Operator */}
      <div className="example">
        <h3>Ternary Operator</h3>
        <p>{isLoggedIn? "Welcome back!" : "Please log in."}</p>
      </div>

      {/* Method 2: Logical AND (&&) */}
      <div className="example">
        <h3>Logical AND</h3>
        {notifications> 0 && (
          <p className="notification">
            You have {notifications} new notifications.
          </p>
        )}
      </div>

      {/* Method 3: Multiple conditions with ternary */}
      <div className="example">
        <h3>Role-Based Rendering</h3>
        <p>
          {role=== "admin"
            ? "You have full access."
            : role=== "editor"
            ? "You can edit content."
            : "You have read-only access."}
        </p>
      </div>

      {/* Method 4: Logical OR for fallbacks */}
      <div className="example">
        <h3>Fallback Values</h3>
        <p>{errorMessage|| "No errors found."}</p>
      </div>
    </div>
  );
}

export default ConditionalRendering;
