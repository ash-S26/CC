import React,{useEffect ,useState} from "react";
import contract from "../contract";

function App() {

  const [data, setData] = useState("");

  async function getData(){
    var newdata = await contract.methods.mydata().call();
    console.log(newdata);
    setData(newdata);
  }

  useEffect(() => {
    async function getData(){
      var newdata = await contract.methods.mydata().call();
      console.log(newdata);
      setData(newdata);
    };
    getData();
  },[]);

  return (
    <div>
      {data}
    </div>
  );
}

export default App;
