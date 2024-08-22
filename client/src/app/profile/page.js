"use client";
import React, { useState } from "react";
import Navbar from "@/components/header";
import CardUser from "@/components/cardUser";
import Footer from "@/components/footer";
const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profilePage min-h-[60vh] mt-[20px] mx-[10px]">
        <CardUser />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
