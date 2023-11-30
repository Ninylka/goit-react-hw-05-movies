import { Navigate, Route, Routes } from "react-router-dom";
import { ContainerApp } from "./App.styled";
import  { lazy } from "react";
import { AppLayout } from "./AppLayout/AppLayout";


const HomePage = lazy(()=> import ("pages/HomePage"));
const MovieDetails = lazy(()=> import ("pages/MovieDetails"));
const MoviesPage = lazy(()=> import ("pages/MoviesPage"));
// const NotFoundPage = lazy(()=> import ("pages/NotFoundPage/NotFoundPage"));
const Cast  = lazy(()=> import ("components/Cast/Cast"));
const Reviews  = lazy(()=> import ("components/Reviews/Reviews"));

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
<Route path="*" element={<Navigate to="/" />} />
     </Routes>
    </ContainerApp>
  );
};
export default App;