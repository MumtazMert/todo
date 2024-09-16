"use client";

import React from "react";


export default function AddButton({onAddClick}: {onAddClick: () => void}) {

  return (
    <>
    <button onClick={onAddClick}>Add</button>
    </>
  )
}
