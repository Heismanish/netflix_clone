"use client";
import useInfoModal from "@/app/hooks/useInfoModal";
import React from "react";
import InfoModal from "./InfoModal";

const InfoModalParent = () => {
  const { isOpen, closeModal } = useInfoModal();
  return <InfoModal visible={isOpen} onClose={closeModal} />;
};

export default InfoModalParent;
