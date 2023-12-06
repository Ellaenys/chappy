/* eslint-disable @typescript-eslint/no-explicit-any */
import Datepicker from "react-tailwindcss-datepicker";

type Props = {
  state: any;
  setState: any;
  handleBdd: any;
};

export default function SelectDate({ state, setState, handleBdd }: Props) {
  const tmpDate = {
    startDate: state.estimEndDate,
    endDate: null,
  };


  const handleChange = (value: any) => {
    setState({ ...state, estimEndDate: value.startDate });
    const tmpData = {...state, estimEndDate: value.startDate}
    handleBdd(tmpData)
  };

  return (
    <>
    {state.estimEndDate == null ? 
        <Datepicker
        inputClassName="w-full p-2 rounded-md font-normal focus:ring-0 placeholder:text-black text-black"
        asSingle={true}
        useRange={false}
        onChange={handleChange}
        value={tmpDate}
        placeholder={"Choisir une date de fin estimée"}
      /> :
    <Datepicker
      inputClassName="w-full p-2 rounded-md font-normal focus:ring-0 placeholder:text-black text-black"
      asSingle={true}
      useRange={false}
      onChange={handleChange}
      value={tmpDate}
      placeholder={"" + state.estimEndDate}
    />}
    </>
  );
}