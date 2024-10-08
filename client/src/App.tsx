import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { RootLayout } from "./components/root";
import { Homepage } from "./components/homepage";
import { PetSearchPage } from "./components/petSearch/petSearchPage";
import { PetPage } from "./components/petSearch/petPage";
import { ErrorPage } from "./components/error";
import { AuthLayout } from "./context/userContext/AuthLayout";
import { RegisterForm } from "./components/user/registerForm";
import { LoginFrom } from "./components/user/loginForm";
import { MyAccount } from "./components/user/myAccount";
import { CartPage } from "./components/checkout/cartPage";
import { CheckoutPage } from "./components/checkout/checkoutPage";
import { About } from "./components/about";
import { PetAdvice } from "./components/petAdvice";
import { TrainingTips } from "./components/trainingTips";
import { Nutrition } from "./components/petNutrition";
import { Health } from "./components/health";
import { fetchPets as petsLoader, fetchPet as petLoader } from "./services/api";

import { AdminDashboard } from './components/AdminDashboard';
import { isAdmin } from './utils/auth';

import { AuthProvider } from './context/userContext/useAuth';

import useAuth from './context/userContext/useAuth';

import { getUser } from './services/api';


const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  
  if (!user || !user.email) {
    return <Navigate to="/users/login" replace />;
  }
  console.log(user.email)
  return <>{children}</>;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />} errorElement={<ErrorPage />}>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Homepage />} loader={petsLoader} />
        <Route path="/pets" element={<PetSearchPage />} loader={petsLoader} />
        <Route path="/pet/:id" element={<PetPage />} loader={petLoader} />
        <Route path="/users/register" element={<RegisterForm />} />
        <Route path="/users/login" element={<LoginFrom />} />
        <Route path="/users/my-account" element={<MyAccount />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/petAdvice" element={<PetAdvice />} />
        <Route path="/training" element={<TrainingTips />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/health" element={<Health />} />
        <Route 
          path="/admin-dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
