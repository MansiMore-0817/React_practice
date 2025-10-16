import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook to persist the function reference
  const passwordRef = useRef(null);


  // hook 'useCallback' to memoize the function
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (characterAllowed) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);


  return (
    <>
       <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
        <div className="w-full max-w-md  shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-800 ">
          <h1 className="text-white text-center font-bold mb-6  my-4">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e)=> {setLength(e.target.value)}}/>
              <label>Length: {length}</label>                        
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" id="numberInput" checked={numberAllowed} onChange={(e)=> {setNumberAllowed((prev)=> !prev);}}/>
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" id="characterInput" checked={characterAllowed} onChange={(e)=> {setCharacterAllowed((prev)=> !prev);}}/>
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full bg-blue-700 text-white py-1 rounded-lg" onClick={generatePassword}>Generate Password</button>   
          </div>
        </div>
        </div>
   
    </>
  );
}
export default App;
