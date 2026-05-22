function Student(props) {
  return (
    <div className="card">
      <h2>Student Details</h2>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Course:</b> {props.course}</p>
      <p><b>Marks:</b> {props.marks}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>

      <Student
        name="Piyush"
        course="B.Tech CSE"
        marks="85"
      />

      <Student
        name="Rahul"
        course="BCA"
        marks="78"
      />

      <Student
        name="Anjali"
        course="MCA"
        marks="92"
      />
    </div>
  );
}

export default App;