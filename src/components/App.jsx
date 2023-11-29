import { Route, Routes } from "react-router-dom";
import { ContainerApp } from "./App.styled";
import  { lazy } from "react";
import { AppLayout } from "./AppLayout/AppLayout";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

const HomePage = lazy(()=> import ("pages/HomePage"));
const MovieDetails = lazy(()=> import ("pages/MovieDetails"));
const MoviesPage = lazy(()=> import ("pages/MoviesPage"));
const NotFoundPage = lazy(()=> import ("pages/NotFoundPage/NotFoundPage"));

 const App = () => {
  return (
    <ContainerApp>
     <Routes>
<Route path="/" element={<AppLayout />}>
   <Route index element={<HomePage />} />
   <Route path="/movies" element={<MoviesPage />} />
   <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
   </Route>
<Route path="*" element={<NotFoundPage />} />
     </Routes>
    </ContainerApp>
  );
};
export default App;