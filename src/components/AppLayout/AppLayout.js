import {  Outlet, useLocation } from "react-router-dom";

import { ContainerHeader, HeaderItem, HeasderList, PageNav, StyledNavLink } from "./AppLayout.styled";
import { Suspense } from "react";

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
        < Suspense fallback={<div>LOADING PAGE...</div>}>
          <Outlet />
          </Suspense>
        </>
      
      </>
    );
  };
 
