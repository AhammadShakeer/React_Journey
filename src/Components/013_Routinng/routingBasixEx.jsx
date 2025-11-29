import { BrowserRouter,Route,Link, Routes } from "react-router-dom";
import { JavaTutorial } from "../../ContrrolledComponents/002_javaTutorial";
import { PythonTutorial } from "../../ContrrolledComponents/003_pythontutorial";


export function TutorialIndex()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="p-3 bg-dark text-white border border-2 text-center mt-2">
                    Tutorials
                </header>
                <Link to="/java">Java</Link>

                <section className="mt-4">
                    <Routes>

                        <Route path="/" element={<div><h3>Welcome brooo</h3></div>} />
                        <Route path="/java" element={<JavaTutorial/>}></Route>
                        <Route path="/python" element={<PythonTutorial/>}/>
                        <Route path="*" element={<div>Chimkanti</div>} />

                    </Routes>
                </section>

            </BrowserRouter>
        </div>
    )
}