import { Avatar, Typography } from "@material-tailwind/react";
import DeleteButton from "../Buttons/DeleteButton";
import { intMember, intMembers } from "../../../services/interfaces/intProject";
import user from "../../../assets/img/icon user.png"

type Props = {
  index: number;
  setMember: (members: intMembers) => void;
  members: intMembers
  isOwner:boolean
  member:intMember
};

export default function MemberCard({ index, setMember, members, isOwner, member }: Props) {
  return (
    <>
      <li
        className="md:flex justify-between gap-5
          p-5 rounded-xl bg-white border-solid border-4 border-b-brick-200 mb-5"
      >
        <div className='sm:flex gap-10'>
        <Avatar variant="circular" alt="toto" src={user} />
        <Typography variant="h5" color="blue-gray" className="flex">
          <p className="border p-2 rounded-xl bg-light-200">
            {members[member.id].company}
          </p>
        </Typography>
        <Typography
          variant="h5"
          color="blue-gray"
          className="p-2 text-brick-300 font-bold"
        >
          {members[member.id].firstName}  {members[member.id].lastName}
        </Typography>
        </div>
        <div className='flex gap-10'>
        <Typography
          variant="h5"
          color="blue-gray"
          className="p-2 text-brick-300 border border-brick-300 rounded-xl"
        >
          7 tâches en cours
        </Typography>
        {isOwner && 
        <DeleteButton index={index} state={members} setState={setMember} />}
        </div>
      </li>
    </>
  );
}
