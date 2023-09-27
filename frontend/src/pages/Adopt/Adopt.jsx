import { useRef, useState } from "react";
import NewAnimalForm from "../../components/Animals/NewAnimalForm";
import NewFoodForm from "../../components/Food/NewFoodForm";


export default function Adopt() {
  const submitRef = useRef();
  return (
    <>
    <NewAnimalForm/>
    {/* <NewFoodForm/> */}
    </>
  )
}