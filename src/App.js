
import Count from "./hooks/count";
import WindowEffect from "./hooks/widthHight";
import NumToWords from "./hooks/numToWords";
import Post from "./hooks/post";
import Theme from "./hooks/Theme";
function App() {

  return (
    <div>
      <h1 className="flex items-center justify-around p-4 m-1">
        Below is the most common hook the Use State Hook. in this example it is
        changing its value every time an Onclick occurs and the state of the app
        changes its State and then is rerendered
      </h1>
      <Count />
      <div className="flex justify-center p-3 m-2">
        <h1>
          Below is another example of a Use State Hook that is changing its
          value every time an Onclick occurs however I decided to use an npm
          library that converts numbers to words here is the link to the npm
          library I used:{" "}
          <a
            href="https://www.npmjs.com/package/number-to-words"
            className="text-blue-500 hover:text-blue-800"
          >
            number-to-words
          </a>
        </h1>
      </div>
      <NumToWords />
      <div className="flex justify-center p-3 m-2">
        <h1>
          Below is an example of a Use Effect Hook that is changing its value
          every time the window is resized and the state of the app changes its
          State and then is rerendered
        </h1>
      </div>
      <WindowEffect />
      <div className="flex justify-center p-3 m-2">
        <h1>
          Below is an example of a Use Effect Hook that cleans up the state of
          the api call to see it look in your browser console and see the
          console.log of the api call and then when you click the button to make
          the api call again you will see that the console.log of the api call
          is gone and the new console.log of the api call is there.
          <br />
          <span className="text-xs text-red-600">
            On a side note I didn't style this the way I would have liked but
            I'm just focusing on learning the concepts right now
          </span>
        </h1>
      </div>
      <Post />
      <div className="flex justify-center p-3 m-2">
        <h1>
Below is an example of a way one can change a Theme in React I stuck with Usestate instead of useContext 
        </h1>
      </div>
      <Theme />
    </div>
  );
}

export default App;
