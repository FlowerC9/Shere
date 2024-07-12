import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import EditorLayout from "./layouts/EditorLayout";
export default function App(){
 return (
   <>
     <Toaster
       position="bottom-center"
       toastOptions={{
         success: {
           theme: {
             primary: "#4aee88",
           },
         },
       }}
     />
     <Router>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/editor/:roomId" element={<EditorLayout/>}/>
       </Routes>
     </Router>
   </>
 ); 
}