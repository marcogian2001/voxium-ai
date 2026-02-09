import { ResponsiveDialog } from "@/components/responsive-dialog";
import React from "react";
import MeetingForm from "./meeting-form";
import { useRouter } from "next/navigation";


type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const NewMeetingDialog = (props: Props) => {
  const router = useRouter()
  const { open, onOpenChange

   } = props;

  return (
    <ResponsiveDialog
      title="New Meeting"
      description="Create a new meeting"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={(id) => {
          onOpenChange(false);
          router.push(`/meetings/${id}`)
        }}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
};

export default NewMeetingDialog;
