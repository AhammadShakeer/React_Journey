import { BrowserRouter , Routes , Route  } from "react-router-dom";
import { FakestoreHome } from "./Fakestorehome";
import { FakestoreProducts } from "./FakestoreProducts";
import { FakestoreDetails } from "./FakestoreDetails";

export function FakestoreIndex()
{
    return(
        <div className="container-fluid p-2">
            <BrowserRouter>
                <header className="bg-dark text-white text-center p-2">
                    <h3>FakeStore Index Page</h3>
                </header>
                <section className="mt-4">
                    <Routes>
                        <Route path="/" element={<FakestoreHome />}/>
                        <Route path="/products/:category" element={<FakestoreProducts/>} />
                        <Route path="/details/:id" element={<FakestoreDetails />} />
                        <Route path="*" element={<div><h3>Requested content not found</h3></div>} />
                        
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    );
}