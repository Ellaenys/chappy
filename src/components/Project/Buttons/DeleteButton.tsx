/* eslint-disable @typescript-eslint/no-explicit-any */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@material-tailwind/react";

type Props = {
  state: Array<any>,
  setState: (tab:Array<any>) => void;
  index: number
  handleDeleteBDD?: any
}

export default function DeleteButton({state, setState, handleDeleteBDD, index}:Props) {

function handleDelete(index: number) {
    const tempTasks = [...state];
    tempTasks.splice(index, 1);
    setState(tempTasks);
    handleDeleteBDD && handleDeleteBDD();
    }

  return (

    <IconButton onClick={() => handleDelete(index)}>
        <FontAwesomeIcon icon={faXmark} size="xl" />
    </IconButton>
  )
}
