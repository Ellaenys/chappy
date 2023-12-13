import { useState } from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    Typography, MenuItem,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import './modal.css'

type Props = {
  handleDelete: () => void;
};

export default function DeleteProject({ handleDelete }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const navigate = useNavigate();
  async function handleSubmit() {
      await handleDelete();
    navigate("/dashboard");
  }

  return (
      <>
          <MenuItem className={"flex justify-between items-center gap-2"}>
              <FontAwesomeIcon icon={faXmark} className="text-sm text-brick-300" />
              <Typography variant={"small"} className="font-medium text-brick-300" onClick={handleOpen}>
                  Supprimer le projet
              </Typography>
          </MenuItem>

          <Dialog
            size="sm"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none"
          >
            <Card className="custom-modal">
                <CardBody
                    className="flex flex-col gap-4">
                    <Typography variant="h3"
                                className={"text-marine-300 text-xl font-extrabold text-center"}>
                        Voulez-vous vraiment supprimer
                        le projet ?
                    </Typography>
                    <div
                        className="gap-5 flex justify-center">
                        <Button size={"sm"}
                                onClick={handleSubmit}
                                className={"bg-brick-300"}
                                type="submit">
                            Confirmer
                        </Button>
                        <Button size={"sm"}
                                onClick={handleOpen}
                                className={"border-marine-300"}
                                type="submit">
                            Annuler
                        </Button>
                    </div>
                </CardBody>

            </Card>
          </Dialog>
      </>
  );
}
