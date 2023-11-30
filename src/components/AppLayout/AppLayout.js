import {  Outlet } from "react-router-dom";
import { ContainerHeader, HeaderItem, HeasderList, PageNav, StyledNavLink } from "./AppLayout.styled";
import { Suspense } from "react";
import { Loader } from "components/Loader";

export const AppLayout = () => {

    return (
      <>
        <ContainerHeader>
          <PageNav>
            <HeasderList>
              <HeaderItem>
                <StyledNavLink to="/">Home</StyledNavLink>
              </HeaderItem>
              <HeaderItem>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
              </HeaderItem>
            </HeasderList>
          </PageNav>
        </ContainerHeader>
  
        <>
     
        < Suspense fallback={<Loader/>}>
          <Outlet />
          </Suspense>
        </>
      
      </>
    );
  };
 
