import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { VideoLibraryHome } from "./video-library-home";
import { AdminDashboard } from "../admin/admin-dashboard";
import { AdminLogin } from "../admin/admin-login";
import { AddVideo } from "../admin/addVideo";
import { DeleteVideo } from "../admin/delete-video";

export function VideoLibraryIndex()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="text-center bg-dark text-white p-3 m-2">
                    <Link to="/" className="text-decoration-none text-white"><div className="fw-bold fs-2">Video Library</div></Link>
                </header>
                <section className="mt-3">
                    <Routes>
                        <Route path="/" element={<VideoLibraryHome/>} />
                        <Route path="/admin-dashboard" element={<AdminDashboard />} />
                        <Route path="/admin-login" element={<AdminLogin />} />
                        <Route path="/add-video" element={<AddVideo/>} />
                        <Route path="delete-video/:id" element={<DeleteVideo />} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    );

}