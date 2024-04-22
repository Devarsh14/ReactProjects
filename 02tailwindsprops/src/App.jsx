import "./App.css";
import Card from "./components/Card";
function App() {
  let myObjectDefined = {
    employeeName:"John",
    employeeAge:25,
  }

  let myArrDefined = [1,2,3,4,5]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card name="Dev" myArrInline={[1,2,3]} myobjectInline = {{name1:"devarsh"}} myObjectDeclared = {myObjectDefined} myArrDefined={myArrDefined} username="User1" btnText="click me"/>
      <Card username="User2"  btnText="visit me"></Card>
      <Card username="User3"  ></Card>
      {/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://cdn.pixabay.com/photo/2020/02/17/09/36/painter-4856002_1280.jpg"
          alt=""
          width="384"
          height="512"
        ></img>
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure> */}
    </>
  );
}

export default App;
// reference for tailwind open-source components
// https://www.devui.io/components/cards
