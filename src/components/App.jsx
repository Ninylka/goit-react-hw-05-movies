import { Route, Routes } from "react-router-dom";
import { ContainerApp } from "./App.styled";
import  { lazy } from "react";
import { AppLayout } from "./AppLayout/AppLayout";



// import HomePage from "pages/HomePage";
// import MovieDetails from "pages/MovieDetails";
// import MoviesPage from "pages/MoviesPage";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

// import NotFoundPage from "pages/NotFoundPage/NotFoundPage";



// const AppLayout =lazy(()=> import ('./AppLayout/AppLayout'));


const HomePage = lazy(()=> import ("pages/HomePage"));
const MovieDetails = lazy(()=> import ("pages/MovieDetails"));
const MoviesPage = lazy(()=> import ("pages/MoviesPage"));
// const Cast = lazy(()=> import ('../components/Cast/Cast'));
// const Reviews = lazy(()=> import ('../components/Reviews/Reviews'));
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